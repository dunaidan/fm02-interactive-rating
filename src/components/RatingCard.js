import styles from './RatingCard.module.css';
import RatingButton from './RatingButton';
import { useState } from 'react';

function RatingCard({ submitRating }) {
  const [currentRating, setCurrentRating] = useState(0);

  const setRating = (value) => {
    setCurrentRating(value);
  }

  const handleSubmit = () => {
    submitRating(currentRating);
  }

  const ratingList = [];
  const min = process.env.REACT_APP_NOT_MIN_RATING;
  const max = process.env.REACT_APP_NOT_MAX_RATING;
  for(let i=min; i<=max; i++) {
    ratingList.push(<RatingButton key={i} setRating={setRating} value={i} active={currentRating === i}/>)
  }

  return (
    <div className="card">
      <img className={styles.star} src="../images/icon-star.svg" alt="star"></img>
      <p className={styles.title}>
        How did we do?
      </p>
      <p className={styles.description}>
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
      </p>
      <div className={styles.ratingNumbers}>
        {ratingList}
      </div>
      <button onClick={handleSubmit} className={styles.submit}>SUBMIT</button>
    </div>
  );
}

export default RatingCard;