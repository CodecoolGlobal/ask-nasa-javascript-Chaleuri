import {API_KEY} from "../configuration/config.js";

export const getPictureByDay = async (date) => {
    let url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`;
    try {
        return await fetch(url).then(r => r.json());
    }
    catch {
        throw new Error('An error occured when fetching data from API')
    }
}