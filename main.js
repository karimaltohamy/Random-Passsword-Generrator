let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()\/~,;_=";
let outpout = document.getElementById("outpout")



function randomNumder(value) {
    return Math.floor(Math.random() * value)
    
}


function genPassword() {
    let length = document.getElementById("range").value;
    let num = document.getElementById("num");
    num.innerHTML = length;

    let str = "";

    for (let i = 0; i < length; i++) {
        let random = randomNumder(characters.length);

        str += characters.charAt(random);
    }

    outpout.value = str;
}

function copyValue() {
    outpout.select()
    outpout.focus()
    document.execCommand("copy")
    alert("Password Copied")
} 
