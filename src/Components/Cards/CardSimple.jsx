import React from "react";
const CardSimple = ({imagen,titulo,contenido}) =>{

    return(

    <div className="flex flex-col w-auto h-[40%] gap-[1.5rem]">
        <div className="w-[28%] h-[auto]">
            <img src={imagen} alt="imagen" className="w-[100%] h-[100%]"/>
        </div> 
        <h2 className="text-[29px]">{titulo}</h2>

        <p className="text-[17px] whitespace-pre-line">
            {contenido}
        </p>
    
    </div>
    )
} 

export default CardSimple;