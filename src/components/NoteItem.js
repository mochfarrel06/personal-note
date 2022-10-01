import React from 'react';
import { showFormattedDate } from '../utils';
import ActiveButton from './ActiveButton';
import ArchiveButton from './ArchiveButton';
import DeleteButton from './DeleteButton';
import NoteItemBody from './NoteItemBody';

function NoteItem({ title, body, id, createdAt, onDelete, archived, onArchive, onActive }) {
  return (
    <div className="rounded-md shadow-xl mb-10 h-full overflow-hidden sm:mb-0 sm:w-64 md:w-80 lg:w-72">
      <NoteItemBody title={title} body={body} date={showFormattedDate(createdAt)} />
      <div className="flex">
        <DeleteButton id={id} onDelete={onDelete} />
        {archived ? <ActiveButton id={id} onActive={onActive} /> : <ArchiveButton id={id} onArchive={onArchive} />}
      </div>
    </div>
  );
}

export default NoteItem;
