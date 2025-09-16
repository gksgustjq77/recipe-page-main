import type { Preparations } from "../const/recipe";

interface PreparationProps {
  preparation: Preparations;
}

const Preparation: React.FC<PreparationProps> = ({ preparation }) => {
  return (
    <div className="flex flex-col gap-2 rounded-lg bg-[hsl(330,100%,98%)] p-6 text-left">
      <h1 className="text-base font-bold text-[hsl(332,51%,32%)]">
        Preparation time
      </h1>
      <div className="flex flex-col gap-2">
        {Object.entries(preparation).map(([key, value]) => (
          <span
            key={key}
            className="text-xs font-semibold capitalize text-[hsl(30,10%,34%)]"
          >
            ⦁ &nbsp;&nbsp;&nbsp;
            <strong className="text-xs font-bold capitalize text-black">
              {key}
            </strong>
            : {value}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Preparation;
