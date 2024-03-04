
function Login() {
  return (
    <>
  <div className='flex justify-center items-center font-abc h-screen bg-indigo-900 ' >
    
    <div className=' p-6 shadow-lg rounded-md lg:w-[55vh] md:w-3/5 w-4/5' style={{background:"#EFF2FF"}}>
    
        <h1 className='text-2xl block text-center font-semibold'>Member Login</h1>
        <hr className='mt-3' />
        <div className='mt-3'>
            <label htmlFor="username " className='block text-base mb-2' >Username</label>
            <input type="text" id='username'  style={{background:"#EFF2FF"}} className='order w-full text-base py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter Username.......' />
        </div>
        <div className='mt-3'>
            <label htmlFor="password " className='block text-base mb-2'>Password</label>
            <input type="password" id='password'style={{background:"#EFF2FF"}} className='order w-full text-base py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter Password.......' />
        </div>
        <div className="mt-3 sm:flex sm:justify-between sm:items-center block">
        <div >
         <input type="checkbox" />
         <label className="font-abc ml-3" >Remember Me?</label>
        </div>
        <div className="mt-4 sm:mt-0">
        <a href="#" className="text-indigo-800 font-semibold font-abc">Forgot Password</a>
    </div>
    </div>
    <div className="mt-5">
        <button type="submit" className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700">Sign in </button>
    </div>
   

    </div>
    
  </div>
    </>
  )
}

export default Login