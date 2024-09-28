import "./App.css";
import Banner from "../src/assets/banner.jpg";
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
    <div>
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
        <h1 className="text-white font-serif text-center mt-2 text-3xl	">
          Work From Home
        </h1>
        <p className="text-white font-serif font-bold text-center mt-2 text-2xl	">
          [Part Time & Full Time]
          <div className="main_container px-5 flex  mt-5 flex-col  justify-center">
            <p>
              Today's Investment is{" "}
              <span className="text-yellow-600">Only ₹99</span> but Price will{" "}
              <span className="text-yellow-600">Increase to ₹999</span> when
              Timer Hits Zero
            </p>
            <div className="flex gap-5 items-center  justify-center">
             <p>Time Left:-</p>
            <h2 className="text-yellow-400 my-5 text-3xl ">
              {formatTime(timeLeft)}
            </h2>
            </div>

            <button className="bg-yellow-500 px-10 py-4 rounded-xl font-extrabold text-center w-2/3  mx-auto">
              Apply Now
            </button>
          </div>
        </p>
        <p className="text-white font-serif font-bold text-center mt-2 text-xl	">
          A Govt. Approved work where you can Earn upto <b>30k</b> Per Month
          through Social Media (Facebook, Instagram, Whatsapp, linkedin)
        </p>
        {/*  */}
        {/*  */}

        {/*  */}
        <div className="main_container px-5 flex   justify-between">
          <button className="bg-yellow-500 px-10 py-4 rounded-xl font-extrabold text-center ">
            Apply Now
          </button>
          {/*  */}
          <button className="bg-yellow-500 px-10 py-4 rounded-xl font-extrabold text-center ">
            Apply Now
          </button>
        </div>
        <div className="main_text mt-5 mb-10">
          <p className="text-white text-xl font-light">
            Here are the benefits of working from home specifically for students
            and housewife's, along with tips for finding employment
            opportunities:
          </p>
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
      </div>
    </div>
  );
}

export default App;
