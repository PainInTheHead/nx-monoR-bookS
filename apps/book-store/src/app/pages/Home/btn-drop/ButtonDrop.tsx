
interface dropProps {
  isOpen: boolean;
  handleToggle: () => void;
  btnName: string
}

const ButtonDrop: React.FC<dropProps> = ({ isOpen, handleToggle, btnName }) => {
  return (
    <button className="btn-dropmenu" onClick={handleToggle}>
      <span>{btnName}</span>
      <img
        alt="arrow"
        width="24"
        height="24"
        className={isOpen ? "rotate-image rotate-90" : "rotate-image"}
        src="/vectorCat.svg"
      />
    </button>
  );
};

export default ButtonDrop;
