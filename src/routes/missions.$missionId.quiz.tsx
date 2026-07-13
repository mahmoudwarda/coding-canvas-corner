import { createFileRoute } from "@tanstack/react-router";
import { getMission } from "@/content";
import { Quiz } from "@/components/quiz";

export const Route = createFileRoute("/missions/$missionId/quiz")({
  component: QuizRoute,
});

function QuizRoute() {
  const { missionId } = Route.useParams();
  const mission = getMission(missionId);
  if (!mission) return <div className="p-8">Mission not found.</div>;
  return <Quiz mission={mission} />;
}
