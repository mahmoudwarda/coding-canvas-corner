import { createFileRoute } from "@tanstack/react-router";
import { getMission } from "@/content";
import { KidCard, BigButton, TeacherNoteCallout } from "@/components/kid-primitives";
import { useProgress } from "@/hooks/use-progress";
import { Clock, Check, Play } from "lucide-react";

export const Route = createFileRoute("/missions/$missionId/activities")({
  component: ActivitiesRoute,
});

function ActivitiesRoute() {
  const { missionId } = Route.useParams();
  const mission = getMission(missionId);
  const { progress, markActivity } = useProgress(missionId);
  if (!mission) return <div className="p-8">Mission not found.</div>;

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <h1 className="font-display text-4xl font-bold">Activities</h1>
      <p className="text-foreground/75 mt-2">Off-screen exercises that reinforce the lesson.</p>

      <div className="grid gap-6 md:grid-cols-2 mt-6">
        {mission.activities.map((a) => {
          const done = progress.activitiesCompleted.includes(a.id);
          return (
            <KidCard key={a.id} color="coral" className="p-0 overflow-hidden">
              {a.image && <img src={a.image} alt="" className="h-40 w-full object-cover" loading="lazy" />}
              <div className="p-6">
                <h2 className="font-display text-2xl font-bold">{a.title}</h2>
                <p className="text-foreground/80 mt-1">{a.description}</p>
                <div className="mt-3 rounded-2xl bg-sunshine/25 border border-sunshine px-3 py-2 text-sm">
                  <span className="font-semibold">Objective:</span> {a.objective}
                </div>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {a.durationMin} min</span>
                </div>
                <div className="mt-4">
                  <div className="text-xs uppercase tracking-widest text-indigo font-semibold">Materials</div>
                  <ul className="mt-1 text-sm text-foreground/80 list-disc list-inside">
                    {a.materials.map((m, i) => (<li key={i}>{m}</li>))}
                  </ul>
                </div>
                <div className="mt-4">
                  <div className="text-xs uppercase tracking-widest text-indigo font-semibold">Teacher Instructions</div>
                  <ol className="mt-1 text-sm text-foreground/80 list-decimal list-inside space-y-1">
                    {a.teacherInstructions.map((t, i) => (<li key={i}>{t}</li>))}
                  </ol>
                </div>
                <BigButton
                  variant={done ? "mint" : "sky"}
                  className="mt-5 w-full"
                  onClick={() => markActivity(a.id)}
                >
                  {done ? <><Check className="h-4 w-4" /> Completed</> : <><Play className="h-4 w-4" /> Start Activity</>}
                </BigButton>
              </div>
            </KidCard>
          );
        })}
      </div>

      <div className="mt-8">
        <TeacherNoteCallout note="Adapt materials for your classroom — the activities work with substitutions." />
      </div>
    </div>
  );
}
