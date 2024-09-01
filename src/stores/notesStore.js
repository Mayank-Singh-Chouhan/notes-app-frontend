import axios from 'axios';
import { create } from 'zustand'

const notesStore = create((set) => ({
    notes: null,

    createForm: {
        title: "",
        body: ""
    },

    updateForm: {
        _idL: null,
        title: "",
        body: ""
    },

    fetchNotes: async () => {
        // fetch the notes
        const res = await axios.get("/notes");
        // set to state
        set({ notes: res.data.notes });
    },

    handleCreateFieldChange: (e) => {
        const { name, value } = e.target;

        set((state) => {
            return {
                createForm: {
                    ...state.createForm,
                    [name]: value
                },
            };
        });
    },

    createNote: async (e) => {
        e.preventDefault();
        const { createForm } = notesStore.getState();

        // create the note
        const res = await axios.post("/notes", createForm);

        // update state
        set((state) => {
            return {
                notes: [...state.notes, res.data.note],
                // clear form state
                createForm: { title: "", body: "" }
            }
        })
    },

    deleteNote: async (_id) => {
        // delete the note
        await axios.delete(`/notes/${_id}`)

        // update state
        set((state) => {
            return {
                notes: [...state.notes.filter(note => note._id !== _id)]
            }
        })
    },

    toggleUpdate: (note) => {
        const { _id, title, body } = note;

        // set state on update form
        set({ updateForm: { _id, title, body } })
    },

    handleUpdateFieldChange: (e) => {
        const { name, value } = e.target;

        set((state) => {
            return {
                updateForm: {
                    ...state.updateForm,
                    [name]: value
                }
            }
        })
    },

    updateNote: async (e) => {
        e.preventDefault();
        const { notes, updateForm } = notesStore.getState()
        const { title, body, _id } = updateForm;

        // send a update request
        const res = await axios.put(`/notes/${_id}`, { title, body });

        // update state
        const newNoteIdx = notes.findIndex((note) => note._id === _id);

        set((state) => {
            state.notes[newNoteIdx] = res.data.note;
            return {
                notes: [...state.notes],
                // clear update form state
                updateForm: { _id: null, title: "", body: "" }
            }
        });
    }
}))


export default notesStore;