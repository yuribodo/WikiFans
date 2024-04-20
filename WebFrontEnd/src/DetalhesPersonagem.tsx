import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {motion} from 'framer-motion'
import api from './api/personagens';


const DetalhesPersonagem = () => {

  interface Character {
    id: number;
    name: string;
    age: number;
    quote: string;
    personality: string
  }

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

  const params = useParams()
  const personagem= personages.find((personagem) => {
    return personagem.name === params.name
  })
  console.log(personagem)

  

  return (

    <div >
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{ overflow: "hidden" }}
      >
        <h1 className='text-white flex justify-center mt-10 text-6xl font-bold'> {personagem ? personagem.name : "No name available"}</h1>  
      </motion.div>
      

    <motion.div className='mt-10 '
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 2 }}
       
    >
      <p className='text-white text-2xl mb-6 '> Age: {personagem?.age} </p>
      <p className='text-white text-2xl italic mb-6'> Favorite Quote: {personagem?.quote}</p>
      <p className=' text-white text-2xl mb-6'>Personalidade: {personagem?.personality}</p>
    </motion.div>
      
    </div>
    
  )
}

export default DetalhesPersonagem