import Boton from "../../Components/Botones/Boton";

const Hero = () =>{

    return(
        <main className="h-screen w-auto flex flex-col-reverse bg-[#FAFAFA]  md:flex-row ">
            <div className="w-[100%] flex flex-col items-center content-center gap-[3rem] justify-center">

               <h1 className="text-[50px] text-[#2E3049]">Next generation <span className="block"></span> 
               digital banking</h1> 
               <p className="">
                    Take your financial life online. Your Digitalbank <span className="block"></span> account will be a one-stop-shop for spending, saving, <span className="block"></span> budgeting, investing, and much more.
               </p>
                <Boton 
                    text="Request Invite"
                    className="text-white"
                 />

            </div>
            {/* imagen de fondo y celulares */}
            <div className="relative h-[100%] w-full
            bg-[url(../public/images/bg-intro-mobile.svg)] bg-no-repeat  bg-position-[left_bottom_-7rem] bg-[length:100%]

            md:bg-[url(../public/images/bg-intro-desktop.svg)] md:bg-no-repeat  md:bg-position-[left_bottom_-5rem] md:bg-[length:176%] md:h-screen
            ">
                
                <div className="absolute -top-40 right-0 w-[100%] h-[164%] flex justify-center content-center drop-shadow-xl
                
                md:-top-35 md:-right-33 md:h-[137%]">
                    <img  src="/practica-react/images/image-mockups.png" alt="img"
                    className="w-[100%] h-[100%]" />            
                </div>
                {/* <div className="h-screen w-full bg-[url(../public/images/image-mockups.png)] bg-no-repeat bg-cover bg-position-[center_bottom_10px]">

                </div> */}
        
            </div>
        </main>
    )
}

export default Hero;