import NavBar from '../../components/NavBar';
import styles from '../../styles/Detail.module.css';


export default function Detail({ data, notFound }) {
    console.log(data);
    return (
        <>
            <NavBar />
            <article className={styles.article}>
                <section className={styles.head}>
                    <h2 className={styles.title}>{data.title}</h2>
                    <p className={styles.artist}>{data.artist}</p>
                </section>

                <section>
                    <div className={styles.flex}>
                        <div className={styles.leftScreen}>
                            <h3 className={styles.h3}>Left screen</h3>
                            {data.screen_left.content_type === "video" &&
                                <video className={styles.video} autoPlay muted controls >
                                    <source src={data.screen_left.video_link} />
                                </video>}

                            {data.screen_left.content_type === "info" &&
                                <p>{data.screen_left.info}</p>}
                        </div>
                        <div className={styles.videoClip}>
                            <h3 className={styles.h3}>Videoclip</h3>
                            <video className={styles.video} autoPlay muted controls >
                                <source src={data.videoclip_link} />
                            </video>
                        </div>
                        <div className={styles.rightScreen}>
                            <h3 className={styles.h3}>Right screen</h3>
                            {data.screen_right.content_type === "video" &&
                                <video className={styles.video} autoPlay muted controls >
                                    <source src={data.screen_right.video_link} />
                                </video>}

                            {data.screen_right.content_type === "info" &&
                                <p className={styles.expText}>{data.screen_right.info}</p>}
                        </div>
                    </div>
                </section>
            </article>

            
        </>

    )
}


export const getStaticProps = async ({ params }) => {
    console.log(params.slug)
    const r = await fetch(
        `https://dev4-personal-blog-backend.herokuapp.com/songs/?target=${params.slug}`
    );
    const data = await r.json();
    const first = data[0];

    if (!data) {
        return {
            notFound: true,
        }
    }
    return {
        props: {
            data: first,
        },
        revalidate: 1,
    };
};

export const getStaticPaths = async () => {
    const r = await fetch(
        `https://dev4-personal-blog-backend.herokuapp.com/songs`
    );
    const data = await r.json();
    console.log(data);

    return {
        paths: data.map((song) => ({
            params: {
                slug: song.target,
            },
        })),
        fallback: true,
    };
};