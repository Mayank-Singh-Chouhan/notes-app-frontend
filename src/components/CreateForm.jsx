import React from 'react'
import notesStore from '../stores/notesStore';

const CreateForm = () => {
    const store = notesStore();
    const { createForm, handleCreateFieldChange, createNote } = store;

    return (
        <div className="flex flex-col gap-4 border max-w-[300px] p-4">
            <h2>Create Note:</h2>
            <form onSubmit={createNote} className="flex flex-col gap-3">
                <input onChange={handleCreateFieldChange} type="text" value={createForm.title} name="title" className="border" />
                <textarea onChange={handleCreateFieldChange} value={createForm.body} name="body" className="border" />
                <button type="submit" className="bg-black text-white">Create Note</button>
            </form>
        </div>
    )
}

export default CreateForm