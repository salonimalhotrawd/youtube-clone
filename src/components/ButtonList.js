import Button from "./Button";
import { BUTTON_LIST } from '../utils/apiConstants';

const ButtonList = () => {
  return (
    <div className="flex gap-3 px-4 py-3 overflow-x-auto scrollbar-hide">
      {
        BUTTON_LIST?.map((button) =>
          <Button key={button.id} name={button.name} />
        )}
    </div>
  )
};

export default ButtonList;