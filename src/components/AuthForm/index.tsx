import * as React from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";
import { AuthUserObject } from "../../context/types";

import "./authform.styles.scss";

export interface AuthFormProps {}

const AuthForm: React.FC<AuthFormProps> = () => {
  const {
    register,

    handleSubmit,
    formState: { errors },
  } = useForm<AuthUserObject>();

  const { login } = React.useContext(AuthContext);

  const onSubmit = handleSubmit((data: AuthUserObject) => {
    return login(data);
  });

  return (
    <div className="auth-form">
      <h3> Login </h3>

      <form onSubmit={onSubmit}>
        <div className="auth-form__form">
          <div className="form-field">
            <input
              className={errors.email && "error-field"}
              defaultValue="talent@test.com"
              type="email"
              placeholder="talent@test.com"
              {...register("email", {
                required: true,
              })}
            />
          </div>
          <div className="form-field">
            <input
              className={errors.password && "error-field"}
              defaultValue="talentbalabala"
              type="password"
              placeholder="******"
              {...register("password", {
                required: true,
              })}
            />
          </div>
          <div className="form-field">
            <button type="submit"> LOGIN </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
