import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import miniLogo from '../public/miniLogo.png'

const NavBar = () => {

    return (
        <nav className={styles.nav}>
            <Link href="/" >
                <a>Home</a>
            </Link>

            <Link href="/add" >
                <a>Add Experience</a>
            </Link>
            <div className={styles.miniLogo}>
                <Image src={miniLogo} width={437} height={226}></Image>
            </div>
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