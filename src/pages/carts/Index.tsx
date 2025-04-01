import Tips from "./sections/Tips";
import Step1 from "./sections/Step1";
import Step2 from "./sections/Step2";
import Step3 from "./sections/Step3";
import { StepProvider,useStep } from "./hooks/useStepContext";

const Carts = () => {
  return (
    <StepProvider>
      <div className="petti-carts to-top p-6">
        <div className="w-default">
          <CartContent />
        </div>
      </div>
    </StepProvider>
  );
};

const CartContent = () => {
  const { whichStep } = useStep();
  
  return (
    <>
      <Tips step={whichStep} />
      {whichStep === '1' && <Step1 />}
      {whichStep === '2' && <Step2 />}
      {whichStep === '3' && <Step3 />}
    </>
  );
};

export default Carts;