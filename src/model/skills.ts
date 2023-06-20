export type SkillKey = 
  'stealth' | 'athletics' | 'lore' | 'mechanics' | 'survival'

export type SkillBonuses = 
  Readonly<Partial<Record<SkillKey, number>>>

export type Skill = Readonly<{
  name: string
  link: string
}>

export const skills: Readonly<Record<SkillKey, Skill>> = {
  stealth: {
    name: 'Stealth',
    link: 'https://pillarsofeternity.fandom.com/wiki/Stealth'
  },
  athletics: {
    name: 'Athletics',
    link: 'https://pillarsofeternity.fandom.com/wiki/Athletics'
  },
  lore: {
    name: 'Lore',
    link: 'https://pillarsofeternity.fandom.com/wiki/Lore'
  },
  mechanics: {
    name: 'Mechanics',
    link: 'https://pillarsofeternity.fandom.com/wiki/Mechanics'
  },
  survival: {
    name: 'Survival',
    link: 'https://pillarsofeternity.fandom.com/wiki/Survival'
  }
}