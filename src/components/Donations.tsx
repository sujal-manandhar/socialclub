
import Donation from "../img/donation.jpg";
import Page from "./esewa/Page";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Donations = () => {
 const navigate=useNavigate()

  const [donationAmount,setDonationAmount]=useState<string>('')
  const [showValidationMessage, setShowValidationMessage] = useState<boolean>(false);

  const handlePay = () => {
    if (donationAmount.trim() !== '') { 
      navigate(`/esewa?amount=${donationAmount}`); 
    } else { 
      setShowValidationMessage(true); 
    }
  };

  return (
    <>
      <div>
        <img
          src={Donation}
          className="w-full lg:h-[75vh] h-[40vh]"
          alt="Donation"
        />
      </div>

      <div className="flex justify-center items-center h-auto mt-8">
        <div
          className="lg:w-[75vh] md:w-3/5 p-6 shadow-lg rounded-md"
          style={{ background: "#EFF2FF" }}
        >
          <h1 className="font-abc font-bold text-xl md:text-2xl">
            Donation Form
          </h1>
          <hr />
          <div className="mt-8">
            <label htmlFor="firstname" className="block text-base md:text-lg">
              FirstName
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              className="w-full border-black border-2"
            />
          </div>
          <div className="mt-8">
            <label htmlFor="lastname" className="block text-base md:text-lg">
              LastName
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="w-full  border-black border-2"
            
            />
          </div>
          <div className="mt-8">
            <label htmlFor="email" className="block text-base md:text-lg">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full  border-black border-2"
            />
          </div>
         
          <div className="mt-8">
            <label htmlFor="number" className="block text-base md:text-lg">
              Contact no
            </label>
            <input
              type="number"
              name="number"
              id="number"
              className="w-full   border-black border-2"
            />
          </div>

          
           {/* Donation amount input field */}
           <div className="mt-8">
            <label htmlFor="donation" className="block text-base md:text-lg"> 
              Donation Amount
            </label>
            <input
              type="number" 
              name="donation" 
              id="donation" 
              value={donationAmount} 
              onChange={(e) => { 
                setDonationAmount(e.target.value); 
                setShowValidationMessage(false); 
              }}
              className="w-full   border-black border-2" 
            />

            {/* Validation message */}
            {showValidationMessage && ( 
              <p className="text-red-500 mt-1"> 
                Please enter the donation amount.
              </p>
            )}
          </div>

          <div className="flex justify-center">
  <button onClick={handlePay} className="mt-4  text-xl px-6 py-2 bg-green-600 text-white rounded-md hover:bg-blue-700 focus:outline-none">
    Donate
  </button>
</div>

        </div>
      </div>
    
    </>
  );
};

export default Donations;
