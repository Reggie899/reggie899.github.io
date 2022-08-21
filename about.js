let p = document.getElementById("p");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let wordButton = document.getElementById("wordButton");
let wordButton2 = document.getElementById("wordButton2");
let button = document.getElementById("bionicButton");

function seeResults() {
  axios
  .get("https://bionic-reading-backend.herokuapp.com/one")
    // .then(res => console.log("here", res.data))
    .then((res) => (p2.innerHTML = res.data));
};

function seeResults2() {
    axios
    .get("https://bionic-reading-backend.herokuapp.com/two")
      // .then(res => console.log("here", res.data))
      .then((res) => (p3.innerHTML = res.data));
  };

  function seeResults3() {
    axios
    .get("https://bionic-reading-backend.herokuapp.com/three")
    //   .then(res => console.log("here", res.data))
      .then((res) => (p4.innerHTML = res.data));
  };

function bionicReading(event) {
    event.preventDefault();
  // var element = document.getElementById("myDIV");
  p.classList.toggle("mystyle");
  p2.classList.toggle("mystyle2");
  p3.classList.toggle("mystyle2");
  p4.classList.toggle("mystyle2");
  wordButton.classList.toggle("wordButton");
  wordButton2.classList.toggle("wordButton2");
  button.classList.toggle("buttonStyle2");
}

const test = () => {
    alert("mmm");
}
seeResults();
seeResults2();
seeResults3();


button.addEventListener("click", bionicReading);
