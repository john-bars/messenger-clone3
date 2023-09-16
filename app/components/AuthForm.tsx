"use client";

import { useCallback, useState } from "react";
import Input from "./inputs/Input";
import Button from "./Button";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");

  const toggleVariant = useCallback(() => {
    variant === "LOGIN" ? setVariant("REGISTER") : setVariant("LOGIN");
  }, [variant]);

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8  shadow sm:rounded-lg sm:px-10">
        <form>
          {variant === "REGISTER" && (
            <Input id="name" label="Name" type="text" />
          )}
          <Input id="email" label="Email" type="email" />
          <Input id="password" label="Password" type="password" />
          <Button type="submit" fullWidth>
            {variant === "LOGIN" ? "Sign in" : "Register"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
