"use client"
import Navbar from '@/Components/Navbar'
import React, { useState } from 'react'

const page = () => {
  const [Title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault();
    
    setMainTask([...mainTask, {Title, desc}]);

    setTitle("");
    setDesc("");
  }

  let renderTask = <h2>No Task Available</h2>
  
  return (
    <>
      <div className="text-white  bg-zinc-700 h-screen w-full main">
        <Navbar />
        <form className="m-10" onSubmit={submitHandler}>
          <input type="text" placeholder='Enter Title here' value={Title} onChange={(e) => {
            setTitle(e.target.value)
          }} className="text-2xl bg-slate-100 text-black border-zinc-800 border-2 rounded m-5 px-4 py-2" />
          <input type="text" placeholder='Enter Description here' value={desc} onChange={(e) => {
            setDesc(e.target.value)
          }} className="text-2xl bg-slate-100 text-black border-zinc-800 border-2 rounded m-5  px-4 py-2" />
          <br />
          <button className="px-6 py-3 m-6 bg-zinc-900 rounded-md">Add Task</button>
        </form>
        <hr />
        <div className="p-8 bg-zinc-800">
          <ul>
            {renderTask}
          </ul>
        </div>
      </div>
    </>
  )
}

export default page
