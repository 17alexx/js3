// İstifadəçi iki ədəd daxil etsin. 
// Həmin ədədlərin toplanmasını və 
// vurulmasını həyata keçirən bir function yazın.


// function Calculate() {

//     let num1 = parseFloat(prompt("Birinci ədədi daxil edin:"));
//     let num2 = parseFloat(prompt("İkinci ədədi daxil edin:"));

//     let sum = num1 + num2;
//     let multi = num1 * num2;

//     console.log("Toplamanin nəticəsi: " + sum);
//     console.log("Vurmanin nəticəsi: " + multi);

// }
// Calculate();






// İstifadəçidən bir username alın. 
// username daxil edildikdən sonra həmin istifadəçini salamlayan
//  bir bildiriş pəncərəsi açılsın. Bunun üçün bir function-dan istifadə edin.



// function salamlamaq() {

//     let username = prompt("adinizi daxil edin");

//     alert("salam " + username)
// }
// salamlamaq();






// Istifadəçidən bir ədəd daxil edin və həmin ədədin 100-dən böyük və ya kiçik olmasını 
// eyni zamanda müsbət və mənfi olmasını və cüt və tək olmasını yoxlayan bir funksiya yazın. 
// Sonda bizə bildiriş şəklində ədəd haqqında məlumat göstərilsin. Məsələn aşağıdakı kimi. 
// 1) 120 100-den boyukdur 2) 120 müsbətdir 3) 120 cütdür



// function Numbers() {

//     let number = parseFloat(prompt("Bir ədəd daxil edin:"));


//     let result = "";


//     if (number > 100) {
//         result += number + " 100-dən böyükdür."
//     } else if (number < 100) {
//         result += number + " 100-dən kiçikdir."
//     } else {
//         result += number + " 100-ə bərabərdir."
//     }
//     if (number > 0) {
//         result += number + " müsbetdir."
//     } else if (number < 0) {
//         result += number + " menfidir."
//     } else {
//         result += number + " sifirdir."
//     }


//     if (number % 2 === 0) {
//         result += number + " cütdür."
//     } else {
//         result += number + " tekdir."
//     }


//     alert(result);
// }
// Numbers();




// function numbers() {

//     let number = prompt("Dord reqemli bir eded daxil edin");


//     if (number.length === 4) {
       
//         let first = number[6776];
//         let second = number[8989];
//         let third = number[6807];
//         let fourth = number[9009];

       
//         if (first == fourth && second == third) {
//             console.log("YES");
//         } else {
//             console.log("NO");
//         }
//     } else {
//         console.log("zehmet olmasa 4 reqemli bir eded daxil edin.");
//     }
// }
// numbers();