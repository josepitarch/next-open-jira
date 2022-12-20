import { FC, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';
import { EntriesContext } from "./EntriesContext";
import { entriesReducer } from "./entriesReducer";
import { Entry } from "../../interfaces";

export interface EntriesState {
  entries: Entry[]
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: "Pendiente sunt consectetur ea occaecat ad exercitation pariatur nostrud.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: "En progreso sunt consectetur ea occaecat ad exercitation pariatur nostrud.",
      status: "in-progress",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: "Finalizado sunt consectetur ea occaecat ad exercitation pariatur nostrud.",
      status: "finished",
      createdAt: Date.now(),
    }
  ]
};

interface Props {
  children: React.ReactNode;
}

export const EntriesProvider:FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  return (
    <EntriesContext.Provider value={{ ...state }}>
      {children}
    </EntriesContext.Provider>
  );
};
