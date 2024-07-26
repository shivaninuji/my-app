"use client";

import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {};

const TextRunner = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Hello 👋🏻 I'm Shivani N"],
    loop: true,
    delaySpeed: 1500,
    deleteSpeed: 50,
  });
  return (
    <h1>
      <span>{text}</span>
    </h1>
  );
};

export default TextRunner;
