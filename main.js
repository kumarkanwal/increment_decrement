
number = 0;

document.querySelector('#increment').onclick = function(){
    number++;
    document.querySelector('label').innerHTML = number;
};

document.querySelector("#decrement").onclick = function(){

    number--;
    document.querySelector('label').innerHTML = number;
};

document.querySelector("#reset").onclick = function(){


    number = 0;
    document.querySelector('label').innerHTML = number;
};





