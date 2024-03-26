import Logo from '../img/Logo.jpg';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Home", path: "/" },
    { link: "Programs", path: "/programs" },
    { link: "Campaigns", path: "/campaigns" },
    { link: "Donations", path: "/donations" },
    { link: "News", path: "/news" },
    { link: "About Us", path: "/aboutus" }
  ];

  return (
    <>
      <div className='w-full h-[20vh] flex bg-white'>
        <img src={Logo} className='h-[20vh] lg:h-[20vh] px-5 pt-[2vh] pb-[2vh] shadow-md' alt="Logo" />
        <div className='flex flex-col md:flex-row'>
          <h1 className='font-abc text-xl md:text-4xl text-bold pt-[4vh] pb-[2vh] md:pt-[8vh] md:ml-4' style={{ color: "#0141AC" }}>
            Bridging Technology and Business
          </h1>
        </div>
      </div>
      <nav className='bg-slate-950 w-[100%] md:h-12 flex justify-between px-4 md:px-4 items-center'>
        <div className='text-white text-sm md:text-nowrap lg:text-2xl md:text-xl font-abc font-bold'>
          Hetauda Youth
        </div>
        <ul className='md:mr-[30vh] font-abc lg:flex hidden md:text-nowrap text-white md:text-xl lg:gap-4 lg:mr-[20vh] items-center justify-center'>
          {navItems.map(({ link, path }) => (
            <li key={link} className='mx-[25px] cursor-pointer hover:text-purple-600'>
              <Link to={path}>{link}</Link>
            </li>
          ))}
        </ul>
        <div className='lg:hidden md:ml-[80vh] ml-[44vh]'>
  <button className='text-white text-2xl md:text-2xl' onClick={toggleMenu}>&#8801;</button>
</div>

        
          {isAuthenticated && (
          <li>
          <p>{user.name}</p>
          </li>
          )}
        {isAuthenticated ? (
          <div className='hidden lg:block px-4 py-2  md:px-2 text-white cursor-pointer'>
            <button className='bg-blue-600  hover:bg-green-500 text-nowrap px-3 py-2 font-semibold rounded-md' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
            </button>
          </div>
        ) : (
          <div className='hidden lg:block px-4 py-2  md:px-2 text-white cursor-pointer'>
            <button className='bg-blue-600  hover:bg-green-500 text-nowrap px-3 py-2 font-semibold rounded-md' onClick={() => loginWithRedirect()}>Log In</button>
          </div>
        )}
        <div className={`absolute inset-0 mt-[25vh] md:mt-[25vh] px-3 bg-slate-200 transition-all duration-300 ease-in-out ${isMenuOpen ? "block" : "hidden"} lg:hidden`}>
          <div className="flex flex-col h-full  ">
            {navItems.map(({ link, path }) => (
              <Link
                key={link}
                to={path}
                className="text-xl md:text-2xl  my-2 hover:text-purple-600"
                onClick={toggleMenu}
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
