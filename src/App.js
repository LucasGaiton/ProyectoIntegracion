// import characters from './data.js';
/*import Card from './components/Card/Card';*/
// import SearchBar from './components/SearchBar/SearchBar.jsx';
import {useState} from "react";
import './App.css';
import Nav from "./components/Nav/Nav"
import axios from "axios"
import {Routes,Route} from 'react-router-dom'
import Home from './views/home';
import Landing from "./views/Landing";
import About from "./views/about";
import Datail from "./views/Datail";




function App(){
   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
   });
   }
   function oneClose(id){
         if(characters.length != 1)
            setCharacters(characters.filter(element => element.id != id))
         else
            setCharacters([])
      }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route path="/" element={<Landing/>}></Route>
            <Route path="/home" element={<Home onClose = {oneClose} characters ={characters} />}></Route>
            <Route path="about" element = {<About/>}></Route>
            <Route path="detail/:id" element = {<Datail/>}></Route>

         </Routes>
         {/* <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={oneClose} /> */}
      </div>
   );
}

export default App;
