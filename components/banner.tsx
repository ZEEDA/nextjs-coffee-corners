import styles from "./banner.module.css";
type BannerProps = {
  buttonText: string;
  handleOnClick: VoidFunction;
};
const Banner = ({ buttonText, handleOnClick }: BannerProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffe</span>
        <span className={styles.title2}>Corners</span>
      </h1>
      <p className={styles.subTitle}>Discober your local Coffee shops!</p>
      <div className={styles.buttonWrapper}>
        <button onClick={handleOnClick} className={styles.button}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Banner;
