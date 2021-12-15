import Link from 'next/link';

const NavBar = () => {

    return (
        <nav>
            <Link href="/" >
                <a>Home</a>
            </Link>

            <Link href="/add" >
                <a>Flights</a>
            </Link>

        </nav>
    )
}

export default NavBar