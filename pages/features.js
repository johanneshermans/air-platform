import NavBar from '../components/NavBar';
import styles from '../styles/Features.module.css';
import Image from 'next/image';
import experience from '../public/exp.png';
import clock from '../public/clock.png';
import custom from '../public/custom.png';
import interaction from '../public/interaction.png';



export default function Features() {


    return (
        <>
            <NavBar />
            <div className={styles.parent} >
                <div className={styles.div1}>
                    <div className={styles.clock}>
                        <Image alt='Avicii' className={styles.icon} src={clock} width={512} height={512} />
                    </div>
                    <h3 className={styles.title}>Super Fast System</h3>
                    <p className={styles.text}>AiR provides a fast cloud connection between the platform and the app.
                        You can se your experience in real-time </p>
                </div>

                <div className={styles.div2}>
                    <div className={styles.flex}>
                        <div className={styles.exp}>
                            <Image alt='Avicii' className={styles.icon} src={experience} width={512} height={512} />
                        </div>
                        <div>
                            <h3 className={styles.title}>Immersive Experience</h3>
                            <p className={styles.text}>AiR guarantees an immersive experience by working with additional screens and a 3D micro world. It is for creator of the music as well as the fans an immersive experience. </p>
                        </div>
                    </div>
                </div>

                <div className={styles.div3}>
                    <div className={styles.cust}>
                        <Image alt='Avicii' className={styles.icon} src={custom} width={512} height={512} />
                    </div>
                    <div>
                        <h3 className={styles.title}>Custom Control</h3>
                        <p className={styles.text}> With AiR, creators of music have full control over what content will be shown. The platform opens up options for them to modify their 3D world to fit the mood they want to project. </p>
                    </div>
                </div>

                <div className={styles.div4}>
                    <div className={styles.cust}>
                        <Image alt='Avicii' className={styles.icon} src={interaction} width={512} height={512} />
                    </div>
                    <div>
                        <h3 className={styles.title}>Magic Touch</h3>
                        <p className={styles.text}> With the AiR ball game, the user searches in and around the experience for balls that yield points. At so many points, the experience will celebrate.</p>
                    </div>
                </div>
            </div>
        </>
    )
}