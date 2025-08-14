const items = ['book','file','fan']
const nums = [1,2,3,4,5,6,7,8,9,10]
const evenNums = []
nb5 = document.querySelector('#nb5')

for(let i=0; i<6; i++){
    let sw = ''
    sw = `
        <div class="balls"></div>
    `
    nb5.innerHTML += sw
}

for(let i=0; i<7; i++){
    let qw = ''
    qw = `
        <div class="ballss"></div>
    `
    nb5.innerHTML += qw
}




/* let n=0
while(n < items.length){
    items[n] = `${items[n]}s`
    n+=1
}

console.log(items) */

/* let i=0
while(i<nums.length){
    if(nums[i]%2 === 0){
        evenNums.push(nums[i])
        i+=1
    }
    else{
        evenNums
        i+=1
    }
} */
/* nums = [[1,2], [3,4], [5,6]] */

/* const word = "hello"

let i
for(i=0; i<word.length;){
    console.log(word[i])
    i++
} */


/* for(let i=0; i<nums.length; i++){
    console.log('i',i)
    for(let j=0; j<nums[i].length; j++){
        console.log(nums[i][j])
    }
} */

const socials = ['facebook', 'linkedIn', 'twitter', 'instagram']
const numLength = []

/* function theLongestString(){
    for(let i=0; i<socials.length; i++){
        numLength.push(socials[i].length)
    }
    let num = Math.max(...numLength)
    index = numLength.indexOf(num)
    console.log(`The largest string is ${socials[index]}`)
}

theLongestString() */

let maxLength = 0
let longestString = ""
for(let i=0; i<socials.length; i++){
    if(socials[i].length > maxLength){
        maxLength = socials[i].length
        longestString = socials[i]
    }
}

console.log(longestString)

