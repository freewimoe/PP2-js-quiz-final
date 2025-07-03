// Quiz Configuration
const CONFIG = {
  QUESTION_DELAY: 500,
  FEEDBACK_DELAY: 1500,
  ANIMATION_DELAY: 300,
  STORAGE_KEY: 'esk-quiz-stats'
};

// Quiz Data with detailed explanations
const QUIZ_DATA = {
  baroque: {
    title: "Barock Musik Quiz",
    description: "Teste dein Wissen über die Barockzeit (1600-1750)",
    questions: [
      {
        question: "Wer komponierte die Brandenburgischen Konzerte?",
        answers: ["Johann Sebastian Bach", "Antonio Vivaldi", "Georg Philipp Telemann", "Georg Friedrich Händel"],
        correct: 0,
        explanation: "Bach komponierte die 6 Brandenburgischen Konzerte zwischen 1718-1721 als Bewerbungsmusik."
      },
      {
        question: "Was ist ein Basso continuo?",
        answers: ["Ein wiederkehrendes Thema", "Eine Basslinie mit Akkorden", "Eine Art Fuge", "Ein Barocktanz"],
        correct: 1,
        explanation: "Basso continuo ist eine durchgehende Bassstimme mit Akkordbegleitung, typisch für die Barockmusik."
      },
      {
        question: "Welches Instrument war in der Barockzeit besonders beliebt?",
        answers: ["Cembalo", "Klavier", "Saxophon", "Klarinette"],
        correct: 0,
        explanation: "Das Cembalo war das wichtigste Tasteninstrument der Barockzeit, bevor das Klavier erfunden wurde."
      },
      {
        question: "Wer komponierte 'Die vier Jahreszeiten'?",
        answers: ["Bach", "Vivaldi", "Händel", "Purcell"],
        correct: 1,
        explanation: "Vivaldis 'Die vier Jahreszeiten' sind vier Violinkonzerte, die zu den bekanntesten Barockwerken gehören."
      }
    ]
  },
  classical: {
    title: "Klassik Musik Quiz",
    description: "Teste dein Wissen über die Wiener Klassik (1750-1820)",
    questions: [
      {
        question: "Wer wird als 'Vater der Symphonie' bezeichnet?",
        answers: ["Joseph Haydn", "Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Franz Schubert"],
        correct: 0,
        explanation: "Haydn komponierte 104 Symphonien und entwickelte die Form der klassischen Symphonie maßgeblich."
      },
      {
        question: "Was ist ein Streichquartett?",
        answers: ["Ein Klavierstück", "Ein Kammermusikensemble", "Ein ganzes Orchester", "Ein Chorwerk"],
        correct: 1,
        explanation: "Ein Streichquartett besteht aus zwei Violinen, einer Viola und einem Cello."
      },
      {
        question: "Wer komponierte 'Die Zauberflöte'?",
        answers: ["Beethoven", "Mozart", "Haydn", "Schubert"],
        correct: 1,
        explanation: "Mozarts letzte Oper 'Die Zauberflöte' wurde 1791 in Wien uraufgeführt."
      },
      {
        question: "Welche Form ist typisch für klassische Symphonien?",
        answers: ["Sonatenhauptsatzform", "Fuge", "Nocturne", "Concerto grosso"],
        correct: 0,
        explanation: "Die Sonatenhauptsatzform mit Exposition, Durchführung und Reprise prägt den ersten Satz klassischer Symphonien."
      }
    ]
  },
  romantic: {
    title: "Romantik Musik Quiz",
    description: "Teste dein Wissen über die Romantik (1820-1900)",
    questions: [
      {
        question: "Wer komponierte die 'Symphonie fantastique'?",
        answers: ["Franz Liszt", "Hector Berlioz", "Frédéric Chopin", "Felix Mendelssohn"],
        correct: 1,
        explanation: "Berlioz' programmatische Symphonie von 1830 erzählt die Geschichte einer unglücklichen Liebe."
      },
      {
        question: "Was ist ein Leitmotiv?",
        answers: ["Ein musikalisches Thema für eine Figur", "Eine Art Symphonie", "Eine romantische Arie", "Eine Klaviersonate"],
        correct: 0,
        explanation: "Ein Leitmotiv ist ein musikalisches Thema, das mit einer bestimmten Person oder Idee verbunden ist, besonders bei Wagner."
      },
      {
        question: "Wer komponierte die Oper 'Tristan und Isolde'?",
        answers: ["Richard Wagner", "Giuseppe Verdi", "Giacomo Puccini", "Johannes Brahms"],
        correct: 0,
        explanation: "Wagners 'Tristan und Isolde' (1865) revolutionierte die Harmonik und beeinflusste die moderne Musik."
      },
      {
        question: "Welcher Komponist wurde 'Der Poet am Klavier' genannt?",
        answers: ["Liszt", "Chopin", "Schumann", "Brahms"],
        correct: 1,
        explanation: "Chopin war berühmt für seine poetischen Klavierwerke wie Nocturnes, Etüden und Balladen."
      }
    ]
  },
  piano: {
    title: "Klavier Musik Quiz",
    description: "Teste dein Wissen über Klaviermusik aller Epochen",
    questions: [
      {
        question: "Wer komponierte die 'Mondscheinsonate'?",
        answers: ["Beethoven", "Chopin", "Mozart", "Liszt"],
        correct: 0,
        explanation: "Beethovens Klaviersonate Nr. 14 cis-Moll op. 27 Nr. 2 erhielt den Beinamen 'Mondscheinsonate'."
      },
      {
        question: "Welcher Komponist ist berühmt für seine Etüden?",
        answers: ["Chopin", "Liszt", "Beethoven", "Debussy"],
        correct: 0,
        explanation: "Chopins 27 Etüden sind technische Studien, die gleichzeitig kunstvolle Konzertwerke sind."
      },
      {
        question: "Was ist ein Klavierkonzert?",
        answers: ["Ein Soloklavierwerk", "Ein Werk für Klavier und Orchester", "Ein Chorwerk mit Klavier", "Ein symphonisches Werk"],
        correct: 1,
        explanation: "Ein Klavierkonzert ist ein Werk für Soloklavier mit Orchesterbegleitung."
      },
      {
        question: "Wer komponierte 'Clair de Lune'?",
        answers: ["Debussy", "Ravel", "Satie", "Liszt"],
        correct: 0,
        explanation: "Debussys 'Clair de Lune' ist das dritte Stück aus der Suite Bergamasque und ein Meisterwerk des Impressionismus."
      }
    ]
  }
};

// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const loadingScreen = document.getElementById("loading-screen");
const errorScreen = document.getElementById("error-screen");

const quizTitle = document.getElementById("quiz-title");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const backButtons = document.querySelectorAll(".back-btn, #back-btn-result");
const retryButton = document.getElementById("retry-btn");

const progressFill = document.getElementById("progress-fill");
const questionCounter = document.getElementById("question-counter");
const feedbackElement = document.getElementById("feedback");
const feedbackIcon = document.getElementById("feedback-icon");
const feedbackText = document.getElementById("feedback-text");

const scoreNumber = document.getElementById("score-number");
const scoreText = document.getElementById("score-text");
const answerReview = document.getElementById("answer-review");

// Quiz State
let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
let currentTheme = "";
let userAnswers = [];
let isAnswerSelected = false;

// Utility Functions
const showScreen = (screen) => {
  [startScreen, quizScreen, resultScreen, loadingScreen, errorScreen].forEach(s => s.classList.add("hidden"));
  screen.classList.remove("hidden");
};

const showError = (message) => {
  document.getElementById("error-message").textContent = message;
  showScreen(errorScreen);
};

const showLoading = () => {
  showScreen(loadingScreen);
};

const setTheme = (theme) => {
  document.body.className = theme;
  currentTheme = theme;
};

const updateProgress = () => {
  const progress = ((currentQuestionIndex + 1) / currentQuiz.length) * 100;
  progressFill.style.width = `${progress}%`;
  questionCounter.textContent = `Frage ${currentQuestionIndex + 1} von ${currentQuiz.length}`;
};

const getScoreMessage = (score, total) => {
  const percentage = (score / total) * 100;
  if (percentage === 100) return "🎉 Perfekt! Du bist ein wahrer Musikexperte!";
  if (percentage >= 75) return "🌟 Sehr gut! Du kennst dich wirklich aus!";
  if (percentage >= 50) return "👍 Gut gemacht! Du bist auf dem richtigen Weg!";
  return "📚 Nicht schlecht! Mit etwas mehr Übung wirst du noch besser!";
};

// Quiz Functions
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const startQuiz = (theme) => {
  try {
    showLoading();
    
    setTimeout(() => {
      if (!QUIZ_DATA[theme] || !QUIZ_DATA[theme].questions || QUIZ_DATA[theme].questions.length === 0) {
        showError("Quiz-Daten für diese Kategorie sind nicht verfügbar. Bitte versuche es später erneut.");
        return;
      }

      // Shuffle questions for variety
      currentQuiz = shuffleArray(QUIZ_DATA[theme].questions);
      setTheme(theme);
      quizTitle.textContent = QUIZ_DATA[theme].title;
      
      // Reset state
      currentQuestionIndex = 0;
      score = 0;
      userAnswers = [];
      isAnswerSelected = false;
      
      // Hide feedback
      feedbackElement.classList.add("hidden");
      nextButton.style.display = "none";
      
      showScreen(quizScreen);
      updateProgress();
      showQuestion();
    }, CONFIG.ANIMATION_DELAY);
    
  } catch (error) {
    console.error("Error starting quiz:", error);
    showError("Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es erneut.");
  }
};

const showQuestion = () => {
  try {
    const question = currentQuiz[currentQuestionIndex];
    
    // Reset state
    isAnswerSelected = false;
    feedbackElement.classList.add("hidden");
    nextButton.style.display = "none";
    
    // Display question
    questionElement.textContent = question.question;
    
    // Clear previous answers
    answersElement.innerHTML = "";
    
    // Create answer buttons
    question.answers.forEach((answer, index) => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.classList.add("btn", "answer-btn");
      button.setAttribute("role", "radio");
      button.setAttribute("aria-checked", "false");
      button.addEventListener("click", () => selectAnswer(button, index));
      answersElement.appendChild(button);
    });
    
    // Update progress
    updateProgress();
    
  } catch (error) {
    console.error("Error showing question:", error);
    showError("Fehler beim Laden der Frage. Bitte versuche es erneut.");
  }
};

const selectAnswer = (selectedButton, answerIndex) => {
  if (isAnswerSelected) return;
  
  try {
    isAnswerSelected = true;
    const question = currentQuiz[currentQuestionIndex];
    const isCorrect = answerIndex === question.correct;
    
    // Update score
    if (isCorrect) {
      score++;
    }
    
    // Store user answer
    userAnswers.push({
      question: question.question,
      userAnswer: question.answers[answerIndex],
      correctAnswer: question.answers[question.correct],
      isCorrect: isCorrect,
      explanation: question.explanation
    });
    
    // Update all buttons
    const allButtons = answersElement.querySelectorAll(".answer-btn");
    allButtons.forEach((button, index) => {
      button.classList.add("disabled");
      button.setAttribute("aria-checked", "false");
      
      if (index === question.correct) {
        button.classList.add("correct");
      } else if (index === answerIndex && !isCorrect) {
        button.classList.add("incorrect");
      }
    });
    
    selectedButton.setAttribute("aria-checked", "true");
    
    // Show feedback
    showFeedback(isCorrect, question.explanation);
    
    // Show next button
    setTimeout(() => {
      nextButton.style.display = "block";
    }, CONFIG.QUESTION_DELAY);
    
  } catch (error) {
    console.error("Error selecting answer:", error);
    showError("Fehler bei der Antwortauswahl. Bitte versuche es erneut.");
  }
};

const showFeedback = (isCorrect, explanation) => {
  feedbackElement.classList.remove("hidden", "correct", "incorrect");
  feedbackElement.classList.add(isCorrect ? "correct" : "incorrect");
  
  feedbackIcon.textContent = isCorrect ? "✅" : "❌";
  feedbackText.textContent = explanation;
  
  // Animate feedback
  feedbackElement.style.opacity = "0";
  feedbackElement.style.transform = "translateY(10px)";
  
  setTimeout(() => {
    feedbackElement.style.opacity = "1";
    feedbackElement.style.transform = "translateY(0)";
  }, 100);
};

const nextQuestion = () => {
  try {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuiz.length) {
      showQuestion();
    } else {
      showResults();
    }
  } catch (error) {
    console.error("Error going to next question:", error);
    showError("Fehler beim Wechsel zur nächsten Frage. Bitte versuche es erneut.");
  }
};

const showResults = () => {
  try {
    showScreen(resultScreen);
    
    // Animate score
    scoreNumber.textContent = "0";
    const scoreAnimation = setInterval(() => {
      const current = parseInt(scoreNumber.textContent);
      if (current < score) {
        scoreNumber.textContent = current + 1;
      } else {
        clearInterval(scoreAnimation);
      }
    }, 100);
    
    // Set score message
    scoreText.textContent = getScoreMessage(score, currentQuiz.length);
    
    // Create answer review
    answerReview.innerHTML = "";
    userAnswers.forEach((answer, index) => {
      const reviewItem = document.createElement("div");
      reviewItem.classList.add("review-item");
      
      reviewItem.innerHTML = `
        <span class="review-icon ${answer.isCorrect ? 'correct' : 'incorrect'}">
          ${answer.isCorrect ? '✅' : '❌'}
        </span>
        <div>
          <strong>Frage ${index + 1}:</strong> ${answer.question}<br>
          <small>Deine Antwort: ${answer.userAnswer}</small>
          ${!answer.isCorrect ? `<br><small>Richtig: ${answer.correctAnswer}</small>` : ''}
        </div>
      `;
      
      answerReview.appendChild(reviewItem);
    });
    
  } catch (error) {
    console.error("Error showing results:", error);
    showError("Fehler beim Anzeigen der Ergebnisse. Bitte versuche es erneut.");
  }
};

const restartQuiz = () => {
  if (!currentTheme) {
    goToStart();
    return;
  }
  startQuiz(currentTheme);
};

const goToStart = () => {
  document.body.className = "";
  currentTheme = "";
  showScreen(startScreen);
};

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  try {
    // Start buttons
    document.querySelectorAll(".start-btn").forEach(button => {
      button.addEventListener("click", (e) => {
        const theme = e.currentTarget.dataset.theme;
        if (theme) {
          startQuiz(theme);
        }
      });
    });
    
    // Navigation buttons
    nextButton.addEventListener("click", nextQuestion);
    restartButton.addEventListener("click", restartQuiz);
    retryButton.addEventListener("click", () => {
      showScreen(startScreen);
    });
    
    backButtons.forEach(button => {
      button.addEventListener("click", goToStart);
    });
    
    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        goToStart();
      }
    });
    
    console.log("Quiz application initialized successfully!");
    
  } catch (error) {
    console.error("Error initializing quiz:", error);
    showError("Fehler beim Laden der Anwendung. Bitte lade die Seite neu.");
  }
});

// Error handling for uncaught errors
window.addEventListener("error", (e) => {
  console.error("Uncaught error:", e.error);
  showError("Ein unerwarteter Fehler ist aufgetreten. Bitte lade die Seite neu.");
});

window.addEventListener("unhandledrejection", (e) => {
  console.error("Unhandled promise rejection:", e.reason);
  showError("Ein unerwarteter Fehler ist aufgetreten. Bitte lade die Seite neu.");
});