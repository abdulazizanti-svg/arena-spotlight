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
  { id: "minecraft-uzbekistan", rank: 1, initials: "MU", name: "Minecraft Uzbekistan", platform: "Minecraft", description: "O‘zbek o‘yinchilari uchun eng yirik survival hamjamiyati.", members: "18,7 ming o‘yinchi", clicks: 12420, bid: 2850000, movement: 2, todaySpend: 640000 },
  { id: "cs2-arena-uz", rank: 2, initials: "CA", name: "CS2 Arena UZ", platform: "CS2", description: "O‘zbekiston bo‘ylab serverlar, skrimlar va turnirlar.", members: "9,4 ming o‘yinchi", clicks: 8240, bid: 2450000, movement: 1, todaySpend: 510000 },
  { id: "uzgamers", rank: 3, initials: "UG", name: "UzGamers", platform: "Discord", description: "Jamoalar va suhbatlar atrofida qurilgan faol hamjamiyat.", members: "31,2 ming a’zo", clicks: 6910, bid: 2100000, movement: -1, todaySpend: 420000 },
  { id: "tashkent-roleplay", rank: 4, initials: "TR", name: "Tashkent Roleplay", platform: "Minecraft", description: "Doimiy shahar, mahalliy hikoyalar va sodiq o‘yinchilar.", members: "7,8 ming o‘yinchi", clicks: 5820, bid: 1750000, movement: 3, todaySpend: 390000 },
  { id: "headshot-uz", rank: 5, initials: "HU", name: "Headshot UZ", platform: "Telegram", description: "O‘yin natijalari, jamoa izlash va CS2 muhokamalari.", members: "22,6 ming obunachi", clicks: 4730, bid: 1480000, movement: 0, todaySpend: 280000 },
  { id: "samarkand-craft", rank: 6, initials: "SC", name: "Samarkand Craft", platform: "Minecraft", description: "Tartibli iqtisodiyotga ega survival serveri.", members: "5,1 ming o‘yinchi", clicks: 3910, bid: 1250000, movement: -2, todaySpend: 240000 },
  { id: "five-stack", rank: 7, initials: "5S", name: "Five Stack Central", platform: "Discord", description: "CS2 jamoangizni toping va jiddiy o‘yinlarni rejalashtiring.", members: "14,3 ming a’zo", clicks: 3260, bid: 1100000, movement: 4, todaySpend: 210000 },
  { id: "fergana-gaming", rank: 8, initials: "FG", name: "Fergana Gaming", platform: "Telegram", description: "Mahalliy turnirlar, yangiliklar va hamjamiyat tadbirlari.", members: "16,9 ming obunachi", clicks: 2840, bid: 930000, movement: -1, todaySpend: 175000 },
];

export const formatUzs = (value: number) => `${new Intl.NumberFormat("uz-UZ").format(value)} UZS`;
export const formatCompact = (value: number) => new Intl.NumberFormat("uz-UZ", { notation: "compact", maximumFractionDigits: 1 }).format(value);