import styles from './RatingButton.module.css';

function RatingButton({ value, setRating, active }) {

  const handleClick = () => {
    setRating(value);
  }

  const className = !active ? styles.ratingButton : styles.ratingButtonActive; 

  return (
    <button onClick={handleClick} type='button' className={className}>{value}</button>
  );
}

export default RatingButton;