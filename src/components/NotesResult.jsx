import React, { useEffect } from 'react'
import notesStore from '../stores/notesStore';

const NotesResult = () => {
    const store = notesStore();
    const { notes, deleteNote, toggleUpdate, fetchNotes } = store;

    useEffect(() => {
        fetchNotes();
    }, [])

    return (
        <div>
            <h2>Notes:</h2>
            {notes && notes.map((note) => {
                return (
                    <div key={note._id} className="border flex flex-col w-[300px] p-4">
                        <div className="flex flex-col gap-3 flex-1">
                            <p title={note.title} className="line-clamp-1 shrink-0 font-bold">{note.title}</p>
                            <div className="text-wrap overflow-y-auto shrink-0 max-h-[200px]">{note.body}</div>
                        </div>
                        <div className="flex gap-2 mt-3">
                            <button onClick={() => toggleUpdate(note)} className="w-full bg-black text-white">Update</button>
                            <button onClick={() => deleteNote(note._id)} className="w-full bg-black text-white">Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default NotesResult