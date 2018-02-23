module.exports = function getZerosCount(number, base) {
  // your implementation
  let arrZerosCount = [];
  let simpleMult = base;
  let objSimpleMult = {};
  for (let i = 2; i <= simpleMult; i++) {
    if (simpleMult % i === 0) {
      if (objSimpleMult[i]) objSimpleMult[i]++;
      else objSimpleMult[i] = 1;
      simpleMult = simpleMult / i;
      i--;
    }
  }

  for (let mult in objSimpleMult) {
    let zerosCount = 0;
    for (let i = +mult; ; i = i * mult) {    
      if (Math.floor(number / i) === 0) break;
      zerosCount += Math.floor(number / i);
    }
    arrZerosCount.push(Math.floor(zerosCount / objSimpleMult[mult]));
  }
  
  return Math.min.apply(null, arrZerosCount);
}