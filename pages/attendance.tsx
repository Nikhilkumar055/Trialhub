import React from 'react'
import FilterIcon from './components/icons/filterIcon';
import Navbar from './components/Navbar/navbar'
import AttendanceItem from './attendanceItem';

const attendanceSheet = [
  {
    dp:"https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png",
    name:"Harsh",
    Department:"Web Design",
    Presence:true,
    In:"8:30 AM",
    Out:"4:30 PM",
    TotalWorkingHours:"8.00 Hrs",
  },
  {
    dp:"https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png",
    name:"Harsh",
    Department:"Web Design",
    Presence:false,
    In:"8:30 AM",
    Out:"4:30 PM",
    TotalWorkingHours:"8.00 Hrs",
  },
  {
    dp:"https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png",
    name:"Harsh",
    Department:"Web Design",
    Presence:false,
    In:"8:30 AM",
    Out:"4:30 PM",
    TotalWorkingHours:"8.00 Hrs",
  },

];

function Attendance() {
  return (
    <>
    <Navbar/>
    <div className='flex justify-between max-w-1280px mx-auto py-1 px-4 border-b bg-white'>
            <h3 className='font-bold my-3'>Attendance</h3>
            <div className="hidden md:inline-flex items-center space-x-10 ">
                 <h3 className='my-3'>Search</h3>
                 <FilterIcon / >
                 <h3>18-12-2022</h3>
            </div>
    </div>
    <div className="bg-white my-6 overflow-auto md:m-6 md:rounded-3xl">
      <table className='w-full'>
        <tr>
          <th>DP</th>
          <th>Name</th>
          <th>Department</th>
          <th>Presence</th>
          <th>In</th>
          <th>Out</th>
          <th>Total Working Hours</th>
        </tr>
        {attendanceSheet.map((i,index) => (
         <AttendanceItem key = {index} item = {i}/>
        ))}
      </table>
    </div>
    </>
  );
}

export default Attendance;