import React, {useEffect, useState} from 'react';
import Personagens from './personagens.json';
import './App.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import axios from 'axios'
import api from './api/personagens';

function App() {

  interface Character {
    id: number;
    name: string;
    age: number;
    quote: string;
    personality: string
  }

  const [data, setData] = useState('')
  const [personages, setPersonagens] = useState<Character[]>([]); // Specify the type as Character[]

  useEffect(() => {
    const fetchPersonagens = async () => {
      try {
        const response = await api.get('/');
        
        setPersonagens(response.data);
      } catch (err) {
        if (err.response) {
          // Not in the 200 response range
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
        } else {
          console.log(`Error: ${err.message}`);
        }
        
      }
    }

    fetchPersonagens()
  }, [])

  console.log(personages)

  


  return (
    
      <div>
        <div  >
          <p  className='text-white'>wasd</p>
          
        </div>
        
        <h1 className="flex justify-center mt-10 text-white text-3xl font-mono">Personagens Black Clover</h1>
        <div className="flex flex-wrap justify-center">
          {personages.map(personages => (
            <Link  to={`personagem/${personages.name}`}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 70
                }}
                whileHover={{ scale: 1.2 }}
                className="card shadow-md p-6 mb-6 m-5 text-black bg-white w-[240px] h-[300px] rounded-3xl"
              >
                <h1 className="flex font-bold justify-center">{personages.name}</h1>
                <div className="mt-[15px]">
                  <p className="font-semibold">Caracteristicas: </p>
                  <p className="font-medium">Age: {personages.age}</p>
                  <p className="font-medium italic">Quote: "{personages.quote}"</p>
                  <p className=' font-medium'>Personality: {personages.personality}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        
        
      </div>
    
  );
}

export default App;
