import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker/DesktopDatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider'
import moment, { Moment } from 'moment'
import React from 'react'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import TextField from '@mui/material/TextField';
import { Divider } from '@mui/material'
import Header from '../components/Header'



const Main = () => {

    const [value, setValue] = React.useState<Moment | null>(
        moment(new Date())
    );

    const handleChange = (newValue: Moment | null) => {
        setValue(newValue);
    };

    return (
        <div className='bg-slate-50 h-screen w-screen overflow-hidden'>
            <div className='flex h-auto w-screen space-x-8 py-5 px-5'>
                <TextField
                    label="Name"
                    margin='dense'
                    fullWidth
                />
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DesktopDatePicker
                        label="Start Date"
                        inputFormat="MM/DD/YYYY"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField margin='dense' {...params} />}
                    />
                    <DesktopDatePicker
                        label="End Date"
                        inputFormat="MM/DD/YYYY"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField margin='dense' {...params} />}
                    />
                </LocalizationProvider>
                <div className=' w-1/6 my-2'>
                    <button className="bg-green-500 hover:bg-green-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white h-12 w-full">Generate</button>
                </div>
                <div className=' w-1/6 my-2'>
                    <button className="bg-sky-600 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white h-12 w-full">Proceed</button>
                </div>
            </div>
            <Divider />
            <div className='flex h-screen w-screen  space-y-3 flex-col overflow-auto'>
                <Header />
            </div>

        </div>
    )
}

export default Main