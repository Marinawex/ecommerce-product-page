import { AddtoCartProps } from "../_types/types";
import MinusIcon from "./icons/MinusIcon";
import PlusIcon from "./icons/PlusIcon";

const ProductAmount: React.FC<AddtoCartProps> = (props) => {
  const { amount, setAmount } = props;

  const handleSubtraction = () => {
    if (!amount) return;
    setAmount(amount - 1);
  };

  return (
    <div
      id="Amount"
      className="bg-LightGrayishBlue grow-1  lg:px-10 flex justify-evenly items-center p-4 rounded-md lg:space-x-8"
    >
      <div onClick={handleSubtraction}>
        <MinusIcon fillColor="fill-current text-Orange hover:opacity-75 cursor-pointer " />
      </div>
      <div className="font-bold">{amount}</div>
      <div onClick={() => setAmount(amount + 1)}>
        <PlusIcon fillColor="fill-current text-Orange hover:opacity-75 cursor-pointer " />
      </div>
    </div>
  );
};

export default ProductAmount;
