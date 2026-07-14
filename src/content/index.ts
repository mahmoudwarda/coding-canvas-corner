import type { Mission } from "./types";
import { mission1 } from "./missions/mission-1";
import { mission2 } from "./missions/mission-2";
import { mission3 } from "./missions/mission-3";
import { mission4 } from "./missions/mission-4";
import { mission5 } from "./missions/mission-5";
import { mission6 } from "./missions/mission-6";

export const missions: Mission[] = [mission1, mission2, mission3, mission4, mission5, mission6];

export function getMission(id: string): Mission | undefined {
  return missions.find((m) => m.id === id);
}

export function getMissionByOrder(order: number): Mission | undefined {
  return missions.find((m) => m.order === order);
}
