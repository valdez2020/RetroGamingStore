import { Header } from "./Header/Header.jsx";
import { Footer } from "./Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

export function Layout(){


    return(<div>
            <Header/>
                <main>
                    <Outlet />
                </main>
            <Footer/>        
          </div>)
    
}

export default Layout;