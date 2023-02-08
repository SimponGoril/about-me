import React from "react";

interface TableProps<T> {
    items?: T[];
}

export const Table = <T,>(props:TableProps<T>) => {
    if (!props.items) return <></>

    const headers = Object.keys(props.items[0]!)
                          .map(h => <th key={h} className="w-1/2 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">{h}</th>)

    return <table className="border-collapse w-full border border-slate-400 dark:border-slate-500 bg-white dark:bg-slate-800 text-sm shadow-sm">
    <thead className="bg-slate-50 dark:bg-slate-700">
      <tr>{headers}</tr>
    </thead>
    <tbody>
      {props.items!.map((item: T, i) => {
        const cells = Object.values(item!).map((v, x) => <td key={`${i}-${x}`} className="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{v as String}</td>)

        return <tr key={i}>
            {cells}
        </tr>
      })}
    </tbody>
  </table>
};