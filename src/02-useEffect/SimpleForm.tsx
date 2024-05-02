import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "ozy",
    email: "andres@google.com",
  });
  const { username, email } = formState;

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

  useEffect(() => {
    // console.warn("useEffect called!");
  }, []);

  useEffect(() => {
    // console.warn("formState changed");
  }, [formState]);

  useEffect(() => {
    // console.warn("email changed");
  }, [formState.email]);

  return (
    <>
      <h1>Simple Form</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      {username === "ozy2" && <Message />}
      <input
        type="email"
        className="form-control mt-2"
        placeholder="andres@email.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
    </>
  );
};
