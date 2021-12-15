const uploadVideo = async (video) => {
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
}

export default uploadVideo;