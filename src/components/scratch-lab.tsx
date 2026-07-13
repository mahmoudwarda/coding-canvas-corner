import { useState } from "react";
import type { Mission } from "@/content/types";
import { BigButton, KidCard, TeacherNoteCallout } from "./kid-primitives";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useProgress } from "@/hooks/use-progress";
import { Check, Eye, EyeOff } from "lucide-react";

export function ScratchLab({ mission }: { mission: Mission }) {
  const { scratch } = mission;
  const [showSolution, setShowSolution] = useState(false);
  const { progress, setFlag } = useProgress(mission.id);

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-8">
      <div className="grid gap-6 md:grid-cols-[2fr_1fr] items-start">
        <div>
          <h1 className="text-3xl md:text-4xl font-display font-bold">Scratch Lab</h1>
          <p className="mt-3 text-lg text-foreground/80">{scratch.intro}</p>
        </div>
        <KidCard color="mint" className="p-5">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">Mark this lab as done</span>
          </div>
          <BigButton
            variant={progress.scratchDone ? "mint" : "sky"}
            className="mt-3 w-full"
            onClick={() => setFlag("scratchDone", !progress.scratchDone)}
          >
            <Check className="h-4 w-4" /> {progress.scratchDone ? "Completed!" : "Mark done"}
          </BigButton>
        </KidCard>
      </div>

      <Tabs defaultValue="demo" className="w-full">
        <TabsList className="grid w-full grid-cols-4 h-auto rounded-2xl bg-secondary p-1">
          <TabsTrigger value="demo" className="rounded-xl font-display">Teacher Demo</TabsTrigger>
          <TabsTrigger value="challenge" className="rounded-xl font-display">Challenge</TabsTrigger>
          <TabsTrigger value="hints" className="rounded-xl font-display">Hints</TabsTrigger>
          <TabsTrigger value="solution" className="rounded-xl font-display">Solution</TabsTrigger>
        </TabsList>

        <TabsContent value="demo" className="mt-4">
          <KidCard color="sky" className="p-4 md:p-6">
            <p className="text-foreground/80 mb-4">
              Watch this Scratch project. Press the green flag to see it run — then try changing something!
            </p>
            <div className="aspect-video w-full rounded-2xl overflow-hidden border-2 border-border bg-black">
              <iframe
                src={scratch.teacherDemoUrl}
                title="Teacher Scratch demo"
                allowFullScreen
                allow="autoplay; fullscreen"
                className="w-full h-full"
              />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Embedded from scratch.mit.edu. Requires an internet connection.
            </p>
          </KidCard>
        </TabsContent>

        <TabsContent value="challenge" className="mt-4">
          <KidCard color="coral" className="p-6">
            <h3 className="font-display font-semibold text-xl mb-2">Student Challenge</h3>
            <p className="text-lg text-foreground/85">{scratch.challenge}</p>
            <BigButton
              variant="coral"
              className="mt-6"
              onClick={() => window.open("https://scratch.mit.edu/projects/editor/", "_blank", "noopener")}
            >
              Open Scratch in a new tab
            </BigButton>
          </KidCard>
        </TabsContent>

        <TabsContent value="hints" className="mt-4">
          <KidCard color="sunshine" className="p-4 md:p-6">
            <Accordion type="single" collapsible className="w-full">
              {scratch.hints.map((hint, i) => (
                <AccordionItem key={i} value={`hint-${i}`}>
                  <AccordionTrigger className="font-display font-semibold">
                    Hint {i + 1}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80">{hint}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </KidCard>
        </TabsContent>

        <TabsContent value="solution" className="mt-4">
          <KidCard color="indigo" className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-semibold text-xl">Suggested Solution</h3>
              <BigButton variant="outline" size="md" onClick={() => setShowSolution((v) => !v)}>
                {showSolution ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {showSolution ? " Hide" : " Reveal"}
              </BigButton>
            </div>
            {showSolution ? (
              <pre className="whitespace-pre-wrap rounded-2xl bg-card p-4 border-2 border-border font-mono text-sm">
                {mission.scratch.solution}
              </pre>
            ) : (
              <p className="text-sm text-foreground/70">
                Only peek if you've tried! Coders learn most from wrestling with the puzzle first.
              </p>
            )}
            <div className="mt-6">
              <TeacherNoteCallout note="Reveal solution only if the whole class is stuck. Encourage discovery of the 'repeat' block first." />
            </div>
          </KidCard>
        </TabsContent>
      </Tabs>
    </div>
  );
}
