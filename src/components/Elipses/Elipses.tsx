import { FC, useEffect, useState } from "react";

export const Elipses: FC = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const int = setInterval(() => {
      setDots((curr) => {
        curr += ".";
        if (curr.length === 4) curr = "";
        return curr;
      });
    }, 300);

    return () => {
      clearInterval(int);
    };
  }, []);

  return <>{dots}</>;
};
