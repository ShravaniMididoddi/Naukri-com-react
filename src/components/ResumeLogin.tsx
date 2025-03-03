import { useLayoutEffect } from "react";
import "../css/resumelogin.css";

export default function ResumeLogin() {
  useLayoutEffect(() => {
    document.body.style.backgroundImage = "url('/log.avif')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.height = "100vh";

    return () => {
        document.body.style.backgroundImage = " ";
    };
}, []);
  return (
    <div className="rslogin">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="panel panel-default">
              <div className="panel-heading text-center">
                <h2 className="panel-title">Please Sign In</h2>
              </div>
              <div className="panel-body">
                <form>
                  <fieldset>
                    <div className="form-group">
                      <input
                        className="form-control input-box"
                        placeholder="E-mail"
                        name="email"
                        type="text"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control input-box"
                        placeholder="Password"
                        name="password"
                        type="password"
                      />
                    </div>
                    <div className="checkbox-container">
                      <input name="remember" type="checkbox" id="rememberMe" />
                      <label htmlFor="rememberMe">Remember Me</label>
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}