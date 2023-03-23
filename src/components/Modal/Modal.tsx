import { FC, MouseEventHandler } from "react";
import { IProduct } from "../../helpers/types";

type ModalProps = {
    isVisible: boolean,
    title: string,
    content:  React.ReactNode,
    onClose: MouseEventHandler<HTMLDivElement>
}

const Modal: FC<ModalProps> = ({ isVisible = false, title, content, onClose }) => {
  return !isVisible ? null : (
    <div className="modal" onClick={onClose}>
      <div className="modal-dialog" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <span className="modal-close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <div className="modal-content">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;