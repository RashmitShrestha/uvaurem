import Button from 'react-bootstrap/Button';

// onOoff = 0 time on
// onOoff = 1 time off
// timeBtn = function to start or stop the timer
const StartButton = ({ onOoff, timeBtn }) => {

    return (
        <div>

            {onOoff ? (


                <Button style={{ fontSize: "20px", backgroundColor: "#3636368c", color: "white", border: "none" }} onClick={timeBtn}>Stop</Button>
            ) :
                <Button style={{ fontSize: "20px", backgroundColor: "#e6e6e68c", color: "black", border: "none" }} onClick={timeBtn}>Start</Button>


            }
        </div>
    );
}


export default StartButton;