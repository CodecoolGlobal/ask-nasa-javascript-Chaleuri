import { useContext, useEffect, useState } from "react";
import { getPictureByDay } from "../apiHandlers/nasaApiHandler.js";
import NasaContext from "../context.js";

const PictureOfTheDay = () => {
    const {date} = useContext(NasaContext);
    const [pictureData, setPictureData] = useState();

    useEffect(() => {
        getPictureByDay(date).then((data) => {
            setPictureData(data);
        })
    }, [date]);

    return (
        <div className={'picture-data-container'}>
            <div className={'picture-title-container'}>
                <h1>{pictureData['title']}</h1>
            </div>
            <div className={'picture-description-container'}>
                <h2>Explanation:</h2>
                <p className={"picture-description"}>{pictureData['explanation']}</p>
            </div>
            <div className={'picture-container'}>
                pictureData['media_type'] === 'image' ?
                    <img src={pictureData['url']} alt={'Picture of the currently selected day.'} style={{maxWidth: '50%'}}/>
                :
                    <iframe src={pictureData['url']} title={'Video of the currently selected day.'} style={{maxWidth: '50%'}}/>
            </div>
        </div>
    )
}

export default PictureOfTheDay;