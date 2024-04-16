import React from 'react';
import Personagens from './personagens.json';
import './App.css';
import { motion } from "framer-motion";
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import DetalhesPersonagem from './DetalhesPersonagem'; // Importe o componente PersonagemDetalhes

function App() {
  return (
    
      <div>
        <h1 className="flex justify-center mt-10 text-white text-3xl font-mono">Personagens Black Clover</h1>
        <div className="flex flex-wrap justify-center">
          {Personagens.map(personagem => (
            <Link key={personagem.name} to={`/personagem`}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 70
                }}
                whileHover={{ scale: 1.2 }}
                className="shadow-md p-6 mb-6 m-5 text-black bg-white w-[240px] h-[300px] rounded-3xl"
              >
                <h1 className="flex font-bold justify-center">{personagem.name}</h1>
                <div className="mt-[15px]">
                  <p className="font-semibold">Caracteristicas: </p>
                  <p className="font-medium">Age: {personagem.age}</p>
                  <p className="font-medium italic">Quote: "{personagem.quote}"</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        
        
      </div>
    
  );
}

export default App;
