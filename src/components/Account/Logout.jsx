import { useNavigate } from "react-router-dom";
import styles from "../../styles/account_css/Logout.module.css";

const LogoutPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("amazonUserToken");
    localStorage.removeItem("amazonUser");
    alert("Logged out successfully!");
    navigate("/"); // navigate to home page
  };

  return (
    <>
      <div className={styles.logoutContainer}>
        <div className={styles.logoutBox}>
          <div className={styles.logo}></div>

          <div className={styles.card}>
            <>
              <h1 className={styles.title}>Ready to leave?</h1>

              <div className={styles.message}>
                <p>Are you sure you want to sign out?</p>
                <p>You'll need to sign in again to access your account.</p>
              </div>

              <div className={styles.actions}>
                <button className={styles.confirmButton} onClick={handleLogout}>
                  Sign Out
                </button>

                <button className={styles.cancelButton} onClick={handleLogout}>
                  Cancel
                </button>
              </div>
            </>
            <>
              <h1 className={styles.title}>Signing out...</h1>
              <div className={styles.message}>
                <p>You're being securely signed out.</p>
              </div>
              <div className={styles.spinner}></div>
            </>
          </div>

          <div className={styles.footer}>
            <div className={styles.footerLinks}>
              <a href="/conditions" className={styles.footerLink}>
                Conditions of Use
              </a>
              <a href="/privacy" className={styles.footerLink}>
                Privacy Notice
              </a>
              <a href="/help" className={styles.footerLink}>
                Help
              </a>
            </div>
            <div className={styles.copyright}>
              © 1996-{new Date().getFullYear()}, Amazon.com, Inc. or its
              affiliates
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoutPage;
