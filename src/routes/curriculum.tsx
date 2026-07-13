import { createFileRoute, Link } from "@tanstack/react-router";
import { CourseHeader } from "@/components/course-header";
import { KidCard, BigButton } from "@/components/kid-primitives";
import { missions } from "@/content";
import { Clock, Users, Rocket, Lock } from "lucide-react";

export const Route = createFileRoute("/curriculum")({
  head: () => ({
    meta: [
      { title: "Curriculum — Coding Explorers" },
      { name: "description", content: "Browse all Coding Explorers missions. Each mission is a self-contained coding adventure." },
      { property: "og:title", content: "Curriculum — Coding Explorers" },
      { property: "og:description", content: "All missions in the Coding Explorers course." },
      { property: "og:url", content: "/curriculum" },
    ],
    links: [{ rel: "canonical", href: "/curriculum" }],
  }),
  component: CurriculumPage,
});

function CurriculumPage() {
  return (
    <div className="min-h-screen bg-background">
      <CourseHeader />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="font-display text-4xl font-bold">Curriculum</h1>
        <p className="mt-2 text-foreground/75">
          Missions unlock one after another. Start with Mission 1 to meet Codey.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {missions.map((m) => (
            <KidCard key={m.id} color="sky" className="p-0 overflow-hidden">
              <img src={m.cover} alt="" className="h-48 w-full object-cover" loading="lazy" />
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-indigo font-semibold">
                  Mission {m.order}
                </div>
                <h2 className="font-display font-bold text-2xl mt-1">{m.title}</h2>
                <p className="text-foreground/75 mt-2">{m.tagline}</p>
                <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {m.durationMin} min</span>
                  <span className="inline-flex items-center gap-1"><Users className="h-4 w-4" /> Ages {m.ageRange}</span>
                </div>
                <div className="mt-5">
                  <Link to="/missions/$missionId" params={{ missionId: m.id }}>
                    <BigButton variant="coral">
                      <Rocket className="h-4 w-4" /> Start Mission
                    </BigButton>
                  </Link>
                </div>
              </div>
            </KidCard>
          ))}

          {/* Coming soon placeholder */}
          <KidCard color="lavender" className="p-6 flex flex-col justify-center items-center text-center min-h-64">
            <Lock className="h-10 w-10 text-lavender-foreground" />
            <h3 className="font-display font-semibold text-xl mt-3">More missions coming soon</h3>
            <p className="text-foreground/70 mt-1">Complete Mission 1 to unlock the next chapter.</p>
          </KidCard>
        </div>
      </div>
    </div>
  );
}
