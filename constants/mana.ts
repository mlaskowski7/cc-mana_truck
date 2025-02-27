export type ManaType = "fire" | "water" | "earth" | "air" | "instant" | "super";

export interface Mana {
  type: ManaType;
  usable: boolean;
  usableOnRound: number;
}

export const manaTypes = ["fire", "water", "earth", "air", "instant", "super"];
