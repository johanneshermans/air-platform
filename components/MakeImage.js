import React from "react";
import ReactDOM from "react-dom";
import html2canvas from "html2canvas";
import jsPdf from "jspdf";
import styles from '../styles/Generate.module.css';


export default function MakeImage() {
    const printPDF = () => {
        const domElement = document.getElementById("root");
        html2canvas(domElement, {
            onclone: document => {
                document.getElementById("print").style.visibility = "hidden";
            }
        })
            .then(canvas => {
                var imgData = canvas.toDataURL("image/png");
                domElement.href = imgData;
                //console.log(imgData);
                //imgData = imgData.replace(/^data:image\/(png|jpg);base64,/, "")
/*                 const pdf = new jsPdf();
                pdf.addImage(imgData, "JPEG", 1000, 1000);
                pdf.save(`${new Date().toISOString()}.pdf`); */
            });
    };


    return (
        <>
            <div id="root">
                <div className={styles.container}>
                    <div className={styles.border}>
                        <div className={styles.flex}>
                            <p className={styles.code}>
                                000 <br />
                                000 <br />
                                003 <br />
                            </p>
                            <div className={styles.codeBox}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 534.82 523.43" className={styles.svg}>
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="Laag_1" data-name="Laag 1">
                                            <polygon className="cls-1" points="128.71 261.58 71.5 317.6 14.29 261.58 71.5 205.57 128.71 261.58" fill="#ffffff" />
                                            <path className="cls-2" d="M71.5,331.6,0,261.58l71.5-70,71.51,70Zm-42.91-70,42.91,42,42.92-42-42.92-42Z" fill="b30000" />
                                            <polygon className="cls-1" points="520.53 261.58 463.32 317.6 406.11 261.58 463.32 205.57 520.53 261.58" fill="#ffffff" />
                                            <path className="cls-2" d="M463.32,331.6l-71.5-70,71.5-70,71.5,70Zm-42.92-70,42.92,42,42.92-42-42.92-42Z" fill="b30000" />
                                            <polygon className="cls-1" points="324.89 70.02 267.68 126.03 210.47 70.02 267.68 14 324.89 70.02" fill="#ffffff" />
                                            <path className="cls-2" d="M267.68,140,196.17,70,267.68,0l71.5,70ZM224.76,70l42.92,42L310.6,70,267.68,28Z" fill="b30000" />
                                            <polygon className="cls-1" points="324.62 453.42 267.41 509.43 210.2 453.42 267.41 397.4 324.62 453.42" fill="#ffffff" />
                                            <path className="cls-2" d="M267.41,523.43l-71.5-70,71.5-70,71.51,70Zm-42.91-70,42.91,42,42.92-42-42.92-42Z" fill="b30000" />
                                            <polygon className="cls-1" points="403.21 47.88 267.32 180.94 131.79 48.23 49.42 128.89 184.95 261.59 49.44 394.28 131.81 474.94 267.32 342.25 403.19 475.29 485.56 394.63 349.69 261.59 485.58 128.54 403.21 47.88" fill="b30000" />
                                            <path className="cls-3" d="M403.19,496.28l-135.87-133L131.81,495.93,28,394.28,163.51,261.59,28,128.89,131.79,27.24l135.53,132.7,135.89-133L507,128.54l-135.89,133L507,394.63Zm-135.87-175L403.19,454.3l60.93-59.67-135.87-133,135.89-133L403.21,68.88,267.32,201.93,131.79,69.23,70.86,128.89l135.53,132.7L70.88,394.28l60.93,59.66Z" fill="#000000" />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <p className={styles.artist}>The Killers</p>
                        <p className={styles.title}> Losers</p>
                    </div>
                </div>
                <button id="print" onClick={printPDF}>
                    PRINT
                </button>
            </div>
        </>
    );
}

if (typeof window !== 'undefined') {
    const rootElement = document.getElementById("root");
    ReactDOM.render(<MakeImage />, rootElement);
}
