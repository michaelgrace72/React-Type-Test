import { useRef } from "react";
import { MdRefresh } from "react-icons/md";
const RestartButton = (
{
  onRestart: handleRestart,
  classname = "",
}: {
  onRestart: () => void;
  classname?: string;
}
) => {
  // pre render button blur if it has been clicked
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    buttonRef.current?.blur();
    handleRestart();
  };
  return (
    <button
      ref={buttonRef}
      className={`block rounded px-8 py-2 hover:bg-slate-700/50 ${classname}`}
      onClick={handleClick}
    >
      <MdRefresh className="w-6 h-6" />
    </button>
  );
}

export default RestartButton;