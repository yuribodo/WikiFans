import React from 'react'
import Personagens from './personagens.json';
import { useParams } from 'react-router-dom';
import {motion} from 'framer-motion'


const DetalhesPersonagem = () => {
  const params = useParams()
  const personagem= Personagens.find((personagem) => {
    return personagem.name === params.name
  })
  console.log(personagem)

  const personalityString = personagem?.personality?.join(', ');

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
      <p className=' text-white text-2xl mb-6'>Personalidade: {personalityString}</p>
    </motion.div>
      
    </div>
    
  )
}

export default DetalhesPersonagem