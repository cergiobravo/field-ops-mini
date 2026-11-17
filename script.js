console.log("Field Ops Mini is running");

const firstDay = 950;
const addDay = 700;
const days = 3;

const lineTotal = firstDay + addDay * (days - 1);

console.log(lineTotal);

const mileageFirstDay = 180;
const mileageAddDay = 0;
const mileageDays = 1;

const mileageTotal = mileageFirstDay + mileageAddDay * (mileageDays - 1);

console.log(mileageTotal);

const sheetTotal = lineTotal + mileageTotal;

console.log(sheetTotal);