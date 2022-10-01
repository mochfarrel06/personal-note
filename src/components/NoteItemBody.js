import React from 'react';

function NoteItemBody({ title, body, date }) {
  return (
    <div className="px-5 py-8 h-full flex-1">
      <h2 className="font-bold text-slate-700 text-lg mb-1">{title}</h2>
      <p className="text-slate-800 text-sm mb-6">{date}</p>
      <p className="text-slate-500 text-lg lg:text-base">{body}</p>
    </div>
  );
}

export default NoteItemBody;
