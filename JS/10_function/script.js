function makeBetweenFunc(min, max) {
  return function(num){
    return num >= min && num <= max;
  }
}

const isChild = makeBetweenFunc(0,18);

isChild(10);