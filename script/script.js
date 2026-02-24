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

// filterd
const filterSection = document.getElementById("filtered-section");
let currentStatus = "all";

function calculateCount() {
  total.innerText = allCards.children.length;
  interview.innerText = interviewList.length;
  rejected.innerText = rejectedList.length;
  jobs.innerText = allCards.children.length;
}

calculateCount();

function toggleStyle(id) {
  allFilterBtn.classList.remove("btn-primary", "text-white");
  interviewFilterBtn.classList.remove("btn-primary", "text-white");
  rejectedFilterBtn.classList.remove("btn-primary", "text-white");

  allFilterBtn.classList.add("bg-gray-200", "text-black");
  interviewFilterBtn.classList.add("bg-gray-200", "text-black");
  rejectedFilterBtn.classList.add("bg-gray-200", "text-black");

  const selectedBtn = document.getElementById(id);

  selectedBtn.classList.remove("bg-gray-200", "text-black");
  selectedBtn.classList.add("btn-primary", "text-white");

  currentStatus = id;

  if (id === "all-filter-btn") {
    allCards.classList.remove("hidden");
    filterSection.classList.add("hidden");
  } else if (id === "interview-filter-btn") {
    allCards.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderInterview();
  } else if (id === "rejected-filter-btn") {
    allCards.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderRejected();
  }
}

mainContainer.addEventListener("click", function (event) {
  //  INTERVIEW
  if (event.target.classList.contains("interview-btn")) {
    const parentNode = event.target.closest(".jcard");

    const jobName = parentNode.querySelector(".jobName").innerText;
    const infoName = parentNode.querySelector(".infoName").innerText;
    const remote = parentNode.querySelector(".remote").innerText;
    const notes = parentNode.querySelector(".notes").innerText;

    const stateEl = parentNode.querySelector(".state");

    stateEl.innerText = "INTERVIEW";

    stateEl.classList.remove("bg-blue-50", "bg-red-100", "text-red-700");
    stateEl.classList.add("bg-green-100", "text-green-700");

    const cardInfo = { jobName, infoName, remote, state: "INTERVIEW", notes };

    const jobExist = interviewList.find(
      (item) => item.jobName === cardInfo.jobName,
    );

    if (!jobExist) interviewList.push(cardInfo);

    rejectedList = rejectedList.filter(
      (item) => item.jobName !== cardInfo.jobName,
    );

    calculateCount();

    //instant render update if filter active
    if (currentStatus === "interview-filter-btn") renderInterview();
    if (currentStatus === "rejected-filter-btn") renderRejected();
  }

  //REJECTED
  else if (event.target.classList.contains("Rejected-btn")) {
    const parentNode = event.target.closest(".jcard");

    const jobName = parentNode.querySelector(".jobName").innerText;
    const infoName = parentNode.querySelector(".infoName").innerText;
    const remote = parentNode.querySelector(".remote").innerText;
    const notes = parentNode.querySelector(".notes").innerText;

    const stateEl = parentNode.querySelector(".state");

    stateEl.innerText = "REJECTED";

    stateEl.classList.remove("bg-blue-50", "bg-green-100", "text-green-700");
    stateEl.classList.add("bg-red-100", "text-red-700");

    const cardInfo = { jobName, infoName, remote, state: "REJECTED", notes };

    const jobExist = rejectedList.find(
      (item) => item.jobName === cardInfo.jobName,
    );

    if (!jobExist) rejectedList.push(cardInfo);

    interviewList = interviewList.filter(
      (item) => item.jobName !== cardInfo.jobName,
    );

    calculateCount();

    //instant render update
    if (currentStatus === "interview-filter-btn") renderInterview();
    if (currentStatus === "rejected-filter-btn") renderRejected();
  }

  //DELETE
  else if (event.target.closest(".btn-delete")) {
    const parentNode = event.target.closest(".jcard");
    const jobName = parentNode.querySelector(".jobName").innerText;

    //remove from both arrays
    interviewList = interviewList.filter((item) => item.jobName !== jobName);
    rejectedList = rejectedList.filter((item) => item.jobName !== jobName);

    parentNode.remove();

    calculateCount();

    //re-render if filter active
    if (currentStatus === "interview-filter-btn") renderInterview();
    if (currentStatus === "rejected-filter-btn") renderRejected();
  }
});

const emptyState = document.getElementById("empty-state");

//RENDER INTERVIEW
function renderInterview() {
  filterSection.innerHTML = "";
  filterSection.appendChild(emptyState);

  if (interviewList.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");

  for (let job of interviewList) {
    let div = document.createElement("div");
    div.className =
      "jcard flex justify-between items-start mt-8 p-8 rounded-xl bg-white shadow-sm";

    div.innerHTML = `
      <div class="space-y-6">
        <div>
          <p class="jobName text-2xl font-bold">${job.jobName}</p>
          <p class="infoName text-[#64748B]">${job.infoName}</p>
        </div>

        <p class="remote text-[#64748B]">${job.remote}</p>

        <p class="state inline-flex items-center px-3 py-2 text-xs font-semibold rounded bg-green-100 text-green-700">
          INTERVIEW
        </p>

        <p class="notes text-[#64748B]">${job.notes}</p>

        <div class="flex gap-5">
          <button class="interview-btn btn text-green-400 border-green-400">INTERVIEW</button>
          <button class="Rejected-btn btn text-red-400 border-red-400">REJECTED</button>
        </div>
      </div>

      <div class="btn-delete w-10 h-9 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition">
        <img src="./assets/Delete.png" class="w-4 h-4 opacity-60">
      </div>
    `;

    filterSection.appendChild(div);
  }
}

// RENDER REJECTED
function renderRejected() {
  filterSection.innerHTML = "";
  filterSection.appendChild(emptyState);

  if (rejectedList.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");

  for (let job of rejectedList) {
    let div = document.createElement("div");
    div.className =
      "jcard flex justify-between items-start mt-8 p-8 rounded-xl bg-white shadow-sm";

    div.innerHTML = `
      <div class="space-y-6">
        <div>
          <p class="jobName text-2xl font-bold">${job.jobName}</p>
          <p class="infoName text-[#64748B]">${job.infoName}</p>
        </div>

        <p class="remote text-[#64748B]">${job.remote}</p>

        <p class="state inline-flex items-center px-3 py-2 text-xs font-semibold rounded bg-red-100 text-red-700">
          REJECTED
        </p>

        <p class="notes text-[#64748B]">${job.notes}</p>

        <div class="flex gap-5">
          <button class="interview-btn btn text-green-400 border-green-400">INTERVIEW</button>
          <button class="Rejected-btn btn text-red-400 border-red-400">REJECTED</button>
        </div>
      </div>

      <div class="btn-delete w-10 h-9 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition">
        <img src="./assets/Delete.png" class="w-4 h-4 opacity-60">
      </div>
    `;

    filterSection.appendChild(div);
  }
}
