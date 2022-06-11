module.exports = {
  format_date: date => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
      date
    ).getFullYear()}`;
  },
  format_url: url => {
    return url
      .replace('http://', '')
      .replace('https://', '')
      .replace('www.', '')
      .split('/')[0]
      .split('?')[0];
  },
  format_plural: (word, amount) => {
    if (amount !== 1) {
      return `${word}s`;
    }

    return word;
  },
  format_time: date => {

      const newDate = new Date(date);
      // console.log(date.toLocaleString())
      return newDate.toLocaleString();

    // let hour = new Date(date).getHours();
    // let pm = false;
    // if (hour >= 12) {
    //   hour = hour - 12
    //   pm = true;
    // };

    // if(pm) {
    //   return `${hour}:${new Date(date).getMinutes()}pm`;
    // } else {
    //   return `${hour}:${new Date(date).getMinutes()}am`;
    // }
    
  }
  
};
