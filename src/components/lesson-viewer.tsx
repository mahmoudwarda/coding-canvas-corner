import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import { Link, useNavigate } from "@tanstack/react-router";
import type { LessonScreen, Mission } from "@/content/types";
import { useProgress } from "@/hooks/use-progress";
import { Codey } from "./codey";
import { BigButton, ChoiceButton, KidCard, KidProgressBar, TeacherNoteCallout } from "./kid-primitives";
import { cn } from "@/lib/utils";

interface LessonViewerProps {
  mission: Mission;
}

export function LessonViewer({ mission }: LessonViewerProps) {
  const [index, setIndex] = useState(0);
  const [showTeacher, setShowTeacher] = useState(false);
  const [interactionDone, setInteractionDone] = useState(false);
  const { markScreen } = useProgress(mission.id);
  const navigate = useNavigate();

  const total = mission.lesson.length;
  const screen = mission.lesson[index];

  useEffect(() => {
    setInteractionDone(!screen.miniActivity);
  }, [screen]);

  useEffect(() => {
    markScreen(screen.id);
  }, [screen.id, markScreen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, interactionDone]);

  function prev() {
    if (index > 0) setIndex(index - 1);
  }

  function next() {
    if (!interactionDone) return;
    if (index < total - 1) {
      setIndex(index + 1);
    } else {
      navigate({ to: "/missions/$missionId/quiz", params: { missionId: mission.id } });
    }
  }

  const isLast = index === total - 1;

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8">
      {/* Progress */}
      <div className="mb-6 flex items-center gap-4">
        <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">
          Screen {index + 1} / {total}
        </span>
        <KidProgressBar value={index + 1} max={total} />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={screen.id}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <LessonScreenView
            screen={screen}
            onInteractionComplete={() => setInteractionDone(true)}
          />
        </motion.div>
      </AnimatePresence>

      {/* Teacher Note toggle */}
      {screen.teacherNote && (
        <div className="mt-6">
          <button
            className="text-sm font-semibold text-indigo underline underline-offset-4"
            onClick={() => setShowTeacher((v) => !v)}
          >
            {showTeacher ? "Hide" : "Show"} teacher note
          </button>
          <AnimatePresence>
            {showTeacher && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3 overflow-hidden"
              >
                <TeacherNoteCallout note={screen.teacherNote} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Nav */}
      <div className="mt-10 flex flex-wrap items-center justify-between gap-3">
        <BigButton variant="outline" onClick={prev} disabled={index === 0}>
          <ArrowLeft className="h-4 w-4" /> Back
        </BigButton>
        <Link to="/missions/$missionId" params={{ missionId: mission.id }}>
          <BigButton variant="outline">
            <Home className="h-4 w-4" /> Mission Hub
          </BigButton>
        </Link>
        <BigButton
          variant={isLast ? "mint" : "sky"}
          onClick={next}
          disabled={!interactionDone}
          title={!interactionDone ? "Complete the activity first!" : undefined}
        >
          {isLast ? "Take the Quiz" : "Next"} <ArrowRight className="h-4 w-4" />
        </BigButton>
      </div>
    </div>
  );
}

/* ---------- Per-screen renderer ---------- */

function LessonScreenView({
  screen,
  onInteractionComplete,
}: {
  screen: LessonScreen;
  onInteractionComplete: () => void;
}) {
  const codeyMood = screen.type === "celebration" ? "celebrating" : screen.type === "challenge" || screen.type === "practice" ? "thinking" : "happy";

  return (
    <KidCard color={screen.accent} className="p-6 md:p-10">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] items-start">
        <div>
          {screen.subtitle && (
            <div className="text-xs uppercase tracking-widest text-indigo font-semibold mb-2">
              {screen.subtitle}
            </div>
          )}
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            {screen.title}
          </h1>
          <p className="mt-4 text-lg text-foreground/80 leading-relaxed">{screen.explanation}</p>
          {screen.question && (
            <p className="mt-4 text-lg font-semibold text-indigo">💭 {screen.question}</p>
          )}
        </div>
        <Codey mood={codeyMood} size={110} />
      </div>

      {screen.illustration && (
        <div className="mt-6 rounded-2xl overflow-hidden border-2 border-border bg-card">
          <img
            src={screen.illustration}
            alt=""
            className="w-full h-64 md:h-80 object-cover"
            loading="lazy"
          />
        </div>
      )}

      {screen.miniActivity && (
        <div className="mt-8">
          <MiniActivityView activity={screen.miniActivity} onComplete={onInteractionComplete} />
        </div>
      )}
    </KidCard>
  );
}

/* ---------- Mini activities ---------- */

function MiniActivityView({
  activity,
  onComplete,
}: {
  activity: NonNullable<LessonScreen["miniActivity"]>;
  onComplete: () => void;
}) {
  if (activity.kind === "multiple-choice") return <MCQ activity={activity} onComplete={onComplete} />;
  if (activity.kind === "sequence") return <Sequence activity={activity} onComplete={onComplete} />;
  if (activity.kind === "tap-reveal") return <TapReveal activity={activity} onComplete={onComplete} />;
  if (activity.kind === "text") return <TextReflect activity={activity} onComplete={onComplete} />;
  return null;
}

function MCQ({
  activity,
  onComplete,
}: {
  activity: Extract<NonNullable<LessonScreen["miniActivity"]>, { kind: "multiple-choice" }>;
  onComplete: () => void;
}) {
  const [chosen, setChosen] = useState<number | null>(null);
  const correct = chosen === activity.answerIndex;

  return (
    <div className="rounded-2xl bg-card p-5 border-2 border-border">
      <p className="font-display font-semibold text-lg mb-4">{activity.prompt}</p>
      <div className="grid gap-3 md:grid-cols-2">
        {activity.options.map((opt, i) => {
          const state =
            chosen === null
              ? "idle"
              : i === activity.answerIndex
                ? "correct"
                : i === chosen
                  ? "wrong"
                  : "idle";
          return (
            <ChoiceButton
              key={i}
              state={state}
              disabled={chosen !== null}
              onClick={() => {
                setChosen(i);
                if (i === activity.answerIndex) onComplete();
              }}
            >
              {opt}
            </ChoiceButton>
          );
        })}
      </div>
      {chosen !== null && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn("mt-4 text-sm", correct ? "text-mint-foreground" : "text-coral-foreground")}
        >
          {correct ? "🎉 " : "🤔 "}
          {activity.explain}
          {!correct && " Try tapping the right one to continue."}
        </motion.p>
      )}
    </div>
  );
}

function Sequence({
  activity,
  onComplete,
}: {
  activity: Extract<NonNullable<LessonScreen["miniActivity"]>, { kind: "sequence" }>;
  onComplete: () => void;
}) {
  // Tap-to-order: click items in the order you want. Show numbers.
  const [order, setOrder] = useState<number[]>([]);
  const [locked, setLocked] = useState(false);

  const tapped = (i: number) => {
    if (locked) return;
    if (order.includes(i)) return;
    const next = [...order, i];
    setOrder(next);
    if (next.length === activity.items.length) {
      setLocked(true);
      const isCorrect = next.every((v, idx) => v === activity.correctOrder[idx]);
      if (isCorrect) onComplete();
    }
  };

  const reset = () => {
    setOrder([]);
    setLocked(false);
  };

  const correct = locked && order.every((v, idx) => v === activity.correctOrder[idx]);

  return (
    <div className="rounded-2xl bg-card p-5 border-2 border-border">
      <p className="font-display font-semibold text-lg mb-4">{activity.prompt}</p>
      <div className="grid gap-3">
        {activity.items.map((item, i) => {
          const step = order.indexOf(i);
          const chosen = step !== -1;
          return (
            <button
              key={i}
              onClick={() => tapped(i)}
              disabled={locked && correct}
              className={cn(
                "flex items-center gap-3 rounded-2xl border-2 px-4 py-3 text-left kid-shadow transition-all",
                chosen ? "border-sky bg-sky/15" : "border-border bg-background hover:border-sky/50",
                locked && !correct && "opacity-70",
              )}
            >
              <span
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full font-display font-bold",
                  chosen ? "bg-sky text-sky-foreground" : "bg-secondary text-muted-foreground",
                )}
              >
                {chosen ? step + 1 : "?"}
              </span>
              <span className="font-body">{item}</span>
            </button>
          );
        })}
      </div>
      {locked && (
        <div className="mt-4 flex items-center justify-between gap-3">
          <p className={cn("text-sm", correct ? "text-mint-foreground" : "text-coral-foreground")}>
            {correct ? "🎉 Perfect order! " : "🤔 Not quite. "}
            {activity.explain}
          </p>
          {!correct && (
            <BigButton variant="coral" size="md" onClick={reset}>
              Try again
            </BigButton>
          )}
        </div>
      )}
    </div>
  );
}

function TapReveal({
  activity,
  onComplete,
}: {
  activity: Extract<NonNullable<LessonScreen["miniActivity"]>, { kind: "tap-reveal" }>;
  onComplete: () => void;
}) {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const total = activity.items.length;

  const toggle = (i: number) => {
    setRevealed((prev) => {
      const next = new Set(prev);
      next.add(i);
      if (next.size === total) onComplete();
      return next;
    });
  };

  return (
    <div className="rounded-2xl bg-card p-5 border-2 border-border">
      <p className="font-display font-semibold text-lg mb-4">{activity.prompt}</p>
      <div className="grid gap-3 md:grid-cols-2">
        {activity.items.map((item, i) => {
          const shown = revealed.has(i);
          return (
            <button
              key={i}
              onClick={() => toggle(i)}
              className={cn(
                "text-left rounded-2xl border-2 p-4 kid-shadow transition-all",
                shown ? "bg-mint/20 border-mint" : "bg-background border-border hover:border-sky/50",
              )}
            >
              <div className="font-display font-semibold">{item.label}</div>
              {shown && <div className="text-sm text-foreground/80 mt-1">{item.reveal}</div>}
              {!shown && <div className="text-xs text-muted-foreground mt-1">Tap to reveal</div>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function TextReflect({
  activity,
  onComplete,
}: {
  activity: Extract<NonNullable<LessonScreen["miniActivity"]>, { kind: "text" }>;
  onComplete: () => void;
}) {
  const [value, setValue] = useState("");
  return (
    <div className="rounded-2xl bg-card p-5 border-2 border-border">
      <label className="font-display font-semibold text-lg block mb-2">{activity.prompt}</label>
      <textarea
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          if (e.target.value.trim().length > 3) onComplete();
        }}
        placeholder={activity.placeholder}
        className="w-full min-h-32 rounded-2xl border-2 border-border bg-background p-3 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
      />
      <p className="text-xs text-muted-foreground mt-2">Your reflection stays on this device.</p>
    </div>
  );
}

// Re-export for callers
export { useMemo };
