function openMenu(evt, menuName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.firstElementChild.className += " w3-red";
}
// document.getElementById("myLink").click();

var btn = $('#button');

$(window).scroll(function () {
    console.log("1231231");
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({ scrollTop: 0 }, '300');
});

var buttonLogin = document.getElementById("login");

buttonLogin.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("dang click Login");
    location.href = "http://127.0.0.1:5501/html/login.html";
})