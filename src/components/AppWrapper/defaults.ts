export type MenuItems = {
  href: string;
  label: string;
  color: string;
  subMenu?: { href: string; label: string; img?: string; color?: string }[];
};

export type CardItem = {
  name: string;
  image: string;

  menuItems?: MenuItems[];
};

export const CLASSES: MenuItems[] = [
  {
    label: "Death Knight",
    color: "#C41E3A",
    href: "#",
    subMenu: [
      { label: "Blood", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/spell_deathknight_bloodpresence.gif" },
      { label: "Frost", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/spell_deathknight_frostpresence.gif" },
      { label: "Unholy", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/spell_deathknight_unholypresence.gif" },
    ],
  },
  {
    label: "Demon Hunter",
    color: "#A330C9",
    href: "#",
    subMenu: [
      { label: "Havoc", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/ability_demonhunter_specdps.gif" },
      { label: "Vengeance", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/ability_demonhunter_spectank.gif" },
    ],
  },
  {
    label: "Druid",
    color: "#FF7C0A",
    href: "#",
    subMenu: [
      { label: "Balance", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/spell_nature_starfall.gif" },
      { label: "Feral", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/ability_druid_catform.gif" },
      { label: "Guardian", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/ability_racial_bearform.gif" },
      { label: "Restoration", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/spell_nature_healingtouch.gif" },
    ],
  },
  {
    label: "Evoker",
    color: "#33937F",
    href: "#",
    subMenu: [
      { label: "Augmentation", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/classicon_evoker_augmentation.gif" },
      { label: "Devestation", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/classicon_evoker_devastation.gif" },
      { label: "Preservation", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/classicon_evoker_preservation.gif" },
    ],
  },
  {
    label: "Hunter",
    color: "#AAD372",
    href: "#",
    subMenu: [
      { label: "Beast Mastery", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/ability_hunter_bestialdiscipline.gif" },
      { label: "Marksmanship", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/ability_hunter_focusedaim.gif" },
      { label: "Survival", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/ability_hunter_camouflage.gif" },
    ],
  },
  {
    label: "Mage",
    color: "#3FC7EB",
    href: "#",
    subMenu: [
      { label: "Arcane", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/spell_holy_magicalsentry.gif" },
      { label: "Fire", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/spell_fire_firebolt02.gif" },
      { label: "Frost", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/spell_frost_frostbolt02.gif" },
    ],
  },
  {
    label: "Monk",
    color: "#00FF98",
    href: "#",
    subMenu: [
      { label: "Brewmaster", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/spell_monk_brewmaster_spec.gif" },
      { label: "Mistweaver", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/spell_monk_mistweaver_spec.gif" },
      { label: "Windwalker", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/spell_monk_windwalker_spec.gif" },
    ],
  },
  {
    label: "Paladin",
    color: "#F48CBA",
    href: "#",
    subMenu: [
      { label: "Holy", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/spell_holy_holybolt.gif" },
      { label: "Protection", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/ability_paladin_shieldofthetemplar.gif" },
      { label: "Retribution", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/spell_holy_auraoflight.gif" },
    ],
  },
  {
    label: "Priest",
    color: "#FFFFFF",
    href: "#",
    subMenu: [
      { label: "Discipline", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/spell_holy_powerwordshield.gif" },
      { label: "Holy", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/spell_holy_guardianspirit.gif" },
      { label: "Shadow", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/spell_shadow_shadowwordpain.gif" },
    ],
  },
  {
    label: "Rogue",
    color: "#FFF468",
    href: "#",
    subMenu: [
      { label: "Assassination", href: "/class/rogue/assassination", img: "https://wow.zamimg.com/images/wow/icons/tiny/ability_rogue_deadlybrew.gif" },
      { label: "Outlaw", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/ability_rogue_waylay.gif" },
      { label: "Subtlety", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/ability_stealth.gif" },
    ],
  },
  {
    label: "Shaman",
    color: "#0070DD",
    href: "#",
    subMenu: [
      { label: "Elemental", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/spell_nature_lightning.gif" },
      { label: "Enhancement", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/spell_shaman_improvedstormstrike.gif" },
      { label: "Restoration", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/spell_nature_magicimmunity.gif" },
    ],
  },
  {
    label: "Warlock",
    color: "#8788EE",
    href: "#",
    subMenu: [
      { label: "Affliction", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/spell_shadow_deathcoil.gif" },
      { label: "Demonology", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/spell_shadow_metamorphosis.gif" },
      { label: "Destruction", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/spell_shadow_rainoffire.gif" },
    ],
  },
  {
    label: "Warrior",
    color: "#C69B6D",
    href: "#",
    subMenu: [
      { label: "Arms", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/ability_warrior_savageblow.gif" },
      { label: "Fury", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/ability_warrior_innerrage.gif" },
      { label: "Protection", href: "#", img: "https://wow.zamimg.com/images/wow/icons/tiny/ability_warrior_defensivestance.gif" },
    ],
  },
];

export const RAIDS: MenuItems[] = [
  {
    label: "Dragonflight",
    color: "#FF7C0A",
    href: "#",
    subMenu: [
      {
        label: "Vault of the Incarnates",
        color: "lightblue",
        href: "#",
      },
      {
        label: "Aberrus the Shadowed Crucible",
        color: "red",
        href: "#",
      },
      {
        label: "Amirdrassil the Dream's Hope",
        color: "green",
        href: "#",
      },
    ],
  },
  {
    label: "Shadowlands",
    color: "#33937F",
    href: "#",
    subMenu: [
      {
        label: "Castle Nathria",
        color: "lightblue",
        href: "#",
      },
      {
        label: "Sanctum of Domination",
        color: "red",
        href: "#",
      },
      {
        label: "Sepulcher of the First Ones",
        color: "green",
        href: "#",
      },
    ],
  },
  {
    label: "Battle for Azeroth",
    color: "#33937F",
    href: "#",
    subMenu: [
      {
        label: "Uldir",
        color: "lightblue",
        href: "#",
      },
      {
        label: "Battle of Dazar'alor",
        color: "red",
        href: "#",
      },
      {
        label: "Crucible of Storms",
        color: "red",
        href: "#",
      },
      {
        label: "The Eternal Palace",
        color: "green",
        href: "#",
      },
      {
        label: "Ny'alotha, the Waking City",
        color: "#33937F",
        href: "#",
      },
    ],
  },
  {
    label: "Legion",
    color: "#3FC7EB",
    href: "#",
    subMenu: [
      {
        label: "Emerald Nightmare",
        color: "lightblue",
        href: "#",
      },
      {
        label: "Halls of Valor",
        color: "red",
        href: "#",
      },
      {
        label: "The Nighthold",
        color: "red",
        href: "#",
      },
      {
        label: "Tomb of Sargeras",
        color: "green",
        href: "#",
      },
      {
        label: "Antorus, the Burning Throne",
        color: "#33937F",
        href: "#",
      },
    ],
  },
];

export const BLUEPOST_LINKS = [
  {
    href: "#",
    title: "Some blue post title",
  },
  {
    href: "#",
    title: "Rogue buffs",
  },
  {
    href: "#",
    title: "Removing PI from wow",
  },
  {
    href: "#",
    title: "Giving mikku forever sylvanas daggers",
  },
  {
    href: "#",
    title: "Bellular is banned from internet",
  },
];
