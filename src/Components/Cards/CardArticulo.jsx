import React from "react";
import Links from "../Links/Links";
const CardArticulo = ({imagen,titulo,nombre,contenido}) =>{

    return(

    <div className="bg-[#FFFFFF] flex flex-col w-[100%] h-[100%] gap-[1.5rem] items-center drop-shadow-xl">
        <div className="w-[100%] h-[100%] ">
            <img src={imagen} alt="imagen" className="w-[100%] h-[200px] object-cover"/>
        </div> 

        <div className="flex flex-col justify-end gap-[1rem] w-[80%] pb-5">
            <span>{nombre}</span>
            
            <a href= "/" className="relative text-transparent bg-clip-text 
                    bg-gradient-to-r from-[#9C9BA1] to-[#9C9BA1] 
                    transition-all duration-300 
                    hover:from-[#2CB9CA] hover:via-[#57C785] hover:to-[#31D461]">
            <h3 className="text-[20px] whitespace-pre-line text-[#2E3049] hover:!text-transparent ">{titulo}</h3>
            </a>
            
            <Links href= "/">
            
            <p className="text-[14px] whitespace-pre-line">
                {contenido}
            </p>
            </Links>
        </div>
    
    </div>
    )
} 

export default CardArticulo;