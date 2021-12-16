import styles from '../styles/Home.module.css';
import logo from '../public/logo.svg'
import Image from 'next/image';
import NavBar from '../components/NavBar';

const HeadPage = () => {
    return (
        <>
            <section className={styles.header}>
                <Image className={styles.logo} src={logo} width={500} height={500} layout='fill' />

            </section>
            <NavBar />
        </>

    )
}

export default HeadPage;