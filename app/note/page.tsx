import React from "react";
import Form from "../features/Form";

export const metadata = {
  title: "Note Taker",
  description: "Note Taker",
};

const NotePage = () => {
  return (
    <section className="my-12">
      <Form />
    </section>
  );
};

export default NotePage;
