import React from 'react'

const CityInfo = ({city}) => {
    console.log(city)
  return (
    <div className='p-4 border rounded-2xl'>
        <div className='flex flex-row items-center'>
            {
                city.weather ? <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}/> : <h1>icon</h1>
            }
            {/* <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}/> */}
            <h1 className='text-3xl font-semibold text-left'>{city?.name}</h1>
        </div>
        <div className='flex flex-row gap-6 items-center justify-between p-4'>
            <div>
                <h4 className='text-xl'>Temperatura</h4>
                <h3 className='rounded-xl my-2 bg-black text-white'>{city.main?.temp} °C</h3>
            </div>
            {/* <div>
                <h4>Percepiti</h4>
                <h3>{city.main?.feels_like} °C</h3>
            </div> */}
            <div>
                <h4 className='text-xl'>Temp. Max</h4>
                <h4 className='rounded-xl my-2 bg-black text-white'>{city.main?.temp_max} °C</h4>
            </div>
            <div>
                <h4 className='text-xl'>Temp. Min</h4>
                <h4 className='rounded-xl my-2 bg-black text-white'>{city.main?.temp_min} °C</h4>
            </div>
        </div>
    </div>
  )
}

export default CityInfo