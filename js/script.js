let currentTab = 'all';

const tabActive = ['bg-[#3B82F6]', 'text-[#FFFFFF]'];
const tabInactive = ['bg-[#FFFFFF]', 'text-[#64748B]'];

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");
const emptyState = document.getElementById("empty-state");

console.log(allContainer,interviewContainer,rejectedContainer)
function switchTab(tab){
    const tabs = ["all","interview","rejected"];

    for (const t of tabs) {
        const tabName = document.getElementById("tab-" + t);
        currentTab = tab;
        if(t === tab){
            tabName.classList.remove(...tabInactive)
            tabName.classList.add(...tabActive)
        }
        else{
            tabName.classList.remove(...tabActive)
            tabName.classList.add(...tabInactive)
        }
    }

    const pages = [allContainer,interviewContainer,rejectedContainer];
    for (const section of pages) {
        section.classList.add("hidden")
    }
    emptyState.classList.add("hidden");

    if(tab === 'all'){
        allContainer.classList.remove("hidden");
        if(allContainer.children.length < 1){
            emptyState.classList.remove("hidden")
        }
    }
    else if(tab === 'interview'){
        interviewContainer.classList.remove("hidden");
        if(interviewContainer.children.length < 1){
            emptyState.classList.remove("hidden")
        }
    }
    else if(tab === 'rejected'){
        rejectedContainer.classList.remove("hidden");
        if(rejectedContainer.children.length < 1){
            emptyState.classList.remove("hidden")
        }
    }
    updateCount();
}

const totalCount = document.getElementById('total-count');
const interviewCount = document.getElementById('interview-count');
const rejectedCount = document.getElementById('rejected-count');
const totalJobs = document.getElementById("total-jobs")

switchTab(currentTab);

document.getElementById("jobs-container").addEventListener("click", function(event){
    const clickedElement = (event.target);
    const card = clickedElement.closest(".card");
    const parent = card.parentNode;
    const status = card.querySelector(".applied-status");

    if(clickedElement.classList.contains("interview")){
        status.innerText = "Interviewed";
        interviewContainer.appendChild(card);
        updateCount();
    }
    if(clickedElement.classList.contains("rejected")){
        status.innerText = "Rejected"
        rejectedContainer.appendChild(card);
        updateCount();
    }
    if(clickedElement.classList.contains("delete")){
        parent.removeChild(card);
        updateCount();
    }
})

function updateCount(){
    // totalCount.innerText = allContainer.children.length;
    // interviewCount.innerText = interviewContainer.children.length;
    // rejectedCount.innerText = rejectedContainer.children.length;

    const counts = {
        all: allContainer.children.length,
        interview: interviewContainer.children.length,
        rejected: rejectedContainer.children.length
    }
    
    totalCount.innerText = counts["all"];
    interviewCount.innerText = counts["interview"];
    rejectedCount.innerText = counts["rejected"];
    totalJobs.innerText = counts[currentTab];

    if(counts[currentTab] < 1){
        emptyState.classList.remove('hidden');
    }
    else{
        emptyState.classList.add('hidden');
    }
}
updateCount();