import ReactDOM from "react-dom";

function ReactPortal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    document.getElementById("modal-root")
  );
}

export default ReactPortal;
