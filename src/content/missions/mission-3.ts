import type { Mission } from "../types";
import cover from "@/assets/mission-1-cover.jpg";
import robot from "@/assets/lesson-robot.jpg";

export const mission3: Mission = {
  id: "mission-3",
  order: 3,
  title: "Events, Keys & Interaction",
  tagline: "Make your project react to clicks, keys, and messages.",
  cover,
  story:
    "The Code Jungle is quiet — too quiet. Codey needs YOU to wake up the sprites so they answer keys, clicks, and secret messages. Time to build interactive magic!",
  objectives: [
    "Use event blocks (when flag clicked, when key pressed)",
    "Broadcast and receive messages between sprites",
    "Make a sprite react to a mouse click",
    "Combine events with motion and sounds",
  ],
  durationMin: 60,
  ageRange: "9–15",
  lesson: [
    { id: "m3-s1", type: "welcome", title: "Wake up the Jungle!", illustration: cover, explanation: "Today your projects start listening — to keys, clicks, and each other.", accent: "sky" },
    { id: "m3-s2", type: "concept", title: "What is an event?", explanation: "An event is something that happens — a click, a key press — that can start code running.", accent: "coral", miniActivity: { kind: "tap-reveal", prompt: "Tap each event:", items: [ { label: "Flag clicked", reveal: "Starts the program." }, { label: "Key pressed", reveal: "Runs code when a keyboard key is pressed." }, { label: "Sprite clicked", reveal: "Runs code when someone taps that sprite." } ] } },
    { id: "m3-s3", type: "example", title: "Events in real life", explanation: "A doorbell ringing is an event. It triggers action: someone opens the door.", miniActivity: { kind: "multiple-choice", prompt: "Which of these is an event?", options: ["Water boiling", "Nothing happening", "Sitting still", "Silence"], answerIndex: 0, explain: "Water boiling is a change that can trigger action." } },
    { id: "m3-s4", type: "practice", title: "Try it: arrow keys", illustration: robot, explanation: "Make Codey move right when → is pressed. Use 'when right arrow key pressed' → 'move 10 steps'." },
    { id: "m3-s5", type: "challenge", title: "Secret Message", explanation: "Two sprites talking! Make sprite A 'broadcast hello' and sprite B respond when it receives it.", miniActivity: { kind: "sequence", prompt: "Order the message flow:", items: ["Sprite B says 'Hi!'", "Sprite A broadcasts 'hello'", "Sprite B receives 'hello'"], correctOrder: [1, 2, 0], explain: "Broadcast → receive → react." } },
    { id: "m3-s6", type: "celebration", title: "Mission 3 Complete!", illustration: cover, explanation: "Your projects can now listen and react. That's interactivity!", accent: "mint" },
  ],
  activities: [
    { id: "m3-a1", title: "Human events", description: "Kids act as sprites and 'broadcast' messages across the room.", objective: "Feel how events and messages work.", materials: ["Open space"], durationMin: 15, teacherInstructions: ["Assign each student an event.", "One student broadcasts, others react."] },
    { id: "m3-a2", title: "Two-sprite conversation", description: "Build a Scratch project with two sprites having a conversation using broadcasts.", objective: "Use broadcast and receive.", materials: ["Computer"], durationMin: 25, teacherInstructions: ["Model one exchange first.", "Encourage funny dialogue."] },
  ],
  scratch: {
    intro: "Add a second sprite from the library. Both need scripts.",
    teacherDemoUrl: "https://scratch.mit.edu/projects/10128067/embed",
    challenge: "Make two sprites talk to each other using broadcast messages.",
    hints: ["Sprite 1: when flag clicked → say 'Hi!' → broadcast 'greeting'", "Sprite 2: when I receive 'greeting' → say 'Hello back!'"],
    solution: "Sprite A broadcasts, Sprite B receives and responds. Chain more broadcasts for longer chats.",
  },
  quiz: [
    { id: "m3-q1", prompt: "What is a broadcast in Scratch?", options: ["A radio show", "A hidden message between sprites", "A costume change", "A loop"], answerIndex: 1, explain: "Broadcasts are messages sprites send each other." },
    { id: "m3-q2", prompt: "Which block starts a program when the green flag is clicked?", options: ["when key pressed", "when flag clicked", "forever", "move 10 steps"], answerIndex: 1, explain: "'when flag clicked' is the classic starting event." },
    { id: "m3-q3", prompt: "Events let your project…", options: ["Sleep", "React to things", "Delete itself", "Cost money"], answerIndex: 1, explain: "Events = reactions." },
  ],
  homework: [
    { id: "m3-h1", title: "Add 3 events", description: "Add three different events to your Scratch project.", estimatedMin: 15 },
  ],
  resources: [
    { id: "m3-r1", title: "Mission 3 Workbook", description: "Events practice sheet.", type: "workbook", href: "/resources/mission-3-workbook.pdf", filename: "mission-3-workbook.pdf" },
  ],
  teacherNotes: ["Broadcast confuses kids at first — do the human-events activity BEFORE the digital one."],
  journalPrompts: [
    { id: "m3-j1", prompt: "What's a real-life event that always makes you react the same way?" },
  ],
  nextMissionId: "mission-4",
};
