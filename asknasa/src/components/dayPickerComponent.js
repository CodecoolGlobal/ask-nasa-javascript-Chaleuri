import { useContext, useState } from "react";
import NasaContext from "../context";
import DatePicker from 'react-datepicker';
import { convertDateToString } from '../helpers/dateConverter.js';

const DayPickerComponent = () => {
    const [dateValue, setDateValue] = useState(new Date(Date.now()));
    const { setDate } = useContext(NasaContext)

    return (
        <div>
            <p>Date:</p>
            <DatePicker
                maxDate={new Date(Date.now())}
                selected={dateValue}
                onChange={(value) => {
                    setDateValue(value);
                    setDate(convertDateToString(value));
                }}
                value={dateValue}
            />
        </div>
    )
}

export default DayPickerComponent;