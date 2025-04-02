//map 
const input = [1,2,3,4,5,6];

const ans = input.map((i)=>{
    return i*2;
})

console.log(ans);

//filter

const answer = input.filter((n)=>{
    if(n%2==0){
        return true;
    }
})

console.log(answer);