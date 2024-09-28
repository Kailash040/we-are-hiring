import "./App.css";
import Banner from "../src/assets/banner.jpg";
import banner2 from "../src/assets/img2.jpg";
import banner3 from "../src/assets/img3.jpg";
//
import React, { useState, useEffect } from "react";
function App() {
  //
  const SIX_HOURS_IN_SECONDS = 6 * 60 * 60;
  const [timeLeft, setTimeLeft] = useState(SIX_HOURS_IN_SECONDS);

  useEffect(() => {
    if (timeLeft <= 0) return; // Stop if the timer reaches 0

    // Set an interval to decrease time every second
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [timeLeft]);
  //
  // Format the time as hours, minutes, and seconds
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };
  //
  return (
    <div className="relative">
      <div className=" fixed bottom-0 mx-auto w-full bg-[#FFF7E1]">
        <div className="main_container px-5 flex   justify-between flex-wrap gap-3 mt-5 mb-5 ">
          {/*  */}{" "}
          <div className="flex items-start  justify-center flex-col">
            <p className="text-yellow-400  text-2xl font-serif font-bold ">
              {" "}
              ₹99 <span className="line-through	text-black"> ₹999</span>
            </p>
            <h2 className="text-red-400  font-serif text-base ">
              offers End in 15 Mins
            </h2>
          </div>
          <button className="bg-yellow-500 px-8 py-1 rounded-xl font-extrabold text-center ">
            Register Now
          </button>
        </div>
      </div>
      <div className="main_container px-5 flex justify-center flex-col">
        <div className="flex mt-5 justify-center items-center mb-10">
          {/* <h2 className="text-yellow-400">{formatTime(timeLeft)}</h2> */}
          <div>
            <img
              src={Banner}
              alt="banner"
              className=" h-screen border-4 max-sm:h-[300px] border-[#175C8D] w-full"
            />
          </div>
        </div>
        {/*  */}
        <p className="text-white font-serif font-bold text-center mt-2 text-xl	">
          A Govt. Approved work where you can Earn upto <b>30k</b> Per Month
          through Social Media (Facebook, Instagram, Whatsapp, linkedin)
        </p>
        <p>
          A Govt. Approved work where you can Earn upto 30k Per Month through
          Social Media (Facebook, Instagram, Whatsapp, linkedin)
        </p>
        {/*  */}
        <h1 className="text-white font-serif text-center mt-2 text-3xl	">
          Work From Home
        </h1>
        <p className="text-white font-serif font-bold text-center mt-2 text-2xl	">
          [Part Time & Full Time]
          <p className="mt-3 text-base"> Today's Investment is Only <span className="text-yellow-400">₹99</span>  but Price will Increase to  <span className="text-yellow-400">₹999</span>  when Timer Hits Zero</p>
          <div className="main_container px-5 flex  mt-5 flex-col  justify-center">
            <div className="flex gap-5 items-center  justify-center">
              <p> Time left</p>
              <h2 className="text-yellow-400 my-5 text-3xl ">
                {formatTime(timeLeft)}
              </h2>
            </div>

            <button className="bg-yellow-500 px-10 py-4 rounded-xl font-extrabold text-center   mx-auto w-[225px]">
              Apply Now
            </button>
          </div>
        </p>

        {/*  */}
        {/*  */}

        {/*  */}

        <div className="mt-10">
        <div className="w-[900px] mx-auto max-sm:w-full mb-20">
          <img
            src={banner3}
            alt="banner3"
            className="  max-sm:h-[300px]  w-full  h-[500px]"
          />
        </div>
         
        </div>
        <div className="main_container px-5 flex   justify-center gap-3 mt-5 flex-wrap">
          {/*  */}{" "}
        </div>
        <div className="main_text mt-5 mb-10">
        
          <p className=" text-2xl font-semibold mt-5 text-yellow-400">
            The Power of Online Business For Social Media Platforms :-
          </p>
          {/*  */}
          <div className="mt-10">
        <img
            src={banner2}
            alt="banner2"
            className=" h-screen border-4 max-sm:h-[300px]  w-full"
          />
        </div>
          {/*  */}
          <p className="text-white text-lg font-semibold mt-5">
            {" "}
            The power of online business through social media platforms is
            transformative. These platforms offer unparalleled reach, allowing
            businesses to connect with a global audience instantly. By
            leveraging targeted advertising and engaging content, brands can
            build loyal communities and enhance customer interaction. Social
            media facilitates real-time feedback and market research, enabling
            businesses to adapt quickly to consumer needs. Additionally,
            influencers can amplify brand visibility, driving sales and trust.
            With e-commerce integration, users can shop directly through social
            media, streamlining the purchasing process. Overall, social media
            empowers businesses to grow, innovate, and foster meaningful
            relationships with customers like never before.
          </p>
        </div>
        {/*  */}
        <div className="main_container px-5 flex   justify-center gap-3 mt-5 flex-wrap mb-20">
          {/*  */}{" "}
          <div className="flex gap-5 items-center  justify-center">
            <p className="text-white  text-2xl font-serif font-bold">
              {" "}
              Time left
            </p>
            <h2 className="text-yellow-400 my-5 text-3xl font-serif ">
              {formatTime(timeLeft)}
            </h2>
          </div>
          <button className="bg-yellow-500 px-8 py-4 rounded-xl font-extrabold text-center ">
            Apply Now
          </button>
        </div>
        {/*  */}
       
        {/*  */}
        {/*  */}
     
      </div>
    </div>
  );
}

export default App;
