// @ts-nocheck
"use strict";

let selectedDegree = "";
let selectedInterest = "";


/* =========================
   START APP
========================= */

function startApp() {
    showScreen("degreeScreen");
}


/* =========================
   DEGREE SELECTION
========================= */

function selectBTech() {
    selectedDegree = "B.Tech / B.E";
    showScreen("interestScreen");
}

function selectBSc() {
    selectedDegree = "B.Sc";
    showScreen("interestScreen");
}

function selectBCom() {
    selectedDegree = "B.Com";
    showScreen("interestScreen");
}

function selectBA() {
    selectedDegree = "B.A";
    showScreen("interestScreen");
}

function selectBCA() {
    selectedDegree = "BCA";
    showScreen("interestScreen");
}

function selectBBA() {
    selectedDegree = "BBA";
    showScreen("interestScreen");
}


/* =========================
   INTEREST SELECTION
========================= */

function selectIT() {
    selectedInterest = "IT / Software";
    showResult();
}

function selectGovernment() {
    selectedInterest = "Government Jobs";
    showResult();
}

function selectPrivate() {
    selectedInterest = "Private Jobs";
    showResult();
}

function selectHigherStudies() {
    selectedInterest = "Higher Studies";
    showResult();
}

function selectBusiness() {
    selectedInterest = "Business";
    showResult();
}

function selectAbroad() {
    selectedInterest = "Abroad";
    showResult();
}


/* =========================
   SCREEN CONTROL
========================= */

function showScreen(screenId) {

    const selectedScreen =
        document.getElementById(screenId);

    if (!selectedScreen) {
        console.log("Screen not found: " + screenId);
        return;
    }

    const screens =
        document.querySelectorAll(".screen");

    screens.forEach(function(screen) {
        screen.classList.remove("active");
    });

    selectedScreen.classList.add("active");
}


/* =========================
   SHOW RESULT
========================= */

function showResult() {

    generateCareer();

    showScreen("resultScreen");
}


/* =========================
   SMART CAREER ENGINE
========================= */

function generateCareer() {

    let careerTitle = "";
    let careerOptions = "";
    let salary = "";
    let learningTime = "";
    let skills = "";
    let jobRoles = "";
    let roadmap = "";


    /* B.TECH / B.E + IT */

    if (
        selectedDegree === "B.Tech / B.E" &&
        selectedInterest === "IT / Software"
    ) {

        careerTitle =
            "💻 Technology Career Path";

        careerOptions =
            "Software Developer\n" +
            "Frontend Developer\n" +
            "Backend Developer\n" +
            "Full Stack Developer";

        salary =
            "₹3 - ₹8 LPA for many entry-level roles";

        learningTime =
            "6 - 12 months";

        skills =
            "Programming\n" +
            "HTML & CSS\n" +
            "JavaScript\n" +
            "Python / Java\n" +
            "Git & GitHub\n" +
            "Problem Solving";

        jobRoles =
            "Software Developer\n" +
            "Web Developer\n" +
            "Frontend Developer\n" +
            "Backend Developer";

        roadmap =
            "Month 1 → Programming Basics\n" +
            "Month 2 → HTML, CSS & JavaScript\n" +
            "Month 3 → Learn Python / Java\n" +
            "Month 4 → Build Projects\n" +
            "Month 5 → GitHub + Resume\n" +
            "Month 6 → Apply for Jobs";
    }


    /* BCA + IT */

    else if (
        selectedDegree === "BCA" &&
        selectedInterest === "IT / Software"
    ) {

        careerTitle =
            "💻 Software & Web Development";

        careerOptions =
            "Web Developer\n" +
            "Software Developer\n" +
            "Frontend Developer\n" +
            "QA Tester";

        salary =
            "₹2.5 - ₹6 LPA for many entry-level roles";

        learningTime =
            "6 - 12 months";

        skills =
            "HTML\n" +
            "CSS\n" +
            "JavaScript\n" +
            "Python\n" +
            "SQL\n" +
            "Git";

        jobRoles =
            "Web Developer\n" +
            "Junior Software Developer\n" +
            "QA Tester\n" +
            "Support Engineer";

        roadmap =
            "Month 1 → HTML & CSS\n" +
            "Month 2 → JavaScript\n" +
            "Month 3 → Python + SQL\n" +
            "Month 4 → Projects\n" +
            "Month 5 → Resume + GitHub\n" +
            "Month 6 → Job Applications";
    }


    /* B.COM + GOVERNMENT */

    else if (
        selectedDegree === "B.Com" &&
        selectedInterest === "Government Jobs"
    ) {

        careerTitle =
            "🏛️ Banking & Government Career";

        careerOptions =
            "Banking Exams\n" +
            "SSC Exams\n" +
            "State Government Jobs\n" +
            "Insurance Exams";

        salary =
            "Depends on the exam, post and pay level";

        learningTime =
            "6 - 18 months";

        skills =
            "Quantitative Aptitude\n" +
            "Reasoning\n" +
            "English\n" +
            "General Awareness\n" +
            "Current Affairs";

        jobRoles =
            "Bank Clerk\n" +
            "Bank PO\n" +
            "SSC Roles\n" +
            "State Government Roles";

        roadmap =
            "Month 1 → Choose target exam\n" +
            "Month 2 → Maths Basics\n" +
            "Month 3 → Reasoning\n" +
            "Month 4 → English + GK\n" +
            "Month 5 → Previous Papers\n" +
            "Month 6 → Mock Tests";
    }


    /* B.COM + PRIVATE */

    else if (
        selectedDegree === "B.Com" &&
        selectedInterest === "Private Jobs"
    ) {

        careerTitle =
            "💼 Commerce & Corporate Career";

        careerOptions =
            "Accountant\n" +
            "Financial Analyst\n" +
            "HR Executive\n" +
            "Business Operations";

        salary =
            "₹2.5 - ₹7 LPA depending on role and company";

        learningTime =
            "3 - 6 months";

        skills =
            "Advanced Excel\n" +
            "Tally / Accounting Basics\n" +
            "Communication\n" +
            "Financial Analysis\n" +
            "MS Office";

        jobRoles =
            "Accountant\n" +
            "Finance Executive\n" +
            "HR Executive\n" +
            "Operations Executive";

        roadmap =
            "Month 1 → Excel\n" +
            "Month 2 → Accounting Skills\n" +
            "Month 3 → Tally / Finance Basics\n" +
            "Month 4 → Resume\n" +
            "Month 5 → Interview Practice\n" +
            "Month 6 → Apply for Jobs";
    }


    /* BBA + BUSINESS */

    else if (
        selectedDegree === "BBA" &&
        selectedInterest === "Business"
    ) {

        careerTitle =
            "🚀 Business & Entrepreneurship";

        careerOptions =
            "Entrepreneur\n" +
            "Startup Founder\n" +
            "Digital Business\n" +
            "Freelancing";

        salary =
            "Business income varies based on performance";

        learningTime =
            "3 - 12 months to start";

        skills =
            "Marketing\n" +
            "Sales\n" +
            "Finance Basics\n" +
            "Leadership\n" +
            "Communication";

        jobRoles =
            "Entrepreneur\n" +
            "Business Development Executive\n" +
            "Marketing Executive\n" +
            "Freelancer";

        roadmap =
            "Month 1 → Find an Idea\n" +
            "Month 2 → Market Research\n" +
            "Month 3 → Customer Research\n" +
            "Month 4 → Build Small Product\n" +
            "Month 5 → Marketing\n" +
            "Month 6 → Launch & Improve";
    }


    /* BA + HIGHER STUDIES */

    else if (
        selectedDegree === "B.A" &&
        selectedInterest === "Higher Studies"
    ) {

        careerTitle =
            "🎓 Higher Education Path";

        careerOptions =
            "Master's Degree\n" +
            "MBA\n" +
            "Competitive Exams\n" +
            "Professional Courses";

        salary =
            "Depends on the specialization and career selected";

        learningTime =
            "1 - 3 years";

        skills =
            "Communication\n" +
            "Research\n" +
            "Writing\n" +
            "Subject Knowledge";

        jobRoles =
            "Depends on selected specialization";

        roadmap =
            "Month 1 → Explore Courses\n" +
            "Month 2 → Compare Colleges\n" +
            "Month 3 → Check Eligibility\n" +
            "Month 4 → Entrance Preparation\n" +
            "Month 5 → Applications\n" +
            "Month 6 → Admission Planning";
    }


    /* DEFAULT */

    else {

        careerTitle =
            "🎯 Recommended Career Path";

        careerOptions =
            getGeneralCareerOptions();

        salary =
            getGeneralSalary();

        learningTime =
            "3 - 12 months";

        skills =
            getGeneralSkills();

        jobRoles =
            getGeneralJobs();

        roadmap =
            getGeneralRoadmap();
    }


    /* =========================
       DISPLAY RESULT
    ========================= */

    const resultText =
        document.getElementById("resultText");

    const careerOptionsElement =
        document.getElementById("careerOptions");

    const salaryElement =
        document.getElementById("salary");

    const learningTimeElement =
        document.getElementById("learningTime");

    const skillsElement =
        document.getElementById("skills");

    const jobRolesElement =
        document.getElementById("jobRoles");

    const careerPath =
        document.getElementById("careerPath");


    if (resultText) {

        resultText.innerText =
            careerTitle +
            "\n\n🎓 Degree: " +
            selectedDegree +
            "\n🧭 Interest: " +
            selectedInterest;
    }

    if (careerOptionsElement) {
        careerOptionsElement.innerText =
            careerOptions;
    }

    if (salaryElement) {
        salaryElement.innerText =
            salary;
    }

    if (learningTimeElement) {
        learningTimeElement.innerText =
            learningTime;
    }

    if (skillsElement) {
        skillsElement.innerText =
            skills;
    }

    if (jobRolesElement) {
        jobRolesElement.innerText =
            jobRoles;
    }

    if (careerPath) {

        careerPath.innerText =
            "🎯 CAREER OPTIONS\n\n" +
            careerOptions +

            "\n\n💰 EXPECTED SALARY\n\n" +
            salary +

            "\n\n⏱️ LEARNING TIME\n\n" +
            learningTime +

            "\n\n📚 SKILLS TO LEARN\n\n" +
            skills +

            "\n\n💼 JOB ROLES\n\n" +
            jobRoles +

            "\n\n🗺️ 6-MONTH ROADMAP\n\n" +
            roadmap;
    }
}


/* =========================
   GENERAL RECOMMENDATIONS
========================= */

function getGeneralCareerOptions() {

    if (selectedInterest === "IT / Software") {
        return (
            "Web Developer\n" +
            "Software Developer\n" +
            "QA Tester"
        );
    }

    if (selectedInterest === "Government Jobs") {
        return (
            "SSC\n" +
            "Banking\n" +
            "Railway\n" +
            "State Government Jobs"
        );
    }

    if (selectedInterest === "Private Jobs") {
        return (
            "HR\n" +
            "Sales\n" +
            "Operations\n" +
            "Customer Support"
        );
    }

    if (selectedInterest === "Higher Studies") {
        return (
            "MBA\n" +
            "Master's Degree\n" +
            "PG Courses"
        );
    }

    if (selectedInterest === "Business") {
        return (
            "Startup\n" +
            "Small Business\n" +
            "Freelancing"
        );
    }

    return (
        "Higher Studies\n" +
        "Private Jobs\n" +
        "Government Jobs"
    );
}


function getGeneralSalary() {

    if (selectedInterest === "IT / Software") {
        return "₹3 - ₹8 LPA for many entry-level roles";
    }

    if (selectedInterest === "Private Jobs") {
        return "₹2.5 - ₹7 LPA depending on role";
    }

    if (selectedInterest === "Government Jobs") {
        return "Depends on exam, post and pay level";
    }

    return "Depends on career path and experience";
}


function getGeneralSkills() {

    if (selectedInterest === "IT / Software") {
        return (
            "Programming\n" +
            "Web Development\n" +
            "Problem Solving"
        );
    }

    if (selectedInterest === "Government Jobs") {
        return (
            "Maths\n" +
            "Reasoning\n" +
            "English\n" +
            "General Awareness"
        );
    }

    if (selectedInterest === "Business") {
        return (
            "Marketing\n" +
            "Sales\n" +
            "Communication\n" +
            "Leadership"
        );
    }

    return (
        "Communication\n" +
        "Computer Skills\n" +
        "Problem Solving"
    );
}


function getGeneralJobs() {

    if (selectedInterest === "IT / Software") {
        return (
            "Web Developer\n" +
            "Software Developer\n" +
            "QA Tester"
        );
    }

    if (selectedInterest === "Government Jobs") {
        return (
            "SSC Jobs\n" +
            "Banking Jobs\n" +
            "Railway Jobs"
        );
    }

    if (selectedInterest === "Business") {
        return (
            "Entrepreneur\n" +
            "Business Development\n" +
            "Freelancer"
        );
    }

    return (
        "Executive Roles\n" +
        "Support Roles\n" +
        "Management Roles"
    );
}


function getGeneralRoadmap() {

    return (
        "Month 1 → Explore Career Options\n" +
        "Month 2 → Learn Basic Skills\n" +
        "Month 3 → Practice Skills\n" +
        "Month 4 → Build Projects / Prepare\n" +
        "Month 5 → Resume & Interview\n" +
        "Month 6 → Apply for Opportunities"
    );
}


/* =========================
   VIEW JOBS
========================= */

function viewJobs() {

    showScreen("jobsScreen");

    const jobSearch =
        document.getElementById("jobSearch");

    const jobResults =
        document.getElementById("jobResults");

    if (jobSearch) {
        jobSearch.value = "";
    }

    if (jobResults) {
        jobResults.innerText =
            "🔎 Search for a job role above.";
    }
}


/* =========================
   SEARCH JOBS
========================= */

function searchJobs() {

    const jobSearch =
        document.getElementById("jobSearch");

    const jobResults =
        document.getElementById("jobResults");

    if (!jobSearch || !jobResults) {
        return;
    }

    const searchText =
        jobSearch.value.trim().toLowerCase();

    if (searchText === "") {

        jobResults.innerText =
            "🔎 Please enter a job role.";

        return;
    }

    const jobs = [

        {
            name: "💻 Software Developer",
            keyword: "software developer"
        },

        {
            name: "🌐 Web Developer",
            keyword: "web developer"
        },

        {
            name: "⚛️ Frontend Developer",
            keyword: "frontend developer"
        },

        {
            name: "🖥️ Backend Developer",
            keyword: "backend developer"
        },

        {
            name: "🧪 QA Tester",
            keyword: "qa tester"
        },

        {
            name: "📊 Data Analyst",
            keyword: "data analyst"
        },

        {
            name: "🐍 Python Developer",
            keyword: "python developer"
        },

        {
            name: "☕ Java Developer",
            keyword: "java developer"
        }
    ];


    const results =
        jobs.filter(function(job) {

            return (
                job.keyword.includes(searchText) ||
                searchText.includes(job.keyword)
            );
        });


    if (results.length === 0) {

        jobResults.innerHTML =
            "❌ No jobs found for <b>" +
            searchText +
            "</b><br><br>" +
            "Try Software Developer, Web Developer or QA Tester.";

        return;
    }


    let html =
        "<h3>🔎 Jobs Found</h3>";


    results.forEach(function(job) {

        const role =
            encodeURIComponent(job.keyword);

        html += `

            <div class="job-item">

                <div class="job-name">
                    ${job.name}
                </div>

                <div class="job-buttons">

                    <button
                        class="apply-btn"
                        onclick="window.open(
                        'https://www.linkedin.com/jobs/search/?keywords=${role}',
                        '_blank')">
                        LinkedIn
                    </button>

                    <button
                        class="apply-btn"
                        onclick="window.open(
                        'https://www.naukri.com/${job.keyword.replace(/ /g, '-')}-jobs',
                        '_blank')">
                        Naukri
                    </button>

                    <button
                        class="apply-btn"
                        onclick="window.open(
                        'https://www.indeed.com/jobs?q=${role}',
                        '_blank')">
                        Indeed
                    </button>

                </div>

            </div>
        `;
    });


    jobResults.innerHTML = html;
}


/* =========================
   SAVE CAREER PLAN
========================= */

function saveCareerPlan() {

    const plan = {

        degree: selectedDegree,

        interest: selectedInterest,

        savedAt:
            new Date().toLocaleDateString()
    };


    localStorage.setItem(
        "myCareerPlan",
        JSON.stringify(plan)
    );


    alert(
        "✅ Career Plan Saved Successfully!"
    );
}


/* =========================
   SHOW MY CAREER PLAN
========================= */

function showCareerPlan() {

    const saved =
        localStorage.getItem("myCareerPlan");


    if (!saved) {

        alert(
            "⚠️ First save your Career Plan."
        );

        return;
    }


    const plan =
        JSON.parse(saved);


    showScreen(
        "careerPlanScreen"
    );


    const degree =
        document.getElementById("savedDegree");

    const interest =
        document.getElementById("savedInterest");

    const savedDate =
        document.getElementById("savedDate");


    if (degree) {

        degree.innerText =
            plan.degree ||
            "Not Selected";
    }


    if (interest) {

        interest.innerText =
            plan.interest ||
            "Not Selected";
    }


    if (savedDate) {

        savedDate.innerText =
            plan.savedAt ||
            "Not Available";
    }
}


/* =========================
   GOVERNMENT JOBS
========================= */

function openGovJobs(type) {

    let url = "";


    if (type === "SSC") {

        url =
            "https://ssc.gov.in/";
    }

    else if (type === "Banking") {

        url =
            "https://www.ibps.in/";
    }

    else if (type === "Railway") {

        url =
            "https://www.rrbapply.gov.in/";
    }

    else if (type === "State Government") {

        url =
            "https://www.ncs.gov.in/";
    }


    if (url !== "") {

        window.open(
            url,
            "_blank"
        );
    }
}


/* =========================
   CAREER PROGRESS
========================= */

function showProgress() {

    showScreen(
        "progressScreen"
    );

    loadProgress();
}


function saveProgress() {

    const checkboxes =
        document.querySelectorAll(
            "#progressScreen input[type='checkbox']"
        );


    let progress = [];


    checkboxes.forEach(
        function(box) {

            progress.push(
                box.checked
            );
        }
    );


    localStorage.setItem(
        "nextStepProgress",
        JSON.stringify(progress)
    );


    updateProgress();
}


function loadProgress() {

    const saved =
        localStorage.getItem(
            "nextStepProgress"
        );


    if (!saved) {

        updateProgress();

        return;
    }


    const progress =
        JSON.parse(saved);


    const checkboxes =
        document.querySelectorAll(
            "#progressScreen input[type='checkbox']"
        );


    checkboxes.forEach(
        function(box, index) {

            box.checked =
                progress[index] || false;
        }
    );


    updateProgress();
}


function updateProgress() {

    const checkboxes =
        document.querySelectorAll(
            "#progressScreen input[type='checkbox']"
        );


    let completed = 0;


    checkboxes.forEach(
        function(box) {

            if (box.checked) {
                completed++;
            }
        }
    );


    let percentage = 0;


    if (checkboxes.length > 0) {

        percentage =
            Math.round(
                (completed /
                    checkboxes.length) *
                100
            );
    }


    const progressText =
        document.getElementById(
            "progressText"
        );


    if (progressText) {

        progressText.innerText =
            "Progress: " +
            percentage +
            "%";
    }
}


/* =========================
   PROFILE
========================= */

function showProfile() {

    showScreen(
        "profileScreen"
    );


    const name =
        localStorage.getItem(
            "nextStepName"
        );


    const profileName =
        document.getElementById(
            "profileName"
        );


    const profileDegree =
        document.getElementById(
            "profileDegree"
        );


    const profileInterest =
        document.getElementById(
            "profileInterest"
        );


    const profileProgress =
        document.getElementById(
            "profileProgress"
        );


    if (profileName) {

        profileName.innerText =
            name ||
            "Not Added";
    }


    if (profileDegree) {

        profileDegree.innerText =
            selectedDegree ||
            "Not Selected";
    }


    if (profileInterest) {

        profileInterest.innerText =
            selectedInterest ||
            "Not Selected";
    }


    if (profileProgress) {

        const saved =
            localStorage.getItem(
                "nextStepProgress"
            );


        if (saved) {

            const progress =
                JSON.parse(saved);

            let completed = 0;


            progress.forEach(
                function(item) {

                    if (item === true) {
                        completed++;
                    }
                }
            );


            const percentage =
                Math.round(
                    (completed /
                        progress.length) *
                    100
                );


            profileProgress.innerText =
                percentage + "%";

        } else {

            profileProgress.innerText =
                "0%";
        }
    }
}


function editProfile() {

    const name =
        prompt(
            "Enter your name:"
        );


    if (
        name &&
        name.trim() !== ""
    ) {

        localStorage.setItem(
            "nextStepName",
            name.trim()
        );


        showProfile();
    }
}


/* =========================
   RESTART
========================= */

function restartApp() {

    selectedDegree = "";

    selectedInterest = "";

    showScreen(
        "welcomeScreen"
    );
}