import type { Mission } from "./types";
import { mission1 } from "./missions/mission-1";

export const missions: Mission[] = [mission1];

export function getMission(id: string): Mission | undefined {
  return missions.find((m) => m.id === id);
}

export function getMissionByOrder(order: number): Mission | undefined {
  return missions.find((m) => m.order === order);
}
