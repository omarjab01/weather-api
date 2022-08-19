import './App.css';
import CityInfo from './Components/CityInfo';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import {apiKey} from './key'

function App() {

  const [cityName, setCityName] = useState('Milano')
  const [risultato, setRisultato] = useState({})

  const cercaCity = async () => {
    await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=it&appid=${apiKey}`).then((risposta) => {
      setRisultato(risposta.data)
    })
  }

  useEffect(() => {
    cercaCity();
  }, [])


  return (
    <div className="App max-w-lg mx-auto p-6 shadow-xl rounded-3xl mt-28 w-full place-items-center justify-center">
      <div className='flex flex-row justify-between gap-4'>
        <input type="text" placeholder='City' className='p-4 rounded-xl border w-full'
          onChange={(event) => setCityName(event.target.value)} value={cityName}
          />
        <button className='bg-black text-white px-4 py-2 rounded-xl' onClick={cercaCity} >Search</button>
      </div>
      <div className='mt-4'>
        <CityInfo 
          city={risultato}
        />
      </div>
    </div>
  );
}

export default App;
