


export default function Detail({data, notFound}) {
    console.log(data);
    return (
        <p>test</p>
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