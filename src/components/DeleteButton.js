import React from 'react';

function DeleteButton({ id, onDelete }) {
  return (
    <button className="w-1/2 bg-red-600 flex justify-center py-3 text-slate-100 font-semibold text-md lg:text-sm hover:bg-red-300 group-hover:text-slate-600 transition duration-300 ease-in-out" onClick={() => onDelete(id)}>
      Delete
    </button>
  );
}

export default DeleteButton;
