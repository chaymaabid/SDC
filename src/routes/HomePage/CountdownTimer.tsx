import  { useEffect, useState } from "react";
import "./CountdownTimer.css";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 365,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isCountdownActive, setIsCountdownActive] = useState(true);

  useEffect(() => {
    const endTime = new Date("04/19/2025 00:00:00").getTime();

    const updateTimer = () => {
      const nowTime = new Date().getTime();
      const distance = endTime - nowTime;

      if (distance > 0) {
        const days = Math.floor(distance / (24 * 60 * 60 * 1000));
        const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        const minutes = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
        const seconds = Math.floor((distance % (60 * 1000)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setIsCountdownActive(false); // Countdown has finished
        clearInterval(interval);
      }
    };

    const interval = setInterval(updateTimer, 1000);

    // Initial call to set the timer immediately
    updateTimer();

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Return null if countdown is finished
  if (!isCountdownActive) {
    return null;
  }

  return (
    <div className="time">
      <div className="boxs days">{timeLeft.days}</div>
      <div className="colen">:</div>
      <div className="boxs hours">{timeLeft.hours.toString().padStart(2, "0")}</div>
      <div className="colen">:</div>
      <div className="boxs minutes">{timeLeft.minutes.toString().padStart(2, "0")}</div>
      <div className="colen">:</div>
      <div className="boxs seconds">{timeLeft.seconds.toString().padStart(2, "0")}</div>
    </div>
  );
};

export default CountdownTimer;