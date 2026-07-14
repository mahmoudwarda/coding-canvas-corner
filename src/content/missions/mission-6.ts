import type { Mission } from "../types";
import cover from "@/assets/mission-1-cover.jpg";
import celebrate from "@/assets/lesson-celebrate.jpg";

export const mission6: Mission = {
  id: "mission-6",
  order: 6,
  title: "Build Your First Game",
  tagline: "Put it all together — sprites, events, loops, and variables in ONE game.",
  cover,
  story:
    "Final mission of the season! The Code Jungle Council is hosting a game jam. Codey needs a game to enter. Combine everything you've learned into one epic Scratch project.",
  objectives: [
    "Plan a small game on paper first",
    "Combine events, loops, variables, and sprites",
    "Test and fix your game (debugging!)",
    "Share and celebrate your creation",
  ],
  durationMin: 90,
  ageRange: "9–15",
  lesson: [
    { id: "m6-s1", type: "welcome", title: "Game Jam Time!", illustration: cover, explanation: "This mission is a mini game jam. Plan, build, test, celebrate.", accent: "sky" },
    { id: "m6-s2", type: "briefing", title: "The 4 Ingredients", explanation: "Every game has: 1) a goal, 2) a player, 3) obstacles or targets, 4) a win/lose condition.", accent: "coral", miniActivity: { kind: "tap-reveal", prompt: "Tap each ingredient:", items: [ { label: "Goal", reveal: "What the player is trying to do." }, { label: "Player", reveal: "The sprite the human controls." }, { label: "Obstacles", reveal: "Things that make it harder or easier." }, { label: "Win/lose", reveal: "How the game ends." } ] } },
    { id: "m6-s3", type: "concept", title: "Debugging", explanation: "When your code doesn't work, it's a BUG. Finding and fixing bugs is called debugging — every coder does it constantly.", accent: "sunshine" },
    { id: "m6-s4", type: "example", title: "Game example", explanation: "Simple 'catch the falling apples' game: apples fall (loop), basket moves left/right (events), score goes up (variable). All 4 ingredients!" },
    { id: "m6-s5", type: "practice", title: "Plan on paper", explanation: "Sketch your game on paper before touching Scratch. What's the goal? Who's the player? What happens?" },
    { id: "m6-s6", type: "challenge", title: "Build your game!", explanation: "Take 20 minutes. Get something moving on the screen. It doesn't have to be perfect.", miniActivity: { kind: "text", prompt: "What is your game called?", placeholder: "e.g. Codey vs the Robot Ninjas" } },
    { id: "m6-s7", type: "reflection", title: "What did you learn?", explanation: "You built a real game from scratch (pun intended!). Take a moment — that's amazing.", miniActivity: { kind: "text", prompt: "One thing you're proud of:" } },
    { id: "m6-s8", type: "celebration", title: "Season 1 Complete!", illustration: celebrate, explanation: "6 missions done. You're officially a Coding Explorer. See you next season!", accent: "mint" },
  ],
  activities: [
    { id: "m6-a1", title: "Game design sheet", description: "Fill out a one-page game design brief before coding.", objective: "Plan before building.", materials: ["Design sheet (workbook)"], durationMin: 15, teacherInstructions: ["Model your own brief first."] },
    { id: "m6-a2", title: "Game Jam", description: "20-minute focused build. Then everyone plays each other's games.", objective: "Build and share a working game.", materials: ["Computer"], durationMin: 45, teacherInstructions: ["Timer visible.", "Celebrate ALL games, even broken ones."] },
    { id: "m6-a3", title: "Show & Tell", description: "Each student demos their game to the class.", objective: "Build confidence presenting work.", materials: ["Projector"], durationMin: 20, teacherInstructions: ["Two claps for every game."] },
  ],
  scratch: {
    intro: "Start from a blank project and build YOUR game.",
    teacherDemoUrl: "https://scratch.mit.edu/projects/10128407/embed",
    challenge: "Build a game with at least: 2 sprites, 1 variable, 1 loop, 2 events.",
    hints: ["Start SMALL. Get one thing moving first.", "Test after every 3 blocks — don't build 20 blocks then wonder why it broke.", "Score variable = instant fun."],
    solution: "There's no single right answer — every explorer's game is different!",
  },
  quiz: [
    { id: "m6-q1", prompt: "Debugging means…", options: ["Adding bugs", "Finding and fixing mistakes in your code", "Deleting all your code", "Restarting the computer"], answerIndex: 1, explain: "Debugging = fixing what's broken." },
    { id: "m6-q2", prompt: "Which of these does every game need?", options: ["Music", "A goal for the player", "3D graphics", "Multiplayer"], answerIndex: 1, explain: "Without a goal, it's not really a game." },
    { id: "m6-q3", prompt: "Best way to start building a game?", options: ["Code everything at once", "Start SMALL and test often", "Copy someone else's", "Wait until you know everything"], answerIndex: 1, explain: "Small steps + testing = fewer bugs and more fun." },
    { id: "m6-q4", prompt: "What's a sprite?", options: ["A drink", "A character in Scratch", "A block", "A costume"], answerIndex: 1, explain: "Sprites are the characters/objects in your project." },
  ],
  homework: [
    { id: "m6-h1", title: "Finish your game", description: "Polish your game jam project and share it with family.", estimatedMin: 30 },
    { id: "m6-h2", title: "Play a classmate's game", description: "Try someone else's game and write 1 nice thing about it.", estimatedMin: 15 },
  ],
  resources: [
    { id: "m6-r1", title: "Game Design Sheet", description: "One-page planning brief.", type: "workbook", href: "/resources/mission-6-design-sheet.pdf", filename: "mission-6-design-sheet.pdf" },
    { id: "m6-r2", title: "Teacher Guide", description: "Running the game jam.", type: "teacher-guide", href: "/resources/mission-6-teacher.pdf", filename: "mission-6-teacher.pdf" },
    { id: "m6-r3", title: "Season 1 Certificate", description: "Print & sign for every student.", type: "mission-card", href: "/resources/season-1-certificate.pdf", filename: "season-1-certificate.pdf" },
  ],
  teacherNotes: [
    "Focus on FINISHING, not perfection. A tiny working game beats a big broken one.",
    "Save 15 min at the end for Show & Tell — it's the emotional payoff of the whole season.",
  ],
  journalPrompts: [
    { id: "m6-j1", prompt: "What are you most proud of from this season?" },
    { id: "m6-j2", prompt: "If you could build ANY game next, what would it be?" },
  ],
};
