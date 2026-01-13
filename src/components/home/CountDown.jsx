import React, {useState} from "react";

const CountDown = ({expiryDate}) => {
    const [timeText, setTimeText] = useState("");
    const [intervalId, setIntervalId] = useState(null);

    React.useEffect(() => {
        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = new Date(expiryDate).getTime() - now; 
            if (distance < 0) {
                clearInterval(intervalId);
                setTimeText("Expired");
                return;
            }   
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            const parts = [];
            if (days > 0) parts.push(`${days}d`);
            if (hours > 0) parts.push(`${hours}h`);
            if (minutes > 0) parts.push(`${minutes}m`);
            if (seconds > 0) parts.push(`${seconds}s`);
            setTimeText(parts.length > 0 ? parts.join(" ") : "0s");
        };
        updateCountdown();
        const id = setInterval(updateCountdown, 1000);
        setIntervalId(id);
        return () => clearInterval(id);
    }, [expiryDate]);

    return (
        <div className="de_countdown">
            <div id="countdown" className="countdown">
                {timeText}
            </div>
        </div>
    );
}

export default CountDown;