import React from 'react';

function ArchiveButton({ id, onArchive }) {
  return (
    <button className="w-1/2 bg-slate-800 flex justify-center py-3 text-slate-100 font-semibold text-md lg:text-sm hover:bg-slate-500 transition duration-300 ease-in-out" onClick={() => onArchive(id)}>
      Arsipkan
    </button>
  );
}

export default ArchiveButton;
