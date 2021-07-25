var slid = document.getElementsByClassName("sliding_2");
var i;
for (var i = 0; i < slid.length; i++) {
  slid[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function show_more() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more_1");
  var btnText = document.getElementById("btn");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "show more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "show less";
    moreText.style.display = "inline";
  }
}

let cartBtn = document.getElementsByClassName("cartBtn");
for (let i = 0; i < cartBtn.length; i++) {
  cartBtn[i].addEventListener("dblclick", function () {
    let course = document.getElementsByClassName("course")[i].innerHTML;
    let arr;
    let addThis = true;
    arr = localStorage.getItem("cart");
    if (arr === null) {
      arr = [];
    } else {
      arr = JSON.parse(localStorage.getItem("cart"));
    }
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == course) {
        console.log(true);
        addThis = false;
        alert("This course is already in your Cart");
      }
    }
    if (addThis) {
      arr.push(course);
      localStorage.setItem("cart", JSON.stringify(arr));
    }
  });
  cartBtn[i].addEventListener("click",function(){
    window.location.href = "cart.html";
  })
}
