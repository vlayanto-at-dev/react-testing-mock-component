import * as React from "react";
import isDeepEqual from "fast-deep-equal/react";

const useEqual = (value) => {
  const valueRef = React.useRef(value);

  if (!isDeepEqual(valueRef.current, value)) {
    valueRef.current = value;
  }

  return { valueRef };
};

export const useThisHook = (someArray) => {
  const [value, setValue] = React.useState(null);
  const [selectedValue, setSelectedValue] = React.useState(null);
  const { valueRef } = useEqual(someArray);

  React.useEffect(() => {
    console.log("useEffect");
    if (someArray && someArray.length > 1) {
      setValue(someArray[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [valueRef.current]);

  const updateValue = () => {
    setSelectedValue(value.ok ? someArray[1] : someArray[0]);
  };

  return { value, selectedValue, updateValue };
};
