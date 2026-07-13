import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { getMission } from "@/content";
import { KidCard, BigButton } from "@/components/kid-primitives";
import { useProgress } from "@/hooks/use-progress";
import { Check, Save } from "lucide-react";

export const Route = createFileRoute("/missions/$missionId/journal")({
  component: JournalRoute,
});

function JournalRoute() {
  const { missionId } = Route.useParams();
  const mission = getMission(missionId);
  const { setFlag } = useProgress(missionId);
  const [entries, setEntries] = useState<Record<string, string>>({});
  const [saved, setSaved] = useState(false);
  const key = `ce:${missionId}:journal`;

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, [key]);

  if (!mission) return <div className="p-8">Mission not found.</div>;

  function save() {
    try {
      window.localStorage.setItem(key, JSON.stringify(entries));
    } catch {}
    const anyFilled = Object.values(entries).some((v) => v.trim().length > 3);
    setFlag("journalDone", anyFilled);
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  }

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8">
      <h1 className="font-display text-4xl font-bold">Mission Journal</h1>
      <p className="text-foreground/75 mt-2">A safe space for your thoughts. Only you can see this.</p>

      <div className="grid gap-4 mt-6">
        {mission.journalPrompts.map((p) => (
          <KidCard key={p.id} color="lavender">
            <label className="font-display font-semibold text-lg block">{p.prompt}</label>
            <textarea
              value={entries[p.id] ?? ""}
              onChange={(e) => setEntries((prev) => ({ ...prev, [p.id]: e.target.value }))}
              className="mt-2 w-full min-h-28 rounded-2xl border-2 border-border bg-background p-3 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40"
              placeholder="Write here…"
            />
          </KidCard>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <BigButton variant={saved ? "mint" : "sky"} onClick={save}>
          {saved ? <><Check className="h-4 w-4" /> Saved</> : <><Save className="h-4 w-4" /> Save Journal</>}
        </BigButton>
      </div>
    </div>
  );
}
