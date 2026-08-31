// @ts-nocheck

let selectedDegree = "";
let selectedCourse = "";
let selectedInterest = "";


/* =========================
   COURSE DATA
========================= */

const courses = {

    "B.Tech / B.E": [
        "Computer Science Engineering (CSE)",
        "Information Technology (IT)",
        "Artificial Intelligence & Machine Learning",
        "Artificial Intelligence & Data Science",
        "Electronics & Communication Engineering (ECE)",
        "Electrical & Electronics Engineering (EEE)",
        "Mechanical Engineering",
        "Civil Engineering",
        "Chemical Engineering",
        "Biotechnology Engineering"
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
        "B.Sc Electronics",
        "B.Sc Data Science"
    ],

    "B.Com": [
        "B.Com General",
        "B.Com Computers",
        "B.Com Finance",
        "B.Com Accounting",
        "B.Com Banking & Insurance",
        "B.Com Taxation",
        "B.Com Business Analytics"
    ],

    "B.A": [
        "B.A English",
        "B.A Economics",
        "B.A History",
        "B.A Political Science",
        "B.A Psychology",
        "B.A Sociology",
        "B.A Journalism & Mass Communication",
        "B.A Public Administration"
    ],

    "BCA": [
        "BCA General",
        "BCA Data Science",
        "BCA Artificial Intelligence",
        "BCA Cloud Computing",
        "BCA Cyber Security",
        "BCA Web Development",
        "BCA Software Development"
    ],

    "BBA": [
        "BBA General",
        "BBA Finance",
        "BBA Marketing",
        "BBA Human Resources",
        "BBA Business Analytics",
        "BBA International Business",
        "BBA Digital Marketing",
        "BBA Entrepreneurship"
    ]
};


/* =========================
   COURSE-WISE JOBS
========================= */

const courseJobs = {

    "Computer Science Engineering (CSE)": [
        "Software Engineer",
        "Software Developer",
        "Web Developer",
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
        "Java Developer",
        "Python Developer",
        "Data Analyst",
        "Data Scientist",
        "AI/ML Engineer",
        "Cloud Engineer",
        "DevOps Engineer",
        "Cyber Security Engineer",
        "QA Engineer"
    ],

    "Information Technology (IT)": [
        "Software Developer",
        "IT Support Engineer",
        "Web Developer",
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
        "Cloud Engineer",
        "Network Engineer",
        "Database Administrator",
        "Cyber Security Analyst",
        "System Administrator",
        "DevOps Engineer"
    ],

    "Artificial Intelligence & Machine Learning": [
        "AI Engineer",
        "Machine Learning Engineer",
        "Data Scientist",
        "AI Developer",
        "ML Engineer",
        "Data Analyst",
        "NLP Engineer",
        "Computer Vision Engineer",
        "Research Assistant"
    ],

    "Artificial Intelligence & Data Science": [
        "Data Analyst",
        "Data Scientist",
        "Data Engineer",
        "AI Engineer",
        "Machine Learning Engineer",
        "Business Intelligence Analyst",
        "Data Visualization Analyst",
        "Research Assistant"
    ],

    "Electronics & Communication Engineering (ECE)": [
        "Electronics Engineer",
        "Embedded Systems Engineer",
        "VLSI Engineer",
        "Communication Engineer",
        "PCB Design Engineer",
        "IoT Engineer",
        "Hardware Engineer",
        "Network Engineer",
        "RF Engineer",
        "Electronics Technician"
    ],

    "Electrical & Electronics Engineering (EEE)": [
        "Electrical Engineer",
        "Electrical Design Engineer",
        "Power Systems Engineer",
        "Control Systems Engineer",
        "Maintenance Engineer",
        "Electrical Technician",
        "Solar Energy Engineer",
        "Automation Engineer"
    ],

    "Mechanical Engineering": [
        "Mechanical Engineer",
        "Design Engineer",
        "Production Engineer",
        "Manufacturing Engineer",
        "Automotive Engineer",
        "Quality Engineer",
        "Maintenance Engineer",
        "CAD Engineer",
        "HVAC Engineer"
    ],

    "Civil Engineering": [
        "Civil Engineer",
        "Structural Engineer",
        "Site Engineer",
        "Construction Engineer",
        "Quantity Surveyor",
        "Planning Engineer",
        "Project Engineer",
        "CAD Engineer",
        "Survey Engineer"
    ],

    "Chemical Engineering": [
        "Chemical Engineer",
        "Process Engineer",
        "Production Engineer",
        "Quality Control Engineer",
        "Plant Engineer",
        "Process Safety Engineer",
        "Environmental Engineer",
        "Research Assistant"
    ],

    "Biotechnology Engineering": [
        "Biotechnologist",
        "Research Assistant",
        "Bioprocess Engineer",
        "Quality Control Analyst",
        "Quality Assurance Associate",
        "Clinical Research Assistant",
        "Laboratory Technician",
        "Bioinformatics Analyst"
    ],


    /* ===== B.SC ===== */

    "B.Sc Computer Science": [
        "Software Developer",
        "Web Developer",
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
        "Python Developer",
        "Java Developer",
        "Data Analyst",
        "QA Tester",
        "IT Support Engineer"
    ],

    "B.Sc Mathematics": [
        "Mathematics Teacher",
        "Mathematics Lecturer",
        "Data Analyst",
        "Statistical Analyst",
        "Data Scientist",
        "Operations Research Analyst",
        "Actuarial Analyst",
        "Research Assistant",
        "Quantitative Analyst"
    ],

    "B.Sc Physics": [
        "Physics Teacher",
        "Physics Lecturer",
        "Research Assistant",
        "Laboratory Technician",
        "Scientific Assistant",
        "Technical Assistant",
        "Data Analyst",
        "Electronics Technician",
        "Quality Control Analyst"
    ],

    "B.Sc Chemistry": [
        "Chemist",
        "Laboratory Analyst",
        "Quality Control Analyst",
        "Quality Assurance Analyst",
        "Chemical Analyst",
        "Research Assistant",
        "Laboratory Technician",
        "Production Chemist",
        "Environmental Analyst"
    ],

    "B.Sc Statistics": [
        "Statistician",
        "Data Analyst",
        "Statistical Analyst",
        "Data Scientist",
        "Business Analyst",
        "Research Analyst",
        "Market Research Analyst",
        "Risk Analyst"
    ],

    "B.Sc Biotechnology": [
        "Biotechnologist",
        "Research Assistant",
        "Laboratory Technician",
        "Quality Control Analyst",
        "Quality Assurance Associate",
        "Clinical Research Assistant",
        "Bioinformatics Analyst"
    ],

    "B.Sc Microbiology": [
        "Microbiologist",
        "Laboratory Technician",
        "Quality Control Analyst",
        "Quality Assurance Analyst",
        "Research Assistant",
        "Clinical Research Assistant",
        "Food Microbiologist"
    ],

    "B.Sc Botany": [
        "Botanist",
        "Research Assistant",
        "Plant Tissue Culture Technician",
        "Laboratory Technician",
        "Agriculture Assistant",
        "Environmental Analyst",
        "Biological Science Assistant"
    ],

    "B.Sc Zoology": [
        "Zoologist",
        "Research Assistant",
        "Laboratory Technician",
        "Wildlife Assistant",
        "Animal Care Assistant",
        "Environmental Analyst",
        "Biological Science Assistant"
    ],

    "B.Sc Electronics": [
        "Electronics Technician",
        "Electronics Engineer",
        "Embedded Systems Technician",
        "Hardware Technician",
        "PCB Design Assistant",
        "IoT Technician",
        "Technical Support Engineer"
    ],

    "B.Sc Data Science": [
        "Data Analyst",
        "Junior Data Scientist",
        "Data Engineer",
        "Business Intelligence Analyst",
        "Data Visualization Analyst",
        "Research Analyst",
        "Machine Learning Assistant"
    ],


    /* ===== B.COM ===== */

    "B.Com General": [
        "Accountant",
        "Junior Accountant",
        "Finance Executive",
        "Accounts Executive",
        "Banking Executive",
        "Tax Assistant",
        "Audit Assistant",
        "Business Executive"
    ],

    "B.Com Computers": [
        "Accounts Executive",
        "Computer Operator",
        "MIS Executive",
        "Data Entry Executive",
        "Junior Accountant",
        "Finance Executive",
        "Business Analyst Assistant"
    ],

    "B.Com Finance": [
        "Financial Analyst",
        "Finance Executive",
        "Accounts Executive",
        "Investment Analyst",
        "Credit Analyst",
        "Banking Executive",
        "Tax Assistant"
    ],

    "B.Com Accounting": [
        "Accountant",
        "Accounts Executive",
        "Audit Assistant",
        "Tax Assistant",
        "Finance Executive",
        "Junior Accountant",
        "Payroll Executive"
    ],

    "B.Com Banking & Insurance": [
        "Banking Executive",
        "Bank Clerk",
        "Loan Officer",
        "Credit Analyst",
        "Insurance Executive",
        "Relationship Executive",
        "Finance Executive"
    ],

    "B.Com Taxation": [
        "Tax Assistant",
        "Tax Executive",
        "GST Executive",
        "Accountant",
        "Audit Assistant",
        "Finance Executive"
    ],

    "B.Com Business Analytics": [
        "Business Analyst",
        "Data Analyst",
        "Business Intelligence Analyst",
        "MIS Executive",
        "Market Research Analyst",
        "Operations Analyst"
    ],


    /* ===== B.A ===== */

    "B.A English": [
        "Content Writer",
        "Copywriter",
        "English Teacher",
        "Editor",
        "Proofreader",
        "Content Creator",
        "Customer Support Executive",
        "Technical Writer"
    ],

    "B.A Economics": [
        "Economics Analyst",
        "Research Analyst",
        "Business Analyst",
        "Financial Analyst",
        "Market Research Analyst",
        "Data Analyst",
        "Economic Research Assistant"
    ],

    "B.A History": [
        "History Teacher",
        "Research Assistant",
        "Archivist Assistant",
        "Content Writer",
        "Museum Assistant",
        "Civil Services Aspirant",
        "Heritage Assistant"
    ],

    "B.A Political Science": [
        "Political Research Assistant",
        "Research Analyst",
        "Public Policy Assistant",
        "Content Writer",
        "Civil Services Aspirant",
        "Government Assistant",
        "NGO Program Assistant"
    ],

    "B.A Psychology": [
        "Psychology Assistant",
        "Research Assistant",
        "HR Executive",
        "Counselling Assistant",
        "Social Work Assistant",
        "Recruitment Executive"
    ],

    "B.A Sociology": [
        "Social Research Assistant",
        "NGO Program Assistant",
        "Community Development Assistant",
        "Research Assistant",
        "HR Executive",
        "Social Work Assistant"
    ],

    "B.A Journalism & Mass Communication": [
        "Journalist",
        "Reporter",
        "Content Writer",
        "Copywriter",
        "News Researcher",
        "Social Media Executive",
        "Digital Content Creator",
        "Video Content Assistant"
    ],

    "B.A Public Administration": [
        "Administrative Assistant",
        "Government Assistant",
        "Public Policy Assistant",
        "Research Assistant",
        "NGO Program Assistant",
        "Civil Services Aspirant"
    ],


    /* ===== BCA ===== */

    "BCA General": [
        "Software Developer",
        "Web Developer",
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
        "Java Developer",
        "Python Developer",
        "QA Tester",
        "IT Support Engineer"
    ],

    "BCA Data Science": [
        "Data Analyst",
        "Junior Data Scientist",
        "Data Engineer",
        "Business Analyst",
        "BI Analyst",
        "Research Analyst"
    ],

    "BCA Artificial Intelligence": [
        "AI Developer",
        "AI Engineer",
        "Machine Learning Engineer",
        "Data Analyst",
        "Junior Data Scientist",
        "Research Assistant"
    ],

    "BCA Cloud Computing": [
        "Cloud Support Engineer",
        "Cloud Engineer",
        "AWS Cloud Associate",
        "Azure Cloud Associate",
        "DevOps Associate",
        "System Administrator"
    ],

    "BCA Cyber Security": [
        "Cyber Security Analyst",
        "Security Analyst",
        "SOC Analyst",
        "Cyber Security Engineer",
        "Security Testing Assistant",
        "IT Security Support"
    ],

    "BCA Web Development": [
        "Web Developer",
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer",
        "UI Developer",
        "WordPress Developer"
    ],

    "BCA Software Development": [
        "Software Developer",
        "Application Developer",
        "Java Developer",
        "Python Developer",
        "Backend Developer",
        "Full Stack Developer",
        "QA Tester"
    ],


    /* ===== BBA ===== */

    "BBA General": [
        "Business Executive",
        "Operations Executive",
        "Sales Executive",
        "Marketing Executive",
        "HR Executive",
        "Customer Relationship Executive"
    ],

    "BBA Finance": [
        "Finance Executive",
        "Financial Analyst",
        "Accounts Executive",
        "Credit Analyst",
        "Banking Executive",
        "Investment Assistant"
    ],

    "BBA Marketing": [
        "Marketing Executive",
        "Digital Marketing Executive",
        "Sales Executive",
        "Brand Executive",
        "Market Research Analyst",
        "Social Media Executive"
    ],

    "BBA Human Resources": [
        "HR Executive",
        "Recruitment Executive",
        "Talent Acquisition Executive",
        "HR Coordinator",
        "Payroll Assistant",
        "Training Coordinator"
    ],

    "BBA Business Analytics": [
        "Business Analyst",
        "Data Analyst",
        "Business Intelligence Analyst",
        "Operations Analyst",
        "Market Research Analyst",
        "MIS Executive"
    ],

    "BBA International Business": [
        "International Business Executive",
        "Export Executive",
        "Import Executive",
        "Business Development Executive",
        "Sales Executive",
        "International Marketing Executive"
    ],

    "BBA Digital Marketing": [
        "Digital Marketing Executive",
        "SEO Executive",
        "Social Media Executive",
        "Content Marketing Executive",
        "PPC Executive",
        "Digital Marketing Analyst"
    ],

    "BBA Entrepreneurship": [
        "Business Development Executive",
        "Startup Associate",
        "Entrepreneur",
        "Business Consultant Assistant",
        "Sales Executive",
        "Marketing Executive"
    ]
};


/* =========================
   CAREER DATA
========================= */

const careerData = {

    "IT / Software": {
        career: "Software Developer, Web Developer, Data Analyst, AI/ML Engineer, Cloud Engineer and other technology careers.",
        salary: "Depends on role, skills, experience and company.",
        time: "4 – 12 Months for job-ready skills.",
        skills: "Technical skills, communication, problem solving and interview preparation.",
        roles: "Software Developer, Web Developer, Data Analyst, Cloud Engineer, QA Engineer."
    },

    "Government Jobs": {
        career: "UPSC, SSC, Banking, Railway, Defence, Police, Teaching and State Government careers.",
        salary: "Depends on post, department and pay level.",
        time: "6 – 12+ Months depending on examination.",
        skills: "Aptitude, Reasoning, English, General Awareness, Current Affairs and Computer Knowledge.",
        roles: "UPSC, SSC, Banking, Railway, Defence, Police and other government roles."
    },

    "Private Jobs": {
        career: "Corporate, Operations, HR, Sales, Marketing, Finance and Customer Support careers.",
        salary: "Depends on role, skills, experience and company.",
        time: "3 – 6 Months.",
        skills: "Communication, computer skills, Excel, resume and interview skills.",
        roles: "HR Executive, Sales Executive, Marketing Executive, Finance Executive and Operations Executive."
    },

    "Higher Studies": {
        career: "MCA, M.Tech, MBA, M.Sc, M.Com, MA, PG Diploma, Research and PhD.",
        salary: "Depends on specialization and career.",
        time: "1 – 5 Years.",
        skills: "Subject knowledge, research, communication and entrance preparation.",
        roles: "Postgraduate, Researcher, Lecturer, Professor, Specialist."
    },

    "Business": {
        career: "Startup, Entrepreneurship, E-commerce, Consulting and Freelancing.",
        salary: "Depends on business and revenue.",
        time: "3 – 12 Months to start.",
        skills: "Marketing, sales, finance, communication and business planning.",
        roles: "Entrepreneur, Business Owner, Consultant and Freelancer."
    },

    "Abroad": {
        career: "Higher studies, international jobs and research opportunities.",
        salary: "Depends on country, role and experience.",
        time: "6 – 18 Months preparation.",
        skills: "English, technical skills, resume, SOP and interview skills.",
        roles: "International Student, Software Engineer, Data Analyst, Researcher."
    }
};


/* =========================
   START
========================= */

function startApp() {
    showScreen("degreeScreen");
}


/* =========================
   DEGREE
========================= */

function selectDegree(degree) {

    selectedDegree = degree;
    selectedCourse = "";
    selectedInterest = "";

    document.getElementById("courseSubtitle").innerText =
        "Mee " + degree + " lo specialization / course select cheyyandi.";

    const container = document.getElementById("courseOptions");

    container.innerHTML = "";

    courses[degree].forEach(function(course) {

        const button = document.createElement("button");

        button.innerText = "📚 " + course;

        button.onclick = function() {
            selectCourse(course);
        };

        container.appendChild(button);
    });

    showScreen("courseScreen");
}


/* =========================
   COURSE
========================= */

function selectCourse(course) {

    selectedCourse = course;
    selectedInterest = "";

    createInterestOptions();

    showScreen("interestScreen");
}


/* =========================
   INTEREST OPTIONS
========================= */

function createInterestOptions() {

    const container =
        document.getElementById("interestOptions");

    container.innerHTML = "";

    const jobsForCourse =
        courseJobs[selectedCourse] || [];

    let html = "";

    if (jobsForCourse.length > 0) {

        html += `
            <button onclick="selectInterest('Course Jobs')">
                💼 ${selectedCourse} Jobs
            </button>
        `;
    }

    html += `
        <button onclick="selectInterest('Government Jobs')">
            🏛️ Government Jobs
        </button>

        <button onclick="selectInterest('Higher Studies')">
            🎓 Higher Studies
        </button>
    `;

    container.innerHTML = html;
}


/* =========================
   INTEREST
========================= */

function selectInterest(interest) {

    selectedInterest = interest;

    generateResult();

    showScreen("resultScreen");
}


/* =========================
   RESULT
========================= */

function generateResult() {

    let data;

    if (selectedInterest === "Course Jobs") {

        const jobsForCourse =
            courseJobs[selectedCourse] || [];

        data = {
            career: jobsForCourse.join(", "),
            salary: "Depends on job role, skills, experience and company.",
            time: "3 – 12 Months for job-ready skills.",
            skills: getCourseSkills(selectedCourse),
            roles: jobsForCourse.join(", ")
        };

    } else {

        data = careerData[selectedInterest];
    }

    document.getElementById("resultText").innerText =
        selectedDegree +
        " → " +
        selectedCourse +
        " → " +
        selectedInterest;

    document.getElementById("careerOptions").innerText =
        data.career;

    document.getElementById("salary").innerText =
        data.salary;

    document.getElementById("learningTime").innerText =
        data.time;

    document.getElementById("skills").innerText =
        data.skills;

    document.getElementById("jobRoles").innerText =
        data.roles;

    createRoadmap();
}


/* =========================
   COURSE SKILLS
========================= */

function getCourseSkills(course) {

    if (
        course.includes("Computer") ||
        course.includes("IT") ||
        course.includes("BCA") ||
        course.includes("Software") ||
        course.includes("Data Science") ||
        course.includes("Artificial Intelligence")
    ) {
        return "Programming, problem solving, databases, Git/GitHub and relevant technical tools.";
    }

    if (course.includes("Chemistry")) {
        return "Chemistry fundamentals, laboratory techniques, analytical methods, safety and documentation.";
    }

    if (course.includes("Mathematics")) {
        return "Mathematics, statistics, logical reasoning, data analysis and problem solving.";
    }

    if (course.includes("Physics")) {
        return "Physics fundamentals, laboratory skills, measurements, data analysis and scientific reasoning.";
    }

    if (
        course.includes("Biotechnology") ||
        course.includes("Microbiology") ||
        course.includes("Botany") ||
        course.includes("Zoology")
    ) {
        return "Laboratory skills, scientific methods, documentation, data analysis and subject knowledge.";
    }

    if (
        course.includes("Commerce") ||
        course.includes("B.Com") ||
        course.includes("Finance") ||
        course.includes("Accounting")
    ) {
        return "Accounting, Excel, finance basics, taxation, communication and computer skills.";
    }

    if (
        course.includes("BBA") ||
        course.includes("Business") ||
        course.includes("Marketing") ||
        course.includes("Human Resources")
    ) {
        return "Communication, Excel, marketing, business basics, presentation and management skills.";
    }

    return "Subject knowledge, communication, computer skills, problem solving and interview preparation.";
}


/* =========================
   ROADMAP
========================= */

function createRoadmap() {

    const roadmap =
        document.getElementById("detailedRoadmap");

    roadmap.innerHTML = "";

    let steps;

    if (selectedInterest === "Government Jobs") {

        steps = [
            ["1", "Month 1 — Choose Exam & Understand Syllabus"],
            ["2", "Month 2 — Aptitude & Reasoning"],
            ["3", "Month 3 — English & General Awareness"],
            ["4", "Month 4 — Current Affairs & Previous Papers"],
            ["5", "Month 5 — Mock Tests & Revision"],
            ["6", "Month 6 — Apply & Exam Preparation"]
        ];

    } else if (selectedInterest === "Higher Studies") {

        steps = [
            ["1", "Month 1 — Choose Specialization"],
            ["2", "Month 2 — Research Universities"],
            ["3", "Month 3 — Entrance Preparation"],
            ["4", "Month 4 — Documents & Resume"],
            ["5", "Month 5 — Applications"],
            ["6", "Month 6 — Admission Process"]
        ];

    } else {

        steps = [
            ["1", "Month 1 — Learn Course Fundamentals"],
            ["2", "Month 2 — Build Core Skills"],
            ["3", "Month 3 — Practical Practice"],
            ["4", "Month 4 — Projects / Portfolio"],
            ["5", "Month 5 — Resume & Interview"],
            ["6", "Month 6 — Apply for Jobs"]
        ];
    }

    steps.forEach(function(item) {

        const div = document.createElement("div");

        div.className = "month";

        const parts = item[1].split(" — ");

        div.innerHTML =
            "<span>" + item[0] + "</span>" +
            "<p><strong>" +
            parts[0] +
            "</strong><br>" +
            parts[1] +
            "</p>";

        roadmap.appendChild(div);
    });
}


/* =========================
   SCREEN
========================= */

function showScreen(id) {

    document
        .querySelectorAll(".screen")
        .forEach(function(screen) {
            screen.classList.remove("active");
        });

    const target = document.getElementById(id);

    if (target) {
        target.classList.add("active");
    }

    window.scrollTo(0, 0);
}


/* =========================
   VIEW COURSE JOBS
========================= */

function viewJobs() {

    document.getElementById("jobSubtitle").innerText =
        selectedCourse +
        " ki suitable jobs";

    document.getElementById("jobSearch").value = "";

    showCourseJobs();

    showScreen("jobsScreen");
}


/* =========================
   SHOW COURSE JOBS
========================= */

function showCourseJobs() {

    const results =
        document.getElementById("jobResults");

    const courseJobList =
        courseJobs[selectedCourse] || [];

    if (courseJobList.length === 0) {

        results.innerHTML =
            "<b>❌ Jobs available data not found.</b>";

        return;
    }

    let html =
        "<div class='job-title'>💼 " +
        selectedCourse +
        " Job Roles</div>";

    courseJobList.forEach(function(job) {

        html += createJobItem(job);

    });

    results.innerHTML = html;
}


/* =========================
   JOB SEARCH
========================= */

function searchJobs() {

    const search =
        document
        .getElementById("jobSearch")
        .value
        .toLowerCase()
        .trim();

    const results =
        document.getElementById("jobResults");

    const courseJobList =
        courseJobs[selectedCourse] || [];

    if (search === "") {

        showCourseJobs();
        return;
    }

    const found =
        courseJobList.filter(function(job) {

            return job
                .toLowerCase()
                .includes(search);

        });

    if (found.length === 0) {

        results.innerHTML =
            "<b>❌ No matching job in this course.</b><br><br>" +
            "Try another job role.";

        return;
    }

    let html =
        "<div class='job-title'>✅ Matching Jobs</div>";

    found.forEach(function(job) {

        html += createJobItem(job);

    });

    results.innerHTML = html;
}


/* =========================
   JOB ITEM
========================= */

function createJobItem(job) {

    const encodedJob =
        encodeURIComponent(job);

    const slug =
        job
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-");

    return `
        <div class="job-item">

            💼 <strong>${job}</strong>

            <div class="job-buttons">

                <button class="apply-btn"
                    onclick="openSite('https://www.linkedin.com/jobs/search/?keywords=${encodedJob}')">
                    LinkedIn
                </button>

                <button class="apply-btn"
                    onclick="openSite('https://in.indeed.com/jobs?q=${encodedJob}')">
                    Indeed
                </button>

                <button class="apply-btn"
                    onclick="openSite('https://www.naukri.com/${slug}-jobs')">
                    Naukri
                </button>

                <button class="apply-btn"
                    onclick="openSite('https://www.foundit.in/srp/results?query=${encodedJob}')">
                    Foundit
                </button>

            </div>

        </div>
    `;
}


/* =========================
   GOVERNMENT
========================= */

function showGovernment() {
    showScreen("governmentScreen");
}


/* =========================
   HIGHER STUDIES
========================= */

function showHigherStudies() {
    showScreen("higherStudiesScreen");
}


/* =========================
   OPEN WEBSITE
========================= */

function openSite(url) {

    window.open(url, "_blank");
}


/* =========================
   SAVE PLAN
========================= */

function saveCareerPlan() {

    const plan = {

        degree: selectedDegree,
        course: selectedCourse,
        interest: selectedInterest,
        date: new Date().toLocaleString()

    };

    localStorage.setItem(
        "futureStepPlan",
        JSON.stringify(plan)
    );

    alert("✅ Career Plan Saved Successfully!");
}


/* =========================
   SHOW PLAN
========================= */

function showCareerPlan() {

    const saved =
        localStorage.getItem("futureStepPlan");

    if (saved) {

        const plan = JSON.parse(saved);

        document.getElementById("savedDegree").innerText =
            plan.degree;

        document.getElementById("savedCourse").innerText =
            plan.course;

        document.getElementById("savedInterest").innerText =
            plan.interest;

        document.getElementById("savedDate").innerText =
            plan.date;

    } else {

        document.getElementById("savedDegree").innerText =
            "Not Selected";

        document.getElementById("savedCourse").innerText =
            "Not Selected";

        document.getElementById("savedInterest").innerText =
            "Not Selected";

        document.getElementById("savedDate").innerText =
            "Not Available";
    }

    showScreen("careerPlanScreen");
}


/* =========================
   RESTART
========================= */

function restartApp() {

    selectedDegree = "";
    selectedCourse = "";
    selectedInterest = "";

    const searchBox =
        document.getElementById("jobSearch");

    if (searchBox) {
        searchBox.value = "";
    }

    showScreen("welcomeScreen");
}