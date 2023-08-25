import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from '../redux/slices/greetingsSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const randomGreeting = useSelector(state => state.greetings.greeting);

  const handleChangeGreeting = () => {
    dispatch(fetchRandomGreeting());
  };

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <div>
      <h1>Random Greeting</h1>
      <p>{randomGreeting}</p>
      <button onClick={handleChangeGreeting}>Change Greeting</button>
    </div>
  );
};

export default Greeting;
