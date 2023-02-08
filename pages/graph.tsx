import Menu from "../src/components/menu";
import { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react"

import Head from "next/head";
import { useEffect, useState } from "react";

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

    return <table className="border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
      <thead className="bg-slate-50 dark:bg-slate-700">
        <tr>
          <th className="w-1/2 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Author</th>
          <th className="w-1/2 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Quote</th>          
        </tr>
      </thead>
      <tbody>
        {items!.map((i) => {
          return <tr key={i.quote}>
            <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{i.author}</td>
            <td className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{i.quote}</td>
          </tr>
        })}
      </tbody>
    </table>
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