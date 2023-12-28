import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div className='w-100 h-full m-10 flex flex-col gap-8'>
        <div className='flex  text-3xl'>
          <h1>Home Page</h1>
        </div>
        <p>For task-1 <Link to={"/task1"} className='hover:bg-blue-600 hover:text-white m-4 border p-2 rounded-md bg-blue-200' >Click Here</Link> 
        </p>
        <p>For task-2 <Link to={"/task2"} className='hover:bg-blue-600 hover:text-white m-4 border p-2 rounded-md bg-blue-200' >Click Here</Link> 
        </p>
    </div>
  )
}

export default Home