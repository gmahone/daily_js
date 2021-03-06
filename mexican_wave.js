// doesn't work
console.log("hello".split("").map((element, index, array) => {array.splice(index, 1, element.toUpperCase()); return(array.join(""));}))



// working solution
console.log("hello".split("").map((element, index, array) => array.map((el, ind) => index == ind ? el.toUpperCase() : el).join("")))



// solution that handles spaces " "
function wave(str){
  const result = str.split("").map((element, index, array) => element == " " ? " " : array.map((el, ind) => index == ind ? el.toUpperCase() : el).join("")).filter(a => a != " ");
  return(result);
}


// other solutions

// using regex and forEach
function wave(str){
    let result = [];
    str.split("").forEach((char, index) => {
        if (/[a-z]/.test(char)) {
            result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
        }
    });
    return result;
}


// arrow function that is succinct
var wave=w=>[...w].map((a,i)=>w.slice(0,i)+a.toUpperCase()+w.slice(i+1)).filter(a=>a!=w)


// loop based solution
function wave(str){
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    let copy = str.split('');
    if(copy[i] !== ' ') {
    copy[i] = copy[i].toUpperCase()
    newArr.push(copy.join(''))
    }
  }
  return newArr
}


// slice solution
const wave = str => 
  [...str].map((s, i) => 
      str.slice(0, i) + s.toUpperCase() + str.slice(i + 1) 
  ).filter(x => x != str);
