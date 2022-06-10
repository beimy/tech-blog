const utcDate = '2022-06-10T19:14:52.000Z';

const dateConversion = async(utcDate) => {
  const date = new Date(utcDate);
  console.log(date.toLocaleString())
}

dateConversion(utcDate);