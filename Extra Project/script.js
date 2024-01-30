let h5 = document.querySelector('h5')
let button = document.querySelector('#add')
let check = 0

button.addEventListener("click",function(){
    if (check === 0) {
        h5.innerHTML = "Friends!"
        h5.style.color = "green"
        button.innerHTML = "Remove Friend!"
        // console.log(check);
        check = 1
    }
    else{
        h5.innerHTML = "Stranger"
        h5.style.color = "red"
        button.innerHTML = "Add Friend!"
        // console.log(check);
        check = 0
    }
})

