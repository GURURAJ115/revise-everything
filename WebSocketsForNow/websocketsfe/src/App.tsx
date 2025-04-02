import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function sendMessage() {
    if (!socket || !inputRef.current) {
      return;
    }
    const message = inputRef.current.value;
    socket.send(message);
    inputRef.current.value = ""; // Clear input after sending
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    
    ws.onmessage = (event) => {
      alert(event.data);
    };

    ws.onopen = () => {
      console.log("WebSocket connected");
    };
    
    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
    
    ws.onclose = () => {
      console.log("WebSocket closed");
    };
    
    return () => {
      ws.close();
    };
  }, []);

  return (
    <>
      <div>
        <input ref={inputRef} type="text" placeholder="Message..." />
        <button onClick={sendMessage}>Send</button>
      </div>
    </>
  );
}

export default App;
