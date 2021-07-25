var courses = JSON.parse(localStorage.getItem("courseData"));

function productItems(product) {
  for (var i = 0; i < product.length; i++) {
    main_main_main_div = document.getElementById("cont");

    main_main_div = document.createElement("div");

    main_div = document.createElement("div");
    main_div.style.display = "flex";
    main_div.setAttribute("class", "borderlineformainbox");

    div1 = document.createElement("div");
    div1.style.marginRight = "1.6rem";
    img = document.createElement("img");
    img.setAttribute("class", "course-img");
    img.src = product[i].img;
    img.width = 260;
    img.height = 145;

    div2 = document.createElement("div");

    div_topic = document.createElement("div");
    div_topic.textContent = product[i].course_name;
    div_topic.setAttribute("class", "topic");

    p_desc = document.createElement("p");
    p_desc.textContent = product[i].discreption;
    p_desc.setAttribute("class", "desc");

    div_name = document.createElement("div");
    div_name.textContent = product[i].teacher;
    div_name.setAttribute("class", "author_name");

    div_ratings = document.createElement("div");
    div_ratings.textContent = product[i].rating;
    div_ratings.setAttribute("class", "ratings_no");

    div_total_reviews = document.createElement("span");
    div_total_reviews.textContent =
      " " +
      " ⭐⭐⭐⭐⭐" +
      "(" +
      product[i].noOfRating.toLocaleString("en-US") +
      ")";
    div_total_reviews.setAttribute("class", "noofreviews");

    div_ratings.appendChild(div_total_reviews);

    div_total_hours = document.createElement("div");
    div_total_hours.setAttribute("class", "total_hours");
    div_total_hours.textContent = product[i].course_time + " total hours.";

    // hori_line = document.createElement('hr')
    div_best_seller = document.createElement("div");
    div_best_seller.setAttribute("class", "bestseller-class");
    if (product[i].best == true) {
      // console.log(product[i].best)
      div_best_seller.textContent = "bestseller";
    } else {
      div_best_seller.style.display = "none";
    }

    sp = document.createElement("B");
    sp.style.marginLeft = "100px";
    sp.textContent = product[i].price;

    div1.append(img);

    div2.append(
      div_topic,
      p_desc,
      div_name,
      div_ratings,
      div_total_hours,
      div_best_seller
    );

    main_div.append(div1, div2, sp);

    main_main_div.append(main_div);

    main_main_main_div.append(main_div);
  }
}
productItems(courses);

function myFunction1() {
  var hig2low_rating = [];
  Object.assign(hig2low_rating, courses);
  hig2low_rating = hig2low_rating.sort(function (a, b) {
    return b.rating - a.rating;
  });
  console.log(hig2low_rating);

  productItems(hig2low_rating);
}

function myFunction2() {
  var popularity = [];
  Object.assign(popularity, courses);
  var temp_best = function (a) {
    if (a.best == true) {
      return a;
    }
  };
  popularity = popularity.filter(temp_best);
  console.log("popularity:", popularity);
  productItems(popularity);
}

function updatethechanges() {
  var zone = document.getElementById("filterusingselect");
  if (zone.value == "highest-rated") {
    document.getElementById("cont").innerHTML = "";
    myFunction1();
  } else if (zone.value == "popularity") {
    document.getElementById("cont").innerHTML = "";
    myFunction2();
  }
}

function stars(inp) {
  var res = "";
  for (var i = 0; i < Number(inp); i++) {
    res += "";
  }
}

// productItems(courses);
// if(count==0){
//     productItems(courses)
// }

var tempao = false;
function closed() {
  if (tempao == false) {
    document.getElementById("tamasaha").style.display = "none";
    tempao = true;
  } else {
    document.getElementById("tamasaha").style.display = "block";
    tempao = false;
  }
}

//for bottom page in product page of udemy
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

//arpits slider.js

const wrapper = document.getElementsByClassName("wrapper");
const button = document.getElementById("click");
const button2 = document.getElementById("click2");

button.addEventListener("click", clicked);
button2.addEventListener("click", clicked2);
let scroll = 0;

wrapper[0].addEventListener("scroll", function (event) {
  scroll = wrapper[0].scrollLeft;
});

function clicked() {
  scroll = scroll += 500;
  wrapper[0].scrollTo({
    left: scroll,
    behavior: "smooth",
  });
  scroll = wrapper[0].scrollLeft + 50;
  console.log(wrapper[0].scrollLeft);
}

function clicked2() {
  scroll = scroll -= 500;
  wrapper[0].scrollTo({
    left: scroll,
    behavior: "smooth",
  });
  scroll = wrapper[0].scrollLeft + 50;
  console.log(wrapper[0].scrollLeft);
}

//slider item with data base
// data base starts

function showCourses(el) {
  var slide = document.getElementById("unorderedlist");
  var list = document.createElement("li");
  list.setAttribute("class", "list_item");
  var items = document.createElement("div");
  items.setAttribute("class", "product-container");

  var image = document.createElement("img");
  image.setAttribute("class", "course_image");
  image.src = el.img;

  var name = document.createElement("h2");
  name.setAttribute("class", "course_name");
  name.textContent = el.course_name;

  var instructur = document.createElement("p");
  instructur.setAttribute("class", "instructur");
  instructur.textContent = el.teacher;

  var rating = document.createElement("p");
  rating.setAttribute("class", "rating");
  rating.innerHTML =
    el.rating +
    " ⭐⭐⭐⭐⭐ " +
    '<span class="sales">(' +
    el.noOfRating +
    ")</span>";

  var price = document.createElement("h3");
  price.setAttribute("class", "price");
  price.innerHTML = "₹" + el.price;

  items.append(image, name, instructur, rating, price);
  list.append(items);
  slide.append(list);
}

function getCourses() {
  var data = JSON.parse(localStorage.getItem("courseData"));

  data.forEach(function (x) {
    showCourses(x);
  });
}
getCourses();

// item add on the slider ends

// slider slide fuction starts

// slider slide function ends
