import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
//Imports para la utilizacion de redux
import { store } from './redux/store'
import { Provider } from 'react-redux'//PROVAIIIDERRR SE IMPORTA DE react-redux !!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//Provaider es para decrile a la app de que le vamos a proveer un estado global y le indicamos por props cual va a ser su store
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store = {store}> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
