import Link from 'next/link';
import styles from '../styles/Home.module.css';

const NavBar = () => {

    return (
        <nav className={styles.nav}>
            <Link href="/" >
                <a>Home</a>
            </Link>

            <Link href="/add" >
                <a>Add Experience</a>
            </Link>

            <Link href="/manage" >
                <a>Manage</a>
            </Link>

            <Link href="/discover" >
                <a>Discover</a>
            </Link>

        </nav>
    )
}

export default NavBar