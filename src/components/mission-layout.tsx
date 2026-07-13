import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Menu, BookOpen, Sparkles, Puzzle, Cat, ClipboardCheck, PencilRuler, FileDown, GraduationCap, Notebook, Trophy, ArrowLeft, CheckCircle2 } from "lucide-react";
import { getMission } from "@/content";
import { useProgress } from "@/hooks/use-progress";
import { cn } from "@/lib/utils";
import { Codey } from "./codey";
import { KidProgressBar } from "./kid-primitives";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

interface MissionLayoutProps {
  missionId: string;
}

export function MissionLayout({ missionId }: MissionLayoutProps) {
  const mission = getMission(missionId);
  if (!mission) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-display">Mission not found</h1>
        <Link to="/curriculum" className="text-primary underline">
          Back to curriculum
        </Link>
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <MissionSidebar missionId={missionId} />
        <div className="flex-1 flex flex-col min-w-0">
          <MissionHeader missionId={missionId} title={mission.title} />
          <main className="flex-1 min-w-0">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

const NAV = [
  { to: "/missions/$missionId", label: "Mission Hub", icon: BookOpen, exact: true },
  { to: "/missions/$missionId/lesson", label: "Interactive Lesson", icon: Sparkles },
  { to: "/missions/$missionId/activities", label: "Activities", icon: Puzzle },
  { to: "/missions/$missionId/scratch", label: "Scratch Lab", icon: Cat },
  { to: "/missions/$missionId/quiz", label: "Quiz", icon: ClipboardCheck },
  { to: "/missions/$missionId/homework", label: "Homework", icon: PencilRuler },
  { to: "/missions/$missionId/resources", label: "Resources", icon: FileDown },
  { to: "/missions/$missionId/teacher", label: "Teacher Notes", icon: GraduationCap },
  { to: "/missions/$missionId/journal", label: "Mission Journal", icon: Notebook },
  { to: "/missions/$missionId/complete", label: "Mission Complete", icon: Trophy },
] as const;

function MissionSidebar({ missionId }: { missionId: string }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const mission = getMission(missionId)!;
  const { progress } = useProgress(missionId);

  const isDone = (to: string) => {
    if (to.endsWith("/lesson")) return progress.lessonScreensCompleted.length >= mission.lesson.length;
    if (to.endsWith("/activities")) return progress.activitiesCompleted.length >= mission.activities.length;
    if (to.endsWith("/scratch")) return progress.scratchDone;
    if (to.endsWith("/quiz")) return (progress.quizBestScore ?? 0) >= mission.quiz.length;
    if (to.endsWith("/homework")) return progress.homeworkDone.length >= mission.homework.length;
    if (to.endsWith("/journal")) return progress.journalDone;
    if (to.endsWith("/complete")) return progress.missionCompleted;
    return false;
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <Link to="/" className="flex items-center gap-2 px-2 py-2">
          <Codey mood="happy" size={36} bounce={false} />
          <span className="font-display font-bold text-lg group-data-[collapsible=icon]:hidden">
            Coding Explorers
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Mission {mission.order}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {NAV.map((item) => {
                const active = item.exact
                  ? pathname === `/missions/${missionId}`
                  : pathname.startsWith(`/missions/${missionId}${item.to.replace("/missions/$missionId", "")}`);
                const done = isDone(item.to);
                return (
                  <SidebarMenuItem key={item.to}>
                    <SidebarMenuButton asChild isActive={active} tooltip={item.label}>
                      <Link to={item.to} params={{ missionId }}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.label}</span>
                        {done && (
                          <CheckCircle2 className="ml-auto h-4 w-4 text-mint-foreground group-data-[collapsible=icon]:hidden" />
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

function MissionHeader({ missionId, title }: { missionId: string; title: string }) {
  const mission = getMission(missionId)!;
  const { progress } = useProgress(missionId);

  // Total steps across all mission surfaces
  const total =
    mission.lesson.length +
    mission.activities.length +
    mission.quiz.length +
    mission.homework.length +
    3; // scratch, journal, mission complete
  const done =
    progress.lessonScreensCompleted.length +
    progress.activitiesCompleted.length +
    Math.min(mission.quiz.length, progress.quizBestScore ?? 0) +
    progress.homeworkDone.length +
    (progress.scratchDone ? 1 : 0) +
    (progress.journalDone ? 1 : 0) +
    (progress.missionCompleted ? 1 : 0);

  return (
    <header className="sticky top-0 z-30 bg-background/85 backdrop-blur border-b border-border">
      <div className="flex items-center gap-3 px-4 py-3">
        <SidebarTrigger className="shrink-0">
          <Menu className="h-5 w-5" />
        </SidebarTrigger>
        <Link
          to="/curriculum"
          className="hidden sm:inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Curriculum
        </Link>
        <div className="hidden sm:block h-6 w-px bg-border" />
        <div className="min-w-0 flex-1">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Mission {mission.order}</div>
          <div className="truncate font-display font-semibold">{title}</div>
        </div>
        <div className={cn("hidden md:flex items-center gap-2 min-w-[200px]")}>
          <span className="text-xs text-muted-foreground whitespace-nowrap">
            {done}/{total}
          </span>
          <KidProgressBar value={done} max={total} />
        </div>
      </div>
    </header>
  );
}
