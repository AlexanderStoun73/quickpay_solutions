import React from "react";
import style from "./header.module.scss";
import PlaceIcon from "@mui/icons-material/Place";
import MailIcon from "@mui/icons-material/Mail";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
      <header className={style.header}>
        <nav className={style.header__links}>
          <Link className={style.header__link} href="https://oxfordtwpnj.org/index.php/about-oxford-township-2-3-3/">
            <div className={style.flagWrapper}>
              <Image
                  src="/us-flag.png"
                  alt="USA Flag"
                  width={30}
                  height={20}
                  className={style.flag}
              />
            </div>
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
