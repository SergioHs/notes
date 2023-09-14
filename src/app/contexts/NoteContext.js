"use client"
import React, {useState, createContext, useContext} from "react";

const NoteContext = createContext();

export function NoteProvider({ children }){
    const[notes, setNotes] = useState([]);

    const addNote = (newNote) => {
        setNotes([...notes, newNote])
    }

    return(
        <NoteContext.Provider value={{notes, addNote}}>
            {children}
        </NoteContext.Provider>
    )
}

export function useNotes(){
    const context = useContext(NoteContext);
    return(context);
}