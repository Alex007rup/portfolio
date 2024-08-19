/* eslint-disable no-unused-vars */
import { React, useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import styles from "../../styles/TypingEffect.module.css"

let TypingEffect = () => {

  const [showCursor, setShowCursor] = useState(true);

  const [text, helper] = useTypewriter({
    words: [
      "I'm A Full Stack Developer",
      "Enthusiastic About Web Design",
      "Excited To Learn New Skills",
      "Waits To Encounter Bugs"
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 100,
    delaySpeed: 800,
  })

  const { isType, isDelete, isDelay, isDone } = helper;

  return (
    <>
      {/* here I've used inline css besause we cannot run map on text and we cannot add styleing on this */}
      <div className={styles.container}>
        <span className={styles.text}>
          {text}
          {!isDelay && <Cursor cursorColor={'black'} cursorStyle="_" cursorBlinking={true} />}
        </span>
      </div>
    </>
  );
};

export default TypingEffect;