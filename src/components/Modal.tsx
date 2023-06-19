import { MouseEventHandler, ReactNode } from "react";

type ModalProps = { children: ReactNode; onClick: MouseEventHandler };

export const Modal = ({ children, onClick }: ModalProps) => {
  return (
    <div
      className="MODAL fixed right-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black bg-opacity-70"
      onClick={onClick}
    >
      {children}
    </div>
  );
};
