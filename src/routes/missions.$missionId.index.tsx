import { createFileRoute, Link } from "@tanstack/react-router";
import { getMission } from "@/content";
import { KidCard, BigButton, TeacherNoteCallout } from "@/components/kid-primitives";
import { Codey } from "@/components/codey";
import { Sparkles, Puzzle, Cat, ClipboardCheck, PencilRuler, FileDown, GraduationCap, Notebook, Trophy, Clock, Users } from "lucide-react";

export const Route = createFileRoute("/missions/$missionId/")({
  component: MissionHub,
});

function MissionHub() {
  const { missionId } = Route.useParams();
  const mission = getMission(missionId);
  if (!mission) return <div className="p-8">Mission not found.</div>;

  const sections = [
    { to: "/missions/$missionId/lesson", icon: Sparkles, label: "Interactive Lesson", color: "sky" as const, desc: `${mission.lesson.length} interactive screens` },
    { to: "/missions/$missionId/activities", icon: Puzzle, label: "Activities", color: "coral" as const, desc: `${mission.activities.length} hands-on activities` },
    { to: "/missions/$missionId/scratch", icon: Cat, label: "Scratch Lab", color: "sunshine" as const, desc: "Live Scratch demo + challenge" },
    { to: "/missions/$missionId/quiz", icon: ClipboardCheck, label: "Quiz", color: "mint" as const, desc: `${mission.quiz.length} questions` },
    { to: "/missions/$missionId/homework", icon: PencilRuler, label: "Homework", color: "lavender" as const, desc: `${mission.homework.length} take-home tasks` },
    { to: "/missions/$missionId/resources", icon: FileDown, label: "Resources", color: "indigo" as const, desc: "Downloadable materials" },
    { to: "/missions/$missionId/teacher", icon: GraduationCap, label: "Teacher Notes", color: "sky" as const, desc: "Guidance for facilitators" },
    { to: "/missions/$missionId/journal", icon: Notebook, label: "Mission Journal", color: "coral" as const, desc: "Reflect and journal" },
    { to: "/missions/$missionId/complete", icon: Trophy, label: "Mission Complete", color: "sunshine" as const, desc: "Celebration & badge" },
  ] as const;

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      {/* Hero */}
      <div className="grid gap-6 md:grid-cols-[2fr_1fr] items-stretch">
        <div className="rounded-3xl overflow-hidden border-2 border-border kid-shadow relative">
          <img src={mission.cover} alt="" className="w-full h-72 md:h-96 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo/80 via-indigo/20 to-transparent" />
          <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
            <div className="text-xs uppercase tracking-widest text-sunshine font-semibold">Mission {mission.order}</div>
            <h1 className="mt-1 text-3xl md:text-5xl font-display font-bold text-indigo-foreground">{mission.title}</h1>
            <p className="mt-2 text-indigo-foreground/90 max-w-2xl">{mission.tagline}</p>
            <div className="mt-3 flex items-center gap-4 text-indigo-foreground/85 text-sm">
              <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" /> {mission.durationMin} min</span>
              <span className="inline-flex items-center gap-1"><Users className="h-4 w-4" /> Ages {mission.ageRange}</span>
            </div>
          </div>
        </div>
        <KidCard color="mint" className="flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <Codey mood="happy" size={80} />
            <div>
              <div className="font-display text-lg font-semibold">Ready, Explorer?</div>
              <div className="text-sm text-foreground/75">Start the interactive lesson to begin.</div>
            </div>
          </div>
          <Link to="/missions/$missionId/lesson" params={{ missionId }}>
            <BigButton variant="coral" size="lg" className="mt-4 w-full">Start Lesson →</BigButton>
          </Link>
        </KidCard>
      </div>

      {/* Story + Objectives */}
      <div className="grid gap-6 md:grid-cols-2 mt-8">
        <KidCard color="lavender">
          <h2 className="font-display text-2xl font-bold">The Story</h2>
          <p className="mt-2 text-foreground/85 leading-relaxed">{mission.story}</p>
        </KidCard>
        <KidCard color="sunshine">
          <h2 className="font-display text-2xl font-bold">You'll Learn To</h2>
          <ul className="mt-3 space-y-2">
            {mission.objectives.map((o, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-coral font-bold">{i + 1}.</span>
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </KidCard>
      </div>

      {/* Sections grid */}
      <h2 className="font-display text-2xl font-bold mt-10 mb-4">Mission Map</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((s) => (
          <Link key={s.to} to={s.to} params={{ missionId }}>
            <KidCard color={s.color} interactive className="h-full">
              <s.icon className="h-7 w-7" />
              <div className="font-display font-semibold text-lg mt-2">{s.label}</div>
              <div className="text-sm text-foreground/70">{s.desc}</div>
            </KidCard>
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <TeacherNoteCallout note={mission.teacherNotes[0]} />
      </div>
    </div>
  );
}
