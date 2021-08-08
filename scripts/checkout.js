function getCourseDetails(name){
    let data = JSON.parse(localStorage.getItem("courseData"));
    for(let i=0;i<data.length;i++){
        let Name = data[i].course_name;
        if(Name===name){
            return data[i];
        }
    }
}


function showOnPage(name,img,price){
    let Course = document.getElementById("buyThis");
    let divCh = document.createElement("div");
    divCh.innerHTML = `<img class="img" src="${img}" alt="U">
    <h3 class="name">${name}</h3>
    <p class="price">₹${price}</p>`;
    Course.appendChild(divCh);
}

//for input checking
function checkInput(){
    let filled = document.getElementsByName("userInput");
    for(let i=0;i<filled.length;i++){
        let x = filled[i].value;
        console.log(x);
        if(x===""){
            return false;
        }
    }
    return true;
}

function paymentMethod(){
    let card = document.getElementById("card");
    let netBanking = document.getElementById("netBanking");
    let upi = document.getElementById("upi");
    let paytm = document.getElementById("paytm");
    let byCard = document.getElementById("forCard");
    byCard.style.display = "none";
    let byNet = document.getElementById("forNet");
    byNet.style.display = "none";
    let byUpi = document.getElementById("forUpi");
    byUpi.style.display = "none";
    let byPaytm = document.getElementById("forPaytm");
    byPaytm.style.display = "none";
    if(card.checked==false){
        byCard.style.display = "none";
        if(netBanking.checked==true){
            byNet.style.display = "block";
        }
        else if(upi.checked==true){
            byUpi.style.display = "block";
        }
        else if(paytm.checked==true){
            byPaytm.style.display = "block";
        }
    }
    else{
        byCard.style.display = "block";
    }
}


let check = document.getElementsByClassName("check");
paymentMethod();
for(let i=0;i<check.length;i++){
    check[i].addEventListener("click", function(){
        paymentMethod();
    })
}

let courses = JSON.parse(localStorage.getItem("cart"));
let totalBill = 0;
for(let i=0;i<courses.length;i++){
    let course = courses[i];
    let data = getCourseDetails(course);
    let name = data.course_name;
    let img = data.img;
    let price = data.price;
    totalBill+=price;
    price = price.toLocaleString("en-US");
    showOnPage(name,img,price);
}

let oBill = document.getElementById("origionalPrice");
let bill = totalBill.toLocaleString("en-US");
oBill.append(bill);

let discount = JSON.parse(localStorage.getItem("discount"));
// discount = 440;
if(discount!=null){
    totalBill = totalBill - discount;
}
let tBill = document.getElementById("totalPrice");
bill = totalBill.toLocaleString("en-US");
tBill.append(bill);

let Pay = document.getElementById("Payment");
Pay.addEventListener("click", function(){
    if(checkInput()){
        window.location.href = "paySuccess.html";
    }else{
        alert("Please fill proper details");
    }
    // window.location.href = "paySuccess.html";
});

const btn = document.getElementsByClassName("blueBtn");
for(let i=0;i<btn.length;i++){
    btn[i].addEventListener("mouseover", function(){
        btn[i].style.backgroundColor = "#581C7E";
    });
    btn[i].addEventListener("mouseout", function(){
        btn[i].style.backgroundColor = "#a435f0";
    });
}

  //home button ->go to main page
  const btnH = document.getElementsByClassName("btnH");
  for(let i=0;i<btnH.length;i++){
      btnH[i].addEventListener("click", function(){
          window.location.href = "main.html";
      });
  }