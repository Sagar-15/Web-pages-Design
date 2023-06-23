let x;
let y;
let c;

// x = window.prompt("Enter x : ");
// x = Number(x)


// y = window.prompt("Enter y : ");
// y = Number(y)

// c = Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
// console.log("Side C is : ", c);

document.getElementById("clickonit").onclick = function(){
    x = document.getElementById("xtextbox").value;
    x = Number(x);


    y = document.getElementById("ytextbox").value;
    y = Number(y);

    c = Math.sqrt(Math.pow(x,2) + Math.pow(y,2));

    document.getElementById("cvalue").innerHTML = "Side C : " + c;

}