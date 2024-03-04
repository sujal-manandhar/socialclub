import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";




function Programs() {
  const {isAuthenticated} = useAuth0();
  return (
    <>
      
    
    <div style={{background:"#772582"}} className="w-full h-[30vh] md:h-[40vh] grid justify-center items-center">
      <h1 className="font-abc text-white text-3xl md:text-4xl font-bold">Our Programs in Nepal</h1>
    </div>

 {
  isAuthenticated ? (
    <div className='flex justify-end w-[95%]  '>
    <Link to="/addprograms" className="inline-block bg-green-700 text-white font-bold py-2 px-4 rounded my-3 ">
    Add+
  </Link>
  </div>
  ):null
 }

    <div className="w-full grid justify-center items-center" >
      <h1 className="font-abc text-3xl mt-8 ml-4 md:w-2/5 lg:text-4xl" style={{color:"#242A56"}}>Be a part of the blood donation program</h1>
      <div className="flex flex-col md:flex-row ">
        <p className="font-abc text-base md:text-  mt-4  lg:w-4/5 md:w-4/5 ml-4 lg:text-xl " style={{color:"#242A56"}}>
Join us in Hetauda for an unforgettable experience as we come together for the premier event of the year - the Blood Donation Program. This event brings together thousands of donors and volunteers from all over, united in our commitment to serve our community.

In the heart of Hetauda, amidst its bustling streets and serene landscapes, we gather to make a difference. Blood donation is a simple yet powerful act that saves lives. It's about giving a part of ourselves to help those in need, strangers who may one day rely on our generosity for their survival.



</p>
<div style={{background:"#65266D"}} className="mt-10  lg:w-[50vh] lg:ml-[10vh] md:w-[25vh] md:mr-4 ml-8 md:h-[20vh] lg:h-[35vh] h-[35vh] w-4/5  block mb-10 md:mt-[2px] ">
    <p className="ml-4 font-abc text-2xl pt-10 text" style={{color:"#5CA4B8"}}>When</p>
    <p className="ml-4 text-white text-xl mt-2">June 20-24,2024 </p>
    <p className="ml-4 mt-6 font-abc text-2xl" style={{color:"#5CA4B8"}}>Where</p>
    <p className="ml-4 text-white text-xl mt-2 ">Hetauda, Nepal </p>


</div>
      </div>
      </div>
    
 


    </>
  )
}

export default Programs