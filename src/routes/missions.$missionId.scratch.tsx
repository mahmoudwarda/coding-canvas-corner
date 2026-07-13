import { createFileRoute } from "@tanstack/react-router";
import { getMission } from "@/content";
import { ScratchLab } from "@/components/scratch-lab";

export const Route = createFileRoute("/missions/$missionId/scratch")({
  component: ScratchRoute,
});

function ScratchRoute() {
  const { missionId } = Route.useParams();
  const mission = getMission(missionId);
  if (!mission) return <div className="p-8">Mission not found.</div>;
  return <ScratchLab mission={mission} />;
}
