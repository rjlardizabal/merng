import { useState } from "react";

export const useForm = (callback, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const onSubmit = (e) => {
    e.preventDefault();
    callback({ variables: values });
  };
  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  return { onChange, onSubmit, values };
};
