function radianToDegree(radians)
{
  const pi = Math.PI;
  const rad = radians * (180/pi);
  return rad.toFixed(2);
}
          
let result = radianToDegree(10);
console.log(result);