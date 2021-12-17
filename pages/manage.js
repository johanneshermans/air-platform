import NavBar from '../components/NavBar';
import styles from '../styles/Manage.module.css';
import Link from 'next/link'



export async function getStaticProps() {
    const allPostsData = await fetch(`https://dev4-personal-blog-backend.herokuapp.com/songs`)
    const posts = await allPostsData.json()
    console.log(posts);
    return {
        props:
        {
            data: posts
        }
    }
}

export default function Manage({ data }) {
    console.log(data)

    return (
        <>
            <NavBar />
            <section className={styles.section}>
                <h2 className={styles.h2}>Manage</h2>
                <div className={styles.flex}>
                    {data.map((song) => (
                        <Link key={song.id} href={`/detail/${song.target}`}>
                            <div className={styles.container}>
                                <div className={styles.textContainer}>
                                    <h3>{song.title}</h3>
                                    <p>{song.artist}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>

    )

}
