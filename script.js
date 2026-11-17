function lineTotal(days, firstDay, addDay) {
  if (days <= 0) {
    return 0;
  }
  return firstDay + addDay * (days - 1);
}

const rows = [
  { description: "Man", days: 3, firstDay: 950, addDay: 700 },
  { description: "Mileage", days: 1, firstDay: 180, addDay: 0 },
  { description: "Tools", days: 4, firstDay: 350, addDay: 250 },
  { description: "Pumps", days: 9, firstDay: 1050, addDay: 1050 },
];

console.log(rows.length);
console.log(rows[0].description);
console.log(rows[3].description);
console.log(lineTotal(rows[1].days, rows[1].firstDay, rows[1].addDay));