import Hero from '../img/Hero.jpg'
import Cancer from '../img/cancer.png'
import Environment from '../img/environment.png'
import Diabetes from '../img/diabetes.png'
import Hunger from '../img/hunger.png'
import Vision from '../img/vision.png'
import p1 from '../img/p1.jpg'
import p2 from '../img/p2.jpg'
import p3 from '../img/p3.jpg'


function Home() {
  return (
    <>
    <div className="">
      <img src={Hero} className='lg:h-[70vh] w-full' />
    </div>

    <div className='w-full bg-white md:mb-[10vh] mb-4'>
      <h1 className='font-abc lg:mt-[2px] ml-4 mt-6 text-xl font-bold md:text-4xl md:pt-16 ' style={{color:"#242A56"}}>Our Programs</h1>
      <p className='font-abc text-base  ml-4 w-auto md:text-xl mt-3'  style={{color:"#242A56"}}>Whenever Hetauda Youth Club club members get together, problems get smaller.
And communities get better. Because we help where help is
needed in our own communities and around the world with unmatcheds
integrity and energy.</p>
      
<div className='grid grid-cols-3 gap-5 md:grid-cols-5 md:gap-15 md:mt-10   mt-3 ml-4 '>
  <img src={Cancer} className='lg:h-[30vh] ' />
  <img src={Environment} className='lg:h-[30vh] ' />
  <img src={Diabetes} className='lg:h-[30vh] ' />
  <img src={Hunger} className='lg:h-[30vh] ' />
  <img src={Vision} className='lg:h-[30vh] ' />

</div>
<div className='md:content-center'>
  <h1 className='font-abc mt-[10vh] lg:ml-4 text-xl ml-4 font-bold md:text-4xl md:pt-16 md:ml-4'   style={{color:"#242A56"}} >Projects in Nepal</h1>
 <div className='grid grid-cols-1 my-6 lg:grid-cols-3 lg:gap-2 lg:mb-0 lg:ml-3 lg:mr-3 md:grid-cols-2 md:gap-2 md:ml-4 '>
   <img src={p1} className='mb-3'/>
   <img src={p2} className=' mb-3'/>
   <img src={p3} className=''/>
 </div>
 </div>
    </div>

    <div style={{background:"#F0F3FF"}} className='h-[50vh] w-full flex justify-center items-center '>
      <div className='bg-white h-[40vh] md:h-[25vh] w-4/5 shadow-2xl content-center flex'>
        <div>
        <h1 className='font-abc text-3xl font-bold mt-[5vh] ml-[4vh]  ' style={{color:"#242A56"}}>Would you like to donate to us?</h1>
        <p className='font-abc text-xl md:text-xl font-semi-bold mt-[2vh] ml-[4vh]  ' style={{color:"#242A56"}}>Etiam erat lectus, finibus eget commodo quis, tincidunt eget leo. Nullam quis vulputate orci, ac accumsan quam. Morbi fringilla congue libero.</p>
      </div>
     
    </div>
    </div>
    </>
  )
}

export default Home