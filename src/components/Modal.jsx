export const Modal = ({ children, onClick }) => {
  return (
    <div
      className="MODAL fixed right-0 top-0 flex h-full w-full items-center justify-center bg-gray-900 bg-opacity-80"
      onClick={onClick}
    >
      {children}
    </div>
  );
};
