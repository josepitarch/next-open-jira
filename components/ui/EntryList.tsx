import { FC, useContext, useMemo } from "react";
import {  Paper, List } from "@mui/material";
import { EntryCard } from "./EntryCard";
import { EntryStatus } from "../../interfaces";
import { EntriesContext } from "../../context/entries";

interface Props {
  status: EntryStatus
}

export const EntryList:FC<Props> = ({ status }) => {
  const { entries } = useContext(EntriesContext)
  const filteredEntries = useMemo(() => entries.filter( entry => entry.status === status ), [entries, status])
  return (
   <div>
    <Paper sx={{ height: 'calc(100vh - 250px)', overflow: 'auto', backgroundColor: 'transparent', padding: 1 }}>
      <List sx={{ opacity: 1 }}>
        {
          filteredEntries.map( entry => (
            <EntryCard key={ entry._id } entry={ entry } />
          ))
        }
      </List>
    </Paper>
   </div>
  );
}
