import "./App.css";
import Banner from "../src/assets/banner.jpg";
import banner2 from "../src/assets/img2.jpg";
import banner3 from "../src/assets/img3.jpg";
//
import s1 from "../src/assets/s1.png";
import s2 from "../src/assets/s2.png";
import s3 from "../src/assets/s3.png";
import s4 from "../src/assets/s4.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
function App() {
  //
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://form.m3mluxuriousprojects.com/api-insert.php",
        data
      );
      console.log("Success:", response.data);
      alert("'We will be contacting you soon.");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form!");
    }
  };
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
  const [show, setShow] = useState(false);
  //
  const showPopUp = () => {
    setShow(true);
  };
  const hidePopUp = () => {
    setShow(false);
  };
  return (
    <div className="relative">
      {/*  */}
      {show && (
        <div className="flex justify-center">
          <div className="bg-white py-10   pt-7 fixed px-7 top-10  flex    justify-center items-center  ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex gap-2 justify-center flex-wrap"
            >
              {/* Name Input */}
              <div>
                <input
                  id="name"
                  type="text"
                  placeholder="Full Name"
                  {...register("fullname", { required: "Name is required" })}
                  className="border-2 border-black p-2  rounded-2xl"
                />
              </div>

              {/* Phone Number Input */}
              <div>
                <input
                  id="phone"
                  type="tel"
                  minlength="10"
                  maxlength="10"
                  placeholder="Phone No"
                  {...register("phone_number", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{3}[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/,
                      message:
                        "Invalid phone number format. Expected format: 123-456-7890 or 1234567890",
                    },
                  })}
                  className="border-2 border-black p-2  rounded-2xl"
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Invalid email address",
                    },
                  })}
                  className="border-2 border-black p-2  rounded-2xl"
                />
              </div>

              {/* City Select */}
              <div className="flex gap-5 items-center">
                <label htmlFor="city">City</label>
                <select
                  id="city"
                  {...register("city", { required: "City is required" })}
                  className="border-2 border-black p-2  rounded-2xl"
                >
                  <option value="">Select a city</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi</option>
                  <option value="bengaluru">Bengaluru</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="ahmedabad">Ahmedabad</option>
                  <option value="chennai">Chennai</option>
                  <option value="kolkata">Kolkata</option>
                  <option value="pune">Pune</option>
                  <option value="jaipur">Jaipur</option>
                  <option value="surat">Surat</option>
                  <option value="lucknow">Lucknow</option>
                  <option value="kanpur">Kanpur</option>
                  <option value="nagpur">Nagpur</option>
                  <option value="indore">Indore</option>
                  <option value="thane">Thane</option>
                  <option value="bhopal">Bhopal</option>
                  <option value="visakhapatnam">Visakhapatnam</option>
                  <option value="patna">Patna</option>
                  <option value="vadodara">Vadodara</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="ml-2  bg-black text-white  px-5   rounded-md "
              >
                Submit
              </button>
            </form>
            <button className="absolute top-0 right-0 pb-2" onClick={hidePopUp}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 -960 960 960"
                width="30px"
                fill="#000000"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </button>
          </div>
        </div>
      )}
      {/*  */}
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
          <button
            className="bg-yellow-500 px-8 py-1 rounded-xl font-extrabold text-center "
            onClick={showPopUp}
          >
            Register Now
          </button>
        </div>
      </div>
      <div className="main_container  flex justify-center flex-col">
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
        <h1 className="text-white  text-center mt-2 text-3xl	">
          Work From Home
        </h1>
        <p className="text-white  text-center mt-2 text-3xl">
          {" "}
          [Part Time & Full Time]
        </p>
        <p className="text-white font-serif font-bold text-center mt-2 text-xl	">
          A Govt. Approved work where you can Earn upto <b>30k</b> Per Month
          through Social Media (Facebook, Instagram, Whatsapp, linkedin)
        </p>
        <p>
          A Govt. Approved work where you can Earn upto 30k Per Month through
          Social Media (Facebook, Instagram, Whatsapp, linkedin)
        </p>
        {/*  */}
        <p className="text-white  font-bold text-center mt-2 text-2xl	">
          <p className="mt-3 text-2xl max-sm:text-base">
            {" "}
            Today's Investment is Only{" "}
            <span className="text-yellow-400">₹99</span> but Price will Increase
            to <span className="text-yellow-400">₹999</span> when Timer Hits
            Zero
          </p>
          <div className="main_container px-5 flex  flex-col  justify-center">
            <div className="flex gap-2 items-center  justify-center">
              <p> Time left</p>
              <h2 className="text-yellow-400 my-5 text-3xl ">
                {formatTime(timeLeft)}
              </h2>
            </div>

            <button
              className="bg-yellow-500 px-10 py-4 rounded-xl font-extrabold text-center   mx-auto w-[225px]"
              onClick={showPopUp}
            >
              Apply Now
            </button>
          </div>
        </p>

        {/*  */}
        {/*  */}

        {/*  */}

        <div className="mt-10">
          <div className="w-[900px] mx-auto max-sm:w-full ">
            <img
              src={banner3}
              alt="banner3"
              className="  max-sm:h-[300px]  w-full  h-[500px]"
            />
          </div>
        </div>
        {/*  */}
        <div className="Workshop mb-10">
          <div className="workshop ">
            <p className="text-[#FADF98] text-center my-10 text-4xl font-bold max-sm:text-xl">
              How This Workshop Can Transforms Your Life?
            </p>
            <div className=" flex flex-col justify-center items-center w-full text-center gap-2">
              <p className="text-white text-sm font-normal text-center w-[50%] max-sm:w-full bg-[#ffffff1a] p-2">
                You will learn the fundamentals of business, how you can
                systemize your business, train the team, build strong systems to
                scale your business fast.
              </p>
              <p className="text-white text-sm font-normal text-center w-[50%] max-sm:w-full bg-[#ffffff1a] p-2">
                ​​​Discover different ways of marketing method for your business
                and how to create a marketing strategy for your business in 2024
              </p>
              <p className="text-white text-sm font-normal text-center w-[50%] max-sm:w-full bg-[#ffffff1a] p-2">
                ​​Learn how To create systems in your business, how to create a
                best team & run your business on autopilot.
              </p>
              <p className="text-white text-sm font-normal text-center w-[50%] max-sm:w-full bg-[#ffffff1a] p-2">
                Learn How to triple your sales & profit in 90 days: The Secret
                strategy which companies like google, Walmart uses for their
                companies.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="main_container px-5 flex   justify-center gap-3 mt-5 flex-wrap">
          {/*  */}{" "}
        </div>
        <div className="main_text mt-5 mb-10 hidden">
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
          <p className="text-white text-lg font-semibold mt-5 text-center">
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
        <div className="main_container flex flex-col justify-center bg-white py-10">
          {/*  */}
          <p className=" text-center text-3xl font-bold ">
            What will You Learn
          </p>
          <div className="card_container flex gap-5 justify-center flex-wrap mt-10">
            <div className="card_item flex items-center gap-2  bg-[#FAEBD7] p-3 rounded-xl">
              <div className="w-[150px] h-[150px]">
                {" "}
                <img src={s1} alt="s1" className="w-full h-full" />
              </div>
              <div>
                <p className="text-2xl font-bold max-sm:text-lg">
                  Strategic Planning
                </p>
                <p className="max-sm:text-sm">
                  Learn how to develop actionable strategies to <br /> achieve
                  your business goals, including setting <br /> objectives and
                  prioritizing tasks effectively.
                </p>
              </div>
            </div>
            {/*  */}
            <div className="card_item flex items-center gap-5  bg-[#FAEBD7] p-3 rounded-xl">
              <div className="w-[150px] h-[150px]">
                {" "}
                <img src={s2} alt="s1" className="w-full h-full" />
              </div>
              <div>
                <p className="text-2xl font-bold max-sm:text-lg">
                  Expansion Strategies
                </p>
                <p className="max-sm:text-sm">
                  Discover scalable growth strategies to expand <br /> your
                  business operations sustainably, including <br /> leveraging
                  technology & strategic partnerships.
                </p>
              </div>
            </div>
            {/*  */}
            <div className="card_item flex items-center gap-5  bg-[#FAEBD7] p-3 rounded-xl">
              <div className="w-[150px] h-[150px]">
                {" "}
                <img src={s3} alt="s3" className="w-full h-full" />
              </div>
              <div>
                <p className="text-2xl font-bold max-sm:text-lg">
                  Financial Management
                </p>
                <p className="max-sm:text-sm">
                  Gain insights into managing your finances <br /> efficiently,
                  from budgeting and forecasting to <br /> optimizing cash flow
                  and maximizing <br /> profitability.
                </p>
              </div>
            </div>
            {/*  */}
            <div className="card_item flex items-center gap-5  bg-[#FAEBD7] p-3 rounded-xl">
              <div className="w-[150px] h-[150px]">
                {" "}
                <img src={s4} alt="s3" className="w-full h-full" />
              </div>
              <div>
                <p className="text-2xl font-bold max-sm:text-lg">
                  Leadership Development
                </p>
                <p className="text-sm:text-sm">
                  Cultivate essential leadership skills to inspire <br /> and
                  motivate your team, foster innovation, and <br /> drive
                  business growth with confidence and <br /> resilience.
                </p>
              </div>
            </div>
            <div className="main_container px-5 flex   justify-center gap-3 mt-5 flex-wrap mb-12 ">
              {/*  */}{" "}
              <div className="flex gap-2 items-center  justify-center">
                <p className="text-black  text-2xl  font-bold"> Time left</p>
                <h2 className="text-yellow-400 my-5 text-3xl ">
                  {formatTime(timeLeft)}
                </h2>
              </div>
              <button
                className="bg-yellow-500 px-8 py-4 rounded-xl font-extrabold text-center "
                onClick={showPopUp}
              >
                Apply Now
              </button>
            </div>
          </div>
          {/*  */}
        </div>
        {/*  */}
        {/*  */}
       
        {/*  */}
        {/*  */}
      </div>
    </div>
  );
}

export default App;
