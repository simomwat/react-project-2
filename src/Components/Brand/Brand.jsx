import styles from "./Brand.module.css";

function Brand() {
  return (
    <header className={styles.container}>
      <img className={styles.image} src="/image.jpg" alt="mylogo" />

      <h1 className={styles.title}>Currencies Converters</h1>
      <div>
        <p id="loader" className={styles.load}></p>
      </div>
    </header>
  );
}

export default Brand;
