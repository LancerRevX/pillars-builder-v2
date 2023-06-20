import { type Ability } from './class'

export type Talent = Readonly<{
  name: string
  description?: string
  effects: ReadonlyArray<string> | string
  link: string
  imageLink: string
  requiredAbility?: Ability
  requiredTalent?: Talent
}>