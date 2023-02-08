import Menu from "../src/components/menu";
import { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react"

import Head from "next/head";
import { useEffect, useState } from "react";
import { isProd } from "../src/utils";
import { Table } from "../src/components/table";

const Api: NextPage = ({ }) => {
  const { data: session } = useSession()

  const buttonLogic: () => void = session ? signOut : signIn;
  const buttonText = session ? "Sign out" : "Sign in";

  const [items, setItems] = useState<Array<any>>();

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("/api/items");
        const data = await response.json();

        if (isProd()) {
          await fetch("/api/audit", {
            method: 'POST',
            body: JSON.stringify(session!.user)
          });
        }
        setItems(data);
      } catch (e) {
        console.log(e)
      }
    };

    if (!items && session) {
      fetchTodos()
    }
  })

  const getTable = () => {
    if (!items) return undefined

    return <Table items={items}/>
  }

  return (
    <>
      <Head>
        <title>Simon Moravec - API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <main className='container'>
        <div className="container lg:px-40 pt-20">
          <div className="container lg:px-40">
            <div className='container'>
              <h1 className='text-center font-medium leading-tight text-5xl mt-0 mb-2'>API <i className="spin">🔧</i></h1>
              <div className="flex justify-center flex-col items-center">
                <div><h2>{session ? `Welcome ${session.user?.name}` : "Please sign in to continue"}</h2></div>
                <div className="pt-5"><button onClick={() => buttonLogic()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">{buttonText}</button></div>
                <div className="pt-5">
                  {getTable()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
};


export default Api