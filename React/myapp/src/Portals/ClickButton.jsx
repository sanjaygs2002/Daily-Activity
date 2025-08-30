import { useState } from "react";
import Modal from "./ReactPortal";

function ClickButton() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1>Here Your message</h1>
      <button onClick={() => setOpen(true)}>Open Message</button>

      {open && (
        <Modal>
          <h2>Hi my name Sanjay G S</h2>
          <button onClick={() => setOpen(false)}>Close</button>
        </Modal>
      )}
    </div>
  );
}

export default ClickButton;
