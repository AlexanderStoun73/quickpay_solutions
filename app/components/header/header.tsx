import React from "react";
import style from "./header.module.scss";
import MailIcon from "@mui/icons-material/Mail";
import PlaceIcon from "@mui/icons-material/Place";
import Link from "next/link";

export default function Header() {
  return (
    <header className={style.header}>
      <nav className={style.header__links}>
        <Link
          className={style.header__link}
          href="https://oxfordtwpnj.org/index.php/about-oxford-township-2-3-3/"
        >
          <PlaceIcon className={style.header__icon} />
          Oxford, NJ, USA
        </Link>
        <Link className={style.header__link} href="mailto:order@qcksolve.us">
          <MailIcon className={style.header__icon} />
            order@qcksolve.us
        </Link>
      </nav>
    </header>
  );
}
