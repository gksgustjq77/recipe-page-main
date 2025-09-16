import Intro from "../components/Intro";
import { RecipeObj } from "../const/recipe";

const Main: React.FC = () => {
  return (
    <>
      <div className="flex max-w-[600px] flex-col rounded-xl bg-white p-6 text-black">
        <Intro title={RecipeObj.info.title} dec={RecipeObj.info.dec}></Intro>
      </div>
    </>
  );
};

export default Main;
