export type Platform = "Minecraft" | "CS2" | "Discord" | "Telegram";

export type Community = {
  id: string;
  rank: number;
  initials: string;
  name: string;
  platform: Platform;
  description: string;
  members: string;
  clicks: number;
  bid: number;
  movement: number;
  todaySpend: number;
};

export const communities: Community[] = [
  { id: "minecraft-uzbekistan", rank: 1, initials: "MU", name: "Minecraft Uzbekistan", platform: "Minecraft", description: "The largest survival community for Uzbek players.", members: "18.7K players", clicks: 12420, bid: 2850000, movement: 2, todaySpend: 640000 },
  { id: "cs2-arena-uz", rank: 2, initials: "CA", name: "CS2 Arena UZ", platform: "CS2", description: "Competitive servers, scrims and tournaments across Uzbekistan.", members: "9.4K players", clicks: 8240, bid: 2450000, movement: 1, todaySpend: 510000 },
  { id: "uzgamers", rank: 3, initials: "UG", name: "UzGamers", platform: "Discord", description: "A daily gaming community built around squads and conversation.", members: "31.2K members", clicks: 6910, bid: 2100000, movement: -1, todaySpend: 420000 },
  { id: "tashkent-roleplay", rank: 4, initials: "TR", name: "Tashkent Roleplay", platform: "Minecraft", description: "A persistent city, local stories and a committed player base.", members: "7.8K players", clicks: 5820, bid: 1750000, movement: 3, todaySpend: 390000 },
  { id: "headshot-uz", rank: 5, initials: "HU", name: "Headshot UZ", platform: "Telegram", description: "Match updates, team finding and competitive CS2 discussion.", members: "22.6K subscribers", clicks: 4730, bid: 1480000, movement: 0, todaySpend: 280000 },
  { id: "samarkand-craft", rank: 6, initials: "SC", name: "Samarkand Craft", platform: "Minecraft", description: "A carefully moderated economy and survival server.", members: "5.1K players", clicks: 3910, bid: 1250000, movement: -2, todaySpend: 240000 },
  { id: "five-stack", rank: 7, initials: "5S", name: "Five Stack Central", platform: "Discord", description: "Find your next CS2 team and schedule a serious match.", members: "14.3K members", clicks: 3260, bid: 1100000, movement: 4, todaySpend: 210000 },
  { id: "fergana-gaming", rank: 8, initials: "FG", name: "Fergana Gaming", platform: "Telegram", description: "Local tournaments, news and community events.", members: "16.9K subscribers", clicks: 2840, bid: 930000, movement: -1, todaySpend: 175000 },
];

export const formatUzs = (value: number) => `${new Intl.NumberFormat("en-US").format(value)} UZS`;
export const formatCompact = (value: number) => new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(value);