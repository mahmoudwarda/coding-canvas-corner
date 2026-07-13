import { createFileRoute } from "@tanstack/react-router";
import { getMission } from "@/content";
import { KidCard, BigButton } from "@/components/kid-primitives";
import { useProgress } from "@/hooks/use-progress";
import { Clock, Check } from "lucide-react";

export const Route = createFileRoute("/missions/$missionId/homework")({
  component: HomeworkRoute,
});

function HomeworkRoute() {
  const { missionId } = Route.useParams();
  const mission = getMission(missionId);
  const { progress, toggleHomework } = useProgress(missionId);
  if (!mission) return <div className="p-8">Mission not found.</div>;

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <h1 className="font-display text-4xl font-bold">Homework</h1>
      <p className="text-foreground/75 mt-2">Take Mission 1 home — try these before next class.</p>

      <div className="grid gap-4 mt-6">
        {mission.homework.map((h) => {
          const done = progress.homeworkDone.includes(h.id);
          return (
            <KidCard key={h.id} color={done ? "mint" : "lavender"}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-display font-semibold text-xl">{h.title}</h2>
                  <p className="text-foreground/80 mt-1">{h.description}</p>
                  <div className="text-sm text-muted-foreground mt-2 inline-flex items-center gap-1">
                    <Clock className="h-4 w-4" /> About {h.estimatedMin} min
                  </div>
                </div>
                <BigButton
                  variant={done ? "mint" : "sky"}
                  size="md"
                  onClick={() => toggleHomework(h.id)}
                >
                  {done ? <><Check className="h-4 w-4" /> Done</> : "Mark done"}
                </BigButton>
              </div>
            </KidCard>
          );
        })}
      </div>
    </div>
  );
}
