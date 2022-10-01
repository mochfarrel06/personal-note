import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchive, onActive }) {
  if (notes.length === 0) {
    return <h1 className="font-base text-lg mt-5 text-center text-slate-500">Catatan Kosong</h1>;
  }

  return (
    <section>
      <div className="container">
        <div className="w-full px-4">
          <div className="font-inter sm:flex sm:flex-wrap sm:gap-6 sm:justify-evenly">
            {notes.map((note) => (
              <NoteItem key={note.id} onDelete={onDelete} {...note} onArchive={onArchive} onActive={onActive} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NoteList;
