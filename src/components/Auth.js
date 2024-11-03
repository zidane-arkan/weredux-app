import store from "../store";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store";
import classes from "./Auth.module.css";
const Auth = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(
    (state) => state.authentication.isAuthenticated
  );
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleLogin}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
      {authenticated && <p>Redirect to Home Page...</p>}
    </main>
  );
};

export default Auth;
