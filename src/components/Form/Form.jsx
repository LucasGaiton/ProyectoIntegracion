import Style from "./Form.module.css"
import { useState } from "react"
import validation from "./validation"
import { useEffect } from "react"
export function Form({login}){
    //Estados locales 
    const [userData, setUserdata] = useState(
        {
            email:"",
            password:""
        }
    )
    const [errors, setErrors] = useState({})
    
    //Handlers
    const handleChange = (event)=>{
        console.log(event.target.value);
        //Aca vamos a setear los errores para eso primero vamos a pasarlo por un fultro "validation"
        console.log(validation({...userData,[event.target.name]: event.target.value}));
        setErrors(validation({...userData,[event.target.name]: event.target.value}))
        //Aca cargamos el value del input al estado local correspondiente
        setUserdata({...userData,[event.target.name]: event.target.value})




    }
    const handleSubmit = (event)=>{
        event.preventDefault()
        login(userData)


    }



    return(
        <div className={Style.contenedor}>
            <form onSubmit={handleSubmit} className={Style.forma}>
                <div className={Style.input}>
                    <label htmlFor="">Email:</label>
                    <input onChange={handleChange} value={userData.email} name="email" type="text" />
                </div>
                {errors.email && <p className={Style.errorMessage}>{errors.email}</p>}
                <div className={Style.input}>
                    <label htmlFor="">Password</label>
                    <input onChange={handleChange} value={userData.password} name="password" type="password" />
                </div>
                {errors.password && <p className={Style.errorMessage}>{errors.password}</p>}
                
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};
