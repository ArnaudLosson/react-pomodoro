import React, { useState } from "react";
import {render} from 'react-dom';
import Pomodoro from "./pomodoro";
import Modal from './modal';

function App () {
  const [modal, setModal] = useState(false)

  return (
    <div>
      <Pomodoro setModal={setModal} />
      {modal && <Modal setModal={setModal} />}
    </div>
  );
}

render(<App />, document.getElementById('app'))