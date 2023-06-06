
//Import generales
import './App.css';
import axios from "axios"

//Hooks
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";

//Views
import Home from './views/home';
import Landing from "./views/Landing";
import About from "./views/about";
import Datail from "./views/Datail";
import Favorites from './views/Favorites'

//Componentes
import Nav from "./components/Nav/Nav"


function App() {
   //Estados locales
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false)

   //UseEffect
   useEffect(() => {
      //Cuando se monte el app vamos a preguntar por access
      !access && navigate('/');
   }, [access]);


   const location = useLocation()
   const navigate = useNavigate()


   //Funciones 
   async function onSearch(id) {
      //Comprobamos que no este duplicado
      const isDuplicate = characters.some((char) => char.id === +id) //IMPORTANTE PARECEAR EL ID QUE VIENE POR INPUT

      if (!isDuplicate) {
         try {
            const { data } = await axios(`https://rickandmortyapi.com/api/character/${id}`)
            if (data.name)
               setCharacters((oldChars) => [...oldChars, data]);
         } catch (error) {
            if (/404/.test(error.message)) {
               window.alert('¡No hay personajes con este ID!');
               console.log(error.message);

            }

         }
      }
   }
   function oneClose(id) {
      if (characters.length != 1)
         setCharacters(characters.filter(element => element.id != id))
      else
         setCharacters([])
   }
   async function login({ email, password }) {
      const URL = 'http://localhost:3001/rickandmorty/login/';
      try {
         const { data } = await axios(URL + `?email=${email}&password=${password}`)

         const { access } = data;
         console.log(data);
         setAccess(true);
         navigate('/home');
      }
      catch (error) {
         console.log(error.message)
      }

   }
   function logOut() {
      setAccess(false)
   }

   return (
      <div className='App'>
         {location.pathname !== '/' && <Nav onSearch={onSearch} logOut={logOut} />}
         <Routes>
            <Route path="/" element={<Landing login={login} />}></Route>
            <Route path="/home" element={<Home onClose={oneClose} characters={characters} />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="detail/:id" element={<Datail />}></Route>
            <Route path="favorites" element={<Favorites />}></Route>


         </Routes>
         {/* <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={oneClose} /> */}
      </div>
   );
}

export default App;
