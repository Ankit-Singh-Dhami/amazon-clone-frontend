import { useState } from "react";
import style from "../../styles/account_css/signUp.module.css";
import amazon from "../../styles/images/amazon_logo.png";
import { Link } from "react-router-dom";
import { signinData } from "../../service/serverData";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [role, setRole] = useState("user");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation example
    if (password !== repassword) {
      alert("Passwords do not match!");
      return;
    }

    const Data = {
      name,
      email,
      password,
      repassword,
      role,
    };

    try {
      const response = await signinData(Data);
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
        <h1 className={style.title}>Create account</h1>
        <form className={style.form} onSubmit={handleSubmit}>
          <div className={style.field}>
            <label htmlFor="name" className={style.label}>
              Your name
            </label>
            <input
              type="text"
              id="name"
              className={style.input}
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className={style.field}>
            <label htmlFor="email" className={style.label}>
              Mobile number or email
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
          </div>

          <div className={style.field}>
            <label htmlFor="repassword" className={style.label}>
              Re-enter password
            </label>
            <input
              type="password"
              id="repassword"
              className={style.input}
              required
              value={repassword}
              onChange={(e) => setRepassword(e.target.value)}
            />
          </div>

          <div className={style.field}>
            <label htmlFor="role" className={style.label}>
              Choose account type
            </label>
            <select
              id="role"
              className={style.input}
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="user">User</option>
              <option value="host">Host</option>
            </select>
          </div>

          <button type="submit" className={style.button}>
            Continue
          </button>
        </form>

        <p className={style.text}>
          By creating an account, you agree to Amazon’s{" "}
          <a href="#" className={style.link}>
            Conditions of Use
          </a>{" "}
          and{" "}
          <a href="#" className={style.link}>
            Privacy Notice
          </a>
          .
        </p>

        <hr className={style.divider} />

        <p className={style.textSmall}>
          Already have an account?{" "}
          <Link to="/login" className={style.link}>
            Sign in
          </Link>
        </p>
      </main>
    </div>
  );
}
