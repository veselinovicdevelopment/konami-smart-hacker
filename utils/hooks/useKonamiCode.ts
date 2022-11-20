import { useEffect, useRef, useState } from "react";
import { useInputEvent } from "./useInputEvent";

// const konamiCode = [
// 	"ArrowUp",
// 	"ArrowUp",
// 	"ArrowDown",
// 	"ArrowDown",
// 	"ArrowLeft",
// 	"ArrowRight",
// 	"ArrowLeft",
// 	"ArrowRight",
// ];
const konamiCode = "injects3crets".split("");

export const useKonamiCode = () => {
  const [count, setCount] = useState(0);
  const [success, setSuccess] = useState(false);
  const key = useInputEvent();
  const timerRef1 = useRef<any>(null);
  const timerRef2 = useRef<any>(null);

  useEffect(() => {
    // ignore keyup or 'shift' key
    if (key == null || key === "Shift") return;
    if (key === "Escape") {
      setCount(0);
      return;
    }

    // reset if no key event within 5s
    clearTimeout(timerRef1.current);
    timerRef1.current = setTimeout(() => {
      setCount(0);
    }, 5000);

    // reset if invalid key
    if (key !== konamiCode[count]) {
      setCount(0);
      return;
    }

    // valid key
    setCount((state) => state + 1);

    // code complete
    if (count + 1 === konamiCode.length) {
      setSuccess(true);
    }
  }, [key]);

  useEffect(() => {
    if (success) {
      // reset 15s after success
      clearTimeout(timerRef2.current);
      timerRef2.current = setTimeout(() => {
        setCount(0);
        setSuccess(false);
      }, 15000);
    }
  }, [success]);

  return success;
};
