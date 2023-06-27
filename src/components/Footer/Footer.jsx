import Link from "../../elements/Link";

function Footer() {
    return (
        <footer id="footer">
            <div className="max-w-screen-xl m-auto p-4 pt-16 flex items-center justify-between flex-col sm:flex-row">
                <div className="flex gap-4">
                    <Link href="https://jeremydiaz.netlify.app/" title="Creador" target="_blank" rel="noopener noreferrer">
                        Creador
                    </Link>
                    <Link href="https://github.com/jevmydev" title="Github" target="_blank" rel="noopener noreferrer">
                        Github
                    </Link>
                    <Link href="https://www.linkedin.com/in/jevmydev/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </Link>
                </div>
                <div>
                    <p className="flex gap-1">
                        Datos extraídos de
                        <Link href="https://rawg.io/" title="rawg.io" target="_blank" rel="noopener noreferrer">
                            rawg.io
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
