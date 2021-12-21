import { nanoid } from 'nanoid'
import uploadVideo from './api/uploadVideo';
import React, { useState } from 'react';
import styles from '../styles/Add.module.css';
import vibes from '../public/vibes.png';
import organic from '../public/organic.png';
import stage from '../public/stage.png';
import glossy from '../public/glossy.jpg';
import lava from '../public/lava.jpg';
import space from '../public/space.jpg';
import metal from '../public/metal.jpg';
import slime from '../public/slime.jpg';
import muddy from '../public/muddy.jpg';
import hardwood from '../public/hardwood.jpg';
import spaced from '../public/spaced.jpg';
import paper from '../public/paper.jpg';
import Image from 'next/image';
import NavBar from '../components/NavBar';
import Router from 'next/router';


const Add = () => {
    const [headVideo, setHeadVideo] = useState("");
    const [leftVideo, setLeftVideo] = useState("");
    const [rightVideo, setRightVideo] = useState("");
    const [leftField, setLeftField] = useState("");
    const [rightField, setRightField] = useState("");
    const handleSubmit = async (message) => {
        const response = await fetch(
            `https://dev4-personal-blog-backend.herokuapp.com/songs`,
            {
                method: "POST",
                body: JSON.stringify(message),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        if (response.ok) {
            console.log(response);
            console.log("happy");
            Router.push(`/detail/${message.target}`)
        }
        if (!response.ok) {
            console.log("mistakes");
        }
    };

    const handleExp = async (e) => {
        e.preventDefault();
        const generateTargetCode = nanoid();
        const getHeadVideoLink = await uploadVideo(headVideo, null)
        const getLeftVideoLink = await uploadVideo(leftVideo, null)
        const getRightVideoLink = await uploadVideo(rightVideo, null)
        console.log(getHeadVideoLink);
        const data = {
            title: e.target.title.value,
            artist: e.target.artist.value,
            videoclip_link: getHeadVideoLink,
            bpm: e.target.bpm.value,
            target: generateTargetCode,
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




    return (
        <div className={styles.flex}>
            <div className={styles.intro}>
                <NavBar />
                <h2 className={styles.h2}>Add Experience</h2>
            </div>





            <form onSubmit={(e) => handleExp(e)} className={styles.form}>
                <h3 className={styles.h3}>General info</h3>
                <label className={styles.labelText}>
                    <p>Title</p>
                    <input type="text" name="title" className={styles.inputText} required />
                </label>
                <label className={styles.labelText}>
                    <p>Artist</p>
                    <input type="text" name="artist" className={styles.inputText} required />
                </label>

                <label htmlFor="file-upload" className={styles.submitButton}>
                    <p>Upload videoclip</p>
                </label>
                <input className={styles.labelFile} id="file-upload" type="file" onChange={(e) => setHeadVideo(e.target.files[0])}></input>

                <label className={styles.labelText}>
                    <p>Bpm</p>
                    <input type="text" name="bpm" className={styles.inputText} required />
                </label>


                <h3 className={styles.h3}>3D Model</h3>

                <h4 className={styles.h4}>Type model</h4>
                <div className={styles.flexChoice}>
                    <input id="stage" value="stage" type="radio" name="model" className={styles.inputRadio} />
                    <label className={styles.labelRadio} htmlFor="stage">
                        <Image src={stage} width={1271} height={793} alt="prop for model" />
                        <p className={styles.p}>Stage</p>
                    </label>

                    <input id="organic" value="organic" type="radio" name="model" className={styles.inputRadio} />
                    <label className={styles.labelRadio} htmlFor="organic">
                        <Image src={organic} width={1271} height={793} alt="prop for model" />
                        <p className={styles.p}>Organic</p>
                    </label>

                    <input id="vibes" value="vibes" type="radio" name="model" className={styles.inputRadio} />
                    <label className={styles.labelRadio} htmlFor="vibes">
                        <div>
                            <Image src={vibes} width={1271} height={793} alt="prop for model" />
                            <p className={styles.p}>Vibes</p>
                        </div>

                    </label>
                </div>



                <h4 className={styles.h4}> Floor</h4>
                <div className={styles.flexChoice}>
                    <input id="hardwood" value="hardwood" type="radio" name="floor" className={styles.inputRadio} />
                    <label className={styles.labelRadio} htmlFor="hardwood">
                        <Image src={hardwood} width={900} height={900} alt="prop for model" />
                        <p className={styles.p}>Hardwood</p>
                    </label>

                    <input id="spaced" value="spaced" type="radio" name="floor" className={styles.inputRadio} />
                    <label className={styles.labelRadio} htmlFor="spaced">
                        <Image src={spaced} width={900} height={900} alt="prop for model" />
                        <p className={styles.p}>Rough</p>
                    </label>

                    <input id="muddy" value="muddy" type="radio" name="floor" className={styles.inputRadio} />
                    <label className={styles.labelRadio} htmlFor="muddy">
                        <Image src={muddy} width={900} height={900} alt="prop for model" />
                        <p className={styles.p}>Muddy</p>
                    </label>
                </div>


                <h4 className={styles.h4}>Element</h4>
                <div className={styles.flexChoice}>
                    <input id="paper" value="paper" type="radio" name="element" className={styles.inputRadio} />
                    <label className={styles.labelRadio} htmlFor="paper">
                        <Image src={paper} width={900} height={900} alt="prop for model" />
                        <p className={styles.p}>Paper</p>
                    </label>

                    <input id="metal" value="metal" type="radio" name="element" className={styles.inputRadio} />
                    <label className={styles.labelRadio} htmlFor="metal">
                        <Image src={metal} width={900} height={900} alt="prop for model" />
                        <p className={styles.p}>Metal</p>
                    </label>

                    <input id="space" value="space" type="radio" name="element" className={styles.inputRadio} />
                    <label className={styles.labelRadio} htmlFor="space">
                        <Image src={space} width={900} height={900} alt="prop for model" />
                        <p className={styles.p}>Space</p>
                    </label>
                </div>


                <h4 className={styles.h4}>Special</h4>
                <div className={styles.flexChoice}>
                    <input id="glossy" value="glossy" type="radio" name="special" className={styles.inputRadio} />
                    <label className={styles.labelRadio} htmlFor="glossy">
                        <Image src={glossy} width={900} height={900} alt="prop for model" />
                        <p className={styles.p}>Glossy</p>
                    </label>

                    <input id="lava" value="lava" type="radio" name="special" className={styles.inputRadio} />
                    <label className={styles.labelRadio} htmlFor="lava">
                        <Image src={lava} width={900} height={900} alt="prop for model" />
                        <p className={styles.p}>Lava</p>
                    </label>

                    <input id="slime" value="slime" type="radio" name="special" className={styles.inputRadio} />
                    <label className={styles.labelRadio} htmlFor="slime">
                        <Image src={slime} width={900} height={900} alt="prop for model" />
                        <p className={styles.p}>Slime</p>
                    </label>
                </div>

                <div>
                    <h3 className={styles.h3}>Screen Left</h3>
                    <div className={styles.flexChoice}>
                        <input id="videoLeft" value="video" type="radio" name="screenLeft" onChange={(e) => setLeftField("video")} className={styles.inputRadioMini} />
                        <label className={styles.labelRadioMini} htmlFor="videoLeft">
                            <p className={styles.p}>Video</p>
                        </label>

                        <input id="infoLeft" value="info" type="radio" name="screenLeft" onChange={(e) => setLeftField("info")} className={styles.inputRadioMini} />
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
                            <input type="text" name="screenLeftInfo" className={styles.inputText} />
                        </label>

                    }
                </div>

                <div>
                    <h3 className={styles.h3}>Screen Right</h3>
                    <div className={styles.flexChoice}>
                        <input id="videoRight" value="video" type="radio" name="screenRight" onChange={(e) => setRightField("video")} className={styles.inputRadioMini} />
                        <label className={styles.labelRadioMini} htmlFor="videoRight">
                            <p className={styles.p}>Video</p>
                        </label>

                        <input id="infoRight" value="info" type="radio" name="screenRight" onChange={(e) => setRightField("info")} className={styles.inputRadioMini} />
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
                            <input type="text" name="screenRightInfo" className={styles.inputText} />
                        </label>

                    }
                </div>

                <input type="submit" value="Send Experience" className={styles.submitButton} />
            </form>
        </div>
    )
}

export default Add;