import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const NewsLetter = () => {
  const [email , setEmail] = useState()

  async function subscribe(e) {
    e.preventDefault();

    await fetch("https://xbfakjw2ee.execute-api.ap-south-1.amazonaws.com/dev/subscribe-to-newsletter" , {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify( { "email":email } )
    })
    alert("subscribed");
  }
  return (
    <div className="flex flex-wrap -mt-24 bg-primary h-fit sm:h-[250px] rounded-xl py-4 text-slate-100 max-w-7xl mx-auto px-4">
      <div className="flex-1 basis-[20rem]">
        <img
          src="/images/3d-house.png"
          alt=""
          className="w-[400px] lg:w-[500px] -mt-14"
        />
      </div>
      <div className="flex-1 basis-[16rem] md:basis-[30rem] mt-3 sm:mt-10">
        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-bold capitalize">
            subscribe to our newsletter
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,
            earum.
          </p>
        </div>
        <div className="mt-3">
          <div className="justify-center flex-align-center gap-x-2 sm:justify-start">
            <input
              type="text"
              className="px-4 py-1 border-none rounded-md outline-none text-stone-800"
              placeholder="Email address..."
              onChange={(e)=>setEmail(e.target.value)}
            />
            <button className="p-2 rounded-md btn-secondary cursor-pointer" onClick={(e)=>subscribe(e)}>
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
