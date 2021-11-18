import * as React from "react";
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  Zoom,
  ZoomIn,
  Fade,
  Move,
  batch,
  MoveIn,
  ZoomOut,
  MoveOut,
} from "react-scroll-motion";

import {
  Fab,
  Avatar,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Chip,
} from "@mui/material/";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { Icon } from "@iconify/react";
import bombIcon from "@iconify/icons-noto-v1/bomb";
import linkIcon from "@iconify/icons-noto-v1/link";
import pistolIcon from "@iconify/icons-noto-v1/pistol";

import military from "../img/illustrations/Military3.svg";
import bullet from "../img/illustrations/bullet.png";
import armas from "../img/illustrations/armas.png";
import puño from "../img/illustrations/puño.png";
import ak47 from "../img/illustrations/ak47.png";
import granade from "../img/illustrations/granade.png";
import machete from "../img/illustrations/machete.png";
import hand from "../img/illustrations/negocio.svg";
import me from "../img/illustrations/me.svg";
import notify from "../img/illustrations/notify.svg";
import mariano from "../img/mariano-ospina.jpg";
import gaitan from "../img/Gaitan.jpg";
import rojas from "../img/Rojas.jpg";

import "./css/style.scss";
import Footer from "../components/Footer";

export default function Home() {
  const [dark, setDark] = React.useState(false);

  return (
    <div>
      <div className="body-mobile">
        <div className="mobile-content">
          <div className="">
            <img className="mobile-img" src={notify} alt="Notificación" />
            <h1>Esta página no está disponible para este dispositivo.</h1>
          </div>
        </div>
      </div>
      <div className={dark ? "body dark-mode" : "body light-mode"}>
        <div className="dark-btn">
          <Fab
            color={dark ? "primary" : "secondary"}
            aria-label="add"
            onClick={() => {
              setDark(!dark);
            }}
          >
            {dark ? <LightModeIcon /> : <DarkModeIcon />}
          </Fab>
        </div>
        <ScrollContainer>
          <section className="section">
            <ScrollPage page={0}>
              <Animator animation={batch(Zoom())}>
                <div className="coverpage">
                  <Animator animation={batch(Fade())}>
                    <div className="coverpage-text">
                      <h3>Conflicto armado en</h3>
                      <h1>Colombia</h1>
                      <p>
                        <a
                          href="https://www.youtube.com/watch?v=0zmDS18SoWA"
                          target="_blank"
                          rel="noreferrer"
                          title="Historia del Conflicto armado en Colombia en 3 minutos - Youtube"
                        >
                          GIRAFFE
                        </a>
                      </p>
                    </div>
                  </Animator>
                  <Animator animation={batch(Fade())}>
                    <div className="coverpage-img">
                      <img src={military} alt="Colombia" width="500" />
                    </div>
                  </Animator>
                </div>
              </Animator>
            </ScrollPage>
          </section>

          <section className="section">
            <ScrollPage page={1}>
              <div className="intro">
                <div className="parte">
                  <div className="parte-container">
                    <div className="parte-content didactico">
                      <Animator animation={batch(ZoomIn(0.5, 1), Fade())}>
                        <div className="avatar-mo">
                          <Avatar
                            alt="Mariano Ospina"
                            src={mariano}
                            sx={{ width: 250, height: 250 }}
                          />
                        </div>
                      </Animator>
                      <div className="">
                        <div className="big-text">
                          En 1976 el partido conservador llegó al poder cuando{" "}
                          <a
                            className={dark ? "text-white" : "text-black"}
                            href="https://es.wikipedia.org/wiki/Mariano_Ospina_P%C3%A9rez"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Mariano Ospina
                          </a>{" "}
                          ganó las elecciones, al querer evitar la violencia le
                          repartió puestos a sus opositores pero al no lograrlo
                          en todas las regiones las disputas aumentaron.
                        </div>
                        <div className="big-text">
                          Poco a poco los abusos de poder y la compra de armas
                          por parte de los Liberales empezaron a anticipar un
                          enfrentamiento.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="parte-fondo bg-p1">
                    <h1>1946</h1>
                  </div>
                </div>

                <div className="parte bg-red">
                  <div className="parte-container">
                    <div className="parte-content didactico text-white">
                      <div>
                        <div className="big-text">
                          La violencia estalló en 1948 con el asesinato de{" "}
                          <a
                            className="text-white"
                            href="https://es.wikipedia.org/wiki/Jorge_Eli%C3%A9cer_Gait%C3%A1n"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Gaitan
                          </a>
                          , provocando disturbios en todo el país.
                        </div>
                      </div>
                      <Animator
                        animation={batch(Fade(0, 1), Move(-500, 0, 100, 0))}
                      >
                        <div className="bullet">
                          <img className="bullet-img" src={bullet} alt="->" />
                        </div>
                      </Animator>
                      <Animator animation={batch(ZoomOut(1, 0), Fade())}>
                        <div className="avatar-ga">
                          <Avatar
                            alt="Jorge Eliecer Gaitan"
                            src={gaitan}
                            sx={{ width: 150, height: 150 }}
                          />
                        </div>
                      </Animator>
                    </div>
                  </div>
                  <div className="parte-fondo bg-p2">
                    <h1>1948</h1>
                  </div>
                </div>
              </div>
            </ScrollPage>
          </section>

          <section className="section">
            <ScrollPage page={2}>
              <div className="vs-container">
                <Typography variant="h2">
                  Se formaron guerrillas{" "}
                  <span className="text-red">Liberales</span> y ejercitos{" "}
                  <span className="text-blue">Conservadores</span>
                </Typography>
                <img className="armas-img" src={armas} alt="Guerra" />
              </div>
              <div className="muertes-container">
                <div className="muertes-content">
                  <Animator animation={batch(Fade(0, 1))}>
                    <h2 className="muertes-subtext">CON UN RESULTADO DE</h2>
                  </Animator>
                  <Animator animation={batch(ZoomIn(0, 1), Fade())}>
                    <div className="muertes">300.000</div>
                  </Animator>
                  <Animator animation={batch(Fade(0, 1))}>
                    <h1 className="muertes-text">MUERTES</h1>
                  </Animator>
                </div>
              </div>
            </ScrollPage>
          </section>

          <section className="section">
            <ScrollPage page={3}>
              <div className={dark ? "parte2 bgc-dark" : "parte2 bgc-white"}>
                <div className="parte-container">
                  <div className="">
                    <Animator
                      animation={batch(MoveIn(0, 500), Fade(), MoveOut(0, 500))}
                    >
                      <img
                        className="puño-img"
                        src={puño}
                        alt="Golpe de estado"
                      />
                    </Animator>
                  </div>
                </div>
                <div className="parte-fondo"></div>
              </div>
              <div className="parte3 bg-yellow text-black">
                <div className="parte-container custom">
                  <Animator
                    animation={batch(MoveIn(0, 500), Fade(), MoveOut(0, 500))}
                  >
                    <div className="">
                      <h1>1953</h1>
                      <br />
                      <h2>Golpe de estado</h2>
                    </div>
                  </Animator>
                </div>
                <div className="parte-fondo2"></div>
              </div>
            </ScrollPage>
          </section>

          <section className="section">
            <ScrollPage page={4}>
              <div className="intro">
                <div className="parte bg-yellow text-black">
                  <div className="parte-container">
                    <div className="parte-content didactico">
                      <Animator animation={batch(ZoomIn(0.5, 1), Fade())}>
                        <div className="avatar-mo">
                          <Avatar
                            alt="Gustavo Rojas Pinilla"
                            src={rojas}
                            sx={{ width: 200, height: 200 }}
                          />
                        </div>
                      </Animator>
                      <div className="">
                        <div className="big-text">
                          <a
                            className="text-black"
                            href="https://es.wikipedia.org/wiki/Gustavo_Rojas_Pinilla"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Gustavo Rojas
                          </a>{" "}
                          logro un golpe de estado iniciando asi una dictadura.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="parte-fondo bg-p1">
                    <h1>1953</h1>
                  </div>
                </div>

                <div className="parte">
                  <div className="parte-container">
                    <div className="no-border parte-content didactico">
                      <div>
                        <Animator animation={batch(ZoomIn(0, 1), Fade())}>
                          <div className="big-text">
                            La dictadura no duraria hasta la llegada de el{" "}
                            <br />
                            <h1>FRENTE NACIONAL</h1>
                            <p className="espaciado">1958 - 1974</p>
                          </div>
                        </Animator>
                      </div>
                    </div>
                  </div>
                  <div className="parte-fondo bg-p2">
                    <h1>1958</h1>
                  </div>
                </div>
              </div>
            </ScrollPage>
          </section>

          <section className="section">
            <ScrollPage page={5}>
              <div className="guerrillas bg-gray1">
                <div className="gurrillas-head text-white">
                  <Typography variant="h3">
                    Entre 1964 y 1974 se formaron las guerrillas financiadas por
                    la coca
                  </Typography>
                </div>
              </div>
              <div className="guerrillas bg-gray2">
                <Animator animation={batch(Move(-1000, 0, 500, 0), Fade())}>
                  <div className="guerrilla1">
                    <div className="guerrilla1-item-main">
                      <h1>FARC EP</h1>
                    </div>
                    <div className="guerrilla1-item">
                      <img className="guerrilla-img" src={ak47} alt="arma" />
                    </div>
                    <div className="guerrilla1-item">
                      <img className="guerrilla-img" src={ak47} alt="arma" />
                    </div>
                    <div className="guerrilla1-item">
                      <img className="guerrilla-img" src={ak47} alt="arma" />
                    </div>
                  </div>
                </Animator>
              </div>
              <div className="guerrillas bg-gray3">
                <Animator animation={batch(Move(1000, 0, -500, 0), Fade())}>
                  <div className="guerrilla2">
                    <div className="guerrilla1-item">
                      <img className="guerrilla-img" src={granade} alt="arma" />
                    </div>
                    <div className="guerrilla1-item">
                      <img className="guerrilla-img" src={granade} alt="arma" />
                    </div>
                    <div className="guerrilla1-item">
                      <img className="guerrilla-img" src={granade} alt="arma" />
                    </div>
                    <div className="guerrilla2-item-main">
                      <h1>ELN</h1>
                    </div>
                  </div>
                </Animator>
              </div>
              <div className="guerrillas bg-gray4">
                <Animator animation={batch(Move(-1000, 0, 500, 0), Fade())}>
                  <div className="guerrilla1">
                    <div className="guerrilla1-item-main">
                      <h1>M-19</h1>
                    </div>
                    <div className="guerrilla1-item">
                      <img className="guerrilla-img" src={machete} alt="arma" />
                    </div>
                    <div className="guerrilla1-item">
                      <img className="guerrilla-img" src={machete} alt="arma" />
                    </div>
                    <div className="guerrilla1-item">
                      <img className="guerrilla-img" src={machete} alt="arma" />
                    </div>
                  </div>
                </Animator>
              </div>
            </ScrollPage>
          </section>

          <section className="section">
            <ScrollPage page={6}>
              <div className="vs-narco-mid glitch">
                <h1>VS</h1>
              </div>
              <div
                className={
                  dark ? "vs-narco-top bgc-dark" : "vs-narco-top bgc-white"
                }
              >
                <div className="">
                  <Accordion
                    sx={{
                      width: "100%",
                      background: "none",
                      boxShadow: "none",
                      color: dark ? "white" : "black",
                    }}
                  >
                    <AccordionSummary>
                      <h1>GOBIERNO</h1>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="h5">
                        El gobierno inició una guerra contra la polvora del
                        conflicto.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>

              <div
                className={
                  dark ? "vs-narco-bot bgc-dark" : "vs-narco-bot bgc-white"
                }
              >
                <div className="">
                  <Accordion
                    sx={{
                      width: "100%",
                      background: "none",
                      boxShadow: "none",
                      color: dark ? "white" : "black",
                    }}
                  >
                    <AccordionSummary>
                      <h1>NARCOTRAFICO</h1>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="h5">
                        La respuesta del cartel de Medellin fue amedrentar a la
                        población con:
                      </Typography>
                      <div className="cartel">
                        <Stack
                          direction={{ xs: "column", sm: "row" }}
                          spacing={{ xs: 1, sm: 2, md: 4 }}
                        >
                          <Chip
                            icon={<Icon icon={bombIcon} />}
                            sx={{
                              width: "33%",
                              height: "2.5vw",
                              fontSize: "1.5vw",
                              color: dark ? "white" : "black",
                            }}
                            label="Bombas"
                          />
                          <Chip
                            icon={<Icon icon={linkIcon} />}
                            sx={{
                              width: "33%",
                              height: "2.5vw",
                              fontSize: "1.5vw",
                              color: dark ? "white" : "black",
                            }}
                            label="Secuentros"
                          />
                          <Chip
                            icon={<Icon icon={pistolIcon} />}
                            sx={{
                              width: "33%",
                              height: "2.5vw",
                              fontSize: "1.5vw",
                              color: dark ? "white" : "black",
                            }}
                            label="Asesinatos"
                          />
                        </Stack>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </ScrollPage>
          </section>

          <section className="section shadow df">
            <div className="plan-left">
              <img className="hands-img" src={hand} alt="Negocio" />
            </div>

            <div className="plan-right">
              <h1>Plan Colombia</h1>
              <p>
                La situación empezó a cambiar cuando el estado ganó terreno
                gracias al{" "}
                <a
                  className={dark ? "text-white" : "text-black"}
                  href="https://es.wikipedia.org/wiki/Plan_Colombia"
                  target="_blank"
                  rel="noreferrer"
                >
                  Plan Colombia.
                </a>
              </p>
              <p>
                Los paramilitares se desmovilizaron y tras los duros golpes que
                recibieron las FARC empezaron los dialogos de paz.
              </p>
            </div>
          </section>

          <section className={dark ? "section-50-dark" : "section-50"}>
            <div className="glass-card">
              <div className="card-left">
                <div className="card-left-img">
                  <img
                    className="card-left-me-img"
                    src={me}
                    alt="Orlando Mina"
                  />
                </div>
                <div className="contact">
                  <h1>Orlando Mina</h1>
                  <p>ominam@estudiante.uniajc.edu.co</p>
                </div>
              </div>
              <div className="card-right"></div>
            </div>
          </section>
        </ScrollContainer>
        <Footer />
      </div>
    </div>
  );
}
