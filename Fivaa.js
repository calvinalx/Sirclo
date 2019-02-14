fivaa = (int) => {

  let iterator = int;
  let result = [];

  for (i = iterator; i > 0; i--) {
    for(j = 0; j < iterator + 2; j++) {
      (j > 1) ? result.push(iterator+1) : result.push(iterator-1);
    }

    iterator--;
    console.log(result.join(""));
    result = [];
  }
}

fivaa(5);
