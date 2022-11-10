import React, { ChangeEventHandler, FunctionComponent } from 'react'

export interface TimeInputProps {
    date: string,
    morningStart: string,
    morningEnd: string,
    noonStart: string,
    noonEnd: string,
    nightStart: string,
    nightEnd: string,
    setAction: ChangeEventHandler<HTMLInputElement>,
}

const TextBox: FunctionComponent<TimeInputProps> = (props) => {
    const { date, morningStart, morningEnd, noonStart, noonEnd, nightStart, nightEnd, setAction } = props;

    return (
        <div className='bg-slate-50 w-full h-auto px-3 py-2 flex items-center space-x-5'>
            <input className="px-1 py-2 bg-slate-50  text-right border shadow-sm border-slate-300 rounded-md" value={date} type="text" disabled />
            <input className=" px-3 py-2 bg-white border-2 shadow-sm border-orange-400 focus:outline-none focus:border-orange-500 focus:ring-orange-500 block rounded-md sm:text-sm focus:ring-1" type="text" name="morningStart" value={morningStart} onChange={setAction} />
            <input className=" px-3 py-2 bg-white border-2 shadow-sm border-orange-400 focus:outline-none focus:border-orange-500 focus:ring-orange-500 block rounded-md sm:text-sm focus:ring-1" type="text" name="morningEnd" value={morningEnd} onChange={setAction} />
            <input className=" px-3 py-2 bg-white border-2 shadow-sm border-rose-400 focus:outline-none focus:border-rose-500 focus:ring-rose-500 block rounded-md sm:text-sm focus:ring-1" type="text" name="noonStart" value={noonStart} onChange={setAction} />
            <input className=" px-3 py-2 bg-white border-2 shadow-sm border-rose-400 focus:outline-none focus:border-rose-500 focus:ring-rose-500 block rounded-md sm:text-sm focus:ring-1" type="text" name="noonEnd" value={noonEnd} onChange={setAction} />
            <input className=" px-3 py-2 bg-white border-2 shadow-sm border-blue-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block rounded-md sm:text-sm focus:ring-1" type="text" name="nightStart" value={nightStart} onChange={setAction} />
            <input className=" px-3 py-2 bg-white border-2 shadow-sm border-blue-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 block rounded-md sm:text-sm focus:ring-1" type="text" name="nightEnd" value={nightEnd} onChange={setAction} />
        </div>
    )
}

export default TextBox