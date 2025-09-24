import CardSimple from "../../Components/Cards/CardSimple";
import iconBudgeting from "/images/icon-budgeting.svg";
import iconApi from "/images/icon-api.svg";
const Section1 = () =>{

    return(
        <section className="bg-[#F4F5F7] w-auto flex flex-col pt-6 px-6
        
        md:bg-[#F4F5F7] md:h-screen w-auto flex flex-col md:px-[12rem]  ">
            {/* Div 1 */}
            <div className="flex flex-col gap-[3rem] items-center justify-center text-center
            
            md:h-[50%] md:content-center gap-[3rem] justify-center md:items-start md:text-justify">
                <h1 className="text-[40px]">Why choose Digitalbank?</h1>

                <p className="text-[#9C9BA1]">We leverage Open Banking to turn your bank account into your financial hub. <span className="block"></span> Control 
                your finances like never before.</p>
            </div >

            {/* Div 2 */}

            <div className="flex flex-col pt-8 items-center content-center justify-center
            
            
            md:w-[110%] md:h-[50%] md:flex-row  md:items-start md:content-center gap-[3rem] md:justify-start 
            ">
            
            <CardSimple 
                imagen={"https://media.githubusercontent.com/media/sorone871/practica-react/a6c0dcb12701006d59f056ed925afdb978abda83/dist/images/icon-online.svg"}    
                titulo="Online Banking"
                contenido={`Our modern web and mobile 
                applications allow you to keep
                track of your finances wherever
                you are in the world.`}
            />
            <CardSimple 
                imagen={"https://media.githubusercontent.com/media/sorone871/practica-react/3ec94940076d02cd21d54a5458472d23b88433cc/images/icon-budgeting.svg"}    
                titulo="Simple Budgeting"
                contenido={`See exactly where your money
                goes each month. Receive
                notifications when you’re close to 
                hitting your limits.`}
            />
            <CardSimple 
                imagen={"https://media.githubusercontent.com/media/sorone871/practica-react/a6c0dcb12701006d59f056ed925afdb978abda83/dist/images/icon-onboarding.svg"}    
                titulo="Fast Onboarding"
                contenido={`We don’t do branches. Open your 
                account in minutes online and start
                taking control of your finances
                right away.`}
            />
            <CardSimple 
                imagen={"https://media.githubusercontent.com/media/sorone871/practica-react/a6c0dcb12701006d59f056ed925afdb978abda83/dist/images/icon-api.svg"}    
                titulo="Open API"
                contenido={`Manage your savings, investments,
                pension, and much more from one
                account. Tracking  your money has
                never been easier.`}
            />
            </div>
        </section>
    )
}

export default Section1;