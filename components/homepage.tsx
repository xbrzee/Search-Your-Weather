'use client'
import {useState} from 'react'
import React from 'react'

function HomePage() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState("");

const getWeather = async()=>{

  setError("");

  const response = await fetch(`/api/weather?city=${city}`)
  const data = await response.json();

  if(response.ok){
 setWeather(data);
 setError("")
  }
  else{
    setWeather(null);
    setError(data.error||"City not found ! Please Try Again !!");
  }
 
}

  return (
    <>
    {error && (
      <div className="flex justify-center p-20">
        <p className="font-bold text transition duration-300 hover:scale-110 cursor-pointer">{error}</p>
      </div>
    )}
    <div className='flex flex-col items-center justify-center gap-12'>
    <div className='flex justify-center items-center gap-8'>
        <input value={city||""} onChange={(e)=>setCity(e.target.value)} type="text" className='border-2 border-black text-4xl rounded-full p-4 ' />
        <button onClick={getWeather} className="text-4xl border-3 border-black rounded-full p-4 bg-green-500 cursor-pointer">Submit</button>
    </div>
{weather && (
    <div className='text-center flex-col items-center'>
                <h2 className='text-6xl font-bold'>{weather.name}</h2>
                <p className='text-8xl'>{Math.round(weather.main.temp)}°C</p>
                <p className='text-2xl text-gray-600'>{weather.weather[0].description}</p>
            </div>
            
)}
  </div>
    </>
  )
}

export default HomePage