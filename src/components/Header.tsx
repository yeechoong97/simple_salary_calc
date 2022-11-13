import React from 'react'

const Header = () => {
    return (
        <div className='bg-slate-200 w-full h-auto px-3 py-2 flex items-center space-x-5 sticky top-0 justify-center'>
            <input className="uppercase mt-1 px-3 py-2 bg-slate-100 border-2 shadow-sm border-green-500 block rounded-md sm:text-sm text-right" placeholder='00:00' type="text" value="Date" disabled />
            <input className="uppercase mt-1 px-3 py-2 bg-slate-100 border-2 shadow-sm border-orange-400 block rounded-md sm:text-sm " placeholder='00:00' type="text" value="Morning (Start)" disabled />
            <input className="uppercase mt-1 px-3 py-2 bg-slate-100 border-2 shadow-sm border-orange-400 block rounded-md sm:text-sm " placeholder='00:00' type="text" value="Morning (End)" disabled />
            <input className="uppercase mt-1 px-3 py-2 bg-slate-100 border-2 shadow-sm border-rose-400 block rounded-md sm:text-sm " placeholder='00:00' type="text" value="Noon (Start)" disabled />
            <input className="uppercase mt-1 px-3 py-2 bg-slate-100 border-2 shadow-sm border-rose-400 block rounded-md sm:text-sm " placeholder='00:00' type="text" value="Noon (End)" disabled />
            <input className="uppercase mt-1 px-3 py-2 bg-slate-100 border-2 shadow-sm border-blue-400 block rounded-md sm:text-sm " placeholder='00:00' type="text" value="Night (Start)" disabled />
            <input className="uppercase mt-1 px-3 py-2 bg-slate-100 border-2 shadow-sm border-blue-400 block rounded-md sm:text-sm " placeholder='00:00' type="text" value="Night (End)" disabled />
        </div>
    )
}

export default Header