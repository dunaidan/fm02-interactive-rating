import { useState } from 'react';
import RatingCard from './components/RatingCard';
import ResultCard from './components/ResultCard';

function App() {
  const [isSubmited, setIsSubmited] = useState(false);
  const [rating, setRating] = useState(0);

  const submitRating = (value) => {
    setRating(value);
    setIsSubmited(true);
  }

  return (
    <div>
      {!isSubmited ? <RatingCard submitRating={submitRating}/> : <ResultCard rating={rating} />}
    </div>
  );
}

export default App;
