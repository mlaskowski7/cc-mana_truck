type ManaType = "fire" | "water" | "earth" | "air" | "instant" | "super";

interface Mana {
  type: ManaType;
  usable: boolean;
  usableOnRound: number;
}
