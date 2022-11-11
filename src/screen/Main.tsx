import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker/DesktopDatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider/LocalizationProvider'
import moment, { Moment } from 'moment'
import { ChangeEvent, ChangeEventHandler, EventHandler, useEffect, useState } from 'react'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import TextField from '@mui/material/TextField';
import { Divider } from '@mui/material'
import Header from '../components/Header'
import TextBox, { DateTimeProps } from '../components/TextBox';

const InitialRecord: DateTimeProps = {
    date: "",
    morningStart: "",
    morningEnd: "",
    noonStart: "",
    noonEnd: "",
    nightStart: "",
    nightEnd: "",
}

const Main = () => {

    const [startDate, setStartDate] = useState<Moment | null>(null);
    const [endDate, setEndDate] = useState<Moment | null>(null);
    const [totalDays, setTotalDays] = useState<number>(0);
    const [dateRecords, setDateRecords] = useState<DateTimeProps[]>([]);

    const populateRows = () => {
        let differenceDays = endDate?.diff(startDate, 'days');
        setTotalDays(differenceDays! + 1);
    }

    // Update the state of rows
    const updateRows = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        const [date, fieldName] = name.split("|");
        console.log(date);
        console.log(fieldName);
        const duplicateDateRecords = [...dateRecords];
        duplicateDateRecords.find((val) => val.date === date)![fieldName as keyof DateTimeProps] = value;
        setDateRecords(duplicateDateRecords);
    }

    useEffect(() => {
        // Set the default date for previous month
        const setupDate = () => {
            const startOfMonth = moment().clone().subtract(1, 'months').startOf('month');
            const endOfMonth = moment().clone().subtract(1, 'months').endOf('month');
            setStartDate(startOfMonth);
            setEndDate(endOfMonth);
        }

        // Setup All the rows initially based on number of days
        const setupRows = () => {
            if (totalDays !== 0) {
                const blankRecords: DateTimeProps[] = [];
                for (let i = 0; i < totalDays; i++) {
                    let newRow = { ...InitialRecord, date: startDate!.add(i === 0 ? 0 : 1, "day").format("DD/MM/YYYY") };
                    blankRecords.push(newRow);
                }
                setDateRecords(blankRecords);
            }
        }

        // Setup the input rows
        setupRows();

        // Clean the function after used it
        return () => setupDate()
    }, [totalDays])

    return (
        <div className='bg-slate-50 h-screen w-screen overflow-hidden'>
            <div className='flex h-auto w-screen space-x-8 py-5 px-5'>
                <TextField
                    label="Name"
                    margin='dense'
                    className='w-1/2'
                />
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DesktopDatePicker
                        label="Start Date"
                        inputFormat="MM/DD/YYYY"
                        value={startDate}
                        onChange={(date) => setStartDate(date)}
                        renderInput={(params) => <TextField margin='dense' {...params} />}
                    />
                    <DesktopDatePicker
                        label="End Date"
                        inputFormat="MM/DD/YYYY"
                        value={endDate}
                        onChange={(date) => setEndDate(date)}
                        renderInput={(params) => <TextField margin='dense' {...params} />}
                    />
                </LocalizationProvider>
                <div className=' w-1/6 my-2'>
                    <button className="bg-green-500 hover:bg-green-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white h-12 w-full" onClick={populateRows}>Generate</button>
                </div>
                <div className=' w-1/6 my-2'>
                    <button className="bg-sky-600 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white h-12 w-full">Proceed</button>
                </div>
            </div>
            <Divider />
            <div className='flex h-full w-screen space-y-3 flex-col overflow-auto pb-32'>
                <Header />
                {
                    totalDays > 0 && dateRecords.map((date, index) => (
                        <TextBox key={index} date={date.date} morningStart={date.morningStart} morningEnd={date.morningEnd} noonStart={date.noonStart} noonEnd={date.noonEnd} nightStart={date.nightStart} nightEnd={date.nightEnd} setAction={updateRows} />
                    ))
                }
            </div>
        </div>
    )
}

export default Main