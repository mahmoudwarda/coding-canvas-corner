import type { Mission } from "../types";
import cover from "@/assets/mission-1-cover.jpg";

export const mission5: Mission = {
  id: "mission-5",
  order: 5,
  title: "Variables & Score",
  tagline: "Track points, lives, and time — the building blocks of every game.",
  cover,
  story:
    "The Code Jungle is hosting a coin race! But there's no scoreboard. Codey needs YOU to invent variables to count coins, lives, and lightning-fast times.",
  objectives: [
    "Create a variable in Scratch",
    "Change a variable while the game runs",
    "Show a score on the stage",
    "Use variables to control game logic",
  ],
  durationMin: 60,
  ageRange: "9–15",
  lesson: [
    { id: "m5-s1", type: "welcome", title: "Meet your first variable", illustration: cover, explanation: "A variable is a labeled box. You can put a number in it, and change it later.", accent: "sky" },
    { id: "m5-s2", type: "concept", title: "What can a variable hold?", explanation: "Numbers (score = 5), words (name = 'Alex'), or true/false. In Scratch we'll mostly use numbers.", accent: "coral", miniActivity: { kind: "tap-reveal", prompt: "Tap each example:", items: [ { label: "score", reveal: "Number. Starts at 0, goes up when you win coins." }, { label: "lives", reveal: "Number. Starts at 3, goes down when you get hit." }, { label: "name", reveal: "Text. The player's name." } ] } },
    { id: "m5-s3", type: "example", title: "Score in a game", explanation: "In Mario, coins go up when you touch them. That's a variable changing.", miniActivity: { kind: "multiple-choice", prompt: "What kind of value would a 'lives' variable hold?", options: ["A color", "A number", "A song", "A picture"], answerIndex: 1, explain: "Lives are counted with numbers." } },
    { id: "m5-s4", type: "practice", title: "Make a score", explanation: "In Scratch: Variables → Make a Variable → 'score'. Then use 'change score by 1' when the sprite touches a coin." },
    { id: "m5-s5", type: "challenge", title: "Level up!", explanation: "Make the game end when score reaches 10.", miniActivity: { kind: "sequence", prompt: "Put the win logic in order:", items: ["Say 'You win!'", "Wait until score = 10", "When flag clicked, set score to 0"], correctOrder: [2, 1, 0], explain: "Start → wait for condition → celebrate." } },
    { id: "m5-s6", type: "celebration", title: "Mission 5 Complete!", illustration: cover, explanation: "Now your games can keep score. Big step!", accent: "mint" },
  ],
  activities: [
    { id: "m5-a1", title: "Human calculator", description: "Kids hold cards with a number. On each event, the number changes.", objective: "Feel how a variable updates.", materials: ["Index cards"], durationMin: 15, teacherInstructions: ["Call out events; students rewrite the number."] },
    { id: "m5-a2", title: "Coin collector", description: "Build a simple game where sprite catches coins and score goes up.", objective: "Use variables in a real game.", materials: ["Computer"], durationMin: 30, teacherInstructions: ["Show a template, let them remix."] },
  ],
  scratch: {
    intro: "Create a variable called 'score' before writing any code.",
    teacherDemoUrl: "https://scratch.mit.edu/projects/10015347/embed",
    challenge: "Make a game where clicking a sprite adds 1 to your score.",
    hints: ["Make Variable → 'score'", "when this sprite clicked → change score by 1", "Reset with 'set score to 0' at start"],
    solution: "when flag clicked → set score to 0. when this sprite clicked → change score by 1.",
  },
  quiz: [
    { id: "m5-q1", prompt: "A variable is like…", options: ["A song", "A labeled box holding a value", "A costume", "A sound"], answerIndex: 1, explain: "Variables store values you can change." },
    { id: "m5-q2", prompt: "Which block increases score by 1?", options: ["set score to 0", "change score by 1", "say score", "when clicked"], answerIndex: 1, explain: "'change by' adds to the current value." },
    { id: "m5-q3", prompt: "Why reset score at the start?", options: ["It looks cool", "So it doesn't keep the previous game's number", "To save memory", "To make it faster"], answerIndex: 1, explain: "Otherwise the score keeps growing between games." },
  ],
  homework: [
    { id: "m5-h1", title: "Add lives", description: "Add a 'lives' variable to your game. Start at 3.", estimatedMin: 20 },
  ],
  resources: [
    { id: "m5-r1", title: "Mission 5 Workbook", description: "Variables practice.", type: "workbook", href: "/resources/mission-5-workbook.pdf", filename: "mission-5-workbook.pdf" },
  ],
  teacherNotes: ["Draw a literal box on the board and change what's in it. It really helps."],
  journalPrompts: [{ id: "m5-j1", prompt: "What would you count in your dream game?" }],
  nextMissionId: "mission-6",
};
