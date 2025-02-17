import React from 'react'

const Pagination = ({pageNo , setPageNo}) => {

    const handleIncrement = ()=>{
        setPageNo(pageNo=> pageNo+1)
        scrollTo(0,0)
    }
    const handleDecrement = ()=>{
        setPageNo(pageNo=> pageNo-1)
        scrollTo(0,0)
    }
  return (
    <>
    <section className='bg-black flex gap-4 justify-center p-4 sm:p-5 flex-wrap'>
    <button className={` text-[#fff] p-2 pl-6 pr-6 rounded-2xl cursor-pointer ${pageNo ==1 ? "bg-[#33393f]":"bg-[#B31312]"}`}  onClick={handleDecrement} disabled={pageNo==1 }>Prev</button>
    <button className={` p-2 pl-4 pr-4 rounded-full cursor-pointer ${pageNo == pageNo ? "bg-[#fff] text-[#B31312]" : "bg-[#B31312] text-[#fff]"}`} onClick={()=>setPageNo(pageNo)}>{pageNo}</button>
    <button className="bg-[#B31312] text-[#fff] p-2  pl-4 pr-4 rounded-full cursor-pointer" onClick={()=>(setPageNo(pageNo+1),scrollTo(0,0))}>{pageNo+1}</button>
    <button className=' hidden md:flex bg-[#B31312] text-[#fff] p-2 pl-4  pr-4 rounded-full cursor-pointer' onClick={()=>(setPageNo(pageNo+2),scrollTo(0,0))}>{pageNo+2}</button>
    <button className='hidden md:flex  bg-[#B31312] text-[#fff] p-2 pl-4 pr-4 rounded-full cursor-pointer' onClick={()=>(setPageNo(pageNo+3),scrollTo(0,0))}>{pageNo+3}</button>
    <button className=' hidden md:flex  bg-[#B31312] text-[#fff] p-2 pl-4 pr-4 rounded-full cursor-pointer ' onClick={()=>(setPageNo(pageNo+4),scrollTo(0,0))}>{pageNo+4}</button>
    <button className='bg-[#B31312] text-[#fff] p-2 pl-6 pr-6 rounded-2xl cursor-pointer' onClick={handleIncrement}>Next</button>
    </section>
    </>
  )
}

export default Pagination