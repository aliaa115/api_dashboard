import React, { useState, useEffect } from "react";
import "chart.js/auto";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { io } from "socket.io-client";

const ENDPOINT = "http://localhost:8080";

ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = io(ENDPOINT);
    // const socket = socketIOClient(ENDPOINT);
    socket.on(
      "notification",
      (data) => {
        console.log(data);
      },
      (data) => {
        console.log(data);
      }
    );
  }, []);

  return (
    <p>
      It's <time dateTime={response}>{response}</time>
    </p>
  );
}
export default App;
