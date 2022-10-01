import React from 'react';
import NoteList from './NoteList';
import NoteInput from './NoteInput';

function BodyNote({ addNote, notes, querySearch, onDelete, onArchive, onActive }) {
  const activeNotes = notes.filter((note) => note.archived === false && note.title.toLowerCase().includes(querySearch.toLowerCase().trim()));
  const archiveNotes = notes.filter((note) => note.archived === true && note.title.toLowerCase().includes(querySearch.toLowerCase().trim()));

  return (
    <div>
      <NoteInput addNote={addNote} />
      <h2 className="font-bold mb-10 text-center text-2xl text-slate-700 pt-40">Active Notes</h2>
      <NoteList notes={activeNotes} onDelete={onDelete} onArchive={onArchive} />
      <h2 className="font-bold mb-10 text-center text-2xl text-slate-700 pt-40">Archive Notes</h2>
      <NoteList notes={archiveNotes} onDelete={onDelete} onActive={onActive} />
      <div className="mb-20"></div>
    </div>
  );
}

export default BodyNote;
