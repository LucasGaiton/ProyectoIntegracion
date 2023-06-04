export default function validation({email,password}){
    let error = {
        email:"",
        password:""
    }
    //Validaciones de email: 
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!email){
        error.email = "El email no puede estar vacio"
    } 
    if(!regexEmail.test(email)){
        error.email = "El email debe ser un email"
    } 
    if(email.length > 35){
        error.email = "El email no puede tener mas de 35 caracteres"
    } 
    
    //Valdaciones de constraseña 
    const regexContentNum = /\d/
    if(!regexContentNum.test(password)){
        error.password = "La contraseña debe tener al menos un numero" 
    } 
    if(password.length < 6 || password.length > 10){
        error.password = "La contraseña debe tener emtre 6 y 10 caracteres" 
    } 
    
    //Si no entra en ninguno de los ifs significa que no hay error y 
    //returnamos un error vacio
    return error

    
}