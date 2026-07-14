import type { Mission } from "../types";
import cover from "@/assets/mission-1-cover.jpg";
import sandwich from "@/assets/lesson-sandwich.jpg";
import robot from "@/assets/lesson-robot.jpg";
import scratch from "@/assets/lesson-scratch.jpg";
import programming from "@/assets/lesson-programming.jpg";
import celebrate from "@/assets/lesson-celebrate.jpg";

export const mission1: Mission = {
  id: "mission-1",
  order: 1,
  title: "The Code Explorer Begins",
  tagline: "Meet Codey, learn what programming is, and write your very first Scratch code.",
  cover,
  story:
    "The world of code is a jungle of glowing blocks. Somewhere inside, a friendly robot named Codey is stuck without instructions. You are the newest Code Explorer, and Codey needs YOU to teach it how to move, think, and play. Grab your explorer's hat — Mission 1 begins!",
  objectives: [
    "Explain what programming is in your own words",
    "Put steps of an algorithm in the correct order",
    "Find your way around the Scratch editor",
    "Make a Scratch sprite move using code blocks",
  ],
  durationMin: 60,
  ageRange: "9–15",

  lesson: [
    {
      id: "s1",
      type: "welcome",
      title: "Welcome, Explorer!",
      subtitle: "Mission 1 · The Code Explorer Begins",
      illustration: cover,
      explanation:
        "You just joined the Coding Explorers Academy. Every mission is an adventure where you learn to make computers do amazing things. Are you ready?",
      teacherNote:
        "Get students excited. Ask 'Who has ever wondered how games or apps are made?' Show energy — this is Mission 1.",
      accent: "sky",
    },
    {
      id: "s2",
      type: "briefing",
      title: "Your Mission Briefing",
      explanation:
        "In this mission you'll learn what code is, discover algorithms hiding in your everyday life, and take your very first steps inside Scratch. By the end, you'll make a sprite move on the screen — with YOUR instructions.",
      teacherNote: "Read the four objectives aloud. Point to the sidebar so kids know how far they'll travel.",
      accent: "coral",
      miniActivity: {
        kind: "tap-reveal",
        prompt: "Tap each mission goal to see what it means:",
        items: [
          { label: "Understand code", reveal: "Code is a set of instructions a computer follows." },
          { label: "Think in steps", reveal: "Breaking a big problem into tiny steps is called an algorithm." },
          { label: "Meet Scratch", reveal: "Scratch is a colorful playground where you build code with blocks." },
          { label: "Move a sprite", reveal: "A sprite is a character. You'll make it dance!" },
        ],
      },
    },
    {
      id: "s3",
      type: "character",
      title: "Meet Codey",
      explanation:
        "This is Codey — your co-pilot for every mission. Codey is a curious little robot who loves solving puzzles, tells the best jokes, and sometimes needs YOUR help to figure things out.",
      teacherNote: "Codey appears on every screen. Encourage students to 'help Codey' rather than 'answer the question'.",
      accent: "sunshine",
    },
    {
      id: "s4",
      type: "story",
      title: "The Story So Far",
      illustration: cover,
      explanation:
        "Deep in the Code Jungle, Codey stepped on a broken command tile and forgot how to move. The Council of Coders sent out a call for help. That's YOU! Your job is to teach Codey the basics — one instruction at a time.",
      question: "Who do we need to help in this mission?",
      teacherNote: "Storytelling anchors abstract concepts. Ham it up.",
      accent: "indigo",
    },
    {
      id: "s5",
      type: "objectives",
      title: "What You'll Learn",
      explanation: "By the end of this mission you will be able to:",
      teacherNote: "Make objectives visible on your board too — students should be able to check them off.",
      accent: "mint",
    },
    {
      id: "s6",
      type: "icebreaker",
      title: "Icebreaker: Robot Says",
      explanation:
        "Stand up! I'll say a command like 'Robot: hop twice'. You follow ONLY if the command starts with 'Robot:'. This is how computers work — they only follow exact instructions.",
      teacherNote: "Play 4–5 rounds. Sneak in 'Please hop' to catch listeners.",
      accent: "coral",
      miniActivity: {
        kind: "multiple-choice",
        prompt: "The computer will only follow…",
        options: ["Whatever it wants", "The exact instruction you give", "Your thoughts", "A polite request"],
        answerIndex: 1,
        explain: "Computers do exactly what you say — no more, no less. That's why coding must be precise!",
      },
    },
    {
      id: "s7",
      type: "concept",
      title: "What is Programming?",
      illustration: programming,
      explanation:
        "Programming is the art of giving a computer a list of instructions in a language it understands. Those instructions are called code. You are the boss — the computer just does what you write.",
      question: "Who writes the instructions — you or the computer?",
      teacherNote: "Emphasize: you are in charge. The computer is powerful but not clever without you.",
      accent: "sky",
      miniActivity: {
        kind: "multiple-choice",
        prompt: "Code is best described as…",
        options: ["Magic words", "Instructions for a computer", "A type of cake", "A secret language only adults know"],
        answerIndex: 1,
        explain: "Exactly! Code is just a list of instructions. Every app you use is made of them.",
      },
    },
    {
      id: "s8",
      type: "concept",
      title: "Algorithms & Sequencing",
      illustration: sandwich,
      explanation:
        "An algorithm is a step-by-step recipe. Order matters! If you put the jam BEFORE the bread, you get a mess. Programmers think about the correct order all the time — that's called sequencing.",
      teacherNote: "Great moment to have a student describe their morning routine in order. Highlight what goes wrong if steps swap.",
      accent: "sunshine",
      miniActivity: {
        kind: "sequence",
        prompt: "Drag the sandwich steps into the right order:",
        items: [
          "Put the two slices together",
          "Take out two slices of bread",
          "Spread jam on one slice",
          "Spread peanut butter on the other slice",
        ],
        correctOrder: [1, 3, 2, 0],
        explain: "Get the bread first, add fillings, then combine. Every algorithm has a correct sequence!",
      },
    },
    {
      id: "s9",
      type: "example",
      title: "Algorithms in Real Life",
      explanation:
        "Brushing your teeth? Algorithm. Tying your shoes? Algorithm. A dance routine? Algorithm. Anything you do in steps is one. Coders just write theirs down for computers.",
      teacherNote: "Ask 3 students to share an algorithm from their day.",
      accent: "mint",
      miniActivity: {
        kind: "tap-reveal",
        prompt: "Tap to see the hidden algorithm:",
        items: [
          { label: "Making toast", reveal: "1) Get bread  2) Put in toaster  3) Push down  4) Wait  5) Butter it" },
          { label: "Playing a song", reveal: "1) Pick song  2) Press play  3) Adjust volume  4) Enjoy" },
          { label: "Going to school", reveal: "1) Wake up  2) Get dressed  3) Eat  4) Leave  5) Arrive" },
        ],
      },
    },
    {
      id: "s10",
      type: "tour",
      title: "The Scratch Interface Tour",
      illustration: scratch,
      explanation:
        "Scratch has three big zones: the BLOCKS palette on the left (your code Lego), the SCRIPTS area in the middle (where you snap blocks together), and the STAGE on the right (where your sprite lives and plays).",
      teacherNote: "Show scratch.mit.edu on your screen. Point to each zone as you say it.",
      accent: "indigo",
      miniActivity: {
        kind: "multiple-choice",
        prompt: "Where does your sprite live and play?",
        options: ["The Blocks palette", "The Scripts area", "The Stage", "Your bedroom"],
        answerIndex: 2,
        explain: "The Stage on the right is your sprite's playground!",
      },
    },
    {
      id: "s11",
      type: "demo",
      title: "First Scratch Demo",
      illustration: robot,
      explanation:
        "Watch as I snap three blocks together: 'when flag clicked' → 'move 10 steps' → 'say Hello!'. Green flag, GO — the sprite scoots and speaks. That's your first program!",
      teacherNote: "Live-demo in Scratch. Type the exact block names as you drag them.",
      accent: "sky",
    },
    {
      id: "s12",
      type: "practice",
      title: "Guided Practice",
      explanation:
        "Your turn. Open Scratch, drag those same three blocks together, and click the flag. Then change 10 steps to 50. What happens? Change 'Hello!' to your name.",
      teacherNote: "Circulate. Common issue: kids drag the block instead of snapping it under the previous one.",
      accent: "coral",
      miniActivity: {
        kind: "multiple-choice",
        prompt: "If you change 'move 10 steps' to 'move 100 steps', the sprite will…",
        options: ["Move less", "Move more", "Stay still", "Sing a song"],
        answerIndex: 1,
        explain: "Bigger number = bigger move. You just changed a parameter — a coder-level move!",
      },
    },
    {
      id: "s13",
      type: "challenge",
      title: "Mini Challenge: Make Codey Dance",
      illustration: robot,
      explanation:
        "Challenge time! Make your sprite move right, then left, then right, then left — 4 times. Then make it spin. There's no single right answer — invent your own dance.",
      teacherNote:
        "Show the Solution tab (in the Scratch Lab section) only if a group is truly stuck. Encourage 'repeat' block discovery.",
      accent: "sunshine",
    },
    {
      id: "s14",
      type: "reflection",
      title: "Reflection",
      explanation:
        "You explored a whole new world today. Take a breath, then answer Codey's question. There are no wrong answers — this is your journal.",
      teacherNote: "Give students 3–4 quiet minutes. Reflection cements learning.",
      accent: "lavender",
      miniActivity: {
        kind: "text",
        prompt: "What is one thing you learned today that you didn't know this morning?",
        placeholder: "Type your thought here…",
      },
    },
    {
      id: "s15",
      type: "celebration",
      title: "Mission Complete!",
      illustration: celebrate,
      explanation:
        "You did it! You now know what code is, you can spot an algorithm anywhere, and you wrote real Scratch code. You've earned the FIRST BLOCK badge. Codey is dancing. See you in Mission 2!",
      teacherNote: "Big cheer, high fives. Print or share badges if you can.",
      accent: "mint",
    },
  ],

  activities: [
    {
      id: "a1",
      title: "Human Robot",
      image: robot,
      description:
        "One student is the 'robot'. The rest must guide them across the room to a target using only spoken commands: step forward, turn left, turn right.",
      objective: "Feel how precise instructions must be for a machine to succeed.",
      materials: ["Open floor space", "A small target object (cup or book)", "Blindfold (optional)"],
      durationMin: 10,
      teacherInstructions: [
        "Pick one volunteer as the 'robot'.",
        "The rest of the class calls out ONE instruction at a time.",
        "Robot only follows exact commands. No 'go over there'.",
        "Debrief: what went wrong? Why?",
      ],
    },
    {
      id: "a2",
      title: "Sandwich Algorithm",
      image: sandwich,
      description:
        "In pairs, students write step-by-step instructions to make a peanut-butter-and-jelly sandwich. The teacher follows them LITERALLY. Hilarity ensues.",
      objective: "Discover why algorithms must be exact and unambiguous.",
      materials: ["Bread", "Peanut butter", "Jam", "Butter knife", "Plate", "Paper & pens"],
      durationMin: 15,
      teacherInstructions: [
        "Give pairs 5 minutes to write instructions.",
        "Follow instructions literally — 'put jam on bread' means jam on the bag!",
        "Ask pairs to rewrite with more detail.",
        "Highlight the language of coding: precise, ordered, unambiguous.",
      ],
    },
    {
      id: "a3",
      title: "Unplugged Sequencing Cards",
      image: programming,
      description:
        "Print a set of arrow cards (→ ← ↑ ↓). In teams, kids build a card-sequence to guide a paper robot from Start to Finish on a grid drawn on paper.",
      objective: "Practice sequencing away from the screen.",
      materials: ["Printed arrow cards", "Grid drawn on paper or floor", "Paper robot token"],
      durationMin: 15,
      teacherInstructions: [
        "Draw a 6x6 grid with obstacles.",
        "Teams lay down arrow cards for the full path.",
        "Test by moving the token exactly as the cards say.",
        "Discuss debugging: what did you change when it failed?",
      ],
    },
  ],

  scratch: {
    intro:
      "Scratch is a free coding playground made by MIT. You drag colorful blocks together to make characters (called sprites) do things.",
    // Sample project — the classic "Getting Started" showcase project
    teacherDemoUrl: "https://scratch.mit.edu/projects/10015261/embed",
    challenge:
      "Make the cat sprite move right, left, right, left — then say your name. Bonus: add a 'when flag clicked' at the top so it plays with the green flag.",
    hints: [
      "Look inside the blue 'Motion' category for movement blocks.",
      "Look inside the purple 'Looks' category for the 'say' block.",
      "Yellow 'Events' has the 'when flag clicked' hat block.",
      "Blocks snap together like Lego — line them up under the previous block.",
    ],
    solution:
      "when flag clicked → move 50 steps → move -50 steps → move 50 steps → move -50 steps → say [your name] for 2 seconds",
  },

  quiz: [
    {
      id: "q1",
      prompt: "What is code?",
      options: ["A secret language", "A list of instructions for a computer", "A password", "A type of block"],
      answerIndex: 1,
      explain: "Code is a set of instructions the computer follows exactly.",
    },
    {
      id: "q2",
      prompt: "An algorithm is…",
      options: ["A math trick", "A step-by-step recipe to solve a problem", "A Scratch sprite", "A snack"],
      answerIndex: 1,
      explain: "Any step-by-step method to do something is an algorithm.",
    },
    {
      id: "q3",
      prompt: "In Scratch, where does your sprite appear?",
      options: ["The Blocks Palette", "The Stage", "The Scripts area", "The desktop"],
      answerIndex: 1,
      explain: "The Stage on the right is where sprites perform.",
    },
    {
      id: "q4",
      prompt: "Which block starts your program when the green flag is clicked?",
      options: ["'move 10 steps'", "'when flag clicked'", "'say Hello'", "'wait 1 second'"],
      answerIndex: 1,
      explain: "'when flag clicked' is a hat block that starts the code when the green flag is pressed.",
    },
    {
      id: "q5",
      prompt: "Why must a computer's instructions be exact?",
      options: [
        "So it doesn't get bored",
        "Because computers only do exactly what they're told",
        "So teachers are happy",
        "So batteries last longer",
      ],
      answerIndex: 1,
      explain: "Computers don't guess. They follow instructions literally. Precise = correct.",
    },
  ],

  homework: [
    {
      id: "h1",
      title: "Find 3 algorithms at home",
      description:
        "Write down 3 things you do at home that happen in steps (making cereal, feeding a pet, brushing teeth). List the steps in order.",
      estimatedMin: 15,
    },
    {
      id: "h2",
      title: "Scratch: dance loop",
      description:
        "Open Scratch and make a sprite move in a small square (right, down, left, up) 3 times. Save it and bring the link to next class.",
      estimatedMin: 25,
    },
    {
      id: "h3",
      title: "Teach a grown-up",
      description: "Explain the word 'algorithm' to someone at home in ONE sentence. Get them to write it down!",
      estimatedMin: 5,
    },
  ],

  resources: [
    {
      id: "r1",
      title: "Student Workbook — Mission 1",
      description: "Printable pages: notes, sandwich algorithm worksheet, and reflection prompts.",
      type: "workbook",
      href: "/resources/mission-1-workbook.pdf",
      filename: "mission-1-workbook.pdf",
    },
    {
      id: "r2",
      title: "Teacher Guide — Mission 1",
      description: "Timings, discussion prompts, and common student misconceptions.",
      type: "teacher-guide",
      href: "/resources/mission-1-teacher-guide.pdf",
      filename: "mission-1-teacher-guide.pdf",
    },
    {
      id: "r3",
      title: "Homework Handout — Mission 1",
      description: "The three homework challenges in a printable one-pager.",
      type: "homework",
      href: "/resources/mission-1-homework.pdf",
      filename: "mission-1-homework.pdf",
    },
    {
      id: "r4",
      title: "Mission Card — First Block Badge",
      description: "Collectible badge for students who complete Mission 1.",
      type: "mission-card",
      href: "/resources/mission-1-badge.png",
      filename: "mission-1-badge.png",
    },
    {
      id: "r5",
      title: "Mission 1 Cover Poster",
      description: "Print-ready hero illustration to hang in the classroom.",
      type: "image",
      href: "/resources/mission-1-cover.png",
      filename: "mission-1-cover.png",
    },
  ],

  teacherNotes: [
    "Total mission length is about 60 minutes; you can split across two sessions after screen 8.",
    "Age 9–15 mixed groups: pair younger with older students during the Sandwich Algorithm activity.",
    "Scratch requires internet. If offline, use the unplugged sequencing cards activity instead.",
    "Watch for the biggest misconception: 'computers are smart'. Reframe: 'computers are fast, but they only do what YOU say'.",
    "End with a big celebration — energy at the end matters more than perfect completion.",
  ],

  journalPrompts: [
    { id: "j1", prompt: "What was the coolest thing you learned in Mission 1?" },
    { id: "j2", prompt: "Draw or describe your idea of Codey the robot." },
    { id: "j3", prompt: "What is one thing you want to build next?" },
  ],

  nextMissionId: "mission-2",
};
