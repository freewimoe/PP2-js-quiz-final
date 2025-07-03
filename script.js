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
        answers: ["Ein Soloklavierwerk", "Ein Werk für Klavier und Orchester", "Ein Chorwerk mit Klavier", "Ein symphonisches Werk