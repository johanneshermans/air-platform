import uploadVideo from '../api/uploadVideo';
import React, { useState } from 'react';
import styles from '../../styles/Add.module.css';
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
import Image from 'next/image';
import NavBar from '../../components/NavBar';
import Router from 'next/router';

export default function Change({ data, notFound }) {
    console.log(data);
    const [headVideo, setHeadVideo] = useState("");
    const [leftVideo, setLeftVideo] = useState("");
    const [rightVideo, setRightVideo] = useState("");
    const oldVideoclip = data.videoclip_link;
    const oldLeftVideo = data.screen_left.video_link;
    const oldRightVideo = data.screen_right.video_link;
    const [leftField, setLeftField] = useState(data.screen_left.content_type);
    const [rightField, setRightField] = useState(data.screen_right.content_type);

    const handleSubmit = async (message) => {
        const response = await fetch(
            `https://dev4-personal-blog-backend.herokuapp.com/songs/${data.id}`,
            {
                method: "PUT",
                body: JSON.stringify(message),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        if (response.ok) {
            console.log(response);
            console.log("happy");
            Router.push(`/detail/${data.target}`)
        }
        if (!response.ok) {
            console.log("mistakes");
        }
    };

    const handleExp = async (e) => {
        e.preventDefault();
        const getHeadVideoLink = await uploadVideo(headVideo, oldVideoclip)
        const getLeftVideoLink = await uploadVideo(leftVideo, oldLeftVideo)
        const getRightVideoLink = await uploadVideo(rightVideo, oldRightVideo)
        console.log(getHeadVideoLink);
        const data = {
            title: e.target.title.value,
            artist: e.target.artist.value,
            videoclip_link: getHeadVideoLink,
            bpm: e.target.bpm.value,
            target: e.target.value,
            model: {
                sort: e.target.model.value,
                tex1: e.target.floor.value,
                tex2: e.target.element.value,
                tex3: e.target.special.value,
                color1: "#e66465",
                color2: "#e66465",
                color3: "#e66465"
            },
            screen_left: {
                content_type: e.target.screenLeft.value,
                video_link: getLeftVideoLink,
                info: e.target.screenLeftInfo.value
            },
            screen_right: {
                content_type: e.target.screenRight.value,
                video_link: getRightVideoLink,
                info: e.target.screenRightInfo.value
            }
        }
        e.target.reset();
        console.log(data);
        handleSubmit(data)
    }

    if (data) {
        return (
            <>
                <NavBar />
                <form onSubmit={(e) => handleExp(e)} className={styles.formChange}>
                    <h3 className={styles.h3}>General info</h3>
                    <label className={styles.labelText}>
                        <p>Title</p>
                        <input type="text" name="title" className={styles.inputText} defaultValue={data.title} required />
                    </label>
                    <label className={styles.labelText}>
                        <p>Artist</p>
                        <input type="text" name="artist" className={styles.inputText} defaultValue={data.artist} required />
                    </label>

                    <label htmlFor="file-upload" className={styles.submitButton}>
                        <p>Change videoclip</p>
                    </label>
                    <input className={styles.labelFile} id="file-upload" type="file" onChange={(e) => setHeadVideo(e.target.files[0])}></input>

                    <label className={styles.labelText}>
                        <p>Bpm</p>
                        <input type="text" name="bpm" className={styles.inputText} defaultValue={data.bpm} required />
                    </label>


                    <h3 className={styles.h3}>3D Model</h3>

                    <h4 className={styles.h4}>Type model</h4>
                    <div className={styles.flexChoice}>
                        {data.model.sort === "stage" ?
                            <input id="stage" value="stage" type="radio" name="model" className={styles.inputRadio} defaultChecked />
                            : <input id="stage" value="stage" type="radio" name="model" className={styles.inputRadio} />
                        }
                        <label className={styles.labelRadio} htmlFor="stage">
                            <Image src={stage} width={1271} height={793} alt="prop for model" />
                            <p className={styles.p}>Stage</p>
                        </label>

                        {data.model.sort === "organic" ?
                            <input id="organic" value="organic" type="radio" name="model" className={styles.inputRadio} defaultChecked />
                            : <input id="organic" value="organic" type="radio" name="model" className={styles.inputRadio} />
                        }
                        <label className={styles.labelRadio} htmlFor="organic">
                            <Image src={organic} width={1271} height={793} alt="prop for model" />
                            <p className={styles.p}>Organic</p>
                        </label>

                        {data.model.sort === "vibes" ?
                            <input id="vibes" value="vibes" type="radio" name="model" className={styles.inputRadio} defaultChecked />
                            : <input id="vibes" value="vibes" type="radio" name="model" className={styles.inputRadio} />
                        }
                        <label className={styles.labelRadio} htmlFor="vibes">
                            <div>
                                <Image src={vibes} width={1271} height={793} alt="prop for model" />
                                <p className={styles.p}>Vibes</p>
                            </div>
                        </label>
                    </div>



                    <h4 className={styles.h4}> Floor</h4>
                    <div className={styles.flexChoice}>
                        {data.model.tex1 === "hardwood" ?
                            <input id="hardwood" value="hardwood" type="radio" name="floor" className={styles.inputRadio} defaultChecked />
                            : <input id="hardwood" value="hardwood" type="radio" name="floor" className={styles.inputRadio} />
                        }
                        <label className={styles.labelRadio} htmlFor="hardwood">
                            <Image src={hardwood} width={900} height={900} alt="prop for model" />
                            <p className={styles.p}>Hardwood</p>
                        </label>

                        {data.model.tex1 === "spaced" ?
                            <input id="spaced" value="spaced" type="radio" name="floor" className={styles.inputRadio} defaultChecked />
                            : <input id="spaced" value="spaced" type="radio" name="floor" className={styles.inputRadio} />
                        }
                        <label className={styles.labelRadio} htmlFor="spaced">
                            <Image src={spaced} width={900} height={900} alt="prop for model" />
                            <p className={styles.p}>Rough</p>
                        </label>

                        {data.model.tex1 === "muddy" ?
                            <input id="muddy" value="muddy" type="radio" name="floor" className={styles.inputRadio} defaultChecked />
                            : <input id="muddy" value="muddy" type="radio" name="floor" className={styles.inputRadio} />
                        }
                        <label className={styles.labelRadio} htmlFor="muddy">
                            <Image src={muddy} width={900} height={900} alt="prop for model" />
                            <p className={styles.p}>Muddy</p>
                        </label>
                    </div>


                    <h4 className={styles.h4}>Element</h4>
                    <div className={styles.flexChoice}>
                        {data.model.tex2 === "paper" ?
                            <input id="paper" value="paper" type="radio" name="element" className={styles.inputRadio} defaultChecked />
                            : <input id="paper" value="paper" type="radio" name="element" className={styles.inputRadio} />
                        }
                        <label className={styles.labelRadio} htmlFor="paper">
                            <Image src={paper} width={900} height={900} alt="prop for model" />
                            <p className={styles.p}>Paper</p>
                        </label>

                        {data.model.tex2 === "metal" ?
                            <input id="metal" value="metal" type="radio" name="element" className={styles.inputRadio} defaultChecked />
                            : <input id="metal" value="metal" type="radio" name="element" className={styles.inputRadio} />
                        }
                        <label className={styles.labelRadio} htmlFor="metal">
                            <Image src={metal} width={900} height={900} alt="prop for model" />
                            <p className={styles.p}>Metal</p>
                        </label>

                        {data.model.tex2 === "space" ?
                            <input id="space" value="space" type="radio" name="element" className={styles.inputRadio} defaultChecked />
                            : <input id="space" value="space" type="radio" name="element" className={styles.inputRadio} />
                        }
                        <label className={styles.labelRadio} htmlFor="space">
                            <Image src={space} width={900} height={900} alt="prop for model" />
                            <p className={styles.p}>Space</p>
                        </label>

                    </div>


                    <h4 className={styles.h4}>Special</h4>
                    <div className={styles.flexChoice}>
                        {data.model.tex3 === "glossy" ?
                            <input id="glossy" value="glossy" type="radio" name="special" className={styles.inputRadio} defaultChecked />
                            : <input id="glossy" value="glossy" type="radio" name="special" className={styles.inputRadio} />
                        }
                        <label className={styles.labelRadio} htmlFor="glossy">
                            <Image src={glossy} width={900} height={900} alt="prop for model" />
                            <p className={styles.p}>Glossy</p>
                        </label>

                        {data.model.tex3 === "lava" ?
                            <input id="lava" value="lava" type="radio" name="special" className={styles.inputRadio} defaultChecked />
                            : <input id="lava" value="lava" type="radio" name="special" className={styles.inputRadio} />
                        }
                        <label className={styles.labelRadio} htmlFor="lava">
                            <Image src={lava} width={900} height={900} alt="prop for model" />
                            <p className={styles.p}>Lava</p>
                        </label>

                        {data.model.tex3 === "slime" ?
                            <input id="slime" value="slime" type="radio" name="special" className={styles.inputRadio} defaultChecked />
                            : <input id="slime" value="slime" type="radio" name="special" className={styles.inputRadio} />
                        }
                        <label className={styles.labelRadio} htmlFor="slime">
                            <Image src={slime} width={900} height={900} alt="prop for model" />
                            <p className={styles.p}>Slime</p>
                        </label>
                    </div>

                    <div>
                        <h3 className={styles.h3}>Screen Left</h3>
                        <div className={styles.flexChoice}>
                            {data.screen_left.content_type === "video" ?
                                <input id="videoLeft" value="video" type="radio" name="screenLeft" onChange={(e) => setLeftField("video")} className={styles.inputRadioMini} defaultChecked />
                                : <input id="videoLeft" value="video" type="radio" name="screenLeft" onChange={(e) => setLeftField("video")} className={styles.inputRadioMini} />

                            }
                            <label className={styles.labelRadioMini} htmlFor="videoLeft">
                                <p className={styles.p}>Video</p>
                            </label>

                            {data.screen_left.content_type === "info" ?
                                <input id="infoLeft" value="info" type="radio" name="screenLeft" onChange={(e) => setLeftField("info")} className={styles.inputRadioMini} defaultChecked />
                                : <input id="infoLeft" value="info" type="radio" name="screenLeft" onChange={(e) => setLeftField("info")} className={styles.inputRadioMini} />
                            }
                            <label className={styles.labelRadioMini} htmlFor="infoLeft">
                                <p className={styles.p}>Info</p>
                            </label>
                        </div>

                        {leftField === "video" &&
                            <>
                                <label htmlFor="file-upload" className={styles.submitButton}>
                                    <p>Upload left video</p>
                                </label>
                                <input className={styles.labelFile} id="file-upload" type="file" onChange={(e) => setLeftVideo(e.target.files[0])}></input>
                            </>

                        }

                        {leftField === "info" &&
                            <label className={styles.labelText}>
                                <p className={styles.p}> Tell a fact about the song</p>
                                <input type="text" name="screenLeftInfo" className={styles.inputText} defaultValue={data.screen_left.info} />
                            </label>

                        }
                    </div>

                    <div>
                        <h3 className={styles.h3}>Screen Right</h3>
                        <div className={styles.flexChoice}>
                            {data.screen_right.content_type === "video" ?
                                <input id="videoRight" value="video" type="radio" name="screenRight" onChange={(e) => setRightField("video")} className={styles.inputRadioMini} defaultChecked />
                                : <input id="videoRight" value="video" type="radio" name="screenRight" onChange={(e) => setRightField("video")} className={styles.inputRadioMini} />
                            }
                            <label className={styles.labelRadioMini} htmlFor="videoRight">
                                <p className={styles.p}>Video</p>
                            </label>

                            {data.screen_right.content_type === "info" ?
                                <input id="infoRight" value="info" type="radio" name="screenRight" onChange={(e) => setRightField("info")} className={styles.inputRadioMini} defaultChecked />
                                : <input id="infoRight" value="info" type="radio" name="screenRight" onChange={(e) => setRightField("info")} className={styles.inputRadioMini} />
                            }
                            <label className={styles.labelRadioMini} htmlFor="infoRight">
                                <p className={styles.p}>Info</p>
                            </label>
                        </div>

                        {rightField === "video" &&
                            <>
                                <label htmlFor="file-upload" className={styles.submitButton}>
                                    <p className={styles.p}>Upload right video</p>
                                </label>
                                <input className={styles.labelFile} id="file-upload" type="file" onChange={(e) => setRightVideo(e.target.files[0])}></input>
                            </>

                        }

                        {rightField === "info" &&

                            <label className={styles.labelText}>
                                <p>Tell a fact about the song</p>
                                <input type="text" name="screenRightInfo" className={styles.inputText} defaultValue={data.screen_right.info} />
                            </label>

                        }
                    </div>
                    <input type="text" name="target" className={styles.hidden} defaultValue={data.target} required />
                    <input type="submit" value="Change experience" className={styles.submitButton} />
                </form>
            </>

        )
    }
    if (!data) {
        return (<p>lost data</p>)
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