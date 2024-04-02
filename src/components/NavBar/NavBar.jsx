import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
            <div className="topHead">
                <div className="headLogo">
                    <img src="/src/components/NavBar/assets/logoNexos.svg" alt="logo_site" />
                    <span>NexosWeb</span>
                </div>
                
                <CartWidget/>
            </div>
            
            <div className="categSel">
                <button>Categoria 1</button>
                <button>Categoria 2</button>
                <button>Categoria 3</button>
            </div>
        </nav>
    )
}

export default NavBar