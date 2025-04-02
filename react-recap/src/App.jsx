import { useRef, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
function App() {
    return <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/neet/class-11" element={<Class11Program />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
}

function Class11Program() {
    return <div>
        Hellow
    </div>
}

function Header() {
    return <div>
        <Link to="/">Allen</Link>
        <Link to="/neet/class-11">Class11</Link>
    </div>
}

function Layout() {
    return <div style={{ height: "100vh", background: "green" }}>
        <Header />
        <div style={{ height: "90vh", background: "red" }}>
            <Outlet />
            <Stopwatch/>
        </div>
        footer
    </div>
}

function Stopwatch() {
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);

    const startTimer = () => {
        if (intervalRef.current !== null) return; // Already running, do nothing

        intervalRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);
    };

    const stopTimer = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    };

    return (
        <div>
            <h1>Timer: {time}</h1>
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
        </div>
    );
}
export default App;