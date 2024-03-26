import { FormEvent, useState } from "react"



function AddProgram() {
    const[Title,setTitle]= useState("")
    const[description, setDesc] = useState("")
    const[time,setTime]= useState("")
    const[address, setAddress] = useState("")
    const handleFormSubmit =(e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
    }


  return (
    <>
    <form onSubmit={handleFormSubmit}>
    <div className='flex justify-center items-center h-auto mt-8'>
    <div className='w-3/5 ' style={{background:"white"}}>
      <h1 className='font-abc font-bold text-xl md:text-2xl'>Add Content Here</h1>
      <hr />
      <div className='mt-8'>
        <label htmlFor="programtitle" className='block text-base md:text-lg'>Program Title</label>
        <input type="text" value={Title} onChange={(e)=> setTitle(e.target.value)} className='w-full border-black border-2 ' />
      </div>
      <div className="mt-8">
    <label htmlFor="description" className="block text-base md:text-lg">Description</label>
    <textarea id="description" value={description} onChange={(e) => setDesc(e.target.value)} className="w-full border-black border-2"></textarea>
</div>
      <div className='mt-8'>
        <label htmlFor="when" className='block text-base md:text-lg'>When</label>
        <input type="date" value={time} onChange={(e)=>setTime(e.target.value)} className='w-full  border-black border-2 ' />
      </div>

      <div className='mt-8'>
        <label htmlFor="where" className='block text-base md:text-lg'>Where</label>
        <input type="text" value={address} onChange={(e)=> setAddress(e.target.value)} className='w-full   border-black border-2' />
      </div>
      
      <div className="mt-8 flex items-center justify-center">
        <button className="bg-blue-500 px-4  text-white font-semibold rounded-md  " type="submit">Add</button>
      </div>
   
      
    </div>
   </div>
   </form>
    </>
    )
}

export default AddProgram