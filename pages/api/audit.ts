import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"
import crypto from "crypto"
import {
  DynamoDBClient,
  PutItemCommand
} from '@aws-sdk/client-dynamodb';

const client = new DynamoDBClient({
  credentials: {
    accessKeyId: process.env.DYNAMO_ACCESS_KEY!,
    secretAccessKey: process.env.DYNAMO_SECRET_KEY!,
  },
  region: process.env.REGION,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    res.status(403).send("Please authorize before requesting this resource")
  }

  if (req.method === 'POST') {
    const body = JSON.parse(req.body)
    
    await client.send(
      new PutItemCommand({
        TableName: "Audit",
        Item: {
          id: { S: crypto.randomUUID() },
          name: { S: body.name },
          email: { S: body.email },
          timestamp: {S: Date.now().toString()}
        }
      })
    );

    return res.status(201).send('OK');
  }

  return res.status(405).send('Method not allowed.');
}