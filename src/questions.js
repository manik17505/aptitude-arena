export const quizData = {
  Math: {
    icon: "➕",
    color: "from-blue-500 to-cyan-400",
    questions: [
      {
        question: "What is 12 × 8?",
        options: ["96", "88", "108", "72"],
        answer: "96",
        explanation: "12 × 8 = 96",
      },
      {
        question: "What is 15 + 27?",
        options: ["42", "40", "38", "45"],
        answer: "42",
        explanation: "15 + 27 = 42",
      },
      {
        question: "What is 100 ÷ 4?",
        options: ["20", "25", "30", "40"],
        answer: "25",
        explanation: "100 ÷ 4 = 25",
      },
      {
        question: "What is 9 × 9?",
        options: ["81", "72", "99", "90"],
        answer: "81",
        explanation: "9 × 9 = 81",
      },
      {
        question: "What is 50% of 80?",
        options: ["20", "30", "40", "50"],
        answer: "40",
        explanation: "50% of 80 = 40",
      },
    ],
  },

  Logic: {
    icon: "🧠",
    color: "from-purple-500 to-pink-400",
    questions: [
      {
        question: "What comes next: 2, 4, 6, 8, ?",
        options: ["9", "10", "12", "14"],
        answer: "10",
        explanation: "Increase by 2",
      },
      {
        question: "Find the odd one: Apple, Mango, Carrot, Banana",
        options: ["Apple", "Mango", "Carrot", "Banana"],
        answer: "Carrot",
        explanation: "Carrot is a vegetable",
      },
      {
        question: "What comes next: 1, 3, 5, 7, ?",
        options: ["8", "9", "10", "11"],
        answer: "9",
        explanation: "Add 2 each time",
      },
      {
        question: "Odd one out: Red, Blue, Green, Circle",
        options: ["Red", "Blue", "Green", "Circle"],
        answer: "Circle",
        explanation: "Circle is not a color",
      },
    ],
  },

  Verbal: {
    icon: "📚",
    color: "from-emerald-500 to-lime-400",
    questions: [
      {
        question: "Synonym of 'Fast'?",
        options: ["Slow", "Quick", "Lazy", "Late"],
        answer: "Quick",
        explanation: "Fast means quick",
      },
      {
        question: "Opposite of 'Happy'?",
        options: ["Sad", "Joyful", "Excited", "Calm"],
        answer: "Sad",
        explanation: "Opposite of happy is sad",
      },
      {
        question: "Choose correct spelling:",
        options: ["Recieve", "Receive", "Recive", "Receeve"],
        answer: "Receive",
        explanation: "Correct spelling is Receive",
      },
      {
        question: "Synonym of 'Big'?",
        options: ["Small", "Tiny", "Large", "Short"],
        answer: "Large",
        explanation: "Big means large",
      },
    ],
  },

"Movies & Music": {
  icon: "🎬",
  color: "from-pink-500 to-yellow-400",
  questions: [
    {
      question: "❄️ In Frozen, who has ice powers? 👸",
      options: ["Anna", "Elsa", "Olaf", "Kristoff"],
      answer: "Elsa",
      hint: "She is Anna's sister.",
      explanation: "Elsa has magical ice powers.",
      image: "/images/elsa-frozen.jpg",
    },
    {
      question: "⛄ What is the name of the snowman in Frozen?",
      options: ["Sven", "Olaf", "Bruno", "Maui"],
      answer: "Olaf",
      hint: "He loves warm hugs.",
      explanation: "Olaf is the friendly snowman.",
      image: "/images/olaf.jpg",
    },
    {
      question: "🌊 In Moana, what is the name of the demigod?",
      options: ["Maui", "Olaf", "Bruno", "Kristoff"],
      answer: "Maui",
      hint: "He has a magical hook.",
      explanation: "Maui is the powerful demigod.",
      image: "/images/maui.jpg",
    },
    {
      question: "🚤 What does Moana love most?",
      options: ["Mountains", "Ocean", "Desert", "Forest"],
      answer: "Ocean",
      hint: "She sails on it.",
      explanation: "Moana loves the ocean and adventure.",
      image: "/images/moana.jpg",
    },
    {
      question: "🏠 In Encanto, which character has no powers?",
      options: ["Mirabel", "Isabela", "Luisa", "Bruno"],
      answer: "Mirabel",
      hint: "She wears glasses.",
      explanation: "Mirabel is the only one without powers.",
      image: "/images/mirabel.jpg",
    },
    {
      question: "💪 Which character can lift heavy things in Encanto?",
      options: ["Luisa", "Isabela", "Mirabel", "Dolores"],
      answer: "Luisa",
      hint: "She is super strong.",
      explanation: "Luisa has super strength.",
      image: "/images/luisa.jpg",
    },
    {
      question: "🗡️ In Huntrix the Demon Hunters, what do hunters fight?",
      options: ["Robots", "Demons", "Animals", "Cars"],
      answer: "Demons",
      hint: "They protect people from evil creatures.",
      explanation: "Hunters protect people by fighting demons.",
      image: "/images/huntrix.jpg",
    },
    {
      question: "🛡️ What is the role of a demon hunter?",
      options: ["Cook food", "Fight evil", "Drive cars", "Paint"],
      answer: "Fight evil",
      hint: "They protect others.",
      explanation: "They protect people from evil forces.",
      image: "/images/demon-hunter.jpg",
    },
  ],
},
"GI Surgery & Minimal Access": {
  icon: "🩺",
  color: "from-sky-600 to-teal-500",
  questions: [
    {
      question: "During laparoscopic cholecystectomy, if the critical view of safety cannot be achieved and biliary anatomy remains unclear, which bailout strategy is preferred?",
      options: [
        "Continue fundus-first total cholecystectomy",
        "Subtotal cholecystectomy",
        "Blind clipping of suspected cystic structures",
        "Routine conversion to open in every case",
      ],
      answer: "Subtotal cholecystectomy",
      explanation:
        "Current safe cholecystectomy guidance supports considering subtotal cholecystectomy when the critical view cannot be safely achieved and anatomy remains unclear.",
    },
    {
      question: "What is the standard operative approach for most patients requiring gallbladder removal?",
      options: [
        "Open cholecystectomy",
        "Laparoscopic cholecystectomy",
        "Transgastric extraction only",
        "Non-operative management in all cases",
      ],
      answer: "Laparoscopic cholecystectomy",
      explanation:
        "Laparoscopic cholecystectomy is the standard of care for most patients requiring gallbladder removal.",
    },
    {
      question: "Which statement best describes the purpose of diagnostic laparoscopy?",
      options: [
        "It replaces all imaging in abdominal disease",
        "It is a guideline-supported tool for selected situations when direct intra-abdominal assessment may aid diagnosis or management",
        "It should never be used in acute abdominal conditions",
        "It is only useful in trauma and nowhere else",
      ],
      answer:
        "It is a guideline-supported tool for selected situations when direct intra-abdominal assessment may aid diagnosis or management",
      explanation:
        "SAGES diagnostic laparoscopy guidance supports its use as a selective adjunct in appropriate clinical settings.",
    },
    {
      question: "Within ERAS pathways for colorectal surgery, the main goal is best described as:",
      options: [
        "Standardized multimodal perioperative care to improve recovery",
        "Keeping patients fasting for prolonged periods after surgery",
        "Avoiding mobilization until discharge day",
        "Using one anesthetic strategy for every patient without variation",
      ],
      answer: "Standardized multimodal perioperative care to improve recovery",
      explanation:
        "ERAS focuses on evidence-based, standardized perioperative interventions to improve outcomes and recovery.",
    },
    {
      question: "In a minimally invasive GI surgery practice, which principle is most aligned with safe adoption of new techniques?",
      options: [
        "Introduce new techniques without structured evaluation",
        "Use new technology only after appropriate training, governance, and outcome review",
        "Adopt novel methods only in emergencies",
        "Avoid all innovation in established units",
      ],
      answer:
        "Use new technology only after appropriate training, governance, and outcome review",
      explanation:
        "SAGES guidance emphasizes structured adoption, training, and oversight when introducing new techniques and technology.",
    },
    {
      question: "A surgeon reviewing postoperative pathways for elective colorectal surgery is most likely applying which framework?",
      options: [
        "ERAS",
        "ATLS",
        "BI-RADS",
        "TNM only",
      ],
      answer: "ERAS",
      explanation:
        "ERAS is the core framework for standardized perioperative recovery pathways in colorectal surgery.",
    },
    {
      question: "Which of the following is the safest response when biliary anatomy is uncertain during laparoscopic cholecystectomy?",
      options: [
        "Proceed quickly to finish the case",
        "Pause, re-orient, use adjuncts or bailout strategies, and avoid blind division",
        "Divide structures based on expected anatomy",
        "Ignore the uncertainty if bleeding is minimal",
      ],
      answer:
        "Pause, re-orient, use adjuncts or bailout strategies, and avoid blind division",
      explanation:
        "Safe cholecystectomy principles prioritize clear anatomy and use of safe bailout strategies over forced completion.",
    },
    {
      question: "For a senior GI surgeon building a self-practice quiz in minimally invasive surgery, which topic mix is most appropriate?",
      options: [
        "Only instrument brand recall",
        "Guideline-based judgment, intraoperative decision-making, and perioperative pathways",
        "Only anatomy mnemonics from undergraduate training",
        "Only billing and coding scenarios",
      ],
      answer:
        "Guideline-based judgment, intraoperative decision-making, and perioperative pathways",
      explanation:
        "For advanced practice, the highest-yield review is judgment-heavy and guideline-grounded rather than rote memorization.",
    },
  ],
},


}