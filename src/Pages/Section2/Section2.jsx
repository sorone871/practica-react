import CardArticulo from "../../Components/Cards/CardArticulo";

const Section2 = () =>{

    return(
        <section className="flex flex-col   w-auto bg-[#FAFAFA] p-8
        
        md:px-[12rem] justify-center gap-[2rem] md:h-screen ">
            <div>

                <h1 className="text-[40px]">Latest Articles</h1>
            </div>
            <div className="flex flex-col gap-[1.5rem]
            
            md:flex-row">

            {/* Cards */}
            <CardArticulo
            imagen={"/practica-react/images/image-currency.jpg"}    
            nombre={"By Claire Robinson"}
            titulo="Receive money in any
                    currency with no fees"
            contenido={`The world is getting smaller and 
                we’re becoming more mobile. So 
                why should you be forced to only 
                receive money in a single …`}
            />
            <CardArticulo
            imagen={"/practica-react/images/image-restaurant.jpg"}    
            nombre={"By Claire Robinson"}
            titulo="Treat yourself without worrying about money"
            contenido={`Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...`}
            />
            <CardArticulo
            imagen={"/practica-react/images/image-plane.jpg"}    
            nombre={"By Claire Robinson"}
            titulo="Take your Digitalbank card wherever you go"
            contenido={`We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even ...`}
            />
            <CardArticulo
            imagen={"/practica-react/images/image-confetti.jpg"}    
            nombre={"By Claire Robinson"}
            titulo="Our invite-only Beta accounts are now live!"
            contenido={`After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through ...`}
            />
            </div>
        </section>
    )
}

export default Section2;