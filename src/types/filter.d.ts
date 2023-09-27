import { type FilterOption } from './const'

export type FilterValue = typeof FilterOption[keyof typeof FilterOption]
