let interviewList = [];
let rejectedList = [];

let total = document.getElementById("total");
let interview = document.getElementById("interviewCount");
let rejected = document.getElementById("rejectedCount");
let jobs = document.getElementById("jobs");

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

const allCards = document.getElementById("job-cards");

// delegation
const mainContainer = document.querySelector("main");

function calculateCount() {
  total.innerText = allCards.children.length;
  interview.innerText = interviewList.length;
  rejected.innerText = rejectedList.length;
}

calculateCount();

function toggleStyle(id) {
  //button reset
  allFilterBtn.classList.remove("btn-primary", "text-white");
  interviewFilterBtn.classList.remove("btn-primary", "text-white");
  rejectedFilterBtn.classList.remove("btn-primary", "text-white");

  allFilterBtn.classList.add("bg-gray-200", "text-black");
  interviewFilterBtn.classList.add("bg-gray-200", "text-black");
  rejectedFilterBtn.classList.add("bg-gray-200", "text-black");

  //  Selected button active style
  const selectedBtn = document.getElementById(id);

  selectedBtn.classList.remove("bg-gray-200", "text-black");
  selectedBtn.classList.add("btn-primary", "text-white");
}
