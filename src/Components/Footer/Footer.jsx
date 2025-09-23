
import Links from "../Links/Links";
const Footer = () =>{
    return(
        <footer className="bg-[#2D314E] text-white py-8">
            <div className="container mx-auto grid grid-cols-1  gap-8 px-[2rem]
            
            md:px-[12rem] md:grid-cols-3">
    
                {/* Logo + redes */}
                <div className="flex flex-col gap-9 items-start">
                <img src="/practica-react/images/logo-light.svg" alt="Digitalbank" className="h-6"/>
                <div className="flex gap-4">
                    {/* Redes */}
                    <img src="./images/icon-facebook.svg" alt="facebook"  />
                    <img src="./images/icon-youtube.svg" alt="youtube" />
                    <img src="./images/icon-twitter.svg" alt="twitter" />
                    <img src="./images/icon-pinterest.svg" alt="pinterest" />
                    <img src="./images/icon-instagram.svg" alt="instagram" />
                </div>
                </div>

                {/* Enlaces */}
                <div className="grid grid-cols-1 gap-8 
                md:grid-cols-2">
                <ul className="flex flex-col gap-2">
                    <li><Links href="#">About Us</Links></li>
                    <li><Links href="#">Contact</Links></li>
                    <li><Links href="#">Blog</Links></li>
                </ul>
                <ul className="flex flex-col gap-2">
                    <li><Links href="#">Careers</Links></li>
                    <li><Links href="#">Support</Links></li>
                    <li><Links href="#">Privacy Policy</Links></li>
                </ul>
                </div>

                {/* Botón */}
                <div className="flex flex-col gap-4 items-start md:items-end">
                <button className="bg-gradient-to-r from-[#2CB9CA] to-[#31D461] text-white px-6 py-2 rounded-full">
                    Request Invite
                </button>
                <span className="text-sm text-gray-400">© Digitalbank. All Rights Reserved</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;