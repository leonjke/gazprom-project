import React, { useState, useEffect } from "react";
import { GridCol, Grid, Select, ModalWindow, Button } from "@holism/core";
import { DiamondIcon } from "@holism/icons";
import Avatar from "avataaars";
import Navigation from "../../components/Navigation";
import avatarSettings from "../../constants/avatarSettings";
import { getCurrentUser, setAvatar } from "../../services/apiCall";
import "./User.scss";

const User = () => {
  const [avatarConfig, setAvatarConfig] = useState({
    topType: "",
    accessoriesType: "",
    hatColor: "",
    facialHairType: "",
    facialHairColor: "",
    clotheType: "",
    clotheColor: "",
    graphicType: "",
    eyeType: "",
    eyebrowType: "",
    mouthType: "",
    skinColor: "",
  });

  const [userData, setUserData] = useState({});
  const [isModalOpened, setIsModalOpened] = useState(true);

  const handleSelectAvatarSetting = (key, value) => {
    setAvatarConfig((state) => {
      const setting = {};
      setting[key] = value;
      return { ...state, ...setting };
    });
  };

  const getUserInfo = () => {
    getCurrentUser().then((res) => {
      res.json().then((data) => {
        const avatar =
          data.avatar !== null ? JSON.parse(data.avatar) : data.avatar;
        setUserData({ ...data, avatar });
        setIsModalOpened(data.avatar === null);
      });
    });
  };

  const handleSetAvatar = () => {
    setAvatar(avatarConfig).then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const avatarSelects = Object.keys(avatarSettings).map((key) => {
    return (
      <div className="modal__settings-item" key={key}>
        <Select
          placeholder={key}
          options={avatarSettings[key]}
          onChange={(value) => {
            handleSelectAvatarSetting(key, value.value);
          }}
        />
      </div>
    );
  });

  const avatar =
    userData.avatar !== null ? { ...userData.avatar } : { ...avatarSettings };

  return (
    <div className="dashboard">
      <Navigation />
      <div className="user">
        <div className="user__wrap">
          <Grid>
            <GridCol className="user__profile">
              <div className="user__avatar">
                <Avatar avatarStyle="Circle" {...avatar} />
              </div>
              <div className="user__description">
                <div className="user__login">{userData.username}</div>
                <div className="user__level">Level 1</div>
                <div className="user__status">Junior Member</div>
                <div className="user__points">
                  <div className="user__points-icon">
                    <DiamondIcon size={30} color="#0057b6" />
                  </div>
                  <div className="user__points-value">{`${userData.points} балл`}</div>
                </div>
              </div>
            </GridCol>
            <GridCol className="user__awards"></GridCol>
          </Grid>
          <ModalWindow
            isOpen={isModalOpened}
            shouldCloseOnOverlayClick={false}
            shouldCloseOnEsc={false}
          >
            <div className="modal">
              <div className="modal__wrap">
                <div className="modal__avatar">
                  <Avatar avatarStyle="Circle" {...avatarConfig} />
                  <Button
                    className="modal__avatar-save"
                    onClick={() => {
                      handleSetAvatar(avatarConfig);
                    }}
                  >
                    Сохранить
                  </Button>
                </div>
                <div className="modal__settings">{avatarSelects}</div>
              </div>
            </div>
          </ModalWindow>
        </div>
      </div>
    </div>
  );
};

export default User;
