import { createAction, props } from "@ngrx/store";

export type filterValids = 'all' | 'completed' | 'pendients'

export const setFilter = createAction('[Filter] Set Filter', props<{filter: filterValids}>())