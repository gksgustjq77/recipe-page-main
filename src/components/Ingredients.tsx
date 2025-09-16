interface IngredientsProps {
  ingredient: string[];
}

const Ingredients: React.FC<IngredientsProps> = ({ ingredient }) => {
  return (
    <>
      <div className="text-left">
        <h1 className="mb-2 text-2xl font-bold text-[hsl(14,45%,36%)]">
          Ingredients
        </h1>
        <div className="flex flex-col gap-2 p-2">
          {ingredient.map((e) => (
            <span className="text-xs font-semibold text-[hsl(30,10%,34%)]">
              ⦁ &nbsp;&nbsp;&nbsp;{e}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Ingredients;
