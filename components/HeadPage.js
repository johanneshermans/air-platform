import styles from '../styles/Home.module.css';
import logo from '../public/logo.svg'
import avicii from '../public/avicii.png'
import Image from 'next/image';
import NavBar from '../components/NavBar';

const HeadPage = () => {
    return (
        <>
            <section className={styles.header}>
                <Image alt='header logo' className={styles.logo} src={logo} width={500} height={500} layout='fill' />
            </section>
            <NavBar />
            <article>
                <section className={styles.content}>
                    <div className={styles.container}>
                        <h2 className={styles.title}>Relive Avicii like the old days</h2>
                        <a className={styles.button}>Discover</a>
                    </div>
                    <Image alt='header logo' className={styles.container_img} src={avicii} width={900} height={629} />
                </section>

                <section className={styles.content}>
                    <Image alt='header logo' className={styles.container_img} src={avicii} width={900} height={629} />
                    <div className={styles.container}>
                        <h2 className={styles.title}>Relive Avicii like the old days</h2>
                        <a className={styles.button}>Discover</a>
                    </div>
                </section>
            </article>
        </>

    )
}

export default HeadPage;