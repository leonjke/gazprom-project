import React, { useState } from "react";
import { H2Promo, Input, Button, Link } from "@holism/core";
import { useHistory } from "react-router-dom";
import { getAuthToken, registerUser } from "../../services/apiCall";
import "./Main.scss";

const Main = () => {
  const [userLogin, setUserLogin] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isRegistration, setIsRegistration] = useState(false);
  const history = useHistory();

  const handleAuth = () => {
    getAuthToken(userLogin, userPassword).then((res) => {
      res.json().then((data) => {
        localStorage.setItem("authToken", data.token);
        history.push("/idea");
      });
    });
  };

  const handleRegistration = () => {
    registerUser({
      username: userLogin,
      password: userPassword,
      firstname: userFirstName,
      lastname: userLastName,
      email: userEmail,
    }).then((res) => {
      res.json().then((data) => {
        localStorage.setItem("authToken", data.token);
        history.push("/idea");
      });
    });
  };

  return (
    <div className="main container">
      <div className="main__wrap">
        <div className="main__image"></div>
        <div className="main__login">
          {isRegistration ? (
            <React.Fragment>
              <div className="main-title">
                <H2Promo color="#FFFFFF">Регистрация</H2Promo>
              </div>
              <div className="main-form">
                <form
                  action=""
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleRegistration();
                  }}
                >
                  <div className="main-form__line">
                    <Input
                      placeholder="Имя"
                      value={userFirstName}
                      onChange={(e, val) => setUserFirstName(val)}
                    />
                  </div>
                  <div className="main-form__line">
                    <Input
                      placeholder="Фамилия"
                      value={userLastName}
                      onChange={(e, val) => setUserLastName(val)}
                    />
                  </div>
                  <div className="main-form__line">
                    <Input
                      placeholder="Логин"
                      value={userLogin}
                      onChange={(e, val) => setUserLogin(val)}
                    />
                  </div>
                  <div className="main-form__line">
                    <Input
                      placeholder="E-mail"
                      type="email"
                      value={userEmail}
                      onChange={(e, val) => setUserEmail(val)}
                    />
                  </div>
                  <div className="main-form__line">
                    <Input
                      placeholder="Пароль"
                      type="password"
                      value={userPassword}
                      onChange={(e, val) => setUserPassword(val)}
                    />
                  </div>
                  <div className="main-form__line main-form__line_submit">
                    <Button view="rounded" type="submit">
                      Поехали!
                    </Button>
                  </div>
                </form>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className="main-title">
                <H2Promo color="#FFFFFF">Добро пожаловать!</H2Promo>
              </div>
              <div className="main-form">
                <form
                  action=""
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleAuth();
                  }}
                >
                  <div className="main-form__line">
                    <Input
                      placeholder="Логин"
                      value={userLogin}
                      onChange={(e, val) => setUserLogin(val)}
                    />
                  </div>
                  <div className="main-form__line">
                    <Input
                      placeholder="Пароль"
                      type="password"
                      value={userPassword}
                      onChange={(e, val) => setUserPassword(val)}
                    />
                  </div>
                  <div className="main-form__line">
                    <Link
                      isPseudo={true}
                      onClick={() => setIsRegistration(true)}
                    >
                      Регистрация
                    </Link>
                    <Button view="rounded" type="submit">
                      Вход
                    </Button>
                  </div>
                </form>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
