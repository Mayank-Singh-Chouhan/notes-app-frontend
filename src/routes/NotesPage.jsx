import React from 'react'
import CreateForm from '../components/CreateForm';
import UpdateForm from '../components/UpdateForm';
import NotesResult from '../components/NotesResult';
import notesStore from '../stores/notesStore';
import authStore from '../stores/authStore';

const NotesPage = () => {

    const store = notesStore();
    const store2 = authStore();
    
    const { updateForm } = store;
    const { logout } = store2;

    return (
        <>
            <button className='max-w-[300px] w-full bg-black text-white mb-3' onClick={logout}>Logout</button>

            {!updateForm._id && <CreateForm />}

            {updateForm._id && <UpdateForm />}

            <NotesResult />
        </>
    )
}

export default NotesPage