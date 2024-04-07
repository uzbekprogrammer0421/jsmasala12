// 1-savol 


// const search = function(nums) {
//     let massiv = [...nums]
//     let new_arr = []
//     let total = []
//     let index = 0
//     for (let i = 0; i < massiv.length; i++) {
//         if(!new_arr.includes(massiv[i])){
//             new_arr.push(massiv[i])
//         }
//         else {
//             total.push(massiv[i])
//         }
//     }
//     for (let g = 0; g < total.length; g++) {
//         index = new_arr.indexOf(total[g])
//         new_arr.splice(index,1)
//     }
//     console.log(new_arr);
// };
// search([4,1,2,1,2,9])


// 2-savol 


// const search = function(nums, target) {
//     let massiv = [...nums]
//     let result = false
//     for (let i = 0; i < massiv.length; i++) {
//         if(massiv[i] == target){
//             result = true
//         }
//     }
//     console.log(result);
// };
// search([2,5,6,0,0,1,2],0)


// 3-savol 


// const search = function(nums) {
//     let massiv = [...nums]
//     let new_arr = []
//     for (let i = 0; i < massiv.length; i++) {
//         if(!new_arr.includes(massiv[i])){
//             new_arr.push(massiv[i])
//         }
//     }
//     console.log(new_arr);
// };
// search([2,5,6,0,0,1,2])


// 4-task 


// birinchisi Shalow copy bunda hamma narsasi bir xil bo'ladi ya'ni adress valuesi bir xil bo'ladi shuning uchun bittasi o'zgarsa hammasasi o'zgaradi.
// let new_obj = obj
// new_obj.name = "Asilbek"
// console.log(obj);
// console.log(new_obj);
// ikkinchisi spread operation bunda adres o'zagaradi lekin object ichida yana object ochilsa ichki objectni adressi o'zgarmaydi shuning uchun ichki object o'zgarsa hammasida o'zgaradi 
// spread orqali

// let new_obj = {...obj}
// obj.name = "Ixlos"
// console.log(obj);
// console.log(new_obj);

// let obj = {name: "Asilbek", lang: {en: 'English'}}

// uchinchisi esa JSON orqali qanday qilsang ham valuelar o'zgarmaydi. 
// let new_obj = JSON.parse(JSON.stringify(obj))
// obj.lang.en = 'Russian'

// console.log(obj);
// console.log(new_obj);


// 5-task 


// const find_num = (params) => {
//   let random_number = parseInt(Math.random ()* 20)
//   let last_number = params[params.length - 1]
//   let result = random_number + last_number
//   let num1 = 5
//   let num2 = 6
//   let index = params.lastIndexOf(last_number)
//   if (result % 2 == 0) {
//     params.splice(index, 1, num1)
//   }else {
//     params.splice(index, 1, num2)
//   }
//   return params
// }
// console.log(find_num([4,6,22,55]));
// 6-task 


// const search = function(nums) {
//     let massiv = [...nums]
//     let new_arr = []
//     let new_massiv = []
//     for (let i = 0; i < massiv.length; i++) {
//         if(!new_arr.includes(massiv[i])){
//             new_arr.push(massiv[i])
//         }
//         else {
//             new_massiv.push(massiv[i])
//         }

//     }
//     let max_num = Math.max(...new_massiv)
//     let max_arr_num = Math.max(...massiv)
//     let result = Math.abs(max_arr_num - max_num)
//     console.log(result);
// };
// search([3,5,8,0,0,1,3])


// 7-task 


// let obj = {num1: 2, num2: 5, num3: 8}
// let obj2 = {num4: 3, num4: 7, num5: 9}
// let total = Object.assign(obj,obj2)
// let arr = []
// for (const value in total) {
//     arr.push(total[value])
// }
// let max_value = Math.max(...arr)
// let min_value = Math.min(...arr)
// let result = max_value ** min_value
// console.log(result);


// 8-task 


// let arr = [1,8,3,16,3,4,5]
// let total = 0
// let massiv = []
// for (let i = 0; i < arr.length; i ++){
//     if(arr[i] % 2 == 0){
//         total += arr[i]
//     }
//     massiv = Array.from(total.toString(),Number)
// }
// let result = massiv.reduce((a,b) => a + b , 0)
// console.log(result);


// 9-task


// let arr = [1,2,3,14,4]
// let target = 5
// let new_arr = []
// for(let i = 0; i < arr.length; i++ ){
//     for (let g = i+1; g < arr.length; g++){
//         if ((arr[i]+ arr[g]) == target) {
//             new_arr.push(arr[i],arr[g])
//         }
//     }
// }
// console.log(new_arr);


// 10-task 


// let prompt_num = prompt("Sonni kiriting")
// let massiv = [...prompt_num]
// let new_arr = massiv.reverse()
// console.log(new_arr,massiv);
// if(new_arr == massiv){
//     console.log("Palindrom son");
// }
// else {
//     console.log("Palindrome son emas");
// }


// let = param = prompt("Sonni kiriting")
// let type = typeof param
// if (type === "number") {
//     let arr = Array.from(param.toString(), Number).reverse()
//     let new_num = Number(arr.join(""))
//     if (param === new_num) {
//         console.log("Palindrom son");
//     } else {
//         console.log("Palindom emas");
//     }
// } else {
//     let arr = param.split("").reverse()
//     let new_str = arr.join("")
//     if (param === new_str) {
//         console.log("Palindrom son");
//     } else {
//         console.log("Palindom emas");
//     }
// }


// 11-task

// let prompt_num = prompt("Sonni kiriting")
// function function1(params) {
//     let number = params
//     function function2(param){
// let type = typeof param
// if (type === "number") {
//     let arr = Array.from(param.toString(), Number).reverse()
//     let new_num = Number(arr.join(""))
//     if (param === new_num) {
//         console.log("Palindrom ");
//     } else {
//         console.log("Palindom emas");
//     }
// } else {
//     let arr = param.split("").reverse()
//     let new_str = arr.join("")
//     if (param === new_str) {
//         console.log("Palindrom");
//     } else {
//         console.log("Palindom emas");
//     }
// }
//     }
//     function2(number)
// }
// function1(prompt_num)



// 12-task

// let arr = [1,22,3]
// let total = 0
// let massiv = []
// for (let i = 0; i < arr.length; i ++){
//     total += arr[i]
//     massiv = Array.from(total.toString(),Number)
// }
// console.log(massiv);


// 13-task


// var addTwoNumbers = function(l1, l2) {
//     let number = 0;
//     let result = []

//     for (let i = 0; i < Math.max(l1.length, l2.length); i++) {
//         const num1 = i < l1.length ? l1[i] : 0
//         const num2 = i < l2.length ? l2[i] : 0
//         const sum = num1 + num2 + number
//         number = Math.floor(sum / 10)
//         result.push(sum % 10)
//     }

//     if (number > 0) {
//         result.push(number)
//     }

//     return result
// }

// const l1 = [4, 5, 3]
// const l2 = [5, 6, 4]

// console.log(addTwoNumbers(l1, l2))