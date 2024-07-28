import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const BasicCalendar = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DateCalendar sx={{height: '300px'}} className='bg-[#f3f5f7] rounded-2xl' />
  </LocalizationProvider>

  )
}

export default BasicCalendar