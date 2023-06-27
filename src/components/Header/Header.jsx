import { useEffect } from "react";

import FavIcon from "../../elements/FavIcon";
import Nav from "./Nav";

function Header() {
    useEffect(() => {
        const $header = document.getElementById("header");
        const toggleHeader = () => {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) $header.classList.add("backdrop-blur-md");
            else $header.classList.remove("backdrop-blur-md");
        };

        window.addEventListener("scroll", toggleHeader);
    }, []);

    return (
        <header className="absolute sm:fixed w-full z-20" id="header">
            <div className="max-w-screen-xl m-auto p-4 flex items-center justify-between relative z-20 flex-col sm:flex-row">
                <FavIcon />
                <Nav />
            </div>
        </header>
    );
}

export default Header;
