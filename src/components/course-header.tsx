import { Link } from "@tanstack/react-router";
import { Codey } from "@/components/codey";
import { BigButton } from "@/components/kid-primitives";

export function CourseHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <Codey mood="happy" size={40} bounce={false} />
          <span className="font-display text-xl font-bold">Coding Explorers</span>
        </Link>
        <nav className="flex items-center gap-2">
          <Link to="/curriculum">
            <BigButton variant="outline" size="md">Curriculum</BigButton>
          </Link>
          <Link to="/missions/$missionId" params={{ missionId: "mission-1" }}>
            <BigButton variant="sky" size="md">Mission 1</BigButton>
          </Link>
        </nav>
      </div>
    </header>
  );
}
