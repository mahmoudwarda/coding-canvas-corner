import { createFileRoute } from "@tanstack/react-router";
import { getMission } from "@/content";
import { KidCard, BigButton } from "@/components/kid-primitives";
import { Download, FileText, Image as ImageIcon, GraduationCap, PencilRuler, BookOpen } from "lucide-react";

const ICONS = {
  workbook: BookOpen,
  "teacher-guide": GraduationCap,
  homework: PencilRuler,
  "mission-card": FileText,
  image: ImageIcon,
} as const;

export const Route = createFileRoute("/missions/$missionId/resources")({
  component: ResourcesRoute,
});

function ResourcesRoute() {
  const { missionId } = Route.useParams();
  const mission = getMission(missionId);
  if (!mission) return <div className="p-8">Mission not found.</div>;

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <h1 className="font-display text-4xl font-bold">Resources</h1>
      <p className="text-foreground/75 mt-2">Printable and downloadable materials for this mission.</p>

      <div className="grid gap-4 md:grid-cols-2 mt-6">
        {mission.resources.map((r) => {
          const Icon = ICONS[r.type];
          return (
            <KidCard key={r.id} color="sky">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky/25 text-sky-foreground shrink-0">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="font-display font-semibold text-lg">{r.title}</h2>
                  <p className="text-sm text-foreground/75 mt-1">{r.description}</p>
                  <a href={r.href} download={r.filename} className="inline-block mt-3">
                    <BigButton variant="sky" size="md">
                      <Download className="h-4 w-4" /> Download
                    </BigButton>
                  </a>
                </div>
              </div>
            </KidCard>
          );
        })}
      </div>

      <p className="mt-6 text-xs text-muted-foreground">
        Files are placeholders in this MVP — drop your real PDFs into <code>public/resources/</code>.
      </p>
    </div>
  );
}
