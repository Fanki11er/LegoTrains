import { forwardRef } from "react";
import { ConsentCheckboxLabel, StyledCheckbox } from "./ConsentCheckbox.styles";

type Props = {
  label: string;
  checked?: boolean;
  disabled?: boolean;
};

const ConsentCheckbox = forwardRef<HTMLInputElement, Props>(
  ({ label, checked, disabled }, ref) => {
    return (
      <ConsentCheckboxLabel>
        <StyledCheckbox
          ref={ref}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          readOnly={disabled}
        />
        {label}
      </ConsentCheckboxLabel>
    );
  }
);

export default ConsentCheckbox;
