import { nanoid } from 'nanoid'
import uploadVideo from './api/uploadVideo';
import React, { useState } from 'react';
import styles from '../styles/Add.module.css';
import vibes from '../public/vibes.png';
import organic from '../public/organic.png';
import stage from '../public/stage.png';
import Image from 'next/image';
import NavBar from '../components/NavBar';


const Add = () => {
    const [headVideo, setHeadVideo] = useState("")
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
        }
        if (!response.ok) {
            console.log("mistakes");
        }
    };

    const handleExp = async (e) => {
        e.preventDefault();
        const generateTargetCode = nanoid();
        const getHeadVideoLink = await uploadVideo(headVideo)
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
                video_link: e.target.screenLeftVideo.value,
                info: e.target.screenLeftInfo.value
            },
            screen_right: {
                content_type: e.target.screenRight.value,
                video_link: e.target.screenRightVideo.value,
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
                <input className={styles.labelText} type="file" onChange={(e) => setHeadVideo(e.target.files[0])}></input>
                <label className={styles.labelText}>
                    <p>Bpm</p>
                    <input type="text" name="bpm" className={styles.inputText} required />
                </label>


                <h3 className={styles.h3}>3D Model</h3>

                <h4>Type model</h4>
                <div className={styles.flexChoice}>
                    <input id="stage" value="stage" type="radio" name="model" className={styles.inputRadio} />
                    <label className={styles.labelRadio} htmlFor="stage">
                        <Image src={stage} width={1271} height={793} />
                        <p>Stage</p>
                    </label>
                    
                    <input id="organic" value="organic" type="radio" name="model" className={styles.inputRadio} />
                    <label className={styles.labelRadio} htmlFor="organic">
                        <Image src={organic} width={1271} height={793} />
                        <p>Organic</p>

                    </label>

                    <input id="vibes" value="vibes" type="radio" name="model" className={styles.inputRadio} />
                    <label className={styles.labelRadio} htmlFor="vibes">
                        <div>
                            <Image src={vibes} width={1271} height={793} />
                            <p>Vibes</p>
                        </div>

                    </label>
                </div>



                <h4>Floor</h4>
                <label>
                    hardwood
                    <input id="hardwood" value="hardwood" type="radio" name="floor" />
                </label>
                <br />
                <label>
                    spaced
                    <input id="spaced" value="spaced" type="radio" name="floor" />
                </label>
                <br />
                <label>
                    muddy
                    <input id="muddy" value="muddy" type="radio" name="floor" />
                </label>


                <h4>Element</h4>
                <label>
                    paper
                    <input id="paper" value="paper" type="radio" name="element" />
                </label>
                <br />
                <label>
                    metal
                    <input id="metal" value="metal" type="radio" name="element" />
                </label>
                <br />
                <label>
                    space
                    <input id="space" value="sapce" type="radio" name="element" />
                </label>


                <h4>Special</h4>
                <label>
                    glossy
                    <input id="glossy" value="glossy" type="radio" name="special" />
                </label>
                <br />
                <label>
                    lava
                    <input id="lava" value="lava" type="radio" name="special" />
                </label>
                <br />
                <label>
                    slime
                    <input id="slime" value="slime" type="radio" name="special" />
                </label>

                {/*                 <h4>Colors</h4>
                <label>
                    Color 1
                    <input type="color" id="baba" name="color1" value="" />
                </label>
                <br />
                <label>
                    Color 2
                    <input type="color" id="color2" name="color2" value="#e66465" />
                </label>
                <br />
                <label>
                    Color 3
                    <input type="color" id="color3" name="color3" value="#e66465" />
                </label> */}

                <h3 className={styles.h3}>Screen Left</h3>
                <label>
                    video
                    <input id="video" value="video" type="radio" name="screenLeft" />
                </label>
                <br />
                <label>
                    info
                    <input id="info" value="info" type="radio" name="screenLeft" />
                </label>
                <br />
                <label>
                    Upload Video
                    <input type="text" name="screenLeftVideo" />
                </label>
                <br />
                <label>
                    info
                    <input type="text" name="screenLeftInfo" />
                </label>

                <h3>Screen Right</h3>
                <label>
                    video
                    <input id="video" value="video" type="radio" name="screenRight" />
                </label>
                <br />
                <label>
                    info
                    <input id="info" value="info" type="radio" name="screenRight" />
                </label>
                <br />
                <label>
                    Upload Video
                    <input type="text" name="screenRightVideo" />
                </label>
                <br />
                <label>
                    info
                    <input type="text" name="screenRightInfo" />
                </label>
                <br />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}

export default Add;