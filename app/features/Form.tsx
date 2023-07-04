"use client";
import React, { useState, useEffect, useRef, FormEvent } from "react";
// @ts-ignore
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

interface Note {
  datetime: string;
  message: string;
}

const Form = () => {
  const editorRef = useRef<ReactQuill>(null);
  const [content, setContent] = useState<string>("");
  const [isInputEmpty, setIsInputEmpty] = useState<boolean>(true);

  useEffect(() => {
    const checkInputEmpty = () => {
      setIsInputEmpty(editorRef.current?.getEditor().getText().trim() === "");
    };

    checkInputEmpty();

    const editorElement = editorRef.current?.getEditor();
    if (editorElement) {
      editorElement.on("text-change", checkInputEmpty);
    }

    return () => {
      if (editorElement) {
        editorElement.off("text-change", checkInputEmpty);
      }
    };
  }, []);

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  // Submit Function
  const saveContentToBackend = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Content saved successfully!", content);
    setIsInputEmpty(true);
    setContent("");

    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const datetime = new Date().toLocaleString(undefined, options);

    const body: Note = {
      datetime: datetime,
      message: content,
    };

    try {
      const response = await axios.post<Note>(
        "https://church-note-taker.glitch.me/notes",
        body
      );
      console.log("Post request successful:", response.data);
    } catch (error) {
      console.error("Error occurred while saving content:", error);
    }
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ align: [] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ script: "super" }, "strike"],
      [{ color: [] }, { background: [] }],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "list",
    "bullet",
    "underline",
    "indent",
    "indent",
    "script",
    "strike",
    "color",
    "background",
    "align",
  ];

  return (
    <section className=" flex w-full flex-col items-center justify-center p-2  ">
      <ReactQuill
        value={content}
        onChange={handleContentChange}
        placeholder="Write something..."
        ref={editorRef}
        modules={modules}
        formats={formats}
        className="h-[300px] min-w-[300px] rounded-lg lg:w-[500px]"
      />

      <>
        {isInputEmpty ? (
          <button
            disabled={isInputEmpty}
            className="mt-20 cursor-not-allowed rounded-full bg-slate-300 px-4 py-2 text-slate-400"
          >
            Save Note
          </button>
        ) : (
          <button
            onClick={saveContentToBackend}
            className="mt-20 cursor-pointer rounded-full bg-pry px-4 py-2 text-navy hover:bg-navy hover:text-pry"
          >
            Save Note
          </button>
        )}
      </>
    </section>
  );
};

export default Form;
