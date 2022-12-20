import { EntriesState } from "./EntriesProvider";

type EntriesActionType = 
  | { type: 'Entries - Add Entry' }


export const entriesReducer = (state: EntriesState, action: EntriesActionType) => {
  switch (action.type) {
    default:
      return state;
  }
  
}