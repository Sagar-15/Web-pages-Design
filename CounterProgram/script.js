let count = 0;

document.getElementById("less").onclick = function(){
    count -= 1;
    document.getElementById("number").innerHTML = count;
}

document.getElementById("zero").onclick = function(){
    count = 0;
    document.getElementById("number").innerHTML = count;
}

document.getElementById("more").onclick = function(){
    count += 1;
    document.getElementById("number").innerHTML = count;
}