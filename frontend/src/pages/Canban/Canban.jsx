import React from "react";
import "./Canban.scss";
import Navigation from "../../components/Navigation";
import avatar from "../../assets/images/Canban/avatar.png";

const Canban = () => {
  return (
    <div className="dashboard">
      <Navigation />
      <div className="canban">
        <div className="canban__board">
          <div className="canban__card" style={{ backgroundColor: "#E1F5E5" }}>
            <div className="canban__card-title">Потребительский кредит</div>
            <div className="canban__card-description">
              Упрощение подачи заявки на потребительский кредит
            </div>
            <div className="canban__card-counters">
              <div className="canban__card-comments">2</div>
              <div className="canban__card-likes">3</div>
            </div>
            <div className="canban__card-avatars">
              <img src={avatar} alt="user_avatar" />
            </div>
          </div>
          <div className="canban__card" style={{ backgroundColor: "#CEDFF4" }}>
            <div className="canban__card-title">Свежие фрукты в офисе</div>
            <div className="canban__card-description">
              Свежие фрукты полны витаминов, а так же они очень вкусные) Было бы
              не плохо, если в каждом кабинете стояла вазочка с фруктами
            </div>
            <div className="canban__card-counters">
              <div className="canban__card-comments">17</div>
              <div className="canban__card-likes">36</div>
            </div>
            <div className="canban__card-avatars">
              <img src={avatar} alt="user_avatar" />
            </div>
          </div>
          <div className="canban__card" style={{ backgroundColor: "#F4DCDC" }}>
            <div className="canban__card-title">
              Игры в пейнтбол на выходных
            </div>
            <div className="canban__card-description">
              Предлагаю раз в месяц на выходных собираться играть в пейнтбол,
              это весело!!!
            </div>
            <div className="canban__card-counters">
              <div className="canban__card-comments">23</div>
              <div className="canban__card-likes">4</div>
            </div>
            <div className="canban__card-avatars">
              <img src={avatar} alt="user_avatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Canban;
