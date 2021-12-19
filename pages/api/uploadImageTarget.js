const uploadImageTarget = async () => {
    const data = {
        "name": "wrecked",
        "width": 1,
        "image": "../../public/wrecked.jpg",
        "application_metadata": "496fbb6532b3863460a984de1d980bed5ebcd507"
    }

    const response = await fetch("https://vws.vuforia.com", {
        host: "vws.vuforia.com",
        method: "post",
        mode: 'no-cors',
        Authorization: `VWS { ${process.env.VUFORIA_SECRET_KEY} }:l7qdyozuknaxfpmaqspirlnmxrvdgtyftn4xlh0y7275utkdluet7`,
        body: data,
    })

    //const res = await response;
    console.log(await response);
}

export default uploadImageTarget;