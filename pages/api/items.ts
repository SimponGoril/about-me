import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"
import {
  DynamoDBClient,
  ScanCommand
} from '@aws-sdk/client-dynamodb';
import { unmarshall } from '@aws-sdk/util-dynamodb' 
import { Quote } from '../../src/types';

const client = new DynamoDBClient({
  credentials: {
    accessKeyId: process.env.DYNAMO_ACCESS_KEY!,
    secretAccessKey: process.env.DYNAMO_SECRET_KEY!,
  },
  region: process.env.REGION,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Quote[] | string>
) {
  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    res.status(403).send("Please authorize before requesting this resource")
  }

  if (req.method === 'GET') {
    const { Items } = await client.send(
      new ScanCommand({
        TableName: process.env.TABLE_NAME,
      })
    );

    const result: Quote[] = []
    for (let i of Items!) {
      result.push(unmarshall(i) as Quote)
    }
    return res.status(200).json(result);
  }
}