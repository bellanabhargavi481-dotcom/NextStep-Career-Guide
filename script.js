// @ts-nocheck
"use strict";

/* =========================================================
   NEXTSTEP - CAREER GUIDE
   COMPLETE SCRIPT.JS
========================================================= */

let selectedDegree = "";
let selectedCourse = "";
let selectedBScGroup = "";
let selectedInterest = "";


/* =========================================================
   COURSE DATA
========================================================= */

const courseData = {

    "B.Tech / B.E": [
        "Computer Science Engineering (CSE)",
        "Information Technology (IT)",
        "Artificial Intelligence & Machine Learning (AI & ML)",
        "Artificial Intelligence & Data Science",
        "Electronics & Communication Engineering (ECE)",
        "Electrical & Electronics Engineering (EEE)",
        "Mechanical Engineering",
        "Civil Engineering",
        "Chemical Engineering"
    ],

    "B.Com": [
        "B.Com General",
        "B.Com Computer Applications",
        "B.Com Honours",
        "B.Com Accounting & Finance",
        "B.Com Banking & Insurance",
        "B.Com Taxation",
        "B.Com Business Analytics"
    ],

    "B.A": [
        "B.A English",
        "B.A Economics",
        "B.A History",
        "B.A Political Science",
        "B.A Sociology",
        "B.A Psychology",
        "B.A Journalism & Mass Communication",
        "B.A Public Administration",
        "B.A Telugu"
    ],

    "BCA": [
        "BCA General",
        "BCA Data Science",
        "BCA Artificial Intelligence",
        "BCA Cyber Security",
        "BCA Cloud Computing",
        "BCA Web Development",
        "BCA Mobile App Development"
    ],

    "BBA": [
        "BBA General",
        "BBA Finance",
        "BBA Marketing",
        "BBA Human Resources",
        "BBA International Business",
        "BBA Business Analytics",
        "BBA Digital Marketing",
        "BBA Entrepreneurship"
    ],

    "B.Sc": [
        "B.Sc Computer Science",
        "B.Sc Mathematics",
        "B.Sc Physics",
        "B.Sc Chemistry",
        "B.Sc Statistics",
        "B.Sc Biotechnology",
        "B.Sc Microbiology",
        "B.Sc Botany",
        "B.Sc Zoology",
        "B.Sc Electronics"
    ]
};


/* =========================================================
   CAREER DATA
========================================================= */

const careerData = {

    "IT / Software": {
        career:
            "Software Development, Web Development, Data Analytics, Cloud Computing, Cyber Security",

        salary:
            "₹3 LPA – ₹12+ LPA",

        time:
            "4 – 8 months",

        skills:
            "Programming, Problem Solving, Git, SQL, Communication",

        roles:
            "Software Developer, Web Developer, Frontend Developer, Backend Developer, Data Analyst",

        roadmap: [
            "Month 1 — Programming Basics",
            "Month 2 — HTML, CSS & JavaScript",
            "Month 3 — SQL & Git/GitHub",
            "Month 4 — Build Projects",
            "Month 5 — Resume & Interview Preparation",
            "Month 6 — Apply for Jobs & Internships"
        ]
    },

    "Government Jobs": {
        career:
            "SSC, Banking, Railway, State Government and other competitive examinations",

        salary:
            "₹3 LPA – ₹10+ LPA",

        time:
            "6 – 12 months",

        skills:
            "Quantitative Aptitude, Reasoning, English, General Awareness, Current Affairs",

        roles:
            "SSC Officer, Bank PO/Clerk, Railway Employee, State Government Jobs",

        roadmap: [
            "Month 1 — Exam Pattern & Basics",
            "Month 2 — Quantitative Aptitude",
            "Month 3 — Reasoning & English",
            "Month 4 — General Awareness & Current Affairs",
            "Month 5 — Previous Papers & Mock Tests",
            "Month 6 — Final Exam Preparation"
        ]
    },

    "Private Jobs": {
        career:
            "Corporate Jobs, Operations, Sales, HR, Finance and Customer Support",

        salary:
            "₹2.5 LPA – ₹8+ LPA",

        time:
            "2 – 6 months",

        skills:
            "Communication, MS Office, Teamwork, Problem Solving, Interview Skills",

        roles:
            "Executive, Analyst, HR Executive, Sales Executive, Operations Executive",

        roadmap: [
            "Month 1 — Professional Basics",
            "Month 2 — MS Office & Communication",
            "Month 3 — Domain Skills",
            "Month 4 — Resume & LinkedIn",
            "Month 5 — Interview Practice",
            "Month 6 — Job Applications"
        ]
    },

    "Higher Studies": {
        career:
            "M.Tech, MBA, MCA, M.Sc, M.Com, M.A and other postgraduate programs",

        salary:
            "Depends on specialization and career path",

        time:
            "1 – 3 years",

        skills:
            "Subject Knowledge, Research, Academic Writing, Communication",

        roles:
            "Postgraduate Student, Research Assistant, Lecturer, Specialist",

        roadmap: [
            "Month 1 — Select Higher Study",
            "Month 2 — Entrance Exam Research",
            "Month 3 — Entrance Preparation",
            "Month 4 — Applications & Documents",
            "Month 5 — Mock Tests / Preparation",
            "Month 6 — College Admission"
        ]
    },

    "Business": {
        career:
            "Startup, Entrepreneurship, Online Business, Retail Business and Consulting",

        salary:
            "Depends on business and revenue",

        time:
            "3 – 12 months",

        skills:
            "Marketing, Finance, Sales, Communication, Leadership",

        roles:
            "Entrepreneur, Business Owner, Marketing Manager, Sales Manager",

        roadmap: [
            "Month 1 — Business Idea",
            "Month 2 — Market Research",
            "Month 3 — Business Model",
            "Month 4 — Marketing & Sales",
            "Month 5 — Finance & Operations",
            "Month 6 — Launch & Growth"
        ]
    },

    "Abroad": {
        career:
            "International Higher Studies, International Jobs and Global Careers",

        salary:
            "Depends on country, qualification and job role",

        time:
            "6 – 18 months",

        skills:
            "English, IELTS/PTE, Communication, Technical Skills",

        roles:
            "International Student, Software Developer, Analyst, Business Professional",

        roadmap: [
            "Month 1 — Select Country & Course",
            "Month 2 — IELTS/PTE Preparation",
            "Month 3 — University Research",
            "Month 4 — Applications & Documents",
            "Month 5 — Visa & Financial Preparation",
            "Month 6 — Travel & Career Preparation"
        ]
    }
};


/* =========================================================
   START APP
========================================================= */

function startApp() {

    selectedDegree = "";
    selectedCourse = "";
    selectedBScGroup = "";
    selectedInterest = "";

    showScreen("degreeScreen");
}


/* =========================================================
   SCREEN FUNCTION
========================================================= */

function showScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach(function(screen) {
        screen.classList.remove("active");
    });

    const target = document.getElementById(screenId);

    if (target) {
        target.classList.add("active");
        window.scrollTo(0, 0);
    }
}


/* =========================================================
   DEGREE SELECTION
========================================================= */

function selectBTech() {
    selectDegree("B.Tech / B.E");
}

function selectBSc() {
    selectedDegree = "B.Sc";
    selectedCourse = "";

    showBScGroups();
}

function selectBCom() {
    selectDegree("B.Com");
}

function selectBA() {
    selectDegree("B.A");
}

function selectBCA() {
    selectDegree("BCA");
}

function selectBBA() {
    selectDegree("BBA");
}


/* =========================================================
   SELECT DEGREE
========================================================= */

function selectDegree(degree) {

    selectedDegree = degree;
    selectedCourse = "";

    if (degree === "B.Sc") {
        showBScGroups();
        return;
    }

    showCourseScreen(degree);
}


/* =========================================================
   B.SC GROUP SCREEN
========================================================= */

function showBScGroups() {

    let screen = document.getElementById("bscGroupScreen");

    if (!screen) {
        return;
    }

    showScreen("bscGroupScreen");
}


/* =========================================================
   SELECT B.SC GROUP
========================================================= */

function selectBScGroup(group) {

    selectedDegree = "B.Sc";
    selectedBScGroup = group;
    selectedCourse = group;

    showInterestScreen();
}


/* =========================================================
   DYNAMIC COURSE SCREEN
========================================================= */

function showCourseScreen(degree) {

    let oldScreen = document.getElementById("courseScreen");

    if (oldScreen) {
        oldScreen.remove();
    }

    const courses = courseData[degree] || [];

    const screen = document.createElement("section");

    screen.id = "courseScreen";
    screen.className = "screen";

    const icon = document.createElement("div");
    icon.className = "top-icon";
    icon.textContent = "📚";

    const heading = document.createElement("h2");
    heading.textContent = "Choose Your Course";

    const description = document.createElement("p");
    description.textContent =
        "Mee " + degree + " lo specialization / sub-course select cheyyandi.";

    const options = document.createElement("div");
    options.className = "options";

    courses.forEach(function(course) {

        const button = document.createElement("button");

        button.textContent = getCourseIcon(course) + " " + course;

        button.onclick = function() {
            selectCourse(course);
        };

        options.appendChild(button);
    });

    screen.appendChild(icon);
    screen.appendChild(heading);
    screen.appendChild(description);
    screen.appendChild(options);

    const app = document.querySelector(".app");

    if (app) {
        app.appendChild(screen);
    }

    showScreen("courseScreen");
}


/* =========================================================
   COURSE ICON
========================================================= */

function getCourseIcon(course) {

    const text = course.toLowerCase();

    if (
        text.includes("computer") ||
        text.includes("information technology") ||
        text.includes("artificial intelligence") ||
        text.includes("data science") ||
        text.includes("cyber") ||
        text.includes("cloud") ||
        text.includes("web") ||
        text.includes("mobile")
    ) {
        return "💻";
    }

    if (
        text.includes("electronics") ||
        text.includes("electrical")
    ) {
        return "⚡";
    }

    if (text.includes("mechanical")) {
        return "⚙️";
    }

    if (text.includes("civil")) {
        return "🏗️";
    }

    if (
        text.includes("commerce") ||
        text.includes("accounting") ||
        text.includes("finance") ||
        text.includes("banking") ||
        text.includes("tax")
    ) {
        return "📊";
    }

    if (
        text.includes("english") ||
        text.includes("history") ||
        text.includes("political") ||
        text.includes("sociology") ||
        text.includes("psychology") ||
        text.includes("journalism") ||
        text.includes("telugu")
    ) {
        return "📖";
    }

    if (
        text.includes("marketing") ||
        text.includes("human") ||
        text.includes("international") ||
        text.includes("business") ||
        text.includes("entrepreneur")
    ) {
        return "💼";
    }

    if (
        text.includes("physics") ||
        text.includes("chemistry") ||
        text.includes("mathematics") ||
        text.includes("statistics")
    ) {
        return "🔬";
    }

    if (
        text.includes("biotechnology") ||
        text.includes("microbiology")
    ) {
        return "🧬";
    }

    if (
        text.includes("botany")
    ) {
        return "🌱";
    }

    if (
        text.includes("zoology")
    ) {
        return "🐾";
    }

    return "📚";
}


/* =========================================================
   SELECT COURSE
========================================================= */

function selectCourse(course) {

    selectedCourse = course;

    showInterestScreen();
}


/* =========================================================
   INTEREST SCREEN
========================================================= */

function showInterestScreen() {

    showScreen("interestScreen");
}


/* =========================================================
   INTEREST FUNCTIONS
========================================================= */

function selectIT() {
    selectInterest("IT / Software");
}

function selectGovernment() {
    selectInterest("Government Jobs");
}

function selectPrivate() {
    selectInterest("Private Jobs");
}

function selectHigherStudies() {
    selectInterest("Higher Studies");
}

function selectBusiness() {
    selectInterest("Business");
}

function selectAbroad() {
    selectInterest("Abroad");
}


/* =========================================================
   SELECT INTEREST
========================================================= */

function selectInterest(interest) {

    selectedInterest = interest;

    generateResult();

    showScreen("resultScreen");
}


/* =========================================================
   GENERATE RESULT
========================================================= */

function generateResult() {

    const data = careerData[selectedInterest];

    if (!data) {
        return;
    }

    const resultText =
        "Based on your " +
        selectedDegree +
        (selectedCourse ? " - " + selectedCourse : "") +
        " and interest in " +
        selectedInterest +
        ", here is your career plan.";

    setText("resultText", resultText);

    setText("careerOptions", data.career);
    setText("salary", data.salary);
    setText("learningTime", data.time);
    setText("skills", data.skills);
    setText("jobRoles", data.roles);

    generateRoadmap(data.roadmap);

    updateSavedInformation();
}


/* =========================================================
   SET TEXT
========================================================= */

function setText(id, text) {

    const element = document.getElementById(id);

    if (element) {
        element.textContent = text;
    }
}


/* =========================================================
   ROADMAP
========================================================= */

function generateRoadmap(roadmapItems) {

    const roadmap = document.getElementById("detailedRoadmap");

    if (!roadmap) {
        return;
    }

    roadmap.innerHTML = "";

    roadmapItems.forEach(function(item, index) {

        const box = document.createElement("div");

        box.className = "roadmap-item";

        const number = document.createElement("strong");

        number.textContent = "Step " + (index + 1);

        const text = document.createElement("p");

        text.textContent = item;

        box.appendChild(number);
        box.appendChild(text);

        roadmap.appendChild(box);
    });
}


/* =========================================================
   JOB SEARCH
========================================================= */

function viewJobs() {

    showScreen("jobsScreen");

    const input = document.getElementById("jobSearch");

    if (input) {
        input.value = "";
    }

    setText(
        "jobResults",
        "🔎 Search for a job role above."
    );
}


function searchJobs() {

    const input = document.getElementById("jobSearch");

    const results = document.getElementById("jobResults");

    if (!input || !results) {
        return;
    }

    const searchText = input.value.trim().toLowerCase();

    if (searchText === "") {

        results.textContent =
            "Please enter a job role to search.";

        return;
    }

    const jobs = [

        "Software Developer",
        "Web Developer",
        "Frontend Developer",
        "Backend Developer",
        "Data Analyst",
        "Data Scientist",
        "Cloud Engineer",
        "Cyber Security Analyst",
        "HR Executive",
        "Marketing Executive",
        "Sales Executive",
        "Business Analyst",
        "Accountant",
        "Bank PO",
        "Bank Clerk",
        "SSC Officer",
        "Railway Jobs",
        "Government Assistant",
        "Customer Support Executive",
        "Operations Executive"
    ];

    const matchedJobs = jobs.filter(function(job) {

        return job.toLowerCase().includes(searchText);
    });

    results.innerHTML = "";

    if (matchedJobs.length === 0) {

        results.textContent =
            "❌ No matching jobs found. Try another job role.";

        return;
    }

    const heading = document.createElement("h3");

    heading.textContent = "Available Job Roles";

    results.appendChild(heading);

    matchedJobs.forEach(function(job) {

        const item = document.createElement("div");

        item.className = "result-card";

        const icon = document.createElement("div");

        icon.className = "card-icon";

        icon.textContent = "💼";

        const content = document.createElement("div");

        const title = document.createElement("h3");

        title.textContent = job;

        const text = document.createElement("p");

        text.textContent =
            "Suitable opportunity for your selected career path.";

        content.appendChild(title);
        content.appendChild(text);

        item.appendChild(icon);
        item.appendChild(content);

        results.appendChild(item);
    });
}


/* =========================================================
   GOVERNMENT JOBS
========================================================= */

function openGovJobs(type) {

    const websites = {

        "SSC":
            "Search for SSC notifications, SSC CGL, CHSL and other SSC examinations.",

        "Banking":
            "Search for IBPS, SBI and other banking examinations.",

        "Railway":
            "Search for Railway recruitment notifications and examinations.",

        "State Government":
            "Search for your state government recruitment notifications."
    };

    const message =
        websites[type] ||
        "Government job information.";

    alert(
        "🏛️ " +
        type +
        "\n\n" +
        message +
        "\n\nUse official recruitment websites for applications."
    );
}


/* =========================================================
   SAVE CAREER PLAN
========================================================= */

function saveCareerPlan() {

    if (!selectedDegree) {

        alert("Please select your degree first.");

        return;
    }

    const plan = {

        degree: selectedDegree,

        course: selectedCourse,

        bscGroup: selectedBScGroup,

        interest: selectedInterest,

        date: new Date().toLocaleString()
    };

    localStorage.setItem(
        "nextStepCareerPlan",
        JSON.stringify(plan)
    );

    updateSavedInformation();

    alert("✅ Your career plan has been saved!");
}


/* =========================================================
   UPDATE SAVED INFORMATION
========================================================= */

function updateSavedInformation() {

    const savedPlan =
        localStorage.getItem("nextStepCareerPlan");

    if (!savedPlan) {
        return;
    }

    try {

        const plan = JSON.parse(savedPlan);

        setText(
            "savedDegree",
            plan.degree || "Not Selected"
        );

        setText(
            "savedBscGroup",
            plan.bscGroup || "Not Selected"
        );

        setText(
            "savedInterest",
            plan.interest || "Not Selected"
        );

        setText(
            "savedDate",
            plan.date || "Not Available"
        );

        setText(
            "profileDegree",
            plan.degree || "Not Selected"
        );

        setText(
            "profileBscGroup",
            plan.bscGroup || "Not Selected"
        );

        setText(
            "profileInterest",
            plan.interest || "Not Selected"
        );

    } catch (error) {

        console.log(
            "Could not load saved career plan."
        );
    }
}


/* =========================================================
   SHOW CAREER PLAN
========================================================= */

function showCareerPlan() {

    updateSavedInformation();

    showScreen("careerPlanScreen");
}


/* =========================================================
   PROGRESS
========================================================= */

function saveProgress() {

    const checkboxes =
        document.querySelectorAll(
            "#progressScreen input[type='checkbox']"
        );

    let completed = 0;

    checkboxes.forEach(function(box) {

        if (box.checked) {
            completed++;
        }
    });

    let percentage = 0;

    if (checkboxes.length > 0) {

        percentage =
            Math.round(
                (completed / checkboxes.length) * 100
            );
    }

    localStorage.setItem(
        "nextStepProgress",
        percentage.toString()
    );

    setText(
        "progressText",
        "Progress: " + percentage + "%"
    );

    setText(
        "profileProgress",
        percentage + "%"
    );
}


/* =========================================================
   LOAD PROGRESS
========================================================= */

function loadProgress() {

    const saved =
        localStorage.getItem(
            "nextStepProgress"
        );

    const percentage =
        saved ? parseInt(saved) : 0;

    setText(
        "progressText",
        "Progress: " + percentage + "%"
    );

    setText(
        "profileProgress",
        percentage + "%"
    );
}


/* =========================================================
   SHOW PROGRESS
========================================================= */

function showProgress() {

    loadProgress();

    showScreen("progressScreen");
}


/* =========================================================
   PROFILE
========================================================= */

function showProfile() {

    updateSavedInformation();

    const name =
        localStorage.getItem(
            "nextStepProfileName"
        );

    setText(
        "profileName",
        name || "Not Added"
    );

    loadProgress();

    showScreen("profileScreen");
}


/* =========================================================
   EDIT PROFILE
========================================================= */

function editProfile() {

    const currentName =
        localStorage.getItem(
            "nextStepProfileName"
        ) || "";

    const name =
        prompt(
            "Enter your name:",
            currentName
        );

    if (name === null) {
        return;
    }

    const cleanName =
        name.trim();

    if (cleanName === "") {

        alert("Please enter your name.");

        return;
    }

    localStorage.setItem(
        "nextStepProfileName",
        cleanName
    );

    setText(
        "profileName",
        cleanName
    );

    alert("✅ Profile updated!");
}


/* =========================================================
   RESTART APP
========================================================= */

function restartApp() {

    const confirmRestart =
        confirm(
            "Do you want to start again?"
        );

    if (!confirmRestart) {
        return;
    }

    selectedDegree = "";
    selectedCourse = "";
    selectedBScGroup = "";
    selectedInterest = "";

    showScreen("welcomeScreen");
}


/* =========================================================
   LOAD SAVED DATA WHEN PAGE OPENS
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateSavedInformation();

        loadProgress();

    }
);
    