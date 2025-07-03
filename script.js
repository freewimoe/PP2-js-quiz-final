console.log("🚀 Quiz Script startet...");

// Einfache Quiz-Daten
const quizzes = {
  baroque: {
    title: "Barock Musik Quiz",
    questions: [
      { question: "Wer komponierte die Brandenburgischen Konzerte?", answers: ["Bach", "Vivaldi", "Telemann", "Händel"], correct: 0 },
      { question: "Was ist basso continuo?", answers: ["Ein Thema", "Eine Basslinie", "Eine Fuge", "Ein Tanz"], correct: 1 }
    ]
  },
  classical: {
    title: "Klassik Musik Quiz", 
    questions: [
      { question: "Wer ist der 'Vater der Symphonie'?", answers: ["Haydn", "Mozart", "Beethoven", "Schubert"], correct: 0 },
      { question: "Was ist ein Streichquartett?", answers: ["Klavierstück", "Kammerensemble", "Orchester", "Chor"], correct: 1 }
    ]
  },
  romantic: {
    title: "Romantik Musik Quiz",
    questions: [
      { question: "Wer komponierte 'Symphonie fantastique'?", answers: ["Liszt", "Berlioz", "Chopin", "Mendelssohn"], correct: 1 },
      { question: "Was ist ein Leitmotiv?", answers: ["Thema für Figur", "Symphonie", "Arie", "Sonate"], correct: 0 }
    ]
  },
  piano: {
    title: "Klavier Musik Quiz",
    questions: [
      { question: "Wer komponierte 'Mondscheinsonate'?", answers: ["Beethoven", "Chopin", "Mozart", "Liszt"], correct: 0 },
      { question: "Wer ist berühmt für Etüden?", answers: ["Chopin", "Liszt", "Beethoven", "Debussy"], correct: 0 }
    ]
  }
};

// DOM Elemente
let startScreen, quizScreen, resultScreen;
let questionElement, answersElement, nextButton;
let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;

// Warten bis DOM geladen ist
document.addEventListener("DOMContentLoaded", function() {
  console.log("📄 DOM ist geladen");
  
  // Finde DOM Elemente
  startScreen = document.getElementById("start-screen");
  quizScreen = document.getElementById("quiz-screen");
  resultScreen = document.getElementById("result-screen");
  questionElement = document.getElementById("question");
  answersElement = document.getElementById("answers");
  nextButton = document.getElementById("next-btn");
  
  console.log("🔍 Gefundene Elemente:");
  console.log("Start Screen:", startScreen ? "✅" : "❌");
  console.log("Quiz Screen:", quizScreen ? "✅" : "❌");
  console.log("Result Screen:", resultScreen ? "✅" : "❌");
  
  // Finde Start-Buttons
  const startButtons = document.querySelectorAll(".start-btn");
  console.log("🔍 Start-Buttons gefunden:", startButtons.length);
  
  // Event Listeners für Start-Buttons
  startButtons.forEach((button, index) => {
    const theme = button.getAttribute("data-theme");
    console.log(`Button ${index}: Theme = ${theme}`);
    
    button.addEventListener("click", function() {
      console.log("🖱️ Button geklickt! Theme:", theme);
      startQuiz(theme);
    });
  });
  
  // Event Listener für Next Button
  if (nextButton) {
    nextButton.addEventListener("click", nextQuestion);
  }
  
  // Event Listeners für Back Buttons
  const backButtons = document.querySelectorAll(".back-btn");
  backButtons.forEach(btn => {
    btn.addEventListener("click", goToStart);
  });
  
  console.log("✅ Alle Event Listeners hinzugefügt");
});

function startQuiz(theme) {
  console.log("🎮 startQuiz aufgerufen mit:", theme);
  
  if (!quizzes[theme]) {
    console.error("❌ Kein Quiz für Theme:", theme);
    alert("Quiz nicht gefunden: " + theme);
    return;
  }
  
  console.log("✅ Quiz-Daten gefunden");
  
  // Quiz-Daten setzen
  currentQuiz = quizzes[theme].questions;
  currentQuestionIndex = 0;
  score = 0;
  
  // Theme setzen
  document.body.className = theme;
  
  // Titel setzen
  const quizTitle = document.getElementById("quiz-title");
  if (quizTitle) {
    quizTitle.textContent = quizzes[theme].title;
  }
  
  // Screens wechseln
  console.log("🔄 Wechsle zu Quiz Screen...");
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  
  // Erste Frage zeigen
  showQuestion();
}

function showQuestion() {
  console.log("❓ showQuestion - Index:", currentQuestionIndex);
  
  const question = currentQuiz[currentQuestionIndex];
  console.log("Frage:", question.question);
  
  // Frage anzeigen
  questionElement.textContent = question.question;
  
  // Antworten löschen
  answersElement.innerHTML = "";
  
  // Antwort-Buttons erstellen
  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.classList.add("btn", "answer-btn");
    button.addEventListener("click", () => selectAnswer(index));
    answersElement.appendChild(button);
  });
  
  // Next Button verstecken
  nextButton.style.display = "none";
  
  console.log("✅ Frage angezeigt");
}

function selectAnswer(answerIndex) {
  console.log("👆 Antwort gewählt:", answerIndex);
  
  const question = currentQuiz[currentQuestionIndex];
  const isCorrect = answerIndex === question.correct;
  
  if (isCorrect) {
    score++;
    console.log("✅ Richtige Antwort! Score:", score);
  } else {
    console.log("❌ Falsche Antwort! Richtig wäre:", question.correct);
  }
  
  // Buttons färben
  const buttons = answersElement.querySelectorAll(".answer-btn");
  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === question.correct) {
      btn.style.backgroundColor = "#22c55e"; // grün
      btn.style.color = "white";
    } else if (index === answerIndex) {
      btn.style.backgroundColor = "#ef4444"; // rot  
      btn.style.color = "white";
    }
  });
  
  // Next Button zeigen
  nextButton.style.display = "block";
}

function nextQuestion() {
  console.log("⏭️ Nächste Frage...");
  
  currentQuestionIndex++;
  
  if (currentQuestionIndex < currentQuiz.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  console.log("🏆 Zeige Ergebnisse - Score:", score, "von", currentQuiz.length);
  
  // Zum Result Screen wechseln
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  
  // Score anzeigen
  const scoreElement = document.getElementById("score");
  if (scoreElement) {
    scoreElement.textContent = `Du hast ${score} von ${currentQuiz.length} Fragen richtig beantwortet!`;
  }
}

function goToStart() {
  console.log("🏠 Zurück zum Start");
  
  // Alle Screens verstecken
  [quizScreen, resultScreen].forEach(screen => {
    if (screen) screen.classList.add("hidden");
  });
  
  // Start Screen zeigen
  startScreen.classList.remove("hidden");
  
  // Theme zurücksetzen
  document.body.className = "";
}

console.log("✅ Script vollständig geladen");