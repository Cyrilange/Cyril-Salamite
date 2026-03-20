import { useEffect, useRef } from "react";
import { Terminal } from "xterm";
import "xterm/css/xterm.css";

export default function Minishell() {
  const ref = useRef<HTMLDivElement | null>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    if (initialized.current) return;
    initialized.current = true;

    const term = new Terminal();
    term.open(ref.current);

    const ws = new WebSocket("ws://localhost:5000");

    ws.onmessage = (event) => {
       term.write(event.data);
    };

    term.onData((data) => {
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(data);
  }
});

    return () => {
      ws.close();
      term.dispose();
    };
  }, []);

  return <div id="mins" ref={ref} style={{     
    height: "50vh",
      width: "80%",
      backgroundColor: "black",
      position: "relative",
      zIndex: 0,
    color: "white",
    margin: "15rem auto 0"
}} />;
}