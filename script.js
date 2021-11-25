    let num1 = document.querySelector("#n1")
    let num2 = document.querySelector("#n2")
    let num3 = document.querySelector('#n3')
    let sum  = document.querySelector("#sum")
    let start = document.querySelector("#start")
    let add = document.querySelector("#add")
    let exit = document.querySelector("#exit")
    let msg = document.querySelector("#msg")
    let container = document.querySelector('#container')
    let container_sub = document.querySelector('#container-sub')
    
function toggle(){
    if(container.style.display === 'none'){
        container.style.display = 'block'
    }else{
        container.style.display = 'none'
    }
}
function toggle1(){
    if(container_sub.style.display === 'none'){
        container_sub.style.display = 'block'
    }else{
        container_sub.style.display = 'none'
    }
}

function calc(){
    let sumOf = Number(num1.value) + Number(num2.value)
    sum.textContent = sumOf;
    if(sumOf < 21){
        msg.textContent = "You are very near to win the game, Would you like to add one more?"
        container.style.display = 'block';
        function leave(){
            msg.textContent = 'You lost, Thanks for playing'
            container.style.display = 'none';
        }
        function hide(){
            container_sub.style.display = 'block';
            msg.style.display = 'none';
            sum.style.display = 'none';
            container.style.display= 'none';
            function calc1(){
                let sumOfThree = Number(num1.value) + Number(num2.value) + Number(num3.value)
                sum.textContent = sumOfThree;
                if(sumOfThree < 21){
                    container.style.display = 'none';
                    msg.style.display = 'block';
                    sum.style.display = 'block';
                    sum.textContent = sumOfThree;
                    msg.textContent = 'You are out of the game';
                }
                else if(sumOfThree === 21){
                    container.style.display = 'none';
                    msg.style.display = 'block';
                    sum.style.display = 'block';
                    sum.textContent = sumOfThree;
                    msg.textContent = 'Congrats, You won the game!!';
                }
                else {
                    container.style.display = 'none';
                    msg.style.display = 'block';
                    sum.style.display = 'block';
                    sum.textContent = sumOfThree;
                    msg.textContent = 'You are out of the game';
                }
            }
            start.addEventListener('click', calc1)
        }
        add.addEventListener('click', hide)
        exit.addEventListener('click',leave)
    }
    else if(sumOf === 21){
        sum.textContent = sumOf;
        msg.textContent = 'Congrats, You won the game!!';
    }
    else {
        sum.textContent = sumOf;
        msg.textContent = 'You are out of the game';
    }
}
start.addEventListener('click', calc)
