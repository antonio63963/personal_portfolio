import {FC} from 'react';
import cn from 'classnames';

import emailIcon from 'assets/icons/email.svg';
import behance from "assets/icons/behance.svg";
import github from "assets/icons/githubLight.svg";
import linkedin from "assets/icons/linkedin.svg";

import styles from './Footer.module.css';

const Footer:FC = () => {
  return (
    <div className={cn("gradientBg", cn(styles.footer))}>
      <div className={cn(styles.contacts)}>
        <h4>Contacts:</h4>
        <div className={cn(styles.contacts_row)}>
          <img className={cn(styles.icon)} src={emailIcon} alt="email"/> <span>codejob63963@gmail.com</span>
        </div>
        <div className={cn(styles.contacts_row, styles.socials)}>
            <a
              target="_blank"
              href="https://www.behance.net/shotvideo25"
              rel="noreferrer"
            >
              <img
                src={behance}
                alt="about"
                className={cn(styles.icon)}
              />
            </a>
            <a
              target="_blank"
              href="https://github.com/antonio63963"
              rel="noreferrer"
            >
              <img src={github} alt="about" className={cn(styles.icon)} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/anton-fomin-162330187?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BcY04nw2PRNCCsiCT1Ke80w%3D%3D"
              rel="noreferrer"
            >
              <img
                src={linkedin}
                alt="about"
                className={cn(styles.icon)}
              />
            </a>
          </div>
      </div>
    </div>
  )
};

export default Footer;