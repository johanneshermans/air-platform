const uploadVideo = async (video, url) => {
    if (video !== 0) {
        const data = new FormData()
        data.append("file", video)
        data.append("upload_preset", "experience")
        data.append("cloud_name", "dd04ardpv")
        const response = await fetch("https://api.cloudinary.com/v1_1/dd04ardpv/video/upload", {
            method: "post",
            body: data
        })
        let videoInfo = await response.json()
        return videoInfo.url;
    } else if (url !== null) {
        return url
    } else {
        return null;
    }

}

export default uploadVideo;