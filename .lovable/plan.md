# Coding Explorers MVP — Plan

Interactive, kid-friendly (ages 9–15) course experience that replaces PowerPoint with a mission-based website. Built on the existing TanStack Start + React + TS + Tailwind + shadcn/ui stack. No auth, no backend, no DB — all content lives in local TypeScript files. Mission 1 is fully authored as the reusable template for future missions.

## Design direction

- Playful, colorful, rounded, Code.org-style energy — not corporate SaaS.
- Custom palette (sky blue / sunshine yellow / coral / mint / deep indigo) added to `src/styles.css` via `@theme inline` + `:root` tokens (oklch). No hardcoded colors in components.
- Rounded-2xl cards, thick friendly buttons, soft shadows, big illustrations.
- Framer Motion for page transitions, screen advances, celebration confetti, and micro-interactions.
- A cartoon guide character "Codey" appears throughout.

## Routes (file-based, `src/routes/`)

```text
index.tsx                          -> / (Home)
curriculum.tsx                     -> /curriculum
missions.$missionId.tsx            -> /missions/:id (hub: story, objectives, links)
missions.$missionId.lesson.tsx     -> /missions/:id/lesson (interactive viewer)
missions.$missionId.activities.tsx -> /missions/:id/activities
missions.$missionId.scratch.tsx    -> /missions/:id/scratch
missions.$missionId.quiz.tsx       -> /missions/:id/quiz
missions.$missionId.homework.tsx   -> /missions/:id/homework
missions.$missionId.resources.tsx  -> /missions/:id/resources
missions.$missionId.teacher.tsx    -> /missions/:id/teacher
missions.$missionId.journal.tsx    -> /missions/:id/journal
missions.$missionId.complete.tsx   -> /missions/:id/complete
```

Each route sets its own `head()` metadata. `__root.tsx` updated with title/description "Coding Explorers — Learn to code through missions".

## Content model (`src/content/`)

Typed TypeScript modules — easy to edit, no MDX pipeline.

- `types.ts` — `Mission`, `LessonScreen`, `Activity`, `QuizQuestion`, `Resource`, `TeacherNote`.
- `missions/mission-1.ts` — fully authored Mission 1.
- `index.ts` — exports `missions` array + `getMission(id)`.

`LessonScreen` is a discriminated union: `welcome | briefing | character | story | objectives | icebreaker | concept | example | tour | demo | practice | challenge | reflection | celebration`. Shared fields: `id`, `title`, `illustration`, `explanation`, `teacherNote`, optional `question`, `miniActivity`, `animation` hint.

## Mission 1 lesson (15 screens)

Welcome → Mission Briefing → Meet Codey → Story Introduction → Learning Objectives → Icebreaker Activity → What is Programming? → Algorithms & Sequencing → Real-Life Examples → Scratch Interface Tour → First Scratch Demo → Guided Practice → Mini Challenge → Reflection → Mission Complete Celebration.

All 15 screens authored with real kid-friendly copy, teacher notes, and one interactive element each (drag-order sandwich, tap-to-reveal, multiple-choice, sequence-the-robot, etc.).

## Reusable components (`src/components/`)

Shell + primitives:
- `CourseHeader` (logo, mission crumb, progress ring)
- `MissionSidebar` (shadcn sidebar, `collapsible="icon"`, completion checks)
- `Codey` mascot (`happy | thinking | celebrating`)
- `ProgressBar`, `ChoiceButton`, `BigButton`, `KidCard`, `TeacherNoteCallout`

Lesson viewer:
- `LessonViewer` — screen index, keyboard arrows, prev/next, progress, `AnimatePresence` transitions
- `LessonScreenRenderer` — switch on screen `type`
- Screen components: `WelcomeScreen`, `BriefingScreen`, `CharacterIntroScreen`, `ObjectivesScreen`, `IcebreakerScreen`, `ConceptScreen`, `SequencingActivity`, `ExamplesScreen`, `TourScreen`, `DemoScreen`, `GuidedPracticeScreen`, `ChallengeScreen`, `ReflectionScreen`, `CelebrationScreen` (confetti)

Feature surfaces:
- `ActivityCard` (image, objective, materials, duration, teacher instructions, Start)
- `ScratchLab` — iframe embed of `scratch.mit.edu/projects/{id}/embed` with tabs: Teacher Demo / Student Challenge / Hints (accordion) / Solution (reveal)
- `Quiz` — one question at a time, immediate feedback, animated score, retry
- `ResourceList` — download buttons for workbook, teacher guide, homework, mission cards, images (placeholders in `public/resources/`)
- `Journal` — free-text prompts saved to `localStorage` (`ce:mission-1:journal`), read in `useEffect`
- `CompleteScreen` — confetti, badge earned, link to next mission

## Progress tracking

Client-only `localStorage` (`ce:mission-1:progress`) via a `useProgress(missionId)` hook. Powers sidebar checkmarks and Home "Continue" CTA. All reads guarded in `useEffect` to avoid SSR hydration mismatch.

## Assets

Generated with `imagegen`, saved to `src/assets/`:
- Codey mascot (3 moods, transparent PNG)
- Home hero illustration
- Mission 1 cover
- 6–8 lesson illustrations (programming, algorithm, sandwich, robot, scratch cat, celebration, etc.)

Downloadable resources: lightweight placeholder PDFs / PNGs in `public/resources/`.

## Out of scope (MVP)

Auth, payments, backend, database, MDX pipeline, missions 2+ (structure supports them — only Mission 1 authored), production SEO beyond basic head metadata.

## Technical notes

- TanStack Start file-based routing; every `createFileRoute` string matches its filename.
- All colors via semantic tokens in `src/styles.css` (`@theme inline` + `:root`).
- `framer-motion` for lesson transitions + confetti.
- Scratch embed: `<iframe src="https://scratch.mit.edu/projects/{id}/embed" allowtransparency allowfullscreen>`.
- `localStorage` reads inside `useEffect`.
- Sidebar uses shadcn `Sidebar` with `collapsible="icon"` and a persistent `SidebarTrigger` in the header.
