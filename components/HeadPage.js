import styles from '../styles/Home.module.css';
import logo from '../public/logo.svg'
import avicii from '../public/avicii.png'
import killers from '../public/killers.png'
import Image from 'next/image';
import NavBar from '../components/NavBar';
import Link from 'next/link';

const HeadPage = () => {
    return (
        <>
            <section className={styles.header}>
                <div className={styles.logo} >
                    <Image alt='header logo' src={logo} width={1000} height={1000} />
                </div>
            </section>
            <NavBar />

            <div className={styles.intro}>
                <q className={styles.quote}>Explore the video clips of tomorrow, today</q>
                <p>AiR gives users and creators of music an extra dimension in the experience of music. Additional screens appear , a 3D micro world comes to life. Interactive balls appear on the screen.</p>
            </div>

            <article>
                <section className={styles.content}>
                    <div className={styles.container}>
                        <h2 className={styles.title}>Remember Avicii, come together to enjoy</h2>
                        <Link href={`/detail/N9TT`}>
                            <a className={styles.buttonBlack}>Discover</a>
                        </Link>

                    </div>
                    <Image alt='Avicii' className={styles.container_img} src={avicii} width={900} height={629} />
                </section>

                <section className={styles.content}>
                    <Image alt='The killers' className={styles.container_img} src={killers} width={900} height={629} />
                    <div className={styles.container}>
                        <h2 className={styles.title}>Feel the emotions of Mr. Brightside</h2>
                        <Link href={`/detail/6QK3`}>
                            <a className={styles.buttonBlack}>Discover</a>
                        </Link>

                    </div>
                </section>
            </article>

            <div className={styles.blackBox}>
                <div className={styles.magicBox}>
                    <q className={styles.blackBoxQuote}>How we did it? Not with magic, but with a balanced system</q>
                    <Link href={`/features`}>
                        <a className={styles.buttonWhite}>Discover our features</a>
                    </Link>
                </div>

            </div>
        </>

    )
}

export default HeadPage;