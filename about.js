import REQUEST_KEY from "./requests.js";
let p = document.getElementById("p");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let wordButton = document.getElementById("wordButton");
let wordButton2 = document.getElementById("wordButton2");
let button = document.getElementById("bionicButton");

function seeResults() {
 // requestBionic1();
 // axios
 // .get("https://testreg.b4a.app/one")
  //.get("https://bionic-reading-backend.herokuapp.com/one")
    // .then(res => console.log("here", res.data))
    //.then((res) => (p2.innerHTML = res.data));
};

// function seeResults2() {
//     axios
//     .get("https://testreg.b4a.app/two")
//       // .then(res => console.log("here", res.data))
//       .then((res) => (p3.innerHTML = res.data));
//   };

//   function seeResults3() {
//     axios
//     .get("https://testreg.b4a.app/three")
//     //   .then(res => console.log("here", res.data))
//       .then((res) => (p4.innerHTML = res.data));
//   };

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
// seeResults2();
// seeResults3();


button.addEventListener("click", bionicReading);


function requestBionic1() { 

  const encodedParams1 = new URLSearchParams();
  encodedParams1.append(
    "content",
    "Hello there! This is me. My journey as a web developer started at the beginning of 2020 when a friend of mine suggested I start learning how to create my own apps and projects after I kept telling him what I would change on different apps and websites... pretty much all the time. I am sure he just didn’t want to listen to my rants anymore. This kicked off a series of events and now I am here and you are reading this. That is the best example of how a thought becomes action and changes your life."
  );
  encodedParams1.append("response_type", "html");
  encodedParams1.append("request_type", "html");
  encodedParams1.append("fixation", "1");
  encodedParams1.append("saccade", "10");
  
  const options1 = {
    method: "POST",
    url: "https://bionic-reading1.p.rapidapi.com/convert",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": ``,
      "X-RapidAPI-Host": "bionic-reading1.p.rapidapi.com",
    },
    data: encodedParams1,
  };
  let dataResult = "something went wrong 🙈";
  console.log(dataResult);
  axios
    .request(options1)
    .then(function (response) {
      console.log(response.data);
      dataResult = response.data;
     p2.innerHTML = response.data;
    })
    //.then(() => p2.innerHTML = "dataResult")
   // .then((dataResult) => (p2.innerHTML = dataResult))
    .catch(function (error) {
      console.error(error);
    });
  }
  requestBionic1();