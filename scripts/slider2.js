const wrapper = document.getElementsByClassName("wrapper2");
const button = document.getElementById("click2");
const button2 = document.getElementById("click22");

button.addEventListener("click", clicked2);
button2.addEventListener("click", clicked22);
let scroll = 0;

wrapper[0].addEventListener("scroll", function (event) {
  scroll = wrapper[0].scrollLeft;
});

function clicked2() {
  scroll = scroll += 500;
  wrapper[0].scrollTo({
    left: scroll,
    behavior: "smooth",
  });
  scroll = wrapper[0].scrollLeft + 50;
  console.log(wrapper[0].scrollLeft);
}

function clicked22() {
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
const courses2 = [
  {
    course_name: "2021 Complete Python Bootcamp From Zero to Hero in Python",
    teacher: "Jose portila",
    img: `../course_img/img1.jpg`,
    rating: 4.5,
    noOfRating: 373393,
    price: 4480,
    best: true,
    course_time: "22 total hours",
    publish_date: "March 2021",
    discreption:
      "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
    point1:
      "Learn to use Python professionally, learning both Python 2 and Python 3!",
    point2: "Create games with Python, like Tic Tac Toe and Blackjack!",
    point3:
      "Learn advanced Python features, like the collections module and how to work with timestamps!",
  },
  {
    course_name: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
    teacher: "Kirill Eremenko, DataScience Support, Ligency team",
    img: "../course_img/img2.jpg",
    rating: 4.5,
    noOfRating: 148286,
    price: 4480,
    best: true,
    course_time: "44.5",
    publish_date: "July 2021",
    discreption:
      "Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included.",
    point1: "Master Machine Learning on Python & R",
    point2: "Have a great intuition of many Machine Learning models",
    point3: "Make accurate predictions",
  },
  {
    course_name: "Python for Data Science and Machine Learning Bootcamp",
    teacher: "Jose Portila",
    img: "../course_img/img3.jpg",
    rating: 4.3,
    noOfRating: 37393,
    price: 4480,
    best: false,
    course_time: "25",
    publish_date: "May 2021",
    discreption:
      "Learn how to use NumPy, Pandas, Seaborn , Matplotlib , Plotly , Scikit-Learn , Machine Learning, Tensorflow , and more!",
    point1: "Use Python for Data Science and Machine Learning",
    point2: "Use Spark for Big Data Analysis",
    point3: "Implement Machine Learning Algorithms",
  },
  {
    course_name: "Learn Python Programming Masterclass",
    teacher: "Tim, Kirill Eremenko, DataScience Support, Ligency team ",
    img: "../course_img/img4.jpg",
    rating: 4.5,
    noOfRating: 73393,
    price: 4480,
    best: false,
    course_time: "63",
    publish_date: "July 2021",
    discreption:
      "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online Training With Python 3",
    point1:
      "Have a fundamental understanding of the Python programming language.",
    point2:
      "Have the skills and understanding of Python to confidently apply for Python programming jobs.",
    point3:
      "Acquire the pre-requisite Python skills to move into specific branches - Machine Learning, Data Science, etc..",
  },
  {
    course_name: "The Python Mega Course: Build 10 Real World Applications",
    teacher: "Ardit",
    img: "../course_img/img5.jpg",
    rating: 4,
    noOfRating: 37393,
    price: 4480,
    best: false,
    course_time: "30.5",
    publish_date: "March 2021",
    discreption:
      "Go from zero to hero in Python in weeks! Learn Python the easy way by building real-life Python programs!",
    point1: "Go from a total beginner to a confident Python programmer",
    point2: "Create 10 real-world Python programs (no toy programs)",
    point3:
      "Strengthen your skills with bonus practice activities throughout the course",
  },
  {
    course_name: "JavaScript - The Complete Guide 2021 (Beginner + Advanced)",
    teacher: "Andrie",
    img: "../course_img/img6.jpg",
    rating: 4,
    noOfRating: 37333,
    price: 4480,
    best: false,
    course_time: "55",
    publish_date: "July 2021",
    discreption:
      "Modern JavaScript from the beginning - all the way up to JS expert level! THE must-have JavaScript resource in 2021.",
    point1: "The ins and outs of HTML5, CSS3, and Modern JavaScript for 2021",
    point2: "Make REAL web applications using cutting-edge technologies",
    point3: "Create responsive, accessible, and beautiful layouts",
  },
  {
    course_name: "The Modern Javascript Bootcamp Course (2021)",
    teacher: "Andrie",
    img: "../course_img//img7.jpg",
    rating: 4,
    noOfRating: 37333,
    price: 4480,
    best: false,
    course_time: "55",
    publish_date: "July 2021",
    discreption:
      "The most up-to-date JS resource online! Master Javascript by building a beautiful portfolio of projects!",
    point1: "The ins and outs of HTML5, CSS3, and Modern JavaScript for 2021",
    point2: "Make REAL web applications using cutting-edge technologies",
    point3: "Create responsive, accessible, and beautiful layouts",
  },
  {
    course_name: "R Programming A-Z™: R For Data Science With Real Exercises!",
    teacher: "Andrie",
    img: "../course_img/img8.jpg",
    rating: 4,
    noOfRating: 37333,
    price: 4480,
    best: true,
    course_time: "55",
    publish_date: "July 2021",
    discreption:
      "Learn Programming In R And R Studio. Data Analytics, Data Science, Statistical Analysis, Packages, Functions, GGPlot2",
    point1: "The ins and outs of HTML5, CSS3, and Modern JavaScript for 2021",
    point2: "Make REAL web applications using cutting-edge technologies",
    point3: "Create responsive, accessible, and beautiful layouts",
  },
  {
    course_name: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
    teacher: "Andrie",
    img: "../course_img/img9.jpg",
    rating: 4,
    noOfRating: 37333,
    price: 4480,
    best: false,
    course_time: "55",
    publish_date: "July 2021",
    discreption:
      "Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included.",
    point1: "The ins and outs of HTML5, CSS3, and Modern JavaScript for 2021",
    point2: "Make REAL web applications using cutting-edge technologies",
    point3: "Create responsive, accessible, and beautiful layouts",
  },
  {
    course_name: "The Complete Web Developer Course 2.0",
    teacher: "Jose Portila",
    img: "../course_img/img10.jpg",
    rating: 4.3,
    noOfRating: 37393,
    price: 4480,
    best: false,
    course_time: "25",
    publish_date: "May 2021",
    discreption:
      "Learn to code and become a Web Developer in 2021 with HTML, CSS, Javascript, React, Node.js, Machine Learning & more!",
    point1: "Use Python for Data Science and Machine Learning",
    point2: "Use Spark for Big Data Analysis",
    point3: "Implement Machine Learning Algorithms",
  },
];

// data base end

//item add on the slider starts
if (!localStorage.courseData2) {
  localStorage.setItem("courseData2", JSON.stringify(courses2));
}

function showCourses2(el) {
  var slide = document.getElementById("unorderedlist2");
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

async function getCourses2() {
  const data = await JSON.parse(localStorage.getItem("courseData"));

  data.forEach(function (x) {
    showCourses2(x);
  });
}
getCourses2();

// item add on the slider ends

// slider slide fuction starts

// slider slide function ends
