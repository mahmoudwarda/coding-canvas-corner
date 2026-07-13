import { createFileRoute } from "@tanstack/react-router";
import { getMission } from "@/content";
import { LessonViewer } from "@/components/lesson-viewer";

export const Route = createFileRoute("/missions/$missionId/lesson")({
  component: LessonRoute,
});

function LessonRoute() {
  const { missionId } = Route.useParams();
  const mission = getMission(missionId);
  if (!mission) return <div className="p-8">Mission not found.</div>;
  return <LessonViewer mission={mission} />;
}
