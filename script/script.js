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

mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("interview-btn")) {
    const parentNode = event.target.closest(".jcard");

    const jobName = parentNode.querySelector(".jobName").innerText;
    const infoName = parentNode.querySelector(".infoName").innerText;
    const remote = parentNode.querySelector(".remote").innerText;
    const notes = parentNode.querySelector(".notes").innerText;

    parentNode.querySelector(".state").innerText = "INTERVIEW";
    parentNode.querySelector(".state").classList.remove("bg-blue-50");
    parentNode
      .querySelector(".state")
      .classList.add("bg-green-100", "text-green-700");

    const cardInfo = {
      jobName,
      infoName,
      remote,
      state: "INTERVIEW",
      notes,
    };

    const jobExist = interviewList.find(
      (item) => item.jobName == cardInfo.jobName,
    );

    if (!jobExist) {
      interviewList.push(cardInfo);
    }

    rejectedList = rejectedList.filter(
      (item) => item.jobName != cardInfo.jobName,
    );

    calculateCount();
  } else if (event.target.classList.contains("Rejected-btn")) {
    const parentNode = event.target.closest(".jcard");

    const jobName = parentNode.querySelector(".jobName").innerText;
    const infoName = parentNode.querySelector(".infoName").innerText;
    const remote = parentNode.querySelector(".remote").innerText;
    const notes = parentNode.querySelector(".notes").innerText;

    parentNode.querySelector(".state").innerText = "REJECTED";
    parentNode.querySelector(".state").classList.remove("bg-blue-50");
    parentNode
      .querySelector(".state")
      .classList.add("bg-red-100", "text-red-700");

    const cardInfo = {
      jobName,
      infoName,
      remote,
      state: "REJECTED",
      notes,
    };

    const jobExist = rejectedList.find(
      (item) => item.jobName == cardInfo.jobName,
    );

    if (!jobExist) {
      rejectedList.push(cardInfo);
    }

    interviewList = interviewList.filter(
      (item) => item.jobName != cardInfo.jobName,
    );

    calculateCount();
  }
});
