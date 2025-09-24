import { useEffect, useRef, useState } from "react";

export default function Timer() {
  const [input, setInput] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const handleStart = () => {
    const n = Number.parseInt(input, 10);
    if (Number.isNaN(n) || n <= 0) {
      alert("Введите целое число секунд больше 0");
      return;
    }
    setSeconds(n);
    setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (!isRunning) {
      clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setSeconds(prev => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          setIsRunning(false);
          alert("Время вышло!");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const disabled = isRunning;

  return (
    <div className="timer">
      <label className="field">
        <span>Секунды:</span>
        <input
          type="number"
          min="1"
          step="1"
          placeholder="Например, 30"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={disabled}
        />
      </label>

      <div className="buttons">
        <button onClick={handleStart} disabled={disabled}>
          Старт
        </button>
        <button onClick={handleReset} disabled={!isRunning && seconds === 0}>
          Сброс
        </button>
      </div>

      <div className="display">
        Текущие секунды: <span className="big">{seconds}</span>
      </div>
    </div>
  );
}
