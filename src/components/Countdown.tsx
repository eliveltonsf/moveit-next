import { ChallengesContext } from 'contexts/ChallengesContext';
import { CountdownContext } from 'contexts/CountdownContext';
import { useContext, useEffect, useState } from 'react';
import styles from 'styles/components/Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

const Countdown = () => {
  const { minutes, seconds, hasFinished, isActive, resetCountDown, startCountDown } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button disabled type="button" className={styles.countdownButton}>
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={() => resetCountDown()}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button type="button" className={styles.countdownButton} onClick={() => startCountDown()}>
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Countdown;
