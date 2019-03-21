import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

import { ReactComponent as LinkedIn } from "./icons/linkedin.svg";
import { ReactComponent as Facebook } from "./icons/facebook.svg";
import { ReactComponent as Twitter } from "./icons/twitter.svg";
import { ReactComponent as Download } from "./icons/download.svg";

const AddContactIcon = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
    >
      <path d="M20.5 13c-1.932 0-3.5 1.567-3.5 3.5s1.568 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.568-3.5-3.5-3.5zm1.5 4h-1v1h-1v-1h-1v-1h1v-1h1v1h1v1zm-13.001-5.9c0 1.692-.766 2.9-1.206 3.9h-1.397c.227-1 1.954-3.415 1.021-4.982-.55-.923-2.272-.924-2.819-.015-.507.841-.24 2.417.712 4.215.518.978.374 1.734.162 2.197-.406.889-1.303 1.317-2.316 1.612-2.01.588-1.825.055-1.825 1.973h-1.329l-.002-.618c0-1.262.099-1.989 1.59-2.333 1.719-.397 3.319-.745 2.545-2.209-2.361-4.457-.627-6.84 1.866-6.84 1.687 0 2.998 1.09 2.998 3.1zm5.691 1.395c.607 1.146.447 2.016.206 2.543-.66 1.445-2.472 1.863-4.39 2.305-1.252.29-1.172.588-1.172 2.657h-1.331l-.003-.825c0-1.681.132-2.652 2.119-3.111 2.293-.53 4.427-.994 3.394-2.946-3.147-5.941-.835-9.118 2.488-9.118 3.164 0 5.337 2.879 3.041 8h-1.483c1.159-2.325 1.428-4.326.708-5.533-.902-1.517-3.617-1.509-4.512-.022-.768 1.273-.426 3.478.935 6.05z" />
    </svg>
  );
};

export default class ContactCard extends Component {
  static propTypes = {
    fullName: PropTypes.string,
    title: PropTypes.string,
    organization: PropTypes.string,
    photo: PropTypes.string,
    phonenumber: PropTypes.object,
    address: PropTypes.object,
    email: PropTypes.string,
    visibleFields: PropTypes.array,
    socialLinks: PropTypes.object
  };

  static defaultProps = {
    visibleFields: ["title", "organization", "phonenumber", "address", "email"],
    socialLinks: {}
  };

  render() {
    const {
      fullName,
      title,
      organization,
      phonenumber,
      address,
      email,
      photo,
      visibleFields,
      socialLinks
    } = this.props;

    const socialIcons = Object.keys(socialLinks);

    return (
      <div className={styles.card}>
        <div className={styles.photo}>
          <img src={photo} />
        </div>
        <div className={styles.content}>
          <h1>{fullName}</h1>
          {visibleFields.includes("title") && <h2>{title}</h2>}
          {visibleFields.includes("organization") && <h2>{organization}</h2>}
          {visibleFields.includes("email") && <h2>{email}</h2>}
          {visibleFields.includes("phonenumber") && (
            <h2>{phonenumber.value}</h2>
          )}
          {visibleFields.includes("address") && <h2>{address.value}</h2>}
        </div>
        <div className={styles.icons}>
          <div className={styles.iconbutton}>
            <Download />
          </div>
          {socialIcons.includes("linkedin") && (
            <div className={styles.iconbutton}>
              <a href={socialLinks.linkedin}>
                <LinkedIn />
              </a>
            </div>
          )}
          {socialIcons.includes("facebook") && (
            <div className={styles.iconbutton}>
              <a href={socialLinks.facebook}>
                <Facebook />
              </a>
            </div>
          )}
          {socialIcons.includes("twitter") && (
            <div className={styles.iconbutton}>
              <a href={socialLinks.twitter}>
                <Twitter />
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }
}
