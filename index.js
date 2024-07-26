
// Task 64
// (bu o'tgan darsni uy ishi biroz qisqa yechimi)
// Berilgan stringlar massivida eng uzun o'xshash prefiksni toping.

function longestCommonPrefix(strs) {
    let arr = strs[0]
    for (let i = 0; i < arr.length; i++) {
        for (const item of strs) {
            if (item[i] !== arr[i]) {
                return item.slice(0, i)
            }
        }
    }

}
// console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
// console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""

// Task 69
// Berilgan objectda eng chuqur joylashgan qiymatni toping.

// let obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3,
//             f: {
//                 g: 4
//             }
//         }
//     }
// };
function deepestValue(obj) {
    let result = null
    let total = null
    let arr = [{value:obj, step:1}]
    for (let i = 0; i < arr.length; i++) {
       const {value, step} = arr[i]
for (const key in value) {
   if (typeof value[key] === "object") {
    arr.push({value: value[key], step: step + 1})
   }
   else if (step > total){
total = step
result = value[key]
   }
}
    }
return result
}
// console.log(deepestValue(obj)); // Output: 4


// Task 70
// Berilgan objectdagi barcha string qiymatlarni toping va birlashtiring.

function concatStrings(obj) {
    let arr = [{ value: obj, step: 1 }]
    let result = []
    for (let i = 0; i < arr.length; i++) {
        const { value, step } = arr[i]
        for (const key in value) {
            if (typeof value[key] === "object") {
                arr.push({ value: value[key], step: step + 1 })
            }
            else if (typeof value[key] === "string") {
                result.push(value[key])
            }
        }
    }
    return result.join("")
}


// const obj = {
//     a: "Hello",
//     b: {
//         c: " ",
//         d: {
//             e: "World",
//             f: {
//                 g: "!"
//             }
//         }
//     }
// };
// console.log(concatStrings(obj)); // Output: "Hello World!"

// Task 71
// Berilgan stringdagi so'zlarni ularning uzunligi bo'yicha tartiblang.

function sortByLength(s) {
    let arr = s.split(" ")
    return arr.sort((a, b) => a.length - b.length)
}

// console.log(sortByLength("short longest medium")); // Output: "short medium longest"
// console.log(sortByLength("a quick brown fox")); // Output: "a fox quick brown"

// TAsk 72
// Berilgan objectdagi barcha raqamli qiymatlarni toping va ro'yxat (array) sifatida qaytaring.

function findNumbers(obj1) {
    let arr = [{ value: obj1, step: 1 }]
    let result = []
    for (let i = 0; i < arr.length; i++) {
        const { value, step } = arr[i]
        for (const key in value) {
            if (typeof value[key] === "object") {
                arr.push({ value: value[key], step: step + 1 })
            }
            else if (typeof value[key] === "number") {
                result.push(value[key])
            }
        }
    }
    return result
};

// const obj1 = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3,
//             f: {
//                 g: 4
//             }
//         }
//     }
// };
// console.log(findNumbers(obj1)); // Output: [1, 2, 3, 4]

// Task 73
// Berilgan stringdagi eng uzun so'zni toping.

function longestWord(s) {
    let arr = s.split(" ")
    let max_word = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > max_word.length) {
            max_word = arr[i]
        }
    }
    return max_word
}


// console.log(longestWord("Find the longest word in this sentence")); // Output: "sentence"
// console.log(longestWord("JavaScript is awesome")); // Output: "JavaScript"


// Task 74 
// Berilgan stringdagi barcha kichik harflarni katta harflarga aylantiring 
// va teskari tartibda qaytaring.

function reverseUpperCase(s) {
    let arr = s.split("").reverse().join(" ").toUpperCase()
    return arr
}
// console.log(reverseUpperCase("Hello World")); // Output: "DLROW OLLEH"
// console.log(reverseUpperCase("JavaScript")); // Output: "TPIRCASAVAJ"

// Task 75
// Berilgan stringdagi barcha raqamlarni toping va alohida arrayda qaytaring.

function extractNumbers(str) {
    let arr = str
    console.log(arr);
   let result = arr.filter(item => typeof item == "number")
   console.log(result);
}

// Test case
// console.log(extractNumbers("There are 3 apples and 4 oranges")); // Output: [3, 4]
// console.log(extractNumbers("123 Main St.")); // Output: [123]

// TAsk 76

function valueTypes(obj) {
    let arr = [{ value: obj, step: 1 }]
    let result = []
    for (let i = 0; i < arr.length; i++) {
        const { value, step } = arr[i]
        for (const key in value) {
            if (typeof value[key] === "object" && !Array.isArray(value[key]) && value[key] !== null) {
                arr.push({ value: value[key], step: step + 1 })
            }
            else {
                result.push(typeof value[key])
            }
        }
    }
    return result
}
// const obj = {
//     a: 1,
//     b: "string",
//     c: true,
//     d: {
//         e: 3.14,
//         f: null,
//         g: {
//             h: undefined,
//             i: [1, 2, 3]
//         }
//     }
// };
// console.log(valueTypes(obj));
// Output: ["number", "string", "boolean", "number", "object", "undefined", "object"]


// Task 77
// Berilgan objectdagi barcha kalitlarni ularning qiymatlari bilan almashtiring.
// Agar qiymatlari takrorlansa, oxirgi qiymatni qabul qiling.

function invertObject(obj) {
    let arr = [{ value: obj, step: 1 }]
    let result = {}
    for (let i = 0; i < arr.length; i++) {
        const { value, step } = arr[i]
        for (const key in value) {
            if (typeof value[key] === "object") {
                arr.push({ value: value[key], step: step + 1 })
            }
            else {
                result[value[key]] = key
            }
        }
    }
    return result
}
const obj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: {
                g: 4
            }
        }
    }
};
// console.log(invertObject(obj)); // Output: { 1: 'a', 2: 'c', 3: 'e', 4: 'g' }

// Task 79
// Berilgan objectdagi barcha raqamli qiymatlarning yig'indisini hisoblang.


function sumNumbers(obj2) {
    let arr = [{ value: obj2, step: 1 }]
    let result = []
    for (let i = 0; i < arr.length; i++) {
        const { value, step } = arr[i]
        for (const key in value) {
            if (typeof value[key] === "object") {
                arr.push({ value: value[key], step: step + 1 })
            }
            else if (typeof value[key] === "number") {
                result.push(value[key])
            }
        }
    }
    return result.reduce((a, b) => (a + b))

}

const obj2 = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: {
                g: 4
            }
        }
    }
};
// console.log(sumNumbers(obj2)); // Output: 10


// Task 80
// Berilgan stringni so'zlarga ajratib, har bir so'zning bosh harfini katta qiling va qayta birlashtiring
function capitalizeWords(s) {
    let arr = s.split(" ")
    let new_arr = arr.map(item => {
        return item[0].toUpperCase() + item.slice(1)
    });
    return new_arr
}
// console.log(capitalizeWords("hello world from javascript")); // Output: "Hello World From Javascript"
// console.log(capitalizeWords("this is a test")); // Output: "This Is A Test"


