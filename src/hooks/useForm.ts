import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({
    target,
  }: {
    target: EventTarget & HTMLInputElement;
  }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return {
    ...formState,
    formState,
    onInputChange,
  };
};
