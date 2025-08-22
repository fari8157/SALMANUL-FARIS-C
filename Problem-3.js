function modifiedOddSeries(value) {
  
  let count = (value % 2 === 0) ? value - 1 : value; 
  for (let i = 0; i < count; i++) {
    console.log(2 * i + 1);
  }
  
}

modifiedOddSeries(3)
