/* GENERAL TIPS

[...ABC] is called spread operator
< and > can compare strings (letters); A < B

*/


//Counting, Filtering Array
function stonePick(arr) {
    return Math.min(Math.floor(arr.filter(e=>e=="Cobblestone").length/3), (Math.floor(arr.filter(e=>e=="Sticks").length /2) + Math.floor(arr.filter(e=>e=="Wood").length*4/2)));
  }

console.log(stonePick(["Sticks", "Wool", "Dirt", "Diamond", "Stone", "Cobblestone", "Sticks", "Cobblestone", "Cobblestone"]))
// ============================================================================================================================

function convert(s){
    //convert !!??? to a number
    //parseInt converts string to number, ignoring whitespace
    const regex = /(?:!+|\?+)/g;
    let n = parseInt(s.match(regex).map(s => s.length).join('')) // this line does all of the following  
    // const matches = s.match(regex);
    // const numbers = matches.map((match) => { return match.length })
    // let n = Number(numbers.join(''))    
  
  //find the smallest divisor
    const smallestDivisor = n => {
      for(let i = 2; i <= Math.sqrt(n); i++) 
        if ( !(n % i) ) return n/i;
        return n;
    }
// divide by the smallest divisor until reaching a prime number
    let d = smallestDivisor(n)
    console.log(`Smallest Divisor ${d}`)
    while (d != n) {
      n = d
      d = smallestDivisor(d)
      }
    return n
  }

  console.log(convert("!!!!!!!???????"))
// ============================================================================================================================
