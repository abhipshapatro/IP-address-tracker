import React, { useState } from 'react'

export default function InputBox() {

  //api key
  const key = `at_ubbYlhOhcnFV1FARMSj3xzMlkWmvY`;

  const [userInput, setuserInput] = useState(null);
  const [address, setAddress] = useState(null)
  // const [error, setError] = useState(null);

  const handleChange = (e) => {
    setuserInput(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=${key}&ipAddress=${userInput}`
    );
    const data = await response.json();
    console.log(data)
    const ipAddress = data;
    setAddress(ipAddress);

  }

  return (
    <div className="flex flex-col items-center justify-center my-10 ">
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <label htmlFor="user-input">
            <input onChange={handleChange} name="inputBox" className='cursor-pointer rounded-l-xl w-[15rem] md:w-[30rem] p-3' type="text" placeholder='Search for any IP address or domain' />
          </label>
          <div className="container flex items-center rounded-r-xl bg-veryDarkGray w-max p-4 cursor-pointer">
            <button>
              <img src="/images/icon-arrow.svg" alt="arrow btn" />
            </button>
          </div>
        </div>
      </form>


      {/* output box */}
      {address && (
        <div className="container flex flex-col md:flex-row w-fit md:w-full bg-white rounded-2xl shadow-veryDarkGray shadow-lg px-5 my-10 z-10">
          {/* IP ADDRESS */}
          <div className="container flex flex-col p-2  md:border-r-2 border-darkGray my-8 px-5">
            <h4 className="font-semibold text-darkGray text-sm">
              IP ADDRESS
            </h4>
            <h2 className="text-veryDarkGray font-medium text-lg">
              {address.ip}
            </h2>
          </div>
          {/* LOCATION */}
          <div className="container flex flex-col p-2 md:border-r-2 border-darkGray my-8 px-5">
            <h4 className="font-semibold text-darkGray text-sm">
              LOCATION
            </h4>
            <p className="text-veryDarkGray font-medium text-lg">
              {address.location.region}, {address.location.country}
            </p>
          </div>
          {/* TIME ZONE */}
          <div className="container flex flex-col p-2 md:border-r-2 border-darkGray my-8 px-5">
            <h4 className="font-semibold text-darkGray text-sm">
              TIME ZONE
            </h4>
            <p className="text-veryDarkGray font-medium text-lg">
              {address.location.timezone}
            </p>
          </div>
          {/* ISP */}
          <div className="container flex flex-col p-2 my-8 px-5">
            <h4 className="font-semibold text-darkGray text-sm">
              ISP
            </h4>
            <p className="text-veryDarkGray font-medium text-lg">
              {address.isp}
            </p>
          </div>
        </div>
      )}
    </div>

  )
}
