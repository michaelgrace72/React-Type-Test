const UserInput = ({
  Input,
  className,
}: {
  Input: string;
  className?: string;
}) => {
  const typedCharacters = Input.split("");
  return (
    <div className={className}>
      {typedCharacters.map((char, index) => {
        return <Character key={'${char}_${index}'} char={char}/>
      })}
    </div>    
  )
}

const Character = ({ char }: { char: string }) => {
  return <span className="text-primary-400">{char}</span>
}



export default UserInput;