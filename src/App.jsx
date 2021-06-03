/* eslint  react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("さいしょ");
  const [num, setNum] = useState(0);
  const [faceShowFlg, setFaceShowFlg] = useState(false);

  const onClickCountup = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlg = () => {
    setFaceShowFlg(!faceShowFlg);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlg || setFaceShowFlg(true);
      } else {
        faceShowFlg && setFaceShowFlg(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountup}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlg}>on/off</button>
      <p>{num}</p>
      {faceShowFlg && <p>(^^♪</p>}
    </>
  );
};

export default App;
