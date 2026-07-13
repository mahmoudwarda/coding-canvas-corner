export type ScreenType =
  | "welcome"
  | "briefing"
  | "character"
  | "story"
  | "objectives"
  | "icebreaker"
  | "concept"
  | "example"
  | "tour"
  | "demo"
  | "practice"
  | "challenge"
  | "reflection"
  | "celebration";

export type MiniActivity =
  | { kind: "multiple-choice"; prompt: string; options: string[]; answerIndex: number; explain: string }
  | { kind: "sequence"; prompt: string; items: string[]; correctOrder: number[]; explain: string }
  | { kind: "tap-reveal"; prompt: string; items: { label: string; reveal: string }[] }
  | { kind: "text"; prompt: string; placeholder?: string };

export interface LessonScreen {
  id: string;
  type: ScreenType;
  title: string;
  subtitle?: string;
  illustration?: string;
  explanation: string;
  teacherNote?: string;
  question?: string;
  miniActivity?: MiniActivity;
  accent?: "sky" | "sunshine" | "coral" | "mint" | "indigo" | "lavender";
}

export interface Activity {
  id: string;
  title: string;
  image?: string;
  description: string;
  objective: string;
  materials: string[];
  durationMin: number;
  teacherInstructions: string[];
}

export interface QuizQuestion {
  id: string;
  prompt: string;
  options: string[];
  answerIndex: number;
  explain: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: "workbook" | "teacher-guide" | "homework" | "mission-card" | "image";
  href: string;
  filename: string;
}

export interface HomeworkItem {
  id: string;
  title: string;
  description: string;
  estimatedMin: number;
}

export interface JournalPrompt {
  id: string;
  prompt: string;
}

export interface ScratchLab {
  intro: string;
  teacherDemoUrl: string;   // scratch project id URL or embed
  challenge: string;
  hints: string[];
  solution: string;
}

export interface Mission {
  id: string;
  order: number;
  title: string;
  tagline: string;
  cover: string;
  story: string;
  objectives: string[];
  durationMin: number;
  ageRange: string;
  lesson: LessonScreen[];
  activities: Activity[];
  scratch: ScratchLab;
  quiz: QuizQuestion[];
  homework: HomeworkItem[];
  resources: Resource[];
  teacherNotes: string[];
  journalPrompts: JournalPrompt[];
  nextMissionId?: string;
}
