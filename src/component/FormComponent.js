import { useState } from "react";
import "./FormComponent.css";

const FormComponent = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorRePassword, setErrorRePassword] = useState("");

  const [usernameColor, setUsernameColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [rePasswordColor, setRepasswordColor] = useState("");

  const validateForm = (e) => {
    e.preventDefault();

    if (username.length > 8) {
      setErrorUsername("");
      setUsernameColor("green");
    } else {
      setErrorUsername("Username must more than 8 characters.");
      setUsernameColor("red");
    }

    if (email.includes("@")) {
      setEmail("");
      setEmailColor("green");
    } else {
      setErrorEmail("Wrong Pattern E-mail.");
      setEmailColor("red");
    }

    if (password.length > 8) {
      setPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password must more than 8 characters.");
      setPasswordColor("red");
    }

    if (rePassword !== "" && rePassword === password) {
      setErrorRePassword("");
      setRepasswordColor("green");
    } else {
      setErrorRePassword("Password do not match.");
      setRepasswordColor("red");
    }
  };

  return (
    <>
      <div className='container'>
        <form className='form' onSubmit={validateForm}>
          <h2>Register Form</h2>
          <div className='form-control'>
            <label>Name : </label>
            <input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ borderColor: usernameColor }}
            />
            <small style={{ color: usernameColor }}>{errorUsername}</small>
          </div>
          <div className='form-control'>
            <label>E-mail : </label>
            <input
              //   type='email'
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ borderColor: emailColor }}
            />
            <small style={{ color: emailColor }}>{errorEmail}</small>
          </div>
          <div className='form-control'>
            <label>Password : </label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ borderColor: passwordColor }}
            />
            <small style={{ color: passwordColor }}>{errorPassword}</small>
          </div>
          <div className='form-control'>
            <label>Confirm Password : </label>
            <input
              type='password'
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              style={{ borderColor: rePasswordColor }}
            />
            <small style={{ color: rePasswordColor }}>{errorRePassword}</small>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
};

export default FormComponent;
