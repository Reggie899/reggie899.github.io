let p = document.getElementById("p");
let p2 = document.getElementById("p2");
let wordButton = document.getElementById("wordButton");
let wordButton2 = document.getElementById("wordButton2");
let button = document.getElementById("bionicButton");

function seeResults() {
  axios
  .get("https://bionic-reading-backend.herokuapp.com/")
    // .then(res => console.log("here", res.data))
    .then((res) => (p2.innerHTML = res.data));
};

function bionicReading(event) {
    event.preventDefault();
  // var element = document.getElementById("myDIV");
  p.classList.toggle("mystyle");
  p2.classList.toggle("mystyle2");
  wordButton.classList.toggle("wordButton");
  wordButton2.classList.toggle("wordButton2");
  button.classList.toggle("buttonStyle2");
}

const test = () => {
    alert("mmm");
}
seeResults();

button.addEventListener("click", bionicReading);
