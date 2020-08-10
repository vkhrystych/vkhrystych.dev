import Link from "next/link";

import styles from "./postcard.module.scss";

export default ({ title, href, as }) => {
  return (
    <Link href={href} as={as}>
      <a className={styles.card}>
        {/* <img
        src={`/images/posts/creating-good-morning-bot-using-nodejs-telegram-and-firebase/post-avatar.png`}
      />{" "} */}
        <span className={styles.emoji}>🤷🏻‍♂️</span>

        <h3>{title}</h3>
      </a>
    </Link>
  );
};
