import img1 from '../img/campaign1.jpg'



function Campaign() {
  return (
    <>
    <div className="grid justify-center items-center">
      <h1 style={{color:"#272F32"}} className="font-abc text-xl font-bold mt-4 md:text-4xl ml-4">Empowering Youth: Bridging Tech and Business for 
      Tomorrow's Leaders</h1>
    </div>
     
    <div className='mt-4 w-full' style={{background:"#EFF2FF"}}>
    <img src={img1} className='max-w-full ml-4 ' />
    </div>
    </>  
)
}

export default Campaign