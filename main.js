/*Write a function `crossArray` that takes in 2 parameters, both arrays of numbers.
Return a result array that includes the number at index 0 in the first array,
then the number at index 0 in the second array, then the number at index 1
in the first array, then the number at index 1 in the 2nd array and so on.
Assume both arrays will be the same size and neither will be empty */

function crossArray(array1,array2){
    let result = []
    let i = 0
    while(i< array1.length){
        result.push(array1[i])
        result.push(array2[i])
        i++
    }
    return result
}
let newArray = [1,2,3,4,5,]
let newerArray = [6,7,8,9,10]
//console.log(crossArray(newArray,newerArray))

/*Write a function `foundCat` that takes in an array of strings.
If the word 'cat' is in the array, return true.  or else return false
you can assume all strings will be lower case. */
function foundCat(array){
    let cat = false
    for(const string of array){
        if (string === 'cat'){
            cat = true
    
        }
    }return cat
}
let catArray = ['dog','bird','cat']
let notCat = ['one','two','three']
//console.log(foundCat(catArray))
//console.log(foundCat(notCat))

/*Write a function `oddOnesOut` that takes in an array of numbers.
Return an array with the same numbers, but all 1's removed.*/
function oddOnesOut(array){
    let newArray = [];
    for(const num of array){
        if(array[num] !== 1){
            newArray.push(array[num])
        }
    }return newArray
}
let oddOnes = [1,0,2,3,4,1,5,6,7,1,9,7,8,1]
//console.log(oddOnesOut(oddOnes))

/*Write a function `stringSpace` that takes in a string and adds a space after each character
and returns the string*/
function stringSpace(string){
    let newString = ''
    for (const letter of string){
        newString += letter
        newString += " "
    }return newString
}
//console.log(stringSpace('hello'))

/*Write a function called `stringCompareCounter` that takes in 2 strings of the same length
as parameters.  return a count of how many characters the strings share at the same index.
```*/

function stringCompareCounter(string1,string2){
    let counter = 0;
    let letter1 = ''
    let letter2 = ''
    let count1 = 0
    let count2 = 0
    for (const lettera of string1){
        letter1 = lettera;
        count1 ++
        count2 = 0
        for (const letterb of string2){
            letter2 = letterb;
            count2 ++
            if(letter1 === letter2 && count1 === count2){
                counter ++
            }
        }

    }return counter
}
//console.log(stringCompareCounter('hello','hello'))
//console.log(stringCompareCounter('hello','none'))

/*Write a function called `duplicate` that takes in an array and returns true if the array 
contains at least 2 of the same item.*/
function duplicate(array){
    let element1 = [];
    let element2 = [];
    let counter1 = 0
    let counter2 = 0
    let duplicate = false;
    for(i=0; i<array.length; i++){
        element1 = array[i]
        counter1++
        counter2 = 0
        for(count=0; count < array.length; count++){
            element2 = array[count]
            counter2++
            if(element1 === element2 && counter1 !== counter2){
                duplicate = true;
            }
        }
    }return duplicate
}
let duplication = ['one','two','three','one',]
let duplication2 = ['one','two','three','four',]
//console.log(duplicate(duplication))
//console.log(duplicate(duplication2))

/*Write a function called `damageCalculator` that takes in 2 character objects. 
In this function, the first character parameter will attack the second character.
Your job is to calculate how much damage would be done by the first character to the second character and return the damage dealt.
A character object looks as follows:
To calculate the damage, you use the `atk` of the first charater and subtract the `def` of the second character.
If the damage result is 0 or less, return "NO DAMAGE!"
*/

function damageCalculator(object1,object2){
    let damageResult = 0;
     damageResult = object1.atk - object2.def;
     if(damageResult <= 0){
        console.log('NO DAMAGE');
     }else{
        return damageResult;
     }

}

let character1 = {
    name: 'Cloud',
    atk: 100,
    def: 90,
  }
  
  let character2 = {
    name: 'Sephiroth',
    atk: 150,
    def: 50,
  }

  //console.log(damageCalculator(character1,character2))