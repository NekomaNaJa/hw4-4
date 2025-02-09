const quizData = {
    id: "webDevQuiz",
    questions: [
        { id: 1, text: "HTML ใช้แท็ก <meta> เพื่อทำอะไร?", choices: ["แสดงรูปภาพ", "สร้างตาราง", "กำหนดข้อมูลเมตาของหน้าเว็บ",  "กำหนดลิงก์"], correct: "กำหนดข้อมูลเมตาของหน้าเว็บ" },
        { id: 2, text: "คำสั่งใดใช้สำหรับสร้างลิงก์ใน HTML?", choices: ["<a>", "<link>", "<href>", "<nav>"], correct: "<a>" },
        { id: 3, text: "อะไรคือหน้าที่ของ alt ใน <img> tag?", choices: ["กำหนดความกว้าง", "กำหนดข้อความสำรอง",  "กำหนดสีของภาพ", "กำหนดตำแหน่ง"], correct: "กำหนดข้อความสำรอง" },
        { id: 4, text: "ข้อใดเป็นรูปแบบของสีที่สามารถใช้ใน CSS?", choices: ["Hex", "RGB", "HSL", "ทั้งหมดถูกต้อง"], correct: "ทั้งหมดถูกต้อง" },
        { id: 5, text: "คำสั่ง display: flex; ใช้ทำอะไร?", choices: ["กำหนดสีพื้นหลัง", "สร้างเอฟเฟกต์เงา", "แสดงข้อความเป็นตัวหนา" , "จัดเรียงองค์ประกอบแบบยืดหยุ่น"], correct: "จัดเรียงองค์ประกอบแบบยืดหยุ่น" },
        { id: 6, text: "การใช้ z-index ใน CSS มีผลต่ออะไร?", choices: ["ลำดับการซ้อนขององค์ประกอบ", "ความโปร่งใสขององค์ประกอบ", "ความกว้างขององค์ประกอบ", "สีขององค์ประกอบ"], correct: "ลำดับการซ้อนขององค์ประกอบ" },
        { id: 7, text: "คำสั่ง CSS ใดใช้กำหนดแบบอักษรของข้อความ?", choices: ["text-align", "font-family", "letter-spacing", "line-height"], correct: "font-family" },
        { id: 8, text: "ข้อใดเป็น event listener ที่ถูกต้องใน JavaScript?", choices: ["onClick", "eventCapture", "triggerEvent" ,"addEventListener"], correct: "addEventListener" },
        { id: 9, text: "document.querySelector() ใช้ทำอะไร?", choices: ["เลือกองค์ประกอบ DOM", "สร้างฟังก์ชันใหม่", "โหลดไฟล์ JSON", "แสดงข้อความแจ้งเตือน"], correct: "เลือกองค์ประกอบ DOM" },
        { id: 10, text: "ข้อใดเป็นความแตกต่างระหว่าง let และ var ใน JavaScript?", choices: ["var มี block scope, let มี function scope", "let มี block scope, var มี function scope", "ทั้งสองเหมือนกัน", "var ไม่สามารถเปลี่ยนค่าได้"], correct: "let มี block scope, var มี function scope" },
        { id: 11, text: "คำสั่ง JavaScript ใดใช้ในการแปลง String เป็น Number?", choices: ["parseInt()", "toString()", "JSON.stringify()", "charAt()"], correct: "parseInt()" },
        { id: 12, text: "setTimeout() ใน JavaScript ใช้ทำอะไร?", choices: ["หน่วงเวลาการทำงานของฟังก์ชัน", "วนลูปซ้ำ", "หยุดการทำงานของเว็บ", "เปลี่ยนสีพื้นหลัง"], correct: "หน่วงเวลาการทำงานของฟังก์ชัน" },
        { id: 13, text: "อะไรคือข้อดีของการใช้ TypeScript แทน JavaScript?", choices: ["เร็วกว่า JavaScript", "ไม่ต้องใช้คอมไพล์", "ทำงานเฉพาะบน Node.js", "รองรับ static typing"], correct: "รองรับ static typing" },
        { id: 14, text: "ข้อใดเป็นตัวจัดการ state ใน ReactJS?", choices: ["useEffect", "useRef", "useState", "useCallback"], correct: "useState" },
        { id: 15, text: "ใน React, useEffect() ใช้ทำอะไร?", choices: [ "สร้าง state ใหม่", "จัดการ side effects", "เปลี่ยน UI", "จัดการ event"], correct: "จัดการ side effects" },
        { id: 16, text: "อะไรคือหน้าที่ของ Webpack ในการพัฒนาเว็บ?", choices: ["ทำ SEO", "ปรับแต่ง CSS", "bundle ไฟล์ JavaScript",  "จัดการฐานข้อมูล"], correct: "bundle ไฟล์ JavaScript" },
        { id: 17, text: "คำสั่ง npm install ใช้ทำอะไร?", choices: ["ลบไฟล์", "รันเซิร์ฟเวอร์", "สร้างไฟล์ HTML" , "ติดตั้งแพ็กเกจ"], correct: "ติดตั้งแพ็กเกจ" },
        { id: 18, text: "ใน Git คำสั่ง git merge ใช้ทำอะไร?", choices: ["ลบ branch", "รวม branch", "ย้อนกลับ commit", "สร้าง repository"], correct: "รวม branch" },
        { id: 19, text: "อะไรคือหน้าที่ของ media queries ใน CSS?", choices: ["ทำให้เว็บ responsive", "สร้าง animation", "เพิ่มสีให้กับ HTML", "เปลี่ยนขนาดตัวอักษร"], correct: "ทำให้เว็บ responsive" },
        { id: 20, text: "Lighthouse ใช้สำหรับทำอะไรในการพัฒนาเว็บไซต์?", choices: [ "สร้าง API", "จัดการ database", "เพิ่มฟังก์ชัน JavaScript" , "วิเคราะห์ประสิทธิภาพเว็บไซต์"], correct: "วิเคราะห์ประสิทธิภาพเว็บไซต์" }
    ],
    timeLimit: 60,
    passingScore: 40,
};

let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let timeRemaining = quizData.timeLimit;
let selectedQuestions = [];
let answers = [];

function saveQuizProgress() {
    const quizProgress = {
        selectedQuestions,
    };
    localStorage.setItem('quizProgress', JSON.stringify(quizProgress));
}

function loadQuizProgress() {
    const quizProgress = localStorage.getItem('quizProgress');
    if (quizProgress) {
        const { selectedQuestions } = JSON.parse(quizProgress);
        return { selectedQuestions };
    }
    return null;
}

function startQuiz(quizId) {
    currentQuestionIndex = 0;
    score = 0;
    timeRemaining = quizData.timeLimit;

    document.getElementById("result").style.display = "none";
    document.getElementById("answer-explanation").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    document.getElementById("startButton").style.display = "none";
    document.getElementById("restartButton").style.display = "none";

    selectRandomQuestions();

    startTimer();
    showQuestion();
}

function selectRandomQuestions() {
    const selected = [];
    const questions = quizData.questions;

    while (selected.length < 5) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        const randomQuestion = questions[randomIndex];

        if (!selected.includes(randomQuestion)) {
            selected.push(randomQuestion);
        }
    }

    selectedQuestions = selected;
    saveQuizProgress();
}

function showQuestion() {
    const question = selectedQuestions[currentQuestionIndex];
    document.getElementById("question-text").textContent = question.text;
    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    question.choices.forEach((choice) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => submitAnswer(question.id, choice);
        choicesDiv.appendChild(button);
    });
}

function submitAnswer(questionId, answer) {
    if (answer) {
        answers[questionId] = answer;
    } else {
        answers[questionId] = "ไม่ได้เลือกคำตอบ";
    }
    saveQuizProgress();
    currentQuestionIndex++;

    if ( currentQuestionIndex < selectedQuestions.length && timeRemaining > 0 ) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function calculateScore() {
    score = 0;
    selectedQuestions.forEach((question) => {
        if (answers[question.id] === question.correct) {
            score += 10;
        }
    });
}

function showResults() {
    calculateScore();
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("result").textContent = `คะแนนของคุณ : ${score} / 50`;

    if (score >= quizData.passingScore) {
        document.getElementById("result").textContent += " คุณผ่านการทดสอบ!";
        document.getElementById("result").classList.add("pass");  // เพิ่มคลาส 'pass' ให้กับ result
        document.getElementById("result").classList.remove("fail");  // ลบคลาส 'fail' ถ้ามี
    } else {
        document.getElementById("result").textContent += " คุณไม่ผ่านการทดสอบ!";
        document.getElementById("result").classList.add("fail");  // เพิ่มคลาส 'fail' ให้กับ result
        document.getElementById("result").classList.remove("pass");  // ลบคลาส 'pass' ถ้ามี
    }
    

    let explanationText = "<h3>เฉลย</h3>";
    selectedQuestions.forEach((question, index) => {
        const chosenAnswer = answers[question.id]
            ? answers[question.id]
            : "ไม่ได้เลือกคำตอบ";

        explanationText += `<strong>คำถาม : ${question.text}</strong><br><strong>คำตอบที่คุณเลือก : </strong>${chosenAnswer}`;

        if (answers[question.id] === question.correct) {
            explanationText += ` <span id="correctIcon" style="color: green;">✅</span>`;
        } else {
            explanationText += ` <span id="wrongIcon" style="color: red;">❌</span>`;
        }

        explanationText += `<br><strong>คำตอบที่ถูกต้อง : </strong>${question.correct}</p>`;
    });

    document.getElementById("answer-explanation").innerHTML = explanationText;
    document.getElementById("answer-explanation").style.display = "block";

    document.getElementById("restartButton").style.display = "inline-block";
}

function startTimer() {
    document.getElementById(
        "timer"
    ).textContent = `เวลาที่เหลือ : ${timeRemaining} วินาที`;
    timerInterval = setInterval(() => {
        timeRemaining--;
        document.getElementById(
            "timer"
        ).textContent = `เวลาที่เหลือ : ${timeRemaining} วินาที`;

        if (timeRemaining <= 0) {
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timerInterval);
    showResults();
}