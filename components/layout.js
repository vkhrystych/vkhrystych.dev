import styles from "./layout.module.css";

export default ({ children }) => (
  <div className={styles.container}>
    <header>this is header</header>
    <main>{children}</main>
    <footer>this is footer</footer>
  </div>
);
