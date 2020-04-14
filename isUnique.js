//if sting is all unique characters
//what if I cannot use additionoal daata strcture

//solution1
// var allUniqueChars = function(string) {
//   for(let i = 0; i < string.length; i++){
//       for(let j=i+1; j < string.length; j++){
//           if(string[i] === string[j]){
//               return false
//           }
//       }
//   }
//   return true
// }

//solution2
var allUniqueChars = function(string) {
    // let splitString = string.split("")
    for(let i = 0; i < string.length; i++){
        let newArray = [...string]
        let word = newArray.slice(i,i+1)
        let leftword = newArray.slice(i+1)
        if(leftword.includes(word[0])){
            return false
        }
    }
    return true
  }

/* TESTS */
console.log(allUniqueChars('abcd'), 'true');
console.log(allUniqueChars('abccd'), 'false');
console.log(allUniqueChars('bhjjb'), 'false');
console.log(allUniqueChars('mdjq'), 'true');
