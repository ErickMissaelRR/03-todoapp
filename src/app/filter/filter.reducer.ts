import { Action, createReducer, on } from "@ngrx/store";
import { filterValids, setFilter } from "./filter.actions";

const initialState: filterValids = 'all';


const _filterReducer = createReducer<filterValids>(
    initialState,
    on(setFilter, (state: filterValids, {filter}) => filter)
);

export function filterReducer(state: filterValids = initialState, action: Action) {
    return _filterReducer(state, action);
}