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
  el.price = el.price.toLocaleString("en-US");
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
