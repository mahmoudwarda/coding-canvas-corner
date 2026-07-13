import { createFileRoute, Outlet } from "@tanstack/react-router";
import { MissionLayout } from "@/components/mission-layout";
import { getMission } from "@/content";

export const Route = createFileRoute("/missions/$missionId")({
  head: ({ params }) => {
    const m = getMission(params.missionId);
    const title = m ? `${m.title} — Coding Explorers` : "Mission — Coding Explorers";
    const desc = m?.tagline ?? "A Coding Explorers mission.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/missions/${params.missionId}` },
        ...(m?.cover ? [{ property: "og:image" as const, content: m.cover }] : []),
      ],
      links: [{ rel: "canonical", href: `/missions/${params.missionId}` }],
    };
  },
  component: MissionRoute,
});

function MissionRoute() {
  const { missionId } = Route.useParams();
  return <MissionLayout missionId={missionId} />;
}
