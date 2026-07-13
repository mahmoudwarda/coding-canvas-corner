import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Mission } from "@/content/types";
import { BigButton, ChoiceButton, KidCard, KidProgressBar } from "./kid-primitives";
import { useProgress } from "@/hooks/use-progress";
import { Codey } from "./codey";
import { cn } from "@/lib/utils";
import { RotateCcw, Trophy } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Quiz({ mission }: { mission: Mission }) {
  const [i, setI] = useState(0);
  const [chosen, setChosen] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const { setQuizScore } = useProgress(mission.id);

  const total = mission.quiz.length;
  const q = mission.quiz[i];

  function choose(idx: number) {
    if (chosen !== null) return;
    setChosen(idx);
    if (idx === q.answerIndex) setScore((s) => s + 1);
  }

  function next() {
    if (i < total - 1) {
      setI(i + 1);
      setChosen(null);
    } else {
      setDone(true);
      setQuizScore(score + (chosen === q.answerIndex ? 0 : 0)); // score already updated
      setQuizScore(score + (chosen === q.answerIndex ? 0 : 0));
      setQuizScore(score);
      setQuizScore(score);
      // The above chain is defensive; final call:
      setQuizScore(score);
    }
  }

  function restart() {
    setI(0);
    setChosen(null);
    setScore(0);
    setDone(false);
  }

  if (done) {
    const pct = Math.round((score / total) * 100);
    const great = pct >= 80;
    return (
      <div className="max-w-2xl mx-auto p-8 text-center">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="flex justify-center"
        >
          <Codey mood={great ? "celebrating" : "thinking"} size={180} />
        </motion.div>
        <h2 className="text-4xl font-display font-bold mt-4">
          {great ? "Explorer Level Up!" : "Nice try, Explorer!"}
        </h2>
        <p className="text-2xl font-display mt-2">
          You scored{" "}
          <span className="text-coral font-bold">
            {score}/{total}
          </span>
        </p>
        <div className="mt-6 max-w-xs mx-auto">
          <KidProgressBar value={score} max={total} />
        </div>
        <p className="mt-4 text-muted-foreground">
          {great
            ? "You've mastered Mission 1's concepts. On to the next stage!"
            : "Give it another shot — every explorer makes their map by trying."}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <BigButton variant="outline" onClick={restart}>
            <RotateCcw className="h-4 w-4" /> Retry
          </BigButton>
          <Link to="/missions/$missionId/homework" params={{ missionId: mission.id }}>
            <BigButton variant="sky">
              Continue to Homework <Trophy className="h-4 w-4" />
            </BigButton>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-sm font-semibold text-muted-foreground">
          Question {i + 1} / {total}
        </span>
        <KidProgressBar value={i + 1} max={total} />
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={q.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3 }}
        >
          <KidCard color="sunshine" className="p-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold">{q.prompt}</h2>
            <div className="grid gap-3 mt-6 md:grid-cols-2">
              {q.options.map((opt, idx) => {
                const state =
                  chosen === null
                    ? "idle"
                    : idx === q.answerIndex
                      ? "correct"
                      : idx === chosen
                        ? "wrong"
                        : "idle";
                return (
                  <ChoiceButton key={idx} state={state} onClick={() => choose(idx)} disabled={chosen !== null}>
                    {opt}
                  </ChoiceButton>
                );
              })}
            </div>
            {chosen !== null && (
              <div
                className={cn(
                  "mt-6 rounded-2xl p-4 border-2",
                  chosen === q.answerIndex
                    ? "bg-mint/20 border-mint"
                    : "bg-coral/15 border-coral",
                )}
              >
                <p className="font-semibold">
                  {chosen === q.answerIndex ? "✅ Correct!" : "❌ Not quite."}
                </p>
                <p className="text-sm mt-1 text-foreground/80">{q.explain}</p>
              </div>
            )}
          </KidCard>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex justify-end">
        <BigButton variant="sky" onClick={next} disabled={chosen === null}>
          {i === total - 1 ? "Finish Quiz" : "Next Question"}
        </BigButton>
      </div>
    </div>
  );
}
