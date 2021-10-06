import { useEffect, useRef } from "react";

const useRefValue = <Tvalue>(value: Tvalue) => {
  const ref = useRef<Tvalue>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

export default useRefValue;
