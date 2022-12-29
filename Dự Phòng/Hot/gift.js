var git1 = document.getElementById("git1")
git1.onclick = function(){
    var gift = [
        100,
        200,
        300,
        400,
        500,
        600,
        700,
        800,
        900,
        1000
    ]
    localStorage.setItem("LifeCoin", gift[Math.floor(Math.random() * 10)])
    var LifeCoin = localStorage.getItem("LifeCoin")
    alert("Chúc Mừng Bạn Đã Nhận Được: " + LifeCoin + " LifeCoin")
}
var git2 = document.getElementById("git2")
git2.onclick = function(){
    var gift = [
        100,
        200,
        300,
        400,
        500,
        600,
        700,
        800,
        900,
        1000
    ]
    localStorage.setItem("LifeCoin", gift[Math.floor(Math.random() * 10)])
    var LifeCoin = localStorage.getItem("LifeCoin")
    alert("Chúc Mừng Bạn Đã Nhận Được: " + LifeCoin + " LifeCoin")
}
var git3 = document.getElementById("git3")
git3.onclick = function(){
    var gift = [
        100,
        200,
        300,
        400,
        500,
        600,
        700,
        800,
        900,
        1000
    ]
    localStorage.setItem("LifeCoin", gift[Math.floor(Math.random() * 10)])
    var LifeCoin = localStorage.getItem("LifeCoin")
    alert("Chúc Mừng Bạn Đã Nhận Được: " + LifeCoin + " LifeCoin")
}