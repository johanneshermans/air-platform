import NavBar from '../../components/NavBar';
import styles from '../../styles/Detail.module.css';
import Image from 'next/image';
import vibes from '../../public/vibes.png';
import organic from '../../public/organic.png';
import stage from '../../public/stage.png';
import glossy from '../../public/glossy.jpg';
import lava from '../../public/lava.jpg';
import space from '../../public/space.jpg';
import metal from '../../public/metal.jpg';
import slime from '../../public/slime.jpg';
import muddy from '../../public/muddy.jpg';
import hardwood from '../../public/hardwood.jpg';
import spaced from '../../public/spaced.jpg';
import paper from '../../public/paper.jpg';     


export default function Detail({ data, notFound }) {
    console.log(data);

    if (data) {
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

                    <section className={styles.models}>
                        <div className={styles.box}>
                            <h3 className={styles.h3}>Model</h3>
                            <Image src={GiveImage(data.model.sort)} width={1537} height={984} alt="prop for model" />
                        </div>
                        <div className={styles.box}>
                            <h3 className={styles.h3}>Floor</h3>
                            <Image src={GiveImage(data.model.tex1)} width={900} height={900} alt="prop for model" />
                        </div>
                        <div className={styles.box}>
                            <h3 className={styles.h3}>Elemenet</h3>
                            <Image src={GiveImage(data.model.tex2)} width={900} height={900} alt="prop for model" />
                        </div>
                        <div className={styles.box}>
                            <h3 className={styles.h3}>Special</h3>
                            <Image src={GiveImage(data.model.tex3)} width={900} height={900} alt="prop for model" />
                        </div>
                    </section>
                </article>
            </>
        )
    }
    if (!data) {
        return (<p>lost data</p>)
    }
}

const GiveImage = (image) => {
    switch (image) {
        case "paper":
            return paper
            break;
        case "spaced":
            return spaced
            break;
        case "hardwood":
            return hardwood
            break;
        case "muddy":
            return muddy
            break;
        case "slime":
            return slime
            break;
        case "metal":
            return metal
            break;
        case "space":
            return space
            break;
        case "lava":
            return lava
            break;
        case "glossy":
            return glossy
            break;
        case "stage":
            return stage
            break;
        case "organic":
            return organic
            break;
        case "vibes":
            return vibes
            break;
        default:
    }
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
        fallback: false,
    };
};
