import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
export const Input = forwardRef((props, ref) => {
  return (<input ref={ref} className="form-control" {...props} />);
});
