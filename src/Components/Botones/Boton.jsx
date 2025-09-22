import React from "react";

const Boton = ({text}) =>{


    return(
       <a style={{
                background: 'linear-gradient(35deg, rgba(44, 185, 202, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(49, 212, 97, 1) 100%)'
            }} className="h-[3rem] w-[10rem] text-center text-white flex justify-center items-center rounded-full  p-[1rem]" 
            href="/">
                
            {text}
            </a>
    )
}

export default Boton;