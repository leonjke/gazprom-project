import React, { useState } from "react";
import Navigation from "../../components/Navigation";
import {
  Paragraph,
  ModalWindow,
  Button,
  Textarea,
  Input,
  H3,
  NotificationsWrapper,
  NotificationsManager,
} from "@holism/core";
import {
  PositiveIcon,
  AccountIcon,
  EditIcon,
  TransferToPeopleIcon,
  InvestmentIcon,
  CalendarIcon,
  FinanceIcon,
  EmailIcon,
  CloseIcon,
} from "@holism/icons";
import "./Puzzle.scss";

const Puzzle = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activePoint, setActivePoint] = useState("");
  const [pointValues, setPointValues] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
    sixth: "",
  });
  const [moderatedPoints, setModeratedPoints] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false,
  });

  const handleSaveChanges = () => {
    setModalIsOpen(false);
    setTimeout(() => {
      setModeratedPoints((state) => ({ ...state, first: true }));
      NotificationsManager.create({
        type: "success",
        message: "Модератор одобрил вашу идею!!! Поздравляем!!!",
      });
    }, 7000);
  };

  return (
    <div className="dashboard">
      <Navigation />
      <div className="puzzle">
        <NotificationsWrapper />
        <div className="puzzle__wrap">
          <div
            className={`puzzle__item puzzle__item_left-top ${
              moderatedPoints.first ? "active" : ""
            }`}
            onClick={() => {
              setActivePoint("first");
              setModalIsOpen(true);
            }}
          >
            <PositiveIcon size={40} color="#FFFFFF" />
            <Paragraph font="14/20/bold">Описание идеи</Paragraph>
          </div>
          <div
            className={`puzzle__item puzzle__item_left-center ${
              moderatedPoints.second ? "active" : ""
            }`}
            onClick={() => {
              setActivePoint("second");
              setModalIsOpen(true);
            }}
          >
            <AccountIcon size={40} color="#FFFFFF" />
            <Paragraph font="14/20/bold">Суть идеи</Paragraph>
          </div>
          <div
            className={`puzzle__item puzzle__item_left-bottom ${
              moderatedPoints.third ? "active" : ""
            }`}
            onClick={() => {
              setActivePoint("third");
              setModalIsOpen(true);
            }}
          >
            <EditIcon size={40} color="#FFFFFF" />
            <Paragraph font="14/20/bold">Название сервиса</Paragraph>
          </div>
          <div
            className={`puzzle__item puzzle__item_right-top ${
              moderatedPoints.fourth ? "active" : ""
            }`}
            onClick={() => {
              setActivePoint("fourth");
              setModalIsOpen(true);
            }}
          >
            <TransferToPeopleIcon size={40} color="#FFFFFF" />
            <Paragraph font="14/20/bold">Команда</Paragraph>
          </div>
          <div
            className={`puzzle__item puzzle__item_right-center ${
              moderatedPoints.fifth ? "active" : ""
            }`}
            onClick={() => {
              setActivePoint("fifth");
              setModalIsOpen(true);
            }}
          >
            <InvestmentIcon size={40} color="#FFFFFF" />
            <Paragraph font="14/20/bold">Пользователи</Paragraph>
          </div>
          <div
            className={`puzzle__item puzzle__item_right-bottom ${
              moderatedPoints.sixth ? "active" : ""
            }`}
            onClick={() => {
              setActivePoint("sixth");
              setModalIsOpen(true);
            }}
          >
            <FinanceIcon size={40} color="#FFFFFF" />
            <Paragraph font="14/20/bold">Экономический</Paragraph>
            <Paragraph font="14/20/bold">эффект</Paragraph>
          </div>
          <div className="puzzle__pseudo">
            <div className="puzzle__item puzzle__item_left-top"></div>
            <div className="puzzle__item puzzle__item_left-center"></div>
            <div className="puzzle__item puzzle__item_left-bottom"></div>
            <div className="puzzle__item puzzle__item_right-top"></div>
            <div className="puzzle__item puzzle__item_right-center"></div>
            <div className="puzzle__item puzzle__item_right-bottom"></div>
          </div>
        </div>
      </div>
      <ModalWindow
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div className="puzzle__modal">
          <div
            className="puzzle__modal-close"
            onClick={() => setModalIsOpen(false)}
          >
            <CloseIcon size={30} color="#FFFFFF" />
          </div>
          <div className="puzzle__modal-wrap">
            <div className="puzzle__modal-form">
              <div
                className={`puzzle__modal-form-line ${
                  activePoint === "first" ? "active" : ""
                }`}
              >
                <div className="puzzle__modal-form-label">
                  <PositiveIcon
                    size={24}
                    color="#FFFFFF"
                    className="puzzle__modal-form-label-icon"
                  />
                  <H3>Описание идеи</H3>
                </div>
                <div className="puzzle__modal-form-input">
                  <Textarea
                    placeholder="Добавить более подробное описание..."
                    dimension="small"
                    value={pointValues.first}
                    onChange={(e, val) =>
                      setPointValues((state) => ({ ...state, first: val }))
                    }
                  />
                </div>
              </div>
              <div
                className={`puzzle__modal-form-line ${
                  activePoint === "second" ? "active" : ""
                }`}
              >
                <div className="puzzle__modal-form-label">
                  <AccountIcon
                    size={24}
                    color="#FFFFFF"
                    className="puzzle__modal-form-label-icon"
                  />
                  <H3>Суть идеи</H3>
                </div>
                <div className="puzzle__modal-form-input">
                  <Input
                    placeholder="Добавить более подробное описание..."
                    dimension="small"
                    value={pointValues.second}
                    onChange={(e, val) =>
                      setPointValues((state) => ({ ...state, second: val }))
                    }
                  />
                </div>
              </div>
              <div
                className={`puzzle__modal-form-line ${
                  activePoint === "third" ? "active" : ""
                }`}
              >
                <div className="puzzle__modal-form-label">
                  <EditIcon
                    size={24}
                    color="#FFFFFF"
                    className="puzzle__modal-form-label-icon"
                  />
                  <H3>Название сервиса</H3>
                </div>
                <div className="puzzle__modal-form-input">
                  <Input
                    placeholder="Добавить более подробное описание..."
                    dimension="small"
                    value={pointValues.third}
                    onChange={(e, val) =>
                      setPointValues((state) => ({ ...state, third: val }))
                    }
                  />
                </div>
              </div>
              <div
                className={`puzzle__modal-form-line ${
                  activePoint === "fourth" ? "active" : ""
                }`}
              >
                <div className="puzzle__modal-form-label">
                  <TransferToPeopleIcon
                    size={24}
                    color="#FFFFFF"
                    className="puzzle__modal-form-label-icon"
                  />
                  <H3>Команда</H3>
                </div>
                <div className="puzzle__modal-form-input">
                  <Input
                    placeholder="Добавить более подробное описание..."
                    dimension="small"
                    value={pointValues.fourth}
                    onChange={(e, val) =>
                      setPointValues((state) => ({ ...state, fourth: val }))
                    }
                  />
                </div>
              </div>
              <div
                className={`puzzle__modal-form-line ${
                  activePoint === "fifth" ? "active" : ""
                }`}
              >
                <div className="puzzle__modal-form-label">
                  <InvestmentIcon
                    size={24}
                    color="#FFFFFF"
                    className="puzzle__modal-form-label-icon"
                  />
                  <H3>Пользователи</H3>
                </div>
                <div className="puzzle__modal-form-input">
                  <Input
                    placeholder="Добавить более подробное описание..."
                    dimension="small"
                    value={pointValues.fifth}
                    onChange={(e, val) =>
                      setPointValues((state) => ({ ...state, fifth: val }))
                    }
                  />
                </div>
              </div>
              <div className={`puzzle__modal-form-line`}>
                <div className="puzzle__modal-form-label">
                  <CalendarIcon
                    size={24}
                    color="#FFFFFF"
                    className="puzzle__modal-form-label-icon"
                  />
                  <H3>Сроки</H3>
                </div>
                <div className="puzzle__modal-form-input">
                  <Input
                    placeholder="Добавить более подробное описание..."
                    dimension="small"
                  />
                </div>
              </div>
              <div
                className={`puzzle__modal-form-line ${
                  activePoint === "sixth" ? "active" : ""
                }`}
              >
                <div className="puzzle__modal-form-label">
                  <FinanceIcon
                    size={24}
                    color="#FFFFFF"
                    className="puzzle__modal-form-label-icon"
                  />
                  <H3>Экономический эффект</H3>
                </div>
                <div className="puzzle__modal-form-input">
                  <Input
                    placeholder="Добавить более подробное описание..."
                    dimension="small"
                    value={pointValues.sixth}
                    onChange={(e, val) =>
                      setPointValues((state) => ({ ...state, sixth: val }))
                    }
                  />
                </div>
              </div>
              <div className={`puzzle__modal-form-line`}>
                <div className="puzzle__modal-form-label">
                  <EmailIcon
                    size={24}
                    color="#FFFFFF"
                    className="puzzle__modal-form-label-icon"
                  />
                  <H3>Действия</H3>
                </div>
                <div className="puzzle__modal-form-input">
                  <Input
                    placeholder="Добавить более подробное описание..."
                    dimension="small"
                  />
                </div>
              </div>
            </div>
            <div className="puzzle__modal-checklist">
              <div
                className={`puzzle__modal-checklist-line ${
                  activePoint === "first" ? "active" : ""
                }`}
              >
                <div
                  className={`puzzle__modal-checklist-checkbox ${
                    moderatedPoints.first ? "active" : ""
                  }`}
                ></div>
                <div className="puzzle__modal-checklist-label">
                  <div className="puzzle__modal-checklist-icon">
                    <PositiveIcon size={12} color="#FFFFFF" />
                  </div>
                  <div className="puzzle__modal-checklist-text">
                    Описание идеи
                  </div>
                </div>
              </div>
              <div
                className={`puzzle__modal-checklist-line ${
                  activePoint === "second" ? "active" : ""
                }`}
              >
                <div
                  className={`puzzle__modal-checklist-checkbox ${
                    moderatedPoints.second ? "active" : ""
                  }`}
                ></div>
                <div className="puzzle__modal-checklist-label">
                  <div className="puzzle__modal-checklist-icon">
                    <AccountIcon size={12} color="#FFFFFF" />
                  </div>
                  <div className="puzzle__modal-checklist-text">Суть идеи</div>
                </div>
              </div>
              <div
                className={`puzzle__modal-checklist-line ${
                  activePoint === "third" ? "active" : ""
                }`}
              >
                <div
                  className={`puzzle__modal-checklist-checkbox ${
                    moderatedPoints.third ? "active" : ""
                  }`}
                ></div>
                <div className="puzzle__modal-checklist-label">
                  <div className="puzzle__modal-checklist-icon">
                    <EditIcon size={12} color="#FFFFFF" />
                  </div>
                  <div className="puzzle__modal-checklist-text">
                    Название сервиса
                  </div>
                </div>
              </div>
              <div
                className={`puzzle__modal-checklist-line ${
                  activePoint === "fourth" ? "active" : ""
                }`}
              >
                <div
                  className={`puzzle__modal-checklist-checkbox ${
                    moderatedPoints.fourth ? "active" : ""
                  }`}
                ></div>
                <div className="puzzle__modal-checklist-label">
                  <div className="puzzle__modal-checklist-icon">
                    <TransferToPeopleIcon size={12} color="#FFFFFF" />
                  </div>
                  <div className="puzzle__modal-checklist-text">Команда</div>
                </div>
              </div>
              <div
                className={`puzzle__modal-checklist-line ${
                  activePoint === "fifth" ? "active" : ""
                }`}
              >
                <div
                  className={`puzzle__modal-checklist-checkbox ${
                    moderatedPoints.fifth ? "active" : ""
                  }`}
                ></div>
                <div className="puzzle__modal-checklist-label">
                  <div className="puzzle__modal-checklist-icon">
                    <InvestmentIcon size={12} color="#FFFFFF" />
                  </div>
                  <div className="puzzle__modal-checklist-text">
                    Пользователи
                  </div>
                </div>
              </div>
              <div className="puzzle__modal-checklist-line">
                <div className="puzzle__modal-checklist-checkbox"></div>
                <div className="puzzle__modal-checklist-label">
                  <div className="puzzle__modal-checklist-icon">
                    <CalendarIcon size={12} color="#FFFFFF" />
                  </div>
                  <div className="puzzle__modal-checklist-text">Сроки</div>
                </div>
              </div>
              <div
                className={`puzzle__modal-checklist-line ${
                  activePoint === "sixth" ? "active" : ""
                }`}
              >
                <div
                  className={`puzzle__modal-checklist-checkbox ${
                    moderatedPoints.sixth ? "active" : ""
                  }`}
                ></div>
                <div className="puzzle__modal-checklist-label">
                  <div className="puzzle__modal-checklist-icon">
                    <FinanceIcon size={12} color="#FFFFFF" />
                  </div>
                  <div className="puzzle__modal-checklist-text">
                    Экономический эффект
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="puzzle__modal-save">
            <Button color="secondary" onClick={handleSaveChanges}>
              Сохранить
            </Button>
          </div>
        </div>
      </ModalWindow>
    </div>
  );
};

export default Puzzle;
