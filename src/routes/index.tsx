import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Rocket, Sparkles, GraduationCap, PlayCircle } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { CourseHeader } from "@/components/course-header";
import { Codey } from "@/components/codey";
import { BigButton, KidCard } from "@/components/kid-primitives";
import { missions } from "@/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Coding Explorers — Learn to code through missions" },
      { name: "description", content: "An interactive, mission-based coding course for kids aged 9–15. Meet Codey and start Mission 1." },
      { property: "og:title", content: "Coding Explorers — Learn to code through missions" },
      { property: "og:description", content: "Mission-based coding adventures for kids 9–15." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const first = missions[0];
  return (
    <div className="min-h-screen bg-background">
      <CourseHeader />

      <section className="mx-auto max-w-7xl px-4 py-12 md:py-20 grid gap-10 md:grid-cols-2 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 rounded-full bg-sunshine/40 border border-sunshine px-3 py-1 text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="h-3.5 w-3.5" /> Ages 9–15
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-display font-bold leading-tight">
            Coding is an <span className="text-coral">adventure</span>.
            <br />
            Ready to <span className="text-sky">explore</span>?
          </h1>
          <p className="mt-4 text-lg text-foreground/80 max-w-lg">
            Coding Explorers replaces boring slides with interactive missions.
            Meet Codey, solve puzzles, and write real code in Scratch.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/missions/$missionId" params={{ missionId: first.id }}>
              <BigButton variant="coral" size="lg">
                <Rocket className="h-5 w-5" /> Start Mission 1
              </BigButton>
            </Link>
            <Link to="/curriculum">
              <BigButton variant="outline" size="lg">
                <PlayCircle className="h-5 w-5" /> See Curriculum
              </BigButton>
            </Link>
          </div>
        </motion.div>
        <motion.img
          src={hero}
          alt="Kids and Codey the robot building with colorful code blocks"
          width={1536}
          height={1024}
          className="rounded-3xl border-4 border-border kid-shadow w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="font-display text-3xl font-bold mb-6 text-center">Why Explorers love it</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <KidCard color="sky">
            <Sparkles className="h-8 w-8 text-sky" />
            <h3 className="font-display font-semibold text-xl mt-2">Interactive lessons</h3>
            <p className="text-foreground/75 mt-1">No slides. Every screen has a puzzle, tap-reveal, or challenge.</p>
          </KidCard>
          <KidCard color="coral">
            <Rocket className="h-8 w-8 text-coral" />
            <h3 className="font-display font-semibold text-xl mt-2">Mission-based</h3>
            <p className="text-foreground/75 mt-1">Each mission is an adventure with a story, activities, and a badge.</p>
          </KidCard>
          <KidCard color="mint">
            <GraduationCap className="h-8 w-8 text-mint-foreground" />
            <h3 className="font-display font-semibold text-xl mt-2">Made for teachers</h3>
            <p className="text-foreground/75 mt-1">Teacher notes on every screen. Printable workbooks and guides.</p>
          </KidCard>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 text-center">
        <div className="flex justify-center mb-4">
          <Codey mood="celebrating" size={140} />
        </div>
        <h2 className="font-display text-3xl font-bold">Codey is waiting</h2>
        <p className="mt-2 text-foreground/75">Your first mission is ready. Grab your explorer's hat.</p>
        <div className="mt-6 flex justify-center">
          <Link to="/missions/$missionId" params={{ missionId: first.id }}>
            <BigButton variant="coral" size="lg">Begin Mission 1</BigButton>
          </Link>
        </div>
      </section>
    </div>
  );
}
