import { useCallback, useEffect, useState } from "react";

export interface MissionProgress {
  lessonScreensCompleted: string[];
  activitiesCompleted: string[];
  quizBestScore: number | null;
  scratchDone: boolean;
  homeworkDone: string[];
  journalDone: boolean;
  missionCompleted: boolean;
}

const EMPTY: MissionProgress = {
  lessonScreensCompleted: [],
  activitiesCompleted: [],
  quizBestScore: null,
  scratchDone: false,
  homeworkDone: [],
  journalDone: false,
  missionCompleted: false,
};

function storageKey(missionId: string) {
  return `ce:${missionId}:progress`;
}

/**
 * Client-only progress hook backed by localStorage. Reads only after mount
 * to avoid SSR hydration mismatch.
 */
export function useProgress(missionId: string) {
  const [hydrated, setHydrated] = useState(false);
  const [progress, setProgress] = useState<MissionProgress>(EMPTY);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey(missionId));
      if (raw) setProgress({ ...EMPTY, ...JSON.parse(raw) });
    } catch {
      // ignore
    }
    setHydrated(true);
  }, [missionId]);

  const save = useCallback(
    (next: MissionProgress) => {
      setProgress(next);
      try {
        window.localStorage.setItem(storageKey(missionId), JSON.stringify(next));
      } catch {
        // ignore
      }
    },
    [missionId],
  );

  const markScreen = useCallback(
    (screenId: string) => {
      setProgress((prev) => {
        if (prev.lessonScreensCompleted.includes(screenId)) return prev;
        const next = {
          ...prev,
          lessonScreensCompleted: [...prev.lessonScreensCompleted, screenId],
        };
        try {
          window.localStorage.setItem(storageKey(missionId), JSON.stringify(next));
        } catch {}
        return next;
      });
    },
    [missionId],
  );

  const markActivity = useCallback(
    (activityId: string) => {
      setProgress((prev) => {
        if (prev.activitiesCompleted.includes(activityId)) return prev;
        const next = {
          ...prev,
          activitiesCompleted: [...prev.activitiesCompleted, activityId],
        };
        try {
          window.localStorage.setItem(storageKey(missionId), JSON.stringify(next));
        } catch {}
        return next;
      });
    },
    [missionId],
  );

  const setQuizScore = useCallback(
    (score: number) => {
      setProgress((prev) => {
        const next = {
          ...prev,
          quizBestScore: Math.max(prev.quizBestScore ?? 0, score),
        };
        try {
          window.localStorage.setItem(storageKey(missionId), JSON.stringify(next));
        } catch {}
        return next;
      });
    },
    [missionId],
  );

  const setFlag = useCallback(
    (key: "scratchDone" | "journalDone" | "missionCompleted", value: boolean) => {
      setProgress((prev) => {
        const next = { ...prev, [key]: value };
        try {
          window.localStorage.setItem(storageKey(missionId), JSON.stringify(next));
        } catch {}
        return next;
      });
    },
    [missionId],
  );

  const toggleHomework = useCallback(
    (id: string) => {
      setProgress((prev) => {
        const has = prev.homeworkDone.includes(id);
        const next = {
          ...prev,
          homeworkDone: has ? prev.homeworkDone.filter((x) => x !== id) : [...prev.homeworkDone, id],
        };
        try {
          window.localStorage.setItem(storageKey(missionId), JSON.stringify(next));
        } catch {}
        return next;
      });
    },
    [missionId],
  );

  const reset = useCallback(() => save(EMPTY), [save]);

  return {
    progress,
    hydrated,
    markScreen,
    markActivity,
    setQuizScore,
    setFlag,
    toggleHomework,
    reset,
  };
}
