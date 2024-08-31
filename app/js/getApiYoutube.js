const getDataApi = (url) => {
    return fetch(url).then(response => response.json()).then(response => response)
}

export const getDataYoutube = async (url) => {
    const result = await getDataApi(url);
    document.querySelector('.title-channel').innerText = result.items[0].snippet.title;
    document.querySelector('.subscriber').innerText = result.items[0].statistics.subscriberCount;
    document.querySelector('.img-fluid').src = result.items[0].snippet.thumbnails.high.url;
}

export const getDataVideo = async (url) => {
    const result = await getDataApi(url);
    document.querySelector('.video').src = result.items[0].snippet.thumbnails.high.url; 
    document.querySelector('.title-video').innerText = result.items[0].snippet.title;
}
