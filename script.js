function lineTotal(days, firstDay, addDay) {
    return firstDay + addDay * (days - 1);

} 

console.log(lineTotal(3, 950, 700));
console.log(lineTotal(1, 180, 0));
console.log(lineTotal(4, 350, 250));
console.log(lineTotal(9, 1050, 1050));
