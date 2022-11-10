import React, { ChangeEventHandler, FunctionComponent } from 'react'

interface TextBoxProps {
    setAction: ChangeEventHandler<HTMLInputElement>,
    name: string,
    value: string,
}

const TextBox: FunctionComponent<TextBoxProps> = ({ setAction, name, value }) => {
    return (
        <div className='flex flex-col justify-start w-1/5'>
            {/* <span className='text-slate-600 text-base w-1/2'>{name}</span> */}
            <input className=" mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" type="text" value={value} onChange={setAction} />
        </div>
    )
}

export default TextBox