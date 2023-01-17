//import REQUEST_KEY from "./requests.js";
let p = document.getElementById("p");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let wordButton = document.getElementById("wordButton");
let wordButton2 = document.getElementById("wordButton2");
let button = document.getElementById("bionicButton");

function bionicReading(event) {
  event.preventDefault();
  p.classList.toggle("mystyle");
  p2.classList.toggle("mystyle2");
  p3.classList.toggle("mystyle2");
  p4.classList.toggle("mystyle2");
  wordButton.classList.toggle("wordButton");
  wordButton2.classList.toggle("wordButton2");
  button.classList.toggle("buttonStyle2");
  p2.innerHTML =
    '<div class="bionic-reader bionic-reader-5c6e3e1c-9d2e-404d-bae4-b7597818896e origin " style=" " ><div class="bionic-reader-content"><div class="bionic-reader-container"> <b class="bionic-b bionic">Hel</b>lo <b class="bionic-b bionic">the</b>re! <b class="bionic-b bionic">Thi</b>s <b class="bionic-b bionic">i</b>s <b class="bionic-b bionic">m</b>e. <b class="bionic-b bionic">M</b>y <b class="bionic-b bionic">journ</b>ey <b class="bionic-b bionic">a</b>s a <b class="bionic-b bionic">we</b>b <b class="bionic-b bionic">develop</b>er <b class="bionic-b bionic">start</b>ed <b class="bionic-b bionic">a</b>t <b class="bionic-b bionic">th</b>e <b class="bionic-b bionic">beginni</b>ng <b class="bionic-b bionic">o</b>f <b class="bionic-b bionic">202</b>0 <b class="bionic-b bionic">whe</b>n a <b class="bionic-b bionic">frie</b>nd <b class="bionic-b bionic">o</b>f <b class="bionic-b bionic">min</b>e <b class="bionic-b bionic">suggest</b>ed I <b class="bionic-b bionic">sta</b>rt <b class="bionic-b bionic">learni</b>ng <b class="bionic-b bionic">ho</b>w <b class="bionic-b bionic">t</b>o <b class="bionic-b bionic">crea</b>te <b class="bionic-b bionic">m</b>y <b class="bionic-b bionic">ow</b>n <b class="bionic-b bionic">app</b>s <b class="bionic-b bionic">an</b>d <b class="bionic-b bionic">projec</b>ts <b class="bionic-b bionic">aft</b>er I <b class="bionic-b bionic">kep</b>t <b class="bionic-b bionic">telli</b>ng <b class="bionic-b bionic">hi</b>m <b class="bionic-b bionic">wha</b>t I <b class="bionic-b bionic">wou</b>ld <b class="bionic-b bionic">chan</b>ge <b class="bionic-b bionic">o</b>n <b class="bionic-b bionic">differe</b>nt <b class="bionic-b bionic">app</b>s <b class="bionic-b bionic">an</b>d <b class="bionic-b bionic">websit</b>es<b class="bionic-b bionic">..</b>. <b class="bionic-b bionic">pret</b>ty <b class="bionic-b bionic">muc</b>h <b class="bionic-b bionic">al</b>l <b class="bionic-b bionic">th</b>e <b class="bionic-b bionic">tim</b>e. I <b class="bionic-b bionic">a</b>m <b class="bionic-b bionic">sur</b>e <b class="bionic-b bionic">h</b>e <b class="bionic-b bionic">jus</b>t <b class="bionic-b bionic">di</b>d<b class="bionic-b bionic">n’</b>t <b class="bionic-b bionic">wan</b>t <b class="bionic-b bionic">t</b>o <b class="bionic-b bionic">list</b>en <b class="bionic-b bionic">t</b>o <b class="bionic-b bionic">m</b>y <b class="bionic-b bionic">ran</b>ts <b class="bionic-b bionic">anymo</b>re. <b class="bionic-b bionic">Thi</b>s <b class="bionic-b bionic">kick</b>ed <b class="bionic-b bionic">of</b>f a <b class="bionic-b bionic">seri</b>es <b class="bionic-b bionic">o</b>f <b class="bionic-b bionic">even</b>ts <b class="bionic-b bionic">an</b>d <b class="bionic-b bionic">no</b>w I <b class="bionic-b bionic">a</b>m <b class="bionic-b bionic">her</b>e <b class="bionic-b bionic">an</b>d <b class="bionic-b bionic">yo</b>u <b class="bionic-b bionic">ar</b>e <b class="bionic-b bionic">readi</b>ng <b class="bionic-b bionic">thi</b>s. <b class="bionic-b bionic">Tha</b>t <b class="bionic-b bionic">i</b>s <b class="bionic-b bionic">th</b>e <b class="bionic-b bionic">bes</b>t <b class="bionic-b bionic">examp</b>le <b class="bionic-b bionic">o</b>f <b class="bionic-b bionic">ho</b>w a <b class="bionic-b bionic">thoug</b>ht <b class="bionic-b bionic">becom</b>es <b class="bionic-b bionic">acti</b>on <b class="bionic-b bionic">an</b>d <b class="bionic-b bionic">chang</b>es <b class="bionic-b bionic">you</b>r <b class="bionic-b bionic">lif</b>e.</div></div></div>';
  p3.innerHTML =
    '<div class="bionic-reader bionic-reader-09de3a12-e602-44be-9b1b-bf5bb7d6dda3 origin " style=" " ><div class="bionic-reader-content"> <div class="bionic-reader-container"> <b class="bionic-b bionic">Befo</b>re <b class="bionic-b bionic">becomi</b>ng a <b class="bionic-b bionic">we</b>b <b class="bionic-b bionic">develop</b>er I <b class="bionic-b bionic">go</b>t a <b class="bionic-b bionic">degr</b>ee <b class="bionic-b bionic">i</b>n <b class="bionic-b bionic">Sociolo</b>gy <b class="bionic-b bionic">an</b>d <b class="bionic-b bionic">work</b>ed <b class="bionic-b bionic">i</b>n <b class="bionic-b bionic">differe</b>nt <b class="bionic-b bionic">rol</b>es <b class="bionic-b bionic">i</b>n <b class="bionic-b bionic">th</b>e <b class="bionic-b bionic">soci</b>al <b class="bionic-b bionic">an</b>d <b class="bionic-b bionic">cultur</b>al <b class="bionic-b bionic">exchan</b>ge <b class="bionic-b bionic">fie</b>ld. I <b class="bionic-b bionic">start</b>ed <b class="bionic-b bionic">ou</b>t <b class="bionic-b bionic">a</b>s <b class="bionic-b bionic">a</b>n <b class="bionic-b bionic">assista</b>nt, <b class="bionic-b bionic">the</b>n <b class="bionic-b bionic">mov</b>ed <b class="bionic-b bionic">o</b>n <b class="bionic-b bionic">t</b>o <b class="bionic-b bionic">bei</b>ng a <b class="bionic-b bionic">coordinat</b>or <b class="bionic-b bionic">an</b>d <b class="bionic-b bionic">tea</b>m <b class="bionic-b bionic">lea</b>d <b class="bionic-b bionic">t</b>o <b class="bionic-b bionic">lat</b>er <b class="bionic-b bionic">becomi</b>ng a <b class="bionic-b bionic">counsel</b>or. <b class="bionic-b bionic">I</b>t <b class="bionic-b bionic">ha</b>s <b class="bionic-b bionic">bee</b>n a <b class="bionic-b bionic">gre</b>at <b class="bionic-b bionic">adventu</b>re <b class="bionic-b bionic">tha</b>t <b class="bionic-b bionic">ha</b>s <b class="bionic-b bionic">equipp</b>ed <b class="bionic-b bionic">m</b>e <b class="bionic-b bionic">wit</b>h a <b class="bionic-b bionic">lo</b>t <b class="bionic-b bionic">o</b>f <b class="bionic-b bionic">experien</b>ce <b class="bionic-b bionic">an</b>d <b class="bionic-b bionic">train</b>ed <b class="bionic-b bionic">m</b>e <b class="bionic-b bionic">t</b>o <b class="bionic-b bionic">se</b>e <b class="bionic-b bionic">th</b>e <b class="bionic-b bionic">bi</b>g <b class="bionic-b bionic">pictu</b>re. I <b class="bionic-b bionic">kick</b>ed <b class="bionic-b bionic">of</b>f <b class="bionic-b bionic">m</b>y <b class="bionic-b bionic">we</b>b <b class="bionic-b bionic">developme</b>nt <b class="bionic-b bionic">journ</b>ey <b class="bionic-b bionic">b</b>y <b class="bionic-b bionic">learni</b>ng <b class="bionic-b bionic">abo</b>ut <b class="bionic-b bionic">differe</b>nt <b class="bionic-b bionic">onli</b>ne <b class="bionic-b bionic">traini</b>ng <b class="bionic-b bionic">progra</b>ms <b class="bionic-b bionic">an</b>d <b class="bionic-b bionic">decid</b>ed <b class="bionic-b bionic">t</b>o <b class="bionic-b bionic">sta</b>rt <b class="bionic-b bionic">learni</b>ng <b class="bionic-b bionic">codi</b>ng <b class="bionic-b bionic">wit</b>h <b class="bionic-b bionic">SheCod</b>es. <b class="bionic-b bionic">Quick</b>ly, I <b class="bionic-b bionic">wa</b>s <b class="bionic-b bionic">captivat</b>ed <b class="bionic-b bionic">b</b>y <b class="bionic-b bionic">al</b>l <b class="bionic-b bionic">th</b>e <b class="bionic-b bionic">thin</b>gs I <b class="bionic-b bionic">wa</b>s <b class="bionic-b bionic">abl</b>e <b class="bionic-b bionic">t</b>o <b class="bionic-b bionic">d</b>o <b class="bionic-b bionic">an</b>d <b class="bionic-b bionic">crea</b>te <b class="bionic-b bionic">an</b>d <b class="bionic-b bionic">decid</b>ed <b class="bionic-b bionic">t</b>o <b class="bionic-b bionic">ent</b>er <b class="bionic-b bionic">th</b>e <b class="bionic-b bionic">we</b>b <b class="bionic-b bionic">developme</b>nt <b class="bionic-b bionic">progr</b>am <b class="bionic-b bionic">o</b>f <b class="bionic-b bionic">th</b>e <b class="bionic-b bionic">DC</b>I <b class="bionic-b bionic">tha</b>t <b class="bionic-b bionic">teach</b>es <b class="bionic-b bionic">we</b>b <b class="bionic-b bionic">developme</b>nt <b class="bionic-b bionic">i</b>n <b class="bionic-b bionic">dep</b>th <b class="bionic-b bionic">an</b>d <b class="bionic-b bionic">qualifi</b>es <b class="bionic-b bionic">m</b>e <b class="bionic-b bionic">a</b>s a <b class="bionic-b bionic">ful</b>l <b class="bionic-b bionic">sta</b>ck <b class="bionic-b bionic">develop</b>er. <b class="bionic-b bionic">Thi</b>s <b class="bionic-b bionic">i</b>s <b class="bionic-b bionic">whe</b>re I <b class="bionic-b bionic">a</b>m <b class="bionic-b bionic">current</b>ly <b class="bionic-b bionic">enroll</b>ed <b class="bionic-b bionic">unt</b>il <b class="bionic-b bionic">Decemb</b>er <b class="bionic-b bionic">202</b>2. </div></div></div>';
p4.innerHTML = 
'<div class="bionic-reader bionic-reader-bf6dd09e-d537-41e5-8c29-f622d6eae52f origin " style=" " ><div class="bionic-reader-content"><div class="bionic-reader-container">I <b class="bionic-b bionic">a</b>m <b class="bionic-b bionic">strivi</b>ng <b class="bionic-b bionic">t</b>o <b class="bionic-b bionic">crea</b>te <b class="bionic-b bionic">fu</b>n <b class="bionic-b bionic">an</b>d <b class="bionic-b bionic">interacti</b>ve <b class="bionic-b bionic">experienc</b>es <b class="bionic-b bionic">fo</b>r <b class="bionic-b bionic">websit</b>es <b class="bionic-b bionic">an</b>d <b class="bionic-b bionic">app</b>s <b class="bionic-b bionic">use</b>rs. <b class="bionic-b bionic">The</b>se <b class="bionic-b bionic">experienc</b>es <b class="bionic-b bionic">ca</b>n <b class="bionic-b bionic">b</b>e <b class="bionic-b bionic">heartwarmi</b>ng, <b class="bionic-b bionic">inspiri</b>ng, <b class="bionic-b bionic">exciti</b>ng, <b class="bionic-b bionic">drea</b>my, <b class="bionic-b bionic">..</b>.<b class="bionic-b bionic">yo</b>u <b class="bionic-b bionic">nam</b>e <b class="bionic-b bionic">i</b>t. <b class="bionic-b bionic">I</b>f <b class="bionic-b bionic">yo</b>u <b class="bionic-b bionic">ar</b>e <b class="bionic-b bionic">looki</b>ng <b class="bionic-b bionic">fo</b>r <b class="bionic-b bionic">exact</b>ly <b class="bionic-b bionic">tha</b>t, <b class="bionic-b bionic">fee</b>l <b class="bionic-b bionic">welco</b>me <b class="bionic-b bionic">t</b>o <b class="bionic-b bionic">conta</b>ct <b class="bionic-b bionic">m</b>e. <b class="bionic-b bionic">Le</b>t<b class="bionic-b bionic">’</b>s <b class="bionic-b bionic">com</b>e <b class="bionic-b bionic">u</b>p <b class="bionic-b bionic">wit</b>h a <b class="bionic-b bionic">tail</b>or <b class="bionic-b bionic">mad</b>e <b class="bionic-b bionic">produ</b>ct <b class="bionic-b bionic">fo</b>r <b class="bionic-b bionic">yo</b>u <b class="bionic-b bionic">an</b>d <b class="bionic-b bionic">mak</b>e <b class="bionic-b bionic">i</b>t <b class="bionic-b bionic">happ</b>en. I <b class="bionic-b bionic">a</b>m <b class="bionic-b bionic">looki</b>ng <b class="bionic-b bionic">forwa</b>rd <b class="bionic-b bionic">t</b>o <b class="bionic-b bionic">worki</b>ng <b class="bionic-b bionic">wit</b>h <b class="bionic-b bionic">yo</b>u.</div></div></div>'
  }

button.addEventListener("click", bionicReading);

// For generating the response data to avoid manual editing, if text will change
// !!! important: for innerHTML command --> write all div s in the same line!

// FIRST REQUEST --- function call is paused
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
      "X-RapidAPI-Key": `${REQUEST_KEY}`,
      "X-RapidAPI-Host": "bionic-reading1.p.rapidapi.com",
    },
    data: encodedParams1,
  };
  let dataResult = "something went wrong 🙈";
  console.log(dataResult);
  axios
    .request(options1)
    .then(function (response) {
      console.log("thiS", response.data);
      dataResult = response.data;
      // p2.innerHTML = response.data;
    })
    //.then(() => p2.innerHTML = "dataResult")
    // .then((dataResult) => (p2.innerHTML = dataResult))
    .catch(function (error) {
      console.error(error);
    });
}
// requestBionic1();

// SECOND REQUEST --- function call is paused
function requestBionic2() {
  const encodedParams2 = new URLSearchParams();
  encodedParams2.append(
    "content",
    "Before becoming a web developer I got a degree in Sociology and worked in different roles in the social and cultural exchange field. I started out as an assistant, then moved on to being a coordinator and team lead to later becoming a counselor. It has been a great adventure that has equipped me with a lot of experience and trained me to see the big picture. I kicked off my web development journey by learning about different online training programs and decided to start learning coding with SheCodes. Quickly, I was captivated by all the things I was able to do and create and decided to enter the web development program of the DCI that teaches web development in depth and qualifies me as a full stack developer. This is where I am currently enrolled until December 2022."
  );
  encodedParams2.append("response_type", "html");
  encodedParams2.append("request_type", "html");
  encodedParams2.append("fixation", "1");
  encodedParams2.append("saccade", "10");

  const options2 = {
    method: "POST",
    url: "https://bionic-reading1.p.rapidapi.com/convert",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": `${REQUEST_KEY}`,
      "X-RapidAPI-Host": "bionic-reading1.p.rapidapi.com",
    },
    data: encodedParams2,
  };
  let dataResult2 = "something went wrong 🙊";

  axios
    .request(options2)
    .then(function (response) {
      console.log(response.data);
      // dataResult2 = response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
}
// requestBionic2();

// THIRD REQUEST --- function call is paused

function requestBionic3() {
  const encodedParams3 = new URLSearchParams();
  encodedParams3.append(
    "content",
    "I am striving to create fun and interactive experiences for websites and apps users. These experiences can be heartwarming, inspiring, exciting, dreamy, ...you name it. If you are looking for exactly that, feel welcome to contact me. Let’s come up with a tailor made product for you and make it happen. I am looking forward to working with you."
  );
  encodedParams3.append("response_type", "html");
  encodedParams3.append("request_type", "html");
  encodedParams3.append("fixation", "1");
  encodedParams3.append("saccade", "10");

  const options3 = {
    method: "POST",
    url: "https://bionic-reading1.p.rapidapi.com/convert",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": `${REQUEST_KEY}`,
      "X-RapidAPI-Host": "bionic-reading1.p.rapidapi.com",
    },
    data: encodedParams3,
  };
  let dataResult3 = "something went wrong 🙉";
  axios
    .request(options3)
    .then(function (response) {
      console.log(response.data);
      //dataResult3 = response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
}

// requestBionic3();
