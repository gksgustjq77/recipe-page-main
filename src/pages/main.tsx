import Ingredients from "../components/Ingredients";
import Instructions from "../components/Instructions";
import Intro from "../components/Intro";
import Nutritions from "../components/Nutrition";
import Preparation from "../components/Preparation";
import { RecipeObj } from "../const/recipe";

const Main: React.FC = () => {
  return (
    <>
      <div className="flex max-w-[700px] flex-col gap-6 rounded-xl bg-white p-6 text-black">
        <Intro title={RecipeObj.info.title} dec={RecipeObj.info.dec}></Intro>
        <Preparation preparation={RecipeObj.Preparation} />
        <Ingredients ingredient={RecipeObj.ingredients}></Ingredients>
        <div className="border-200-gray w-full border"></div>
        <Instructions instruction={RecipeObj.instructions}></Instructions>
        <div className="border-200-gray w-full border"></div>
        <Nutritions nutrition={RecipeObj.Nutrition}></Nutritions>
      </div>
    </>
  );
};

export default Main;
