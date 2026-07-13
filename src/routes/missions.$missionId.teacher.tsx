import { createFileRoute } from "@tanstack/react-router";
import { getMission } from "@/content";
import { KidCard, TeacherNoteCallout } from "@/components/kid-primitives";
import { Codey } from "@/components/codey";

export const Route = createFileRoute("/missions/$missionId/teacher")({
  component: TeacherRoute,
});

function TeacherRoute() {
  const { missionId } = Route.useParams();
  const mission = getMission(missionId);
  if (!mission) return <div className="p-8">Mission not found.</div>;

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4">
        <Codey mood="thinking" size={90} />
        <div>
          <h1 className="font-display text-4xl font-bold">Teacher Notes</h1>
          <p className="text-foreground/75">Guidance for running Mission {mission.order}.</p>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {mission.teacherNotes.map((note, i) => (
          <TeacherNoteCallout key={i} note={note} />
        ))}
      </div>

      <KidCard color="lavender" className="mt-10">
        <h2 className="font-display font-semibold text-xl">Facilitator tips</h2>
        <ul className="mt-3 space-y-2 list-disc list-inside text-foreground/85">
          <li>Ham it up with Codey — the mascot lowers the stakes for shy students.</li>
          <li>Every screen has a hidden teacher note — toggle it in the lesson viewer.</li>
          <li>Celebrate small wins loudly. Momentum &gt; perfection.</li>
        </ul>
      </KidCard>
    </div>
  );
}
