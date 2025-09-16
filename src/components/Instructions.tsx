import type { Instruction } from "../const/recipe";

interface InstructionsProps {
  instruction: Instruction[];
}

const Instructions: React.FC<InstructionsProps> = ({ instruction }) => {
  return (
    <>
      <div className="flex flex-col gap-2 text-left text-xs font-semibold">
        <h1 className="mb-2 text-2xl font-bold text-[hsl(14,45%,36%)]">
          Instructions
        </h1>
        {instruction.map((e: Instruction) => (
          <div className="flex">
            <span className="text-bold text-[hsl(14,45%,36%)]">
              {e.id}.&nbsp;&nbsp;&nbsp;
            </span>
            <div>
              <span className="whitespace-nowrap font-bold text-black">
                {e.name}:&nbsp;
              </span>
              <span className="text-left">{e.dec}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Instructions;
