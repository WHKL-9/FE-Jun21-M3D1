/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const sum_Triple = function (x,y){
    if (x===y){
        return (2*x)*3
    }
    else {
        return x+y
    }
}

//console.log(sum_Triple(3,3))

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

const check_fifty = function (x,y){
    if (x===50 || y===50 || x+y===50){
        return true
    }
    else{
        return false
    }
}

//console.log(check_fifty(50,50))

/*
3)'

COME BACK LATER

Create a function to remove a character at the specified position of a given string and return the new string.
*/

//using the splice method
// const removeChar = function (x,y){
//     x.remove
// }
// console.log(removeChar("Strive",2))

// let myName = "Weoy"

// console.log(myName[0])
/*

4)
 Create a function to find the largest of three given integers.
*/

const findLargest = (x,y,z) => {
    if (x>y && x>z){
        return x
    }else if (x>y && x>z){
        return y
    }
    else if (z>x && z>y){
        return z
    }
}

// console.log(findLargest(5,66,77))

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
const checkRange = function(x,y){
    if (x>=40 && y>=40 && x<=60 && y<=60){
        return "Yes, the numbers are in the range of 40 to 60"
    }else if (x>=70 && y>=70 && x<=100 && y<=100){
        return "Yes, the numbers are in the range of 70 to 100"
    } else{
        return "Nope, the number are not in the desired ranges"
    }
}

//console.log(checkRange(40,40))

/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/

/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
const checkCity = function(x){
    if(x[0]=="L" && x[1] =="o" && x[2] =="s"){
        return x
    } else if (x[0]=="N" && x[1] =="e" && x[2] =="w"){
        return x
    } else{
        return ""
    }
}

// console.log(checkCity("New York"))
// console.log(checkCity("Los Angeles"))
// console.log(checkCity("Neptune"))
// console.log(checkCity("Loptune"))
// console.log(checkCity("Los los los"))

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
const sumofThree = (x)=>{
    let sum = 0
    for (let i=0;i<x.length; i++){
        sum += x[i]
    }
    return sum
}

// let testArray = [55,66,77]
// console.log(sumofThree(testArray))
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

const containsOneOrThree = function(arrayOfIntegers){
    for (let i=0; i<arrayOfIntegers.length; i++){
        if (arrayOfIntegers[i] == 1 || arrayOfIntegers[i] == 3){
            return true
        } else {
            return false
        }
    }
}

// let testArray_9 = [2,4,5,6,6,8,8]
// console.log(containsOneOrThree(testArray_9))

/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/
const doesNotContainsOneOrThree = function(arrayOfIntegers){
    for (let i=0; i<arrayOfIntegers.length; i++){
        if (arrayOfIntegers[i] != 1 && arrayOfIntegers[i] != 3){
            return true
        } else {
            return false
        }
    }
}
// let testArray_9 = [2,4,5,6,6,8,8]
// console.log(doesNotContainsOneOrThree(testArray_9))

// 11)
// Come back later - no idea why it won't work
// Create a function to find the longest string from a given array of strings.
// const longestStringinArray = function(array){
//     let longestString = array[0]
//     for (let i=0; i<array.length; i++){
//         if (array[i+1].length > array[i].length){
//             longestString =  array[i+1]
//         }
//     }
//     return longestString
// }

// let testString_11 = ["What", "are", "you", "doing", "today"]
// console.log(longestStringinArray(testString_11))


// 12)

// Create a function to find the types of a given angle.

// Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     btuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.

const findTypeOfAngle = function(x){
    if (x>=0 && x<90){
        return "This is an acute angle."
    } else if (x==90){
        return "This is a right angle."
    } else if (x>90 && x<180){
        return "This is an obtuse angle."
    }else if(x==180){
        return "This is a straight angle"
    }else{
        return "Please enter a value between 0 and 180"
    }
}
// console.log(findTypeOfAngle(0))
// console.log(findTypeOfAngle(90))
// console.log(findTypeOfAngle(180))
// console.log(findTypeOfAngle(555))


// 13)

// Create a function to find the index of the greatest element of a given array of integers
const findMaxNumber = function(array){
    let maxNumber = array[0]
    for (let number =0; number <array.length ; number++){
        if(array[number+1]> array[number]){
            maxNumber = array[number+1]
        }
    }
    return maxNumber
}
// let testArray_13 = [11,16,189, 2017, 53, 6789]
// console.log(findMaxNumber(testArray_13))
// 14)

// Create a function to get the largest even number from an array of integers.
const findMaxEvenNumber = function(array){
    let maxNumber = array[0]
    for (let number =0; number <array.length ; number++){
        
        if(array[number+1]> array[number] && array[number+1] % 2==0){
            maxNumber = array[number+1]
        }
    }
    return maxNumber
}
// let testArray_13 = [11,16,189, 2017, 53, 6789]
// console.log(findMaxEvenNumber(testArray_13))
// 16)

// Create a function to check from two given integers, whether one is positive and another one is negative.
const checkSign = function(x,y){
    if ((x>0 && y<0) || (x<0 && y>0)){
        return "One number is positive and another number is negative"
    } else {
        return "Not (One number is positive and another number is negative)"
    }
}

// console.log(checkSign(99,-1))

// 17)

// Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
// const convertCase = (x) =>{
//     x = x.split("")
    
//     if (x.length >=3){
//         for (i=0;i<=2;i++){
//             x[i].toLowerCase()
//         }
//         for (i=3;i<x.length;i++){
//             x[i].toUpperCase();
//         }
//         x = x.join("")
//         return x
//     } else{
//         for (i=0;i<x.length;i++){
//             x[i].toUpperCase()
//         }
//         x = x.join("")
//         return x
//     }
// }
// console.log(convertCase("do"))
// console.log(convertCase("bitcoin"))


// word = word.join("")
// console.log(word)

// 18)

// Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
const specialSum = function(x,y){
    if ((x+y > 50)&&(x+y < 80)){
        return 65
    } else {
        return 80
    }
}

console.log(specialSum(25,30))

// 19)

// Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

const numberToString = function(x){
    if (x%3==0){
        return "Diego"
    }else if(x%5==0){
        return "Riccardo"
    }else if (x%7==0){
        return "Stefano"
    }else{
        return x
    }
}
// console.log(numberToString(99))
// console.log(numberToString(25))
// console.log(numberToString(49))
// console.log(numberToString(11))
// If the number has 3 as a factor, output 'Diego'.
// If the number has 5 as a factor, output 'Riccardo'.
// If the number has 7 as a factor, output 'Stefano'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28.
// this would be a simple "Stefano".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
// this would be a "DiegoRiccardo".
// 34 has four factors: 1, 2, 17, and 34.
// this would be "34".

// 20)
// Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

// */
