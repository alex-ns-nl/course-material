//              Challenge 1
// const countTrue = (arr: boolean[]) => {
//     let valueTrue = 0;
//     for(let i=0; i < arr.length; i++){
//         console.log(`i = ${i}`);
//         if(arr[i]){
//             valueTrue++;
//         }
//     }
//     console.log(`number of TRUEs = ${valueTrue}`);
// }
//
// countTrue([true, false, true]);

//              Challenge 2
// find out whether bonus is possible
// bonus is possible when moves are between 1 & 6
// if bonus is possible, return true, else false
//
// const possibleBonus = (numberOne: number, numberTwo: number): boolean => {
//     let numberDifference = numberTwo - numberOne;
//     return numberDifference > 0 && numberDifference <= 6;
// }
//
// console.log(possibleBonus(3, 5));

//              Challenge 3
// const shiftToRight = (numberOne: number, numberTwo: number): number => {
//     return (numberOne / Math.pow(2, numberTwo));
// }
//
// console.log(shiftToRight(80,3));

//              Challenge 4
// return an array of string (only min 3 char)
// the array must include length, first char, last char, middle char(s), position of repeated character ("@ index #")
// documentation link: https://edabit.com/challenge/5bW3TmPnae2FNvusk

// const allAboutStrings = (x: string): string[] => {
//     let stringLength: number = x.length;
//     let stringFirstChar: string = x.charAt(0);
//     let stringLastChar: string = x.charAt(stringLength-1);
//     let middleChar = (): string => {
//         let char = (stringLength/2) - 1;
//         if ((stringLength % 2) === 0) {
//             return x.charAt(char) + x.charAt(char + 1);
//         }
//         else {
//             return x.charAt(Math.ceil(char));
//         }
//     }
//     let indexNr = (): string => {
//         let charTwo: string = x.charAt(1);
//         for (let i = 2; i <= stringLength; i++) {
//             let currentChar = x.charAt(i);
//             if (currentChar === charTwo) {
//                 return `@ index ${i}`;
//             }
//         }
//         return "not found";
//     }
//     return [String(stringLength), stringFirstChar, stringLastChar, middleChar(), indexNr()];
// }
// console.log(allAboutStrings("test"));

//              Challenge 5
// return the "non-nested" number of elements in an array
// documentation link = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

let getLength: any = (arrayItems: any) => {
    return arrayItems.flat(Infinity).length;
}
console.log(getLength([1, [2, 3]]));

//              Challenge 6
// return spotlight sum of numbers in array
// the result needs to be returned in the form of an array
// the spotlight sum is defined as the sum of all numbers surrounding and including the number in the array

let spotlightMap: any = (array: number) => {

    return array;
}