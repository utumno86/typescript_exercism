function isLeapYear( year: number) {
    if (year % 4 === 0 && year % 100 !== 0) {
        return true
    } else {
        return year % 400 === 0 ? true : false
    }
 }

 export default isLeapYear