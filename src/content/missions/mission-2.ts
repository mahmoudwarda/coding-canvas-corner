import type { Mission } from "../types";
import cover from "@/assets/mission-1-cover.jpg";
import scratchImg from "@/assets/lesson-scratch.jpg";
import robot from "@/assets/lesson-robot.jpg";

export const mission2: Mission = {
  id: "mission-2",
  order: 2,
  title: "Sprites, Costumes & Motion",
  tagline: "Give your sprite personality — costumes, sounds, and smooth movement.",
  cover,
  story:
    "Codey found a treasure chest full of costumes! But every time it puts one on, it forgets how to move. Help Codey mix costumes, sounds, and motion blocks to put on the greatest one-robot show the Code Jungle has ever seen.",
  objectives: [
    "Change a sprite's costume during a program",
    "Use motion blocks to move smoothly across the stage",
    "Play a sound when something happens",
    "Combine loops with motion",
  ],
  durationMin: 60,
  ageRange: "9–15",
  lesson: [
    {
      id: "m2-s1",
      type: "welcome",
      title: "Welcome back, Explorer!",
      subtitle: "Mission 2 · Sprites, Costumes & Motion",
      illustration: cover,
      explanation: "Last mission you made a sprite move. Today we make it look and sound alive!",
      accent: "sky",
    },
    {
      id: "m2-s2",
      type: "briefing",
      title: "Mission Briefing",
      explanation: "You'll learn costumes, sounds, and how a loop makes a sprite dance forever.",
      accent: "coral",
      miniActivity: {
        kind: "tap-reveal",
        prompt: "Tap the words to learn what they mean:",
        items: [
          { label: "Costume", reveal: "A different picture the same sprite can wear." },
          { label: "Loop", reveal: "A block that repeats other blocks over and over." },
          { label: "Event", reveal: "Something that happens — like a key press — that starts code." },
        ],
      },
    },
    {
      id: "m2-s3",
      type: "concept",
      title: "What is a costume?",
      illustration: scratchImg,
      explanation: "A sprite can have many costumes. Switching costumes quickly is how animation works!",
      accent: "sunshine",
    },
    {
      id: "m2-s4",
      type: "example",
      title: "Real-life loops",
      explanation: "Brushing your teeth is a loop: move brush left-right, repeat 20 times, stop.",
      miniActivity: {
        kind: "multiple-choice",
        prompt: "Which of these is NOT a loop?",
        options: ["Doing 10 jumping jacks", "Blinking your eyes", "Answering ONE question", "Chewing food"],
        answerIndex: 2,
        explain: "One-time actions aren't loops — loops repeat.",
      },
    },
    {
      id: "m2-s5",
      type: "practice",
      title: "Guided Practice",
      illustration: robot,
      explanation: "In Scratch, drag a 'forever' loop and put 'move 10 steps' + 'next costume' inside. Watch your sprite walk!",
    },
    {
      id: "m2-s6",
      type: "challenge",
      title: "Mini Challenge",
      explanation: "Make Codey dance for 4 seconds and then say 'Ta-da!'.",
      miniActivity: {
        kind: "sequence",
        prompt: "Put the dance program in order:",
        items: ["Say 'Ta-da!'", "Repeat 8 times: next costume + wait 0.5s", "When flag clicked"],
        correctOrder: [2, 1, 0],
        explain: "Start with the event, then repeat costumes, then say the message.",
      },
    },
    {
      id: "m2-s7",
      type: "celebration",
      title: "Mission 2 Complete!",
      illustration: cover,
      explanation: "You made your sprite move, change costumes, and dance. That is real animation!",
      accent: "mint",
    },
  ],
  activities: [
    {
      id: "m2-a1",
      title: "Costume Party",
      description: "Design 3 costumes for your sprite on paper before building in Scratch.",
      objective: "Plan animation frames before coding.",
      materials: ["Paper", "Markers"],
      durationMin: 15,
      teacherInstructions: ["Discuss how flipbooks work.", "Show a costume-switch example on the board."],
    },
    {
      id: "m2-a2",
      title: "Dance Battle",
      description: "In pairs, students program a 10-second dance and show the class.",
      objective: "Combine loops, motion, and sound.",
      materials: ["Computer with Scratch"],
      durationMin: 25,
      teacherInstructions: ["Set a timer.", "Celebrate every performance."],
    },
  ],
  scratch: {
    intro: "Open Scratch and add a second costume to your sprite.",
    teacherDemoUrl: "https://scratch.mit.edu/projects/10015244/embed",
    challenge: "Make your sprite walk across the stage while switching costumes.",
    hints: [
      "Use a 'forever' loop.",
      "Inside: 'move 10 steps' + 'next costume' + 'wait 0.2 seconds'.",
      "Add 'if on edge, bounce' so it doesn't leave the screen.",
    ],
    solution: "when flag clicked → forever [ move 10 steps · next costume · wait 0.2s · if on edge, bounce ]",
  },
  quiz: [
    {
      id: "m2-q1",
      prompt: "What is a costume in Scratch?",
      options: ["A sound", "Another picture for the same sprite", "A new sprite", "A background"],
      answerIndex: 1,
      explain: "Costumes are alternative looks for the same sprite.",
    },
    {
      id: "m2-q2",
      prompt: "Which block repeats other blocks?",
      options: ["move 10 steps", "forever", "say hello", "when clicked"],
      answerIndex: 1,
      explain: "'forever' is a loop that repeats what's inside.",
    },
    {
      id: "m2-q3",
      prompt: "Animation is really just…",
      options: ["Magic", "Switching pictures quickly", "One picture moving", "A sound effect"],
      answerIndex: 1,
      explain: "Switching costumes fast tricks our eyes into seeing motion.",
    },
  ],
  homework: [
    { id: "m2-h1", title: "Draw 4 costumes", description: "Design 4 costumes for a new sprite on paper.", estimatedMin: 15 },
    { id: "m2-h2", title: "Add sound", description: "Record a short sound and add it to your Scratch project.", estimatedMin: 15 },
  ],
  resources: [
    { id: "m2-r1", title: "Mission 2 Workbook", description: "Printable exercises for costumes & loops.", type: "workbook", href: "/resources/mission-2-workbook.pdf", filename: "mission-2-workbook.pdf" },
    { id: "m2-r2", title: "Teacher Guide", description: "Pacing and discussion prompts.", type: "teacher-guide", href: "/resources/mission-2-teacher.pdf", filename: "mission-2-teacher.pdf" },
  ],
  teacherNotes: [
    "Play a short animation clip before starting — it primes the 'switching pictures fast' concept.",
    "Encourage silliness — the costumes activity works best when nobody feels judged.",
  ],
  journalPrompts: [
    { id: "m2-j1", prompt: "What was the funniest costume you made today?" },
    { id: "m2-j2", prompt: "Loops repeat things. Where do you see loops in your day?" },
  ],
  nextMissionId: "mission-3",
};
