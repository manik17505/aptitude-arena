export const quizData = {
  Math: {
    icon: "➕",
    color: "from-blue-500 to-cyan-400",
    questions: [
      {
        difficulty: "Easy",
        question: "What is 12 × 8?",
        options: ["96", "88", "108", "72"],
        answer: "96",
        explanation: "12 × 8 = 96",
      },
      {
        difficulty: "Easy",
        question: "What is 15 + 27?",
        options: ["42", "40", "38", "45"],
        answer: "42",
        explanation: "15 + 27 = 42",
      },
      {
        difficulty: "Medium",
        question: "What is 144 ÷ 12?",
        options: ["10", "11", "12", "14"],
        answer: "12",
        explanation: "144 ÷ 12 = 12",
      },
      {
        difficulty: "Medium",
        question: "What is 25% of 200?",
        options: ["25", "50", "75", "100"],
        answer: "50",
        explanation: "25% means one-fourth. One-fourth of 200 is 50.",
      },
      {
        difficulty: "Hard",
        question: "A shop gives 10% discount on ₹500. What is the final price?",
        options: ["₹450", "₹400", "₹425", "₹475"],
        answer: "₹450",
        explanation: "10% of ₹500 is ₹50, so final price is ₹450.",
      },
      {
        difficulty: "Hard",
        question: "If 3 pencils cost ₹18, how much do 5 pencils cost?",
        options: ["₹25", "₹30", "₹35", "₹20"],
        answer: "₹30",
        explanation: "One pencil costs ₹6, so 5 pencils cost ₹30.",
      },
    ],
  },

  Logic: {
    icon: "🧠",
    color: "from-purple-500 to-pink-400",
    questions: [
      {
        difficulty: "Easy",
        question: "What comes next: 2, 4, 6, 8, ?",
        options: ["9", "10", "12", "14"],
        answer: "10",
        explanation: "Increase by 2 each time.",
      },
      {
        difficulty: "Easy",
        question: "Find the odd one: Apple, Mango, Carrot, Banana",
        options: ["Apple", "Mango", "Carrot", "Banana"],
        answer: "Carrot",
        explanation: "Carrot is a vegetable, the others are fruits.",
      },
      {
        difficulty: "Medium",
        question: "What comes next: 3, 6, 12, 24, ?",
        options: ["36", "42", "48", "30"],
        answer: "48",
        explanation: "Each number doubles.",
      },
      {
        difficulty: "Medium",
        question: "If all roses are flowers, then a rose is a...",
        options: ["Tree", "Flower", "Fruit", "Leaf"],
        answer: "Flower",
        explanation: "A rose belongs to the group 'flowers'.",
      },
      {
  difficulty: "Hard",
  question: "What comes next: A, C, F, J, ?",
  options: ["N", "O", "P", "Q"],
  answer: "O",
  explanation: "The jumps are +2, +3, +4, so next is +5 from J = O.",
},
      {
        difficulty: "Hard",
        question: "If today is Tuesday, what day will it be after 10 days?",
        options: ["Thursday", "Friday", "Saturday", "Sunday"],
        answer: "Friday",
        explanation: "10 days after Tuesday is Friday.",
      },
    ],
  },

  Verbal: {
    icon: "📚",
    color: "from-emerald-500 to-lime-400",
    questions: [
      {
        difficulty: "Easy",
        question: "Synonym of 'Fast'?",
        options: ["Slow", "Quick", "Lazy", "Late"],
        answer: "Quick",
        explanation: "Fast means quick.",
      },
      {
        difficulty: "Easy",
        question: "Opposite of 'Happy'?",
        options: ["Sad", "Joyful", "Excited", "Calm"],
        answer: "Sad",
        explanation: "Opposite of happy is sad.",
      },
      {
        difficulty: "Medium",
        question: "Choose correct spelling:",
        options: ["Recieve", "Receive", "Recive", "Receeve"],
        answer: "Receive",
        explanation: "The correct spelling is Receive.",
      },
      {
        difficulty: "Medium",
        question: "Synonym of 'Big'?",
        options: ["Small", "Tiny", "Large", "Short"],
        answer: "Large",
        explanation: "Big means large.",
      },
      {
        difficulty: "Hard",
        question: "Choose the correct sentence:",
        options: [
          "She go to school every day.",
          "She goes to school every day.",
          "She going to school every day.",
          "She gone to school every day.",
        ],
        answer: "She goes to school every day.",
        explanation: "With 'she', we use 'goes'.",
      },
      {
        difficulty: "Hard",
        question: "What is the antonym of 'ancient'?",
        options: ["Old", "Modern", "Broken", "Tall"],
        answer: "Modern",
        explanation: "Ancient means very old, so the opposite is modern.",
      },
    ],
  },

  "Movies & Music": {
    icon: "🎬",
    color: "from-pink-500 to-yellow-400",
    questions: [
      {
        difficulty: "Easy",
        question: "❄️ In Frozen, who has ice powers? 👸",
        options: ["Anna", "Elsa", "Olaf", "Kristoff"],
        answer: "Elsa",
        hint: "She is Anna's sister.",
        explanation: "Elsa has magical ice powers.",
        image: "/images/elsa-frozen.jpg",
      },
      {
        difficulty: "Easy",
        question: "⛄ What is the name of the snowman in Frozen?",
        options: ["Sven", "Olaf", "Bruno", "Maui"],
        answer: "Olaf",
        hint: "He loves warm hugs.",
        explanation: "Olaf is the friendly snowman.",
        image: "/images/olaf.jpg",
      },
      {
        difficulty: "Medium",
        question: "🌊 In Moana, what is the name of the demigod?",
        options: ["Maui", "Olaf", "Bruno", "Kristoff"],
        answer: "Maui",
        hint: "He has a magical hook.",
        explanation: "Maui is the powerful demigod.",
        image: "/images/maui.jpg",
      },
      {
        difficulty: "Medium",
        question: "🚤 What does Moana love most?",
        options: ["Mountains", "Ocean", "Desert", "Forest"],
        answer: "Ocean",
        hint: "She sails on it.",
        explanation: "Moana loves the ocean and adventure.",
        image: "/images/moana.jpg",
      },
      {
        difficulty: "Hard",
        question: "🏠 In Encanto, which character has no powers?",
        options: ["Mirabel", "Isabela", "Luisa", "Bruno"],
        answer: "Mirabel",
        hint: "She wears glasses.",
        explanation: "Mirabel is the only one without powers.",
        image: "/images/mirabel.jpg",
      },
      {
        difficulty: "Hard",
        question: "💪 Which character can lift heavy things in Encanto?",
        options: ["Luisa", "Isabela", "Mirabel", "Dolores"],
        answer: "Luisa",
        hint: "She is super strong.",
        explanation: "Luisa has super strength.",
        image: "/images/luisa.jpg",
      },
    ],
  },

  "GI Surgery & Minimal Access": {
  icon: "🩺",
  color: "from-sky-600 to-teal-500",
  questions: [
    {
      difficulty: "Easy",
      question: "Which statement best describes minimal access surgery?",
      options: [
        "It always requires a large incision",
        "It uses smaller incisions and visual guidance such as a camera",
        "It avoids all instruments",
        "It is only used in orthopedic surgery",
      ],
      answer: "It uses smaller incisions and visual guidance such as a camera",
      explanation:
        "Minimal access surgery typically uses smaller access ports and visual guidance, usually with a laparoscope or similar platform.",
    },
    {
      difficulty: "Easy",
      question: "Which instrument is most closely associated with standard laparoscopic abdominal surgery?",
      options: ["Stethoscope", "Laparoscope", "Otoscope", "Bronchoscope"],
      answer: "Laparoscope",
      explanation:
        "A laparoscope is the camera-based instrument used to visualize the abdominal cavity in laparoscopic surgery.",
    },
    {
      difficulty: "Medium",
      question: "What is the current standard operative approach for most patients requiring cholecystectomy?",
      options: [
        "Open cholecystectomy",
        "Laparoscopic cholecystectomy",
        "Endoscopic cholecystectomy",
        "Observation alone",
      ],
      answer: "Laparoscopic cholecystectomy",
      explanation:
        "SAGES identifies laparoscopic cholecystectomy as the standard of care for most patients requiring gallbladder removal.",
    },
    {
      difficulty: "Medium",
      question: "If the critical view of safety cannot be achieved and biliary anatomy remains unclear during laparoscopic cholecystectomy, which bailout option is favored?",
      options: [
        "Blind clipping of presumed cystic structures",
        "Fundus-first total cholecystectomy in all cases",
        "Subtotal cholecystectomy",
        "Continue dissection until a structure seems likely to be the cystic duct",
      ],
      answer: "Subtotal cholecystectomy",
      explanation:
        "Safe cholecystectomy guidance supports considering subtotal cholecystectomy when the critical view cannot be safely obtained and anatomy remains unclear.",
    },
    {
      difficulty: "Medium",
      question: "Which principle is most appropriate when biliary anatomy is uncertain intraoperatively?",
      options: [
        "Proceed quickly before inflammation worsens",
        "Pause, re-orient, use adjuncts or bailout strategies, and avoid blind division",
        "Clip any two visible tubular structures",
        "Ignore the uncertainty if bleeding is minimal",
      ],
      answer: "Pause, re-orient, use adjuncts or bailout strategies, and avoid blind division",
      explanation:
        "Safe cholecystectomy principles prioritize controlled decision-making and avoidance of blind division when anatomy is unclear.",
    },
    {
      difficulty: "Medium",
      question: "Diagnostic laparoscopy is best described as:",
      options: [
        "A replacement for all abdominal imaging",
        "A selective adjunct when direct intra-abdominal assessment may aid diagnosis or management",
        "A technique reserved only for trauma",
        "A method that should never be used in acute abdominal conditions",
      ],
      answer: "A selective adjunct when direct intra-abdominal assessment may aid diagnosis or management",
      explanation:
        "SAGES describes diagnostic laparoscopy as a guideline-supported tool in selected clinical situations.",
    },
    {
      difficulty: "Hard",
      question: "In an ERAS-style colorectal pathway, the overall goal is best summarized as:",
      options: [
        "Standardized multimodal perioperative care to improve recovery",
        "Longer fasting and delayed mobilization",
        "Uniform management without regard to evidence",
        "Avoiding discharge planning until the day of discharge",
      ],
      answer: "Standardized multimodal perioperative care to improve recovery",
      explanation:
        "ERAS is a multimodal perioperative pathway intended to support earlier, safer recovery after major surgery.",
    },
    {
      difficulty: "Hard",
      question: "Which approach is most consistent with safe adoption of a new minimally invasive GI technique in senior practice?",
      options: [
        "Immediate routine use in all cases without review",
        "Structured adoption with training, governance, and outcome review",
        "Using it only when no team support is available",
        "Avoiding all innovation once independent practice is reached",
      ],
      answer: "Structured adoption with training, governance, and outcome review",
      explanation:
        "Current specialty guidance emphasizes safe implementation, training, and oversight when introducing new techniques.",
    },
    {
      difficulty: "Hard",
      question: "A senior GI surgeon reviewing perioperative feeding, mobilization, analgesia, and discharge planning is most likely working within which framework?",
      options: ["ERAS", "ATLS", "BI-RADS", "TNM staging"],
      answer: "ERAS",
      explanation:
        "These are hallmark components of an enhanced recovery pathway.",
    },
    {
  difficulty: "Hard",
  question: "A 55-year-old patient undergoing laparoscopic cholecystectomy has dense inflammation in Calot’s triangle. The critical view of safety cannot be achieved. What is the safest next step?",
  options: [
    "Continue dissection until anatomy becomes clear",
    "Divide structures based on assumption",
    "Convert to a bailout procedure such as subtotal cholecystectomy",
    "Abandon the procedure immediately in all cases"
  ],
  answer: "Convert to a bailout procedure such as subtotal cholecystectomy",
  explanation: "When CVS cannot be achieved safely, bailout strategies like subtotal cholecystectomy are recommended."
},

{
  difficulty: "Hard",
  question: "During laparoscopic appendectomy, the base of the appendix appears inflamed but intact. What is the most appropriate management?",
  options: [
    "Remove appendix with secure closure of the base",
    "Leave appendix in situ",
    "Convert to open surgery in all cases",
    "Only drain without removing appendix"
  ],
  answer: "Remove appendix with secure closure of the base",
  explanation: "Appendectomy with secure closure is standard when the base is intact."
},

{
  difficulty: "Hard",
  question: "A patient develops tachycardia and abdominal pain 24 hours after laparoscopic colorectal surgery. What should be the priority?",
  options: [
    "Ignore as normal post-op pain",
    "Early evaluation for complications such as leak or bleeding",
    "Discharge the patient",
    "Only give analgesics"
  ],
  answer: "Early evaluation for complications such as leak or bleeding",
  explanation: "Early recognition of complications is critical in minimally invasive colorectal surgery."
},

{
  difficulty: "Hard",
  question: "During laparoscopic surgery, there is sudden loss of vision and rising end-tidal CO2. What is the most likely cause?",
  options: [
    "Instrument failure",
    "CO2 insufflation-related issue",
    "Patient dehydration",
    "Skin incision problem"
  ],
  answer: "CO2 insufflation-related issue",
  explanation: "Changes in ETCO2 and visualization often relate to pneumoperitoneum or insufflation issues."
},

{
  difficulty: "Hard",
  question: "A surgeon is adopting a new minimally invasive GI technique. What is the most appropriate approach?",
  options: [
    "Use it in all patients immediately",
    "Adopt it without training",
    "Introduce it with structured training and outcome monitoring",
    "Avoid learning new techniques"
  ],
  answer: "Introduce it with structured training and outcome monitoring",
  explanation: "Safe adoption requires training, supervision, and audit of outcomes."
},

{
  difficulty: "Hard",
  question: "A patient undergoing ERAS protocol after colorectal surgery is being managed postoperatively. Which practice aligns best with ERAS principles?",
  options: [
    "Prolonged fasting",
    "Early mobilization and early feeding",
    "Strict bed rest",
    "Delayed discharge planning"
  ],
  answer: "Early mobilization and early feeding",
  explanation: "ERAS emphasizes early recovery strategies including mobilization and nutrition."
},
  ],
},
};