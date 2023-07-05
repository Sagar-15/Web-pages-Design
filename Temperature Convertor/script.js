document.getElementById("submitbutton").onclick = function(){
    let temp;

    if(document.getElementById("cvalue").checked){
        temp = document.getElementById("tvalue").value
        temp = Number(temp)
        function celcius(temp){
            return temp - 32 * (5/9);
        }
        temp = celcius(temp);
        document.getElementById("value").innerHTML = temp + "°C";
    }
    else if(document.getElementById("fvalue").checked){
        temp = document.getElementById("tvalue").value
        temp = Number(temp)
        function Fahrenheit(temp){
            return temp * 9/5 + 32;
        }
        temp = Fahrenheit(temp)
        document.getElementById("value").innerHTML = temp + "°F";
    }
    else{
        document.getElementById("value").innerHTML = alert("Select a unit")
    }
}