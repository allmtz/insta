export const Modal = ({ children, onClick }) => {
  return (
    <div
      className="MODAL fixed top-0 right-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-80"
      onClick={onClick}
    >
      {children}
    </div>
  );
};
