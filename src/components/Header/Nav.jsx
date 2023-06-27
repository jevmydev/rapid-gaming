import Link from "../../elements/Link";

function Nav() {
    return (
        <nav>
            <ul className="flex gap-4">
                <li>
                    <Link href="/#hero" title="Inicio">
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link href="/#trends" title="Tendencias">
                        Tendencias
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
