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
  link: string;
};

export type LinkKind = "telegram-channel" | "telegram-group" | "discord" | "minecraft" | "website";

export const linkKindLabel: Record<LinkKind, string> = {
  "telegram-channel": "Telegram kanal",
  "telegram-group": "Telegram guruh",
  discord: "Discord server",
  minecraft: "Minecraft server",
  website: "Veb-sayt",
};

export function detectLinkKind(raw: string): LinkKind {
  const value = raw.trim().toLowerCase().replace(/^https?:\/\//, "").replace(/^www\./, "");
  if (value.startsWith("t.me/") || value.startsWith("telegram.me/")) {
    const handle = value.split("/")[1] ?? "";
    if (handle.startsWith("+") || handle.startsWith("joinchat")) return "telegram-group";
    return /(chat|guruh|group|talk)/.test(handle) ? "telegram-group" : "telegram-channel";
  }
  if (value.startsWith("discord.gg/") || value.includes("discord.com/invite")) return "discord";
  if (/^(play|mc|server)\./.test(value) || /:\d{4,5}$/.test(value) || value.includes("minecraft")) return "minecraft";
  return "website";
}

export const normalizeLink = (raw: string) => raw.trim().replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");

export const communities: Community[] = [
  { id: "minecraft-uzbekistan", rank: 1, initials: "MU", name: "Minecraft Uzbekistan", platform: "Minecraft", description: "O‘zbek o‘yinchilari uchun eng yirik survival hamjamiyati.", members: "18,7 ming o‘yinchi", clicks: 12420, bid: 2850000, movement: 2, todaySpend: 640000, link: "play.mcuz.uz" },
  { id: "cs2-arena-uz", rank: 2, initials: "CA", name: "CS2 Arena UZ", platform: "CS2", description: "O‘zbekiston bo‘ylab serverlar, skrimlar va turnirlar.", members: "9,4 ming o‘yinchi", clicks: 8240, bid: 2450000, movement: 1, todaySpend: 510000, link: "https://cs2arena.uz" },
  { id: "uzgamers", rank: 3, initials: "UG", name: "UzGamers", platform: "Discord", description: "Jamoalar va suhbatlar atrofida qurilgan faol hamjamiyat.", members: "31,2 ming a’zo", clicks: 6910, bid: 2100000, movement: -1, todaySpend: 420000, link: "https://discord.gg/uzgamers" },
  { id: "tashkent-roleplay", rank: 4, initials: "TR", name: "Tashkent Roleplay", platform: "Minecraft", description: "Doimiy shahar, mahalliy hikoyalar va sodiq o‘yinchilar.", members: "7,8 ming o‘yinchi", clicks: 5820, bid: 1750000, movement: 3, todaySpend: 390000, link: "mc.tashkentrp.uz" },
  { id: "headshot-uz", rank: 5, initials: "HU", name: "Headshot UZ", platform: "Telegram", description: "O‘yin natijalari, jamoa izlash va CS2 muhokamalari.", members: "22,6 ming obunachi", clicks: 4730, bid: 1480000, movement: 0, todaySpend: 280000, link: "https://t.me/headshotuz" },
  { id: "samarkand-craft", rank: 6, initials: "SC", name: "Samarkand Craft", platform: "Minecraft", description: "Tartibli iqtisodiyotga ega survival serveri.", members: "5,1 ming o‘yinchi", clicks: 3910, bid: 1250000, movement: -2, todaySpend: 240000, link: "play.samarkandcraft.uz" },
  { id: "five-stack", rank: 7, initials: "5S", name: "Five Stack Central", platform: "Discord", description: "CS2 jamoangizni toping va jiddiy o‘yinlarni rejalashtiring.", members: "14,3 ming a’zo", clicks: 3260, bid: 1100000, movement: 4, todaySpend: 210000, link: "https://discord.gg/fivestack" },
  { id: "fergana-gaming", rank: 8, initials: "FG", name: "Fergana Gaming", platform: "Telegram", description: "Mahalliy turnirlar, yangiliklar va hamjamiyat tadbirlari.", members: "16,9 ming obunachi", clicks: 2840, bid: 930000, movement: -1, todaySpend: 175000, link: "https://t.me/ferganagaming" },
  { id: "fargona-hub-9", rank: 9, initials: "FH", name: "Farg‘ona Hub", platform: "Discord", description: "Streamerlar va o‘yinchilar hamjamiyati.", members: "16,9 ming a’zo", clicks: 2394, bid: 850000, movement: 0, todaySpend: 135000, link: "https://discord.gg/fargonahub" },
  { id: "zarafshon-squad-10", rank: 10, initials: "ZS", name: "Zarafshon Squad", platform: "Minecraft", description: "Survival, mini-o‘yinlar va haftalik tadbirlar.", members: "8,1 ming o‘yinchi", clicks: 2276, bid: 870000, movement: -4, todaySpend: 140000, link: "play.zarafshonsquad.uz" },
  { id: "guliston-union-11", rank: 11, initials: "GU", name: "Guliston Union", platform: "Minecraft", description: "Anti-grief tizimi bilan barqaror survival dunyosi.", members: "12,3 ming o‘yinchi", clicks: 2301, bid: 830000, movement: -4, todaySpend: 135000, link: "play.gulistonunion.uz" },
  { id: "kokand-arena-12", rank: 12, initials: "KA", name: "Kokand Arena", platform: "Minecraft", description: "Iqtisodiyot, klanlar va shaharlar qurilishi.", members: "14,1 ming o‘yinchi", clicks: 2411, bid: 820000, movement: -5, todaySpend: 130000, link: "play.kokandarena.uz" },
  { id: "chirchiq-core-13", rank: 13, initials: "CC", name: "Chirchiq Core", platform: "Telegram", description: "O‘yin bo‘yicha maslahatlar va yangilanishlar.", members: "3,9 ming obunachi", clicks: 2401, bid: 820000, movement: -2, todaySpend: 130000, link: "https://t.me/chirchiqcore" },
  { id: "fargona-pulse-14", rank: 14, initials: "FP", name: "Farg‘ona Pulse", platform: "CS2", description: "5x5 jamoalar va mahalliy turnirlar.", members: "4,8 ming o‘yinchi", clicks: 2153, bid: 820000, movement: 1, todaySpend: 130000, link: "https://fargonapulse.uz" },
  { id: "xiva-empire-15", rank: 15, initials: "XE", name: "Xiva Empire", platform: "Discord", description: "Rollar, botlar va kunlik faollik.", members: "14,1 ming a’zo", clicks: 2184, bid: 790000, movement: -1, todaySpend: 125000, link: "https://discord.gg/xivaempire" },
  { id: "jizzax-nexus-16", rank: 16, initials: "JN", name: "Jizzax Nexus", platform: "CS2", description: "5x5 jamoalar va mahalliy turnirlar.", members: "9,4 ming o‘yinchi", clicks: 2148, bid: 810000, movement: 0, todaySpend: 130000, link: "https://jizzaxnexus.uz" },
  { id: "samarqand-elite-17", rank: 17, initials: "SE", name: "Samarqand Elite", platform: "CS2", description: "Faol adminlar va toza serverlar.", members: "12,1 ming o‘yinchi", clicks: 2228, bid: 790000, movement: 4, todaySpend: 125000, link: "https://samarqandelite.uz" },
  { id: "andijon-club-18", rank: 18, initials: "AC", name: "Andijon Club", platform: "Telegram", description: "Yangiliklar, natijalar va tez muloqot.", members: "5,4 ming obunachi", clicks: 2062, bid: 770000, movement: 2, todaySpend: 125000, link: "https://t.me/andijonclub" },
  { id: "toshkent-empire-19", rank: 19, initials: "TE", name: "Toshkent Empire", platform: "Discord", description: "Rollar, botlar va kunlik faollik.", members: "7,8 ming a’zo", clicks: 1990, bid: 750000, movement: -1, todaySpend: 120000, link: "https://discord.gg/toshkentempire" },
  { id: "fargona-core-20", rank: 20, initials: "FC", name: "Farg‘ona Core", platform: "CS2", description: "Faol adminlar va toza serverlar.", members: "17,0 ming o‘yinchi", clicks: 1995, bid: 760000, movement: -4, todaySpend: 120000, link: "https://fargonacore.uz" },
  { id: "namangan-pulse-21", rank: 21, initials: "NP", name: "Namangan Pulse", platform: "CS2", description: "5x5 jamoalar va mahalliy turnirlar.", members: "15,1 ming o‘yinchi", clicks: 2051, bid: 750000, movement: 0, todaySpend: 120000, link: "https://namanganpulse.uz" },
  { id: "xiva-arena-22", rank: 22, initials: "XA", name: "Xiva Arena", platform: "Minecraft", description: "Yangi boshlovchilar uchun qulay serverlar.", members: "11,9 ming o‘yinchi", clicks: 1999, bid: 710000, movement: 1, todaySpend: 115000, link: "play.xivaarena.uz" },
  { id: "zarafshon-nexus-23", rank: 23, initials: "ZN", name: "Zarafshon Nexus", platform: "Discord", description: "Rollar, botlar va kunlik faollik.", members: "15,4 ming a’zo", clicks: 1906, bid: 730000, movement: -1, todaySpend: 115000, link: "https://discord.gg/zarafshonnexus" },
  { id: "chirchiq-hub-24", rank: 24, initials: "CH", name: "Chirchiq Hub", platform: "Telegram", description: "Turnir e’lonlari va jamoa izlash kanali.", members: "17,2 ming obunachi", clicks: 1895, bid: 690000, movement: 1, todaySpend: 110000, link: "https://t.me/chirchiqhub" },
  { id: "urganch-union-25", rank: 25, initials: "UU", name: "Urganch Union", platform: "CS2", description: "Kunlik skrimlar, mix o‘yinlar va reyting jadvali.", members: "7,3 ming o‘yinchi", clicks: 1909, bid: 680000, movement: -3, todaySpend: 110000, link: "https://urganchunion.uz" },
  { id: "navoiy-pulse-26", rank: 26, initials: "NP", name: "Navoiy Pulse", platform: "Minecraft", description: "Iqtisodiyot, klanlar va shaharlar qurilishi.", members: "4,5 ming o‘yinchi", clicks: 1778, bid: 690000, movement: -2, todaySpend: 110000, link: "play.navoiypulse.uz" },
  { id: "kokand-union-27", rank: 27, initials: "KU", name: "Kokand Union", platform: "Discord", description: "O‘yinchilar uchun jamoa qidirish markazi.", members: "16,0 ming a’zo", clicks: 1708, bid: 680000, movement: -4, todaySpend: 110000, link: "https://discord.gg/kokandunion" },
  { id: "guliston-arena-28", rank: 28, initials: "GA", name: "Guliston Arena", platform: "CS2", description: "5x5 jamoalar va mahalliy turnirlar.", members: "12,2 ming o‘yinchi", clicks: 1751, bid: 650000, movement: -2, todaySpend: 105000, link: "https://gulistonarena.uz" },
  { id: "kokand-club-29", rank: 29, initials: "KC", name: "Kokand Club", platform: "Discord", description: "Ovozli xonalar, tadbirlar va faol muloqot.", members: "12,9 ming a’zo", clicks: 1783, bid: 630000, movement: 1, todaySpend: 100000, link: "https://discord.gg/kokandclub" },
  { id: "urganch-force-30", rank: 30, initials: "UF", name: "Urganch Force", platform: "Discord", description: "Streamerlar va o‘yinchilar hamjamiyati.", members: "9,0 ming a’zo", clicks: 1540, bid: 660000, movement: 0, todaySpend: 105000, link: "https://discord.gg/urganchforce" },
  { id: "buxoro-union-31", rank: 31, initials: "BU", name: "Buxoro Union", platform: "Telegram", description: "Kunlik post va faol chat.", members: "2,3 ming obunachi", clicks: 1702, bid: 630000, movement: -3, todaySpend: 100000, link: "https://t.me/buxorounion" },
  { id: "jizzax-craft-32", rank: 32, initials: "JC", name: "Jizzax Craft", platform: "Telegram", description: "Yangiliklar, natijalar va tez muloqot.", members: "4,5 ming obunachi", clicks: 1484, bid: 620000, movement: -1, todaySpend: 100000, link: "https://t.me/jizzaxcraft" },
  { id: "jizzax-force-33", rank: 33, initials: "JF", name: "Jizzax Force", platform: "Minecraft", description: "Survival, mini-o‘yinlar va haftalik tadbirlar.", members: "16,6 ming o‘yinchi", clicks: 1486, bid: 610000, movement: -4, todaySpend: 100000, link: "play.jizzaxforce.uz" },
  { id: "buxoro-nexus-34", rank: 34, initials: "BN", name: "Buxoro Nexus", platform: "Telegram", description: "Yangiliklar, natijalar va tez muloqot.", members: "13,4 ming obunachi", clicks: 1439, bid: 610000, movement: -1, todaySpend: 100000, link: "https://t.me/buxoronexus" },
  { id: "toshkent-legion-35", rank: 35, initials: "TL", name: "Toshkent Legion", platform: "Minecraft", description: "Survival, mini-o‘yinlar va haftalik tadbirlar.", members: "6,8 ming o‘yinchi", clicks: 1559, bid: 580000, movement: 5, todaySpend: 95000, link: "play.toshkentlegion.uz" },
  { id: "fargona-club-36", rank: 36, initials: "FC", name: "Farg‘ona Club", platform: "Minecraft", description: "Survival, mini-o‘yinlar va haftalik tadbirlar.", members: "11,9 ming o‘yinchi", clicks: 1291, bid: 570000, movement: 2, todaySpend: 90000, link: "play.fargonaclub.uz" },
  { id: "chirchiq-elite-37", rank: 37, initials: "CE", name: "Chirchiq Elite", platform: "CS2", description: "Kunlik skrimlar, mix o‘yinlar va reyting jadvali.", members: "14,6 ming o‘yinchi", clicks: 1476, bid: 560000, movement: 2, todaySpend: 90000, link: "https://chirchiqelite.uz" },
  { id: "fargona-squad-38", rank: 38, initials: "FS", name: "Farg‘ona Squad", platform: "Minecraft", description: "Iqtisodiyot, klanlar va shaharlar qurilishi.", members: "16,6 ming o‘yinchi", clicks: 1301, bid: 560000, movement: 1, todaySpend: 90000, link: "play.fargonasquad.uz" },
  { id: "termiz-legion-39", rank: 39, initials: "TL", name: "Termiz Legion", platform: "Telegram", description: "Kunlik post va faol chat.", members: "15,2 ming obunachi", clicks: 1294, bid: 530000, movement: 0, todaySpend: 85000, link: "https://t.me/termizlegion" },
  { id: "guliston-core-40", rank: 40, initials: "GC", name: "Guliston Core", platform: "Discord", description: "Streamerlar va o‘yinchilar hamjamiyati.", members: "17,0 ming a’zo", clicks: 1155, bid: 530000, movement: 0, todaySpend: 85000, link: "https://discord.gg/gulistoncore" },
  { id: "angren-hub-41", rank: 41, initials: "AH", name: "Angren Hub", platform: "Telegram", description: "Yangiliklar, natijalar va tez muloqot.", members: "12,1 ming obunachi", clicks: 1170, bid: 540000, movement: -4, todaySpend: 85000, link: "https://t.me/angrenhub" },
  { id: "toshkent-core-42", rank: 42, initials: "TC", name: "Toshkent Core", platform: "Telegram", description: "O‘yin bo‘yicha maslahatlar va yangilanishlar.", members: "3,1 ming obunachi", clicks: 1297, bid: 490000, movement: -1, todaySpend: 80000, link: "https://t.me/toshkentcore" },
  { id: "nukus-squad-43", rank: 43, initials: "NS", name: "Nukus Squad", platform: "Minecraft", description: "Anti-grief tizimi bilan barqaror survival dunyosi.", members: "17,9 ming o‘yinchi", clicks: 1074, bid: 500000, movement: 3, todaySpend: 80000, link: "play.nukussquad.uz" },
  { id: "termiz-hub-44", rank: 44, initials: "TH", name: "Termiz Hub", platform: "Telegram", description: "Turnir e’lonlari va jamoa izlash kanali.", members: "2,9 ming obunachi", clicks: 1089, bid: 500000, movement: 0, todaySpend: 80000, link: "https://t.me/termizhub" },
  { id: "namangan-empire-45", rank: 45, initials: "NE", name: "Namangan Empire", platform: "Minecraft", description: "Iqtisodiyot, klanlar va shaharlar qurilishi.", members: "10,8 ming o‘yinchi", clicks: 1061, bid: 480000, movement: 5, todaySpend: 75000, link: "play.namanganempire.uz" },
  { id: "kokand-union-46", rank: 46, initials: "KU", name: "Kokand Union", platform: "Telegram", description: "Turnir e’lonlari va jamoa izlash kanali.", members: "3,9 ming obunachi", clicks: 970, bid: 460000, movement: -4, todaySpend: 75000, link: "https://t.me/kokandunion" },
  { id: "navoiy-craft-47", rank: 47, initials: "NC", name: "Navoiy Craft", platform: "Telegram", description: "Kunlik post va faol chat.", members: "14,3 ming obunachi", clicks: 930, bid: 460000, movement: 3, todaySpend: 75000, link: "https://t.me/navoiycraft" },
  { id: "toshkent-squad-48", rank: 48, initials: "TS", name: "Toshkent Squad", platform: "CS2", description: "Kunlik skrimlar, mix o‘yinlar va reyting jadvali.", members: "12,3 ming o‘yinchi", clicks: 908, bid: 430000, movement: -1, todaySpend: 70000, link: "https://toshkentsquad.uz" },
  { id: "toshkent-core-49", rank: 49, initials: "TC", name: "Toshkent Core", platform: "CS2", description: "Premier reyting va jamoa izlash.", members: "7,2 ming o‘yinchi", clicks: 1017, bid: 410000, movement: -1, todaySpend: 65000, link: "https://toshkentcore.uz" },
  { id: "buxoro-squad-50", rank: 50, initials: "BS", name: "Buxoro Squad", platform: "Telegram", description: "Kunlik post va faol chat.", members: "10,4 ming obunachi", clicks: 835, bid: 430000, movement: -2, todaySpend: 70000, link: "https://t.me/buxorosquad" },
  { id: "guliston-camp-51", rank: 51, initials: "GC", name: "Guliston Camp", platform: "Minecraft", description: "Yangi boshlovchilar uchun qulay serverlar.", members: "11,7 ming o‘yinchi", clicks: 804, bid: 390000, movement: 2, todaySpend: 60000, link: "play.gulistoncamp.uz" },
  { id: "termiz-pulse-52", rank: 52, initials: "TP", name: "Termiz Pulse", platform: "Discord", description: "Streamerlar va o‘yinchilar hamjamiyati.", members: "19,1 ming a’zo", clicks: 901, bid: 400000, movement: -2, todaySpend: 65000, link: "https://discord.gg/termizpulse" },
  { id: "navoiy-legion-53", rank: 53, initials: "NL", name: "Navoiy Legion", platform: "Telegram", description: "Yangiliklar, natijalar va tez muloqot.", members: "12,6 ming obunachi", clicks: 822, bid: 380000, movement: 5, todaySpend: 60000, link: "https://t.me/navoiylegion" },
  { id: "termiz-squad-54", rank: 54, initials: "TS", name: "Termiz Squad", platform: "Telegram", description: "O‘yin bo‘yicha maslahatlar va yangilanishlar.", members: "7,7 ming obunachi", clicks: 842, bid: 360000, movement: -5, todaySpend: 60000, link: "https://t.me/termizsquad" },
  { id: "buxoro-force-55", rank: 55, initials: "BF", name: "Buxoro Force", platform: "Telegram", description: "Turnir e’lonlari va jamoa izlash kanali.", members: "10,1 ming obunachi", clicks: 677, bid: 360000, movement: -3, todaySpend: 60000, link: "https://t.me/buxoroforce" },
  { id: "navoiy-empire-56", rank: 56, initials: "NE", name: "Navoiy Empire", platform: "Minecraft", description: "Yangi boshlovchilar uchun qulay serverlar.", members: "10,4 ming o‘yinchi", clicks: 749, bid: 370000, movement: 3, todaySpend: 60000, link: "play.navoiyempire.uz" },
  { id: "kokand-squad-57", rank: 57, initials: "KS", name: "Kokand Squad", platform: "Telegram", description: "O‘yin bo‘yicha maslahatlar va yangilanishlar.", members: "6,6 ming obunachi", clicks: 690, bid: 320000, movement: 0, todaySpend: 50000, link: "https://t.me/kokandsquad" },
  { id: "samarqand-zone-58", rank: 58, initials: "SZ", name: "Samarqand Zone", platform: "Minecraft", description: "Survival, mini-o‘yinlar va haftalik tadbirlar.", members: "13,5 ming o‘yinchi", clicks: 461, bid: 340000, movement: 2, todaySpend: 55000, link: "play.samarqandzone.uz" },
  { id: "qarshi-squad-59", rank: 59, initials: "QS", name: "Qarshi Squad", platform: "Discord", description: "Streamerlar va o‘yinchilar hamjamiyati.", members: "12,1 ming a’zo", clicks: 502, bid: 330000, movement: -4, todaySpend: 55000, link: "https://discord.gg/qarshisquad" },
  { id: "jizzax-legion-60", rank: 60, initials: "JL", name: "Jizzax Legion", platform: "Discord", description: "Ovozli xonalar, tadbirlar va faol muloqot.", members: "1,3 ming a’zo", clicks: 598, bid: 320000, movement: -4, todaySpend: 50000, link: "https://discord.gg/jizzaxlegion" },
  { id: "samarqand-club-61", rank: 61, initials: "SC", name: "Samarqand Club", platform: "Discord", description: "Ovozli xonalar, tadbirlar va faol muloqot.", members: "7,2 ming a’zo", clicks: 359, bid: 320000, movement: -3, todaySpend: 50000, link: "https://discord.gg/samarqandclub" },
  { id: "urganch-craft-62", rank: 62, initials: "UC", name: "Urganch Craft", platform: "Telegram", description: "Kunlik post va faol chat.", members: "4,8 ming obunachi", clicks: 339, bid: 300000, movement: -3, todaySpend: 50000, link: "https://t.me/urganchcraft" },
  { id: "qarshi-elite-63", rank: 63, initials: "QE", name: "Qarshi Elite", platform: "Telegram", description: "Turnir e’lonlari va jamoa izlash kanali.", members: "13,3 ming obunachi", clicks: 302, bid: 300000, movement: 2, todaySpend: 50000, link: "https://t.me/qarshielite" },
  { id: "buxoro-guild-64", rank: 64, initials: "BG", name: "Buxoro Guild", platform: "Telegram", description: "Turnir e’lonlari va jamoa izlash kanali.", members: "4,2 ming obunachi", clicks: 239, bid: 300000, movement: -2, todaySpend: 50000, link: "https://t.me/buxoroguild" },
];

export const PAGE_SIZE = 50;

export const formatUzs = (value: number) => `${new Intl.NumberFormat("uz-UZ").format(value)} UZS`;
export const formatCompact = (value: number) => new Intl.NumberFormat("uz-UZ", { notation: "compact", maximumFractionDigits: 1 }).format(value);
