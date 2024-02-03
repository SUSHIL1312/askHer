var i = 0;

var message=
"Hi Monika....!!   << I want to say something special to you.<< So, please read it carefully...!  > I feel fortunate that our paths crossed, <and we got to know each other.  <<I am truly grateful for the time we  spent <getting to know each other over these past days. <<You have  become  someone special to me and <as the days go by , you get closer to me.!   <<<Your presence brightens my days, and < you're always on my mind.<<<Thanks for coming in my life....|<< Sweety!! ";

var typingSpeed = 90; // Decreased typing speed
typeWriter();

function typeWriter() {
    if (i < message.length) {
        if (message.charAt(i) == "<")
            document.getElementById("text1").innerHTML += "</br>";
        else if (message.charAt(i) == ">")
            document.getElementById("text1").innerHTML = "";
        else if (message.charAt(i) == "|") {
            $(".bg_heart").css("background-image", "url('https://i.postimg.cc/w3Kj72ZJ/rose-3407234-1280.jpg')");
            document.getElementById("thisWayButton").style.display = "block";
        } else document.getElementById("text1").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, typingSpeed);
    }
}

function redirectToYesPlease() {
    window.location.href = "yesPlease.html";
}
