import type { Nutrition } from "../const/recipe";

interface NutritionProps {
  nutrition: Nutrition;
}

const Nutritions: React.FC<NutritionProps> = ({ nutrition }) => {
  return (
    <>
      <div className="flex flex-col gap-2 text-left">
        <h1 className="text-2xl font-bold text-[hsl(332,51%,32%)]">
          Nutrition
        </h1>

        <span className="text-sm font-semibold text-[hsl(30,10%,34%)]">
          The table below shows nutritional values per serving without the
          additional fillings.
        </span>

        <div className="flex flex-col">
          {Object.entries(nutrition).map(([key, value]) => (
            <div className="border-b-200-gary border-b p-3">
              <div className="flex w-[70%] justify-between">
                <span>{key}</span>
                <span className="font-bold text-[hsl(14,45%,36%)]">
                  {value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Nutritions;
