import type { Mission } from "../types";
import cover from "@/assets/mission-1-cover.jpg";
import robot from "@/assets/lesson-robot.jpg";

export const mission4: Mission = {
  id: "mission-4",
  order: 4,
  title: "Loops & Repetition",
  tagline: "Make computers do boring work so YOU don't have to.",
  cover,
  story:
    "The Code Jungle needs 100 stars drawn in the sky. Doing it one by one would take forever. Good thing Codey knows the secret weapon: LOOPS.",
  objectives: [
    "Explain why programmers use loops",
    "Use 'repeat N' and 'forever' blocks",
    "Draw a shape with a pen loop",
    "Nest a loop inside another loop",
  ],
  durationMin: 60,
  ageRange: "9–15",
  lesson: [
    { id: "m4-s1", type: "welcome", title: "Repeat! Repeat! Repeat!", illustration: cover, explanation: "Today we teach the computer to do boring stuff for us.", accent: "sky" },
    { id: "m4-s2", type: "concept", title: "Two kinds of loops", explanation: "'repeat 10' runs 10 times, then stops. 'forever' runs until you stop the program.", accent: "coral" },
    { id: "m4-s3", type: "example", title: "Draw a square", illustration: robot, explanation: "A square is: move → turn 90° → repeat 4 times. That's a loop!", miniActivity: { kind: "multiple-choice", prompt: "How many times do you repeat to draw a square?", options: ["2", "3", "4", "10"], answerIndex: 2, explain: "A square has 4 sides." } },
    { id: "m4-s4", type: "practice", title: "Try it in Scratch", explanation: "Use the pen extension. Repeat 4 times: move 100 → turn 90°. You just coded a square." },
    { id: "m4-s5", type: "challenge", title: "Shape Star", explanation: "Now make a star! What angle and how many repeats?", miniActivity: { kind: "multiple-choice", prompt: "Best combo for a 5-point star?", options: ["repeat 5, turn 144°", "repeat 4, turn 90°", "repeat 3, turn 60°", "repeat 10, turn 36°"], answerIndex: 0, explain: "5 sides × 144° = a classic star!" } },
    { id: "m4-s6", type: "celebration", title: "Mission 4 Complete!", illustration: cover, explanation: "Loops turned you into a shape-drawing wizard!", accent: "mint" },
  ],
  activities: [
    { id: "m4-a1", title: "Loop hunt", description: "Find 5 loops in the classroom or at home.", objective: "Recognize loops in the real world.", materials: ["Paper"], durationMin: 10, teacherInstructions: ["Share findings out loud."] },
    { id: "m4-a2", title: "Shape gallery", description: "Program 4 different shapes using loops.", objective: "Practice repeat + turn.", materials: ["Computer"], durationMin: 30, teacherInstructions: ["Print winners for the wall."] },
  ],
  scratch: {
    intro: "Add the Pen extension (bottom left, blue icon).",
    teacherDemoUrl: "https://scratch.mit.edu/projects/10015347/embed",
    challenge: "Draw a colorful hexagon.",
    hints: ["repeat 6", "move 80 steps", "turn 60°", "change pen color by 20"],
    solution: "pen down → repeat 6 [ move 80 · turn 60° · change pen color by 20 ] → pen up",
  },
  quiz: [
    { id: "m4-q1", prompt: "Why do we use loops?", options: ["To slow the computer down", "To repeat things without writing them many times", "To draw squares only", "For fun colors"], answerIndex: 1, explain: "Loops save you from repeating yourself." },
    { id: "m4-q2", prompt: "How many degrees to turn for a square corner?", options: ["45°", "60°", "90°", "180°"], answerIndex: 2, explain: "Squares have 90° corners." },
    { id: "m4-q3", prompt: "'forever' runs…", options: ["Once", "Until you stop it", "For 60 seconds", "Only in the morning"], answerIndex: 1, explain: "'forever' keeps going until the program stops." },
  ],
  homework: [
    { id: "m4-h1", title: "Design a shape", description: "Draw a shape on paper AND write the code (repeat + turn) to make it.", estimatedMin: 20 },
  ],
  resources: [
    { id: "m4-r1", title: "Mission 4 Workbook", description: "Loop puzzles.", type: "workbook", href: "/resources/mission-4-workbook.pdf", filename: "mission-4-workbook.pdf" },
  ],
  teacherNotes: ["The 'turn angle × repeats = 360°' rule is worth writing on the board."],
  journalPrompts: [{ id: "m4-j1", prompt: "If you could loop one thing in your life forever, what would it be?" }],
  nextMissionId: "mission-5",
};
