let box=document.getElementById('box')
console.log('hi')
let string=['red','yellow','green','purple','pink','blue']
let n=-1;
let temp=()=>{
    n+=1
    setTimeout(()=>{
        if(n<string.length){
            box.style.background=string[n];
        }
        else{
            n=-1
        }
        temp()
    },500)
}
temp()