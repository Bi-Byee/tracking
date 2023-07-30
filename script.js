var work = document.querySelector(".work-card .data");
var play = document.querySelector(".play-card .data");
var study = document.querySelector(".study-card .data");
var exercise = document.querySelector(".exercise-card .data");
var social = document.querySelector(".social-card .data");
var selfcare = document.querySelector(".selfcare-card .data");
var daily = document.querySelector(".timeline span:nth-child(1)");
var weekly = document.querySelector(".timeline span:nth-child(2)");
var monthly = document.querySelector(".timeline span:nth-child(3)");

daily.addEventListener("click", function () {
  daily.style.opacity = 1;
  weekly.style.opacity = 0.5;
  monthly.style.opacity = 0.5;
  work.innerHTML = "5hrs    <span>Yesterday - 7hrs</span>";
  play.innerHTML = "1hrs    <span>Yesterday - 2hrs</span>";
  study.innerHTML = "0hrs    <span>Yesterday - 1hrs</span>";
  exercise.innerHTML = "1hrs    <span>Yesterday - 1hrs</span>";
  social.innerHTML = "1hrs    <span>Yesterday - 3hrs</span>";
  selfcare.innerHTML = "0hrs    <span>Yesterday - 1hrs</span>";
});

weekly.addEventListener("click", function () {
  daily.style.opacity = 0.5;
  weekly.style.opacity = 1;
  monthly.style.opacity = 0.5;
  work.innerHTML = "  32hrs <span>Last week - 36hrs</span>";
  play.innerHTML = "10hrs <span>Last week - 8hrs</span>";
  study.innerHTML = "4hrs    <span>Last week- 7hrs</span>";
  exercise.innerHTML = "4hrs    <span>Last week- 5hrs</span>";
  social.innerHTML = "5hrs    <span>Last week- 10hrs</span>";
  selfcare.innerHTML = "2hrs    <span>Last week- 2hrs</span>";
});

monthly.addEventListener("click", function () {
  daily.style.opacity = 0.5;
  weekly.style.opacity = 0.5;
  monthly.style.opacity = 1;
  work.innerHTML = "103hrs <span>Last month - 128hrs</span>";
  play.innerHTML = "23hrs <span>Last month - 29hrs</span>";
  study.innerHTML = "13hrs <span>Last month - 19hrs</span>";
  exercise.innerHTML = "11hrs <span>Last month - 18hrs</span>";
  social.innerHTML = "21hrs <span>Last month - 23hrs</span>";
  selfcare.innerHTML = "7hrs <span>Last month - 11hrs</span>";
});
