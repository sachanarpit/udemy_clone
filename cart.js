function getCourseDetails(name) {
  let data = JSON.parse(localStorage.getItem("courseData"));
  for (let i = 0; i < data.length; i++) {
    let Name = data[i].course_name;
    if (Name === name) {
      return data[i];
    }
  }
}

function check() {
  //if nothing in all three
  if (cartTotal === 0 && saved === 0 && wished === 0) {
    let box = document.getElementsByClassName("container")[0];
    box.style.display = "none";
  }

  //if nothing or something in cart
  if (cartTotal == 0) {
    let box = document.getElementsByClassName("nonEmpty");
    for (let i = 0; i < box.length; i++) {
      box[i].style.display = "none";
    }
    let cartProp = document.getElementById("cartItems");
    cartProp.style.display = "flex";
  } else {
    let box = document.getElementById("emptyCart");
    box.style.display = "none";
  }

  //if nothing or something in saved for later
  if (saved == 0) {
    let box = document.getElementById("saved");
    box.style.display = "none";
  } else {
    let box = document.getElementById("saved0");
    box.style.display = "none";
  }

  //if nothing or something in wishlist
  if (wished == 0) {
    let box = document.getElementById("wished");
    box.style.display = "none";
  } else {
    let box = document.getElementById("wished0");
    box.style.display = "none";
  }

  //only shows wishlist when user is logged in
  if (loggedIn == false) {
    let box = document.getElementById("showOnLog");
    box.style.display = "none";
    let btn = document.getElementsByClassName("rBtn3");
    for (let r = 0; r < btn.length; r++) {
      btn[r].style.display = "none";
    }
  }
  let cartTotal2 = document.getElementById("cartTotal");
  cartTotal2.innerHTML = cartTotal;
}

//discount coupon
function checkCoupon() {
  let couponCode = document.getElementById("couponCode").value;
  let couponName = document.getElementById("couponName");
  let data = JSON.parse(localStorage.getItem("coupon"));
  data.forEach(function (x) {
    if (x === couponCode) {
      couponName.innerText = couponCode;
      return true;
    }
  });
}

localStorage.removeItem("discount");
let cartTotal = 0;
let saved = 0;
let wished = 0;

const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
let Bill;

function applyCouponCode() {
  let apply = checkCoupon();
  if (apply == false) {
    return;
  } else {
    let discount = 30;
    discount = (Bill * discount) / 100;
    let priceOff = document.getElementById("priceOff");
    newBill = Bill - discount;
    newBill = newBill.toLocaleString("en-US");
    priceOff.innerHTML = `<span>₹${Bill.toLocaleString("en-US")}</span>`;
    totalBill.innerHTML = newBill;
    localStorage.setItem("discount", JSON.stringify(discount));
  }
}

//home button ->go to main page
const btnH = document.getElementsByClassName("btnH");
for (let i = 0; i < btnH.length; i++) {
  btnH[i].addEventListener("click", function () {
    window.location.href = "main.html";
  });
}

let cart = document.getElementById("cart");
let data = JSON.parse(localStorage.getItem("courseData"));

// let cartBtn = document.getElementsByClassName("cartBtn");
// for(let i=0;i<cartBtn.length;i++){
//     cartBtn[i].addEventListener("click", function(){
//         cartTotal++;
//         let course = document.getElementsByClassName("course")[i].value;
//         let arr;
//         arr = localStorage.getItem("cart");
//         if(arr === null){
//             arr = [];
//         }else{
//             arr = JSON.parse(localStorage.getItem("cart"));
//         }
//         arr.push(course);
//         localStorage.setItem("cart", JSON.stringify(arr));
//     })
// }

let arr = [];
arr.push("MASAI30");
arr.push("TECHNOPHILE");
// arr.push(data[4].course_name);
// arr.push(data[1].course_name);
// arr.push(data[2].course_name);
localStorage.setItem("coupon", JSON.stringify(arr));

function showInCart() {
  let coursesInCart = JSON.parse(localStorage.getItem("cart"));
  let dest = document.getElementById("cart");
  dest.innerHTML = "";
  let bill = 0;
  for (let i = 0; i < coursesInCart.length; i++) {
    let course = coursesInCart[i];
    let data = getCourseDetails(course);
    let courseName = data.course_name;
    let img = data.img;
    let tutor = data.teacher;
    let price = data.price;
    bill += price;
    price = price.toLocaleString("en-US");
    let divC = document.createElement("div");
    divC.classList = "bdLight inCart";
    divC.innerHTML = `<img class="image" src="${img}">
        <div id="mainText">
        <p class="courseName text">${courseName}</p>
        <p class="tutor text">${tutor}</p>
        </div>
        <div class="cartButtons"><a class="rBtn1 rBtn">Remove</a><a class="rBtn2 rBtn">Save For Later</a><a class="rBtn3 rBtn">Move to Wishlist</a></div>
        <p class="price">₹${price}</p>`;
    dest.append(divC);
    cartTotal++;
  }
  Bill = bill;
  bill = bill.toLocaleString("en-US");
  totalBill.innerText = bill;
}

showInCart();
check();
let removeBtn = document.getElementsByClassName("rBtn1");
let courseInCart = document.getElementsByClassName("courseName");
for (let i = 0; i < removeBtn.length; i++) {
  let btn = removeBtn[i];
  btn.addEventListener("click", function () {
    let course = courseInCart[i].innerText;
    let arr = JSON.parse(localStorage.getItem("cart"));
    for (let j = 0; j < arr.length; j++) {
      let name = arr[j];
      if (name === course) {
        arr.splice(j, 1);
        break;
      }
    }
    cartTotal = 0;
    localStorage.setItem("cart", JSON.stringify(arr));
    showInCart();
    check();
  });
}

let checkout = document.getElementById("checkout");
checkout.addEventListener("click", function () {
  if (loggedIn) {
    window.location.href = "checkout.html";
  } else {
    window.confirm(
      "Please LogIn to proceed further",
      (window.location.href = "login.html")
    );
  }
});

let applyCoupon = document.getElementById("applyCoupon");
applyCoupon.addEventListener("click", function (x) {
  x.preventDefault();
  applyCouponCode();
});
