window.onscroll = function() {
    myFunction2()
};
var navbar = document.getElementById("myTopnav");
var sticky = navbar.offsetTop;

function myFunction2() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
