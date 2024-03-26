
import {FaFacebook,FaGithub,FaInstagram,FaTwitter} from 'react-icons/fa'

const sections=[
    {
    title:'About US',
    items:['Marketing','Analytics','Commerce','Data','cloud']
    },
    {
        title:'Donations',
        items:['Marketing','Analytics','Commerce','Data','cloud']
        },
        {
            title:'Help',
            items:['About','News','Campaigns','Program']
            },
            
                {
                    title:'News',
                    items:['About','News','Campaigns','Program']
                    },
]

const items=[
    {
    name:'Facebook',
    icon:FaFacebook,
    link:'https://facebook.com/'
    },
    {
        name:'Instagram',
        icon:FaInstagram,
        link:'https://instagram.com/'
        },
        {
            name:'Twitter',
            icon:FaTwitter,
            link:'https://twitter.com/'
            },
                {
                    name:'Github',
                    icon:FaGithub,
                    link:'https://github.com/'
                    },
]
function Footer(){
    return(
        <>
        <footer>
        <div className='w-full absolute   bg-slate-900 text-gray-300 py-y px-2'>
            <div className='max-w[1240] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
        {
            sections.map((section,index)=>(
                <div key={index}>
                <h6 className='font-bold uppercase pt-2 '> 
                    {section.title}
                </h6>
                <ul>
                    {section.items.map((item,i)=>(
                        <li key={i} 
                        className='py-1 text-gray-500 hover:text-white cursor-pointer'>
                            {item}
                        </li>
                    ))}
                </ul>
                </div>
            ))
        
        }

        <div className=' pt-8 md:pt-2'>
<p className='text-nowrap font-bold uppercase'>
    Subscribe to our News
</p>
<p className='py-4'>
    The latest updates,articles and news, sent to your inbox weekly.

</p>
<form className='flex flex-col  sm:flex-row'>
    <input  type="email" placeholder='Enter email address'
    className=' text-black mr-4 rounded-md-4 h-10'
    />
    <div className=' '>
    <button className='p-2  bg-blue-500 rounded-md items-center'>
        Subscribe
    </button>
    </div>
    </form>
        </div>
            </div>

        {/* Copyright & Social Icons     */}
<div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center'>
<p className='py-4'>
    2024 Bridging Technology and Business,Non-Profit Organization.All rights reserved.  
</p>

<div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
    {
        items.map((x,index)=>{
           return <x.icon key={index} className='hover:text-white cursor-pointer' />
        })
    }

</div>
</div>
        </div>
        </footer>
        </>
    )
}

export default Footer