import React from "react";
import Link from "next/link";

interface Note {
  id: number;
  datetime: string;
  message: string;
}

async function fetchNotes(): Promise<Note[]> {
  const response = await fetch("https://church-note-taker.glitch.me/notes", {
    next: { revalidate: 1 },
  });
  const notes: Note[] = await response.json();
  return notes;
}
// const Notes: React.FC =
const Notes = async () => {
  const notes = await fetchNotes();
  return (
    <div
      className="grid grid-cols-1 gap-8"
      // dangerouslySetInnerHTML={{ __html: notes }}
    >
      {notes.map((note) => (
        <Link
          href="/"
          key={note.id}
          className="rounded-lg px-4 py-6 shadow-lg hover:bg-pry hover:text-navy"
        >
          <div dangerouslySetInnerHTML={{ __html: note.message }} />
          <span className=" text-sm font-bold">{note.datetime}</span>
        </Link>
      ))}
    </div>
  );
};

export default Notes;
