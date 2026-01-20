import Button from "./Button";
import { BUTTON_LIST } from '../utils/constants';

const ButtonList = () => {
  return (
    <div className="flex">
      {
        BUTTON_LIST?.map((button) =>
          <Button key={button.id} name={button.name} />
        )}
    </div>
  )
};

export default ButtonList;