import React from 'react'
import notesStore from '../stores/notesStore';

const UpdateForm = () => {
    const store = notesStore();
    const { updateForm, handleUpdateFieldChange, updateNote } = store;

    return (
        <div className="flex flex-col gap-4 border max-w-[300px] p-4">
            <h2>Update Note:</h2>
            <form onSubmit={updateNote} className="flex flex-col gap-3">
                <input onChange={handleUpdateFieldChange} type="text" value={updateForm.title} name="title" className="border" />
                <textarea onChange={handleUpdateFieldChange} value={updateForm.body} name="body" className="border" />
                <button type="submit" className="bg-black text-white">Update Note</button>
            </form>
        </div>
    )

}

export default UpdateForm