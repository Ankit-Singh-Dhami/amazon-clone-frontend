import React, { useState } from "react";
import style from "../../styles/account_css/login.module.css";
import amazon from "../../styles/images/amazon_logo.png";
import { Link } from "react-router-dom";
import { loginData } from "../../service/serverData";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const Data = {
      email,
      password,
    };

    try {
      // Replace this with your actual login API call
      const response = await loginData(Data);
      console.log("Login success:", response);
      navigate("/");
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };

  return (
    <div className={style.container}>
      <header className={style.header}>
        <img src={amazon} alt="Amazon" className={style.logo} />
      </header>
      <main className={style.main}>
        <h1 className={style.title}>Sign in</h1>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.field}>
            <label htmlFor="email" className={style.label}>
              Email or mobile phone number
            </label>
            <input
              type="email"
              id="email"
              className={style.input}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={style.field}>
            <label htmlFor="password" className={style.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              className={style.input}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={style.forgotPassword}>
              <a href="#" className={style.link}>
                Forgot your password?
              </a>
            </div>
          </div>

          <button type="submit" className={style.button}>
            Continue
          </button>
        </form>

        <p className={style.text}>
          By continuing, you agree to Amazon’s{" "}
          <a href="#" className={style.link}>
            Conditions of Use
          </a>{" "}
          and{" "}
          <a href="#" className={style.link}>
            Privacy Notice
          </a>
          .
        </p>
        <div className={style.help}>
          <a href="#" className={style.link}>
            Need help?
          </a>
        </div>
        <hr className={style.divider} />
        <div className={style.createAccount}>
          <h5 className={style.newToAmazon}>New to Amazon?</h5>
          <Link to="/signin" className={style.createAccountButton}>
            Create your Amazon account
          </Link>
        </div>
      </main>
    </div>
  );
}
