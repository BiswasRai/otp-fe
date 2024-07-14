import { useNavigate } from "react-router-dom";
import { removeItemFromLocalStorage } from "../../utils/localStorage";
import { Button } from "../Button";

const Success = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    removeItemFromLocalStorage("isAuthenticated");
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center space-y-2">
        <div>🎉 Hi! Your OTP is successfully verified</div>
        <div>
          <Button label="Remove Auth" handleClick={() => handleOnClick()} />
        </div>
      </div>
    </div>
  );
};

export default Success;
