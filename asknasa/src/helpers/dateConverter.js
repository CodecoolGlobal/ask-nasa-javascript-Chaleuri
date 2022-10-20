export const convertDateToString = (inputDate) => {
    let date = new Date(inputDate);
    let year = '' + date.getFullYear();
    let month = '' + date.getMonth();
    let day = '' + date.getDay();

    if (month.length < 2) {
        month = '-0' + month;
    } else {
        month = '-' + month;
    }

    if (day.length < 2) {
        day = '-0' + day;
    } else {
        day = '-' + day;
    }

    return [year, month, day].join('');
}