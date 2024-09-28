import "./App.css";
import Banner from "../src/assets/banner.jpg";
//

function App() {
  return (
    <div>
      <div className="main_container px-5 flex justify-center flex-col">
        <h1 className="text-white font-serif text-center mt-2 text-3xl	">
          Work From Home
        </h1>
        <p className="text-white font-serif font-bold text-center mt-2 text-2xl	">
          [Part Time & Full Time]
        </p>
        <p className="text-white font-serif font-bold text-center mt-2 text-xl	">
          A Govt. Approved work where you can Earn upto <b>30k</b> Per Month
          through Social Media (Facebook, Instagram, Whatsapp, linkedin)
        </p>
        {/*  */}
        <div className="main_container px-5 flex justify-center mt-5">
          <button className="bg-yellow-500 px-10 py-4 rounded-xl font-extrabold text-center ">
            Apply Now
          </button>
        </div>
        {/*  */}
        <div className="flex mt-5 justify-between items-center mb-10">
          <div>
            <img
              src={Banner}
              alt="banner"
              className=" h-full border-4 border-[#175C8D] w-[700px]"
            />
          </div>
          <div className="text-white">
            <li className="text-lg	font-medium p-2">
              You should must have Smartphone
            </li>
            <li className="text-lg	font-medium p-2">Good Internet Connection</li>
            <li className="text-lg	font-medium p-2">3-4 Hours in a day</li>
          </div>
        </div>
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
