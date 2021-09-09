import React, { useState } from "react";

function Toggle() {
  const [isOn, setBtn] = useState(false)

  const color = isOn ? "red" : "white"

  return <button style={{background:color}} onClick={() => setBtn(!isOn)}>{isOn ? "ON":"OFF"}</button>;
}

export default Toggle;
