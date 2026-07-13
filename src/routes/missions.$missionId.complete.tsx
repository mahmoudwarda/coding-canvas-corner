import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { getMission } from "@/content";
import { useProgress } from "@/hooks/use-progress";
import { Codey } from "@/components/codey";
import { BigButton, KidCard } from "@/components/kid-primitives";
import { Trophy, RotateCcw } from "lucide-react";

export const Route = createFileRoute("/missions/$missionId/complete")({
  component: CompleteRoute,
});

function CompleteRoute() {
  const { missionId } = Route.useParams();
  const mission = getMission(missionId);
  const { progress, setFlag, reset } = useProgress(missionId);

  useEffect(() => {
    setFlag("missionCompleted", true);
    // Confetti burst
    const end = Date.now() + 900;
    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#f5b942", "#f26c5a", "#4a94e0", "#7ad3a0"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#f5b942", "#f26c5a", "#4a94e0", "#7ad3a0"],
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!mission) return <div className="p-8">Mission not found.</div>;

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-10 text-center">
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 180, damping: 12 }}
        className="flex justify-center"
      >
        <Codey mood="celebrating" size={200} />
      </motion.div>
      <h1 className="mt-6 font-display text-5xl font-bold">Mission Complete!</h1>
      <p className="mt-3 text-lg text-foreground/80">
        You completed <span className="font-semibold text-coral">{mission.title}</span> and earned the
        <span className="font-semibold text-sky"> First Block</span> badge.
      </p>

      <KidCard color="sunshine" className="mt-8 max-w-md mx-auto">
        <Trophy className="h-14 w-14 mx-auto text-coral" />
        <div className="mt-2 font-display text-2xl font-bold">First Block Badge</div>
        <div className="text-sm text-foreground/70">Awarded for completing Mission 1</div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
          <Stat label="Screens" value={progress.lessonScreensCompleted.length} total={mission.lesson.length} />
          <Stat label="Quiz" value={progress.quizBestScore ?? 0} total={mission.quiz.length} />
          <Stat label="Homework" value={progress.homeworkDone.length} total={mission.homework.length} />
        </div>
      </KidCard>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/curriculum">
          <BigButton variant="coral" size="lg">Back to Curriculum</BigButton>
        </Link>
        <BigButton variant="outline" onClick={reset}>
          <RotateCcw className="h-4 w-4" /> Reset Progress
        </BigButton>
      </div>
    </div>
  );
}

function Stat({ label, value, total }: { label: string; value: number; total: number }) {
  return (
    <div className="rounded-xl bg-background/70 border border-border py-2">
      <div className="font-display font-bold">{value}/{total}</div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
}
