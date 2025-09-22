
const Links = ({href,children}) =>{
    return(
        <a 
            href={href}
            className="relative text-transparent bg-clip-text 
                    bg-gradient-to-r from-[#9C9BA1] to-[#9C9BA1] 
                    transition-all duration-300 
                    hover:from-[#2CB9CA] hover:via-[#57C785] hover:to-[#31D461]"
        >
            {children}
        </a>
    )
}

export default Links;