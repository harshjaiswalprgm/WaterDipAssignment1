import csvtojson from 'csvtojson';

export async function getData() {
  const response = await fetch('/hotel_bookings_1000.csv');
  const csvText = await response.text();
  const jsonData = await csvtojson().fromString(csvText);
  return jsonData;
}
