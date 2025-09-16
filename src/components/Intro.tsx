import type { RecipeInfo } from "../const/recipe";

const Intro: React.FC<RecipeInfo> = ({ title, dec }) => {
  return (
    <>
      <div className="flex flex-col gap-5 text-left">
        <img
          src="/images/image-omelette.jpeg"
          alt="i"
          className="max-w-[600px]"
        ></img>
        <h1 className="text-3xl font-bold">{title}</h1>
        <span className="text-xs font-semibold text-[hsl(30,10%,34%)]">
          {dec}
        </span>
      </div>
    </>
  );
};

export default Intro;
