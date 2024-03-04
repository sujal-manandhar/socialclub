import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";


const EsewaSuccess: React.FC = () => {
  const router = useNavigate();
  const [searchParams] = useSearchParams();

 
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = searchParams.get("data") || "";
        if (!data) {
          // Show error message to the user if token not found
          alert("Token not found");
          router("/");
          return;
        }

        const decodedData = decodeURIComponent(atob(data));
        const parsedData = JSON.parse(decodedData);

        console.log("Decoded Data:", parsedData);

        

       
       

        // Redirect to home page after successful payment
        router("/");
      } catch (error) {
        console.error("Error:", error);
        // Handle error here
      }
    };

    fetchData();
  }, [router, searchParams]);

  return (
    <div className="h-screen flex justify-center items-center bg-slate-200">
      <div className="p-4 bg-slate-50 w-[240px] flex flex-col items-center gap-4">
        <h1>Success Payment</h1>
        <button
          onClick={() => router("/")}
          className="w-full px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Go to HomePage
        </button>
      </div>
    </div>
  );
};

export default EsewaSuccess;
