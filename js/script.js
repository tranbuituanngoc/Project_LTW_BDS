function showPass() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function showComPass() {
    var x = document.getElementById("comPass");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

var myIndex = 0;
showImg();

// function showImg() {
//     var i;
//     var x = document.getElementsByClassName("mySlider");
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     myIndex++;
//     if (myIndex > x.length) { myIndex = 1 }
//     x[myIndex - 1].style.display = "block";
//     setTimeout(showImg, 2000);
//     console.log(2);
//     console.log(x.length);

// }