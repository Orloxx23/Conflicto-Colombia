import React from "react";
import "./footer.scss";

import logo from "../img/logo-uniajc.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="">
          <img src={logo} alt="UNIAJC" />
          <p className="text-white">Humanidades - Ingenieria de Sistemas</p>
        </div>

        <div className="creditos">
          <ul>
            <p>Creditos:</p>
            <li>
              GIRAFFE -{" "}
              <a
                href="https://www.youtube.com/channel/UCzJdTC4RXiw4GZPamzNQrbA"
                target="_blank"
                rel="noreferrer"
              >
                Youtube
              </a>
            </li>
            <li>
              Iconos diseñados por{" "}
              <a
                href="https://www.freepik.com"
                title="Freepik"
                target="_blank"
                rel="noreferrer"
              >
                Freepik
              </a>{" "}
              from{" "}
              <a
                href="https://www.flaticon.es/"
                target="_blank"
                title="Flaticon"
                rel="noreferrer"
              >
                www.flaticon.es
              </a>
            </li>
            <li>
              People illustrations by{" "}
              <a
                href="https://storyset.com/people"
                target="_blank"
                rel="noreferrer"
              >
                Storyset
              </a>
            </li>
            <li>
              <a
                href="https://www.svgbackgrounds.com/"
                target="_blank"
                title="Flaticon"
                rel="noreferrer"
              >
                svgbackgrounds.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
