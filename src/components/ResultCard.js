import styles from "./ResultCard.module.css";

function ResultCard({ rating }) {
  return (
    <main className="card text-center">
      <img src="../images/illustration-thank-you.svg" alt="illustration" />
      <div className={styles.result}>
        <span className={styles.resultMessage}>You selected {rating} out of 5</span>
      </div>
      <h1 className={styles.title}>Thank you!</h1>
      <p className={styles.description}>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </main>
  );
}

export default ResultCard;