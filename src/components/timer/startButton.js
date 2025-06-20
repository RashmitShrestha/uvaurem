import Button from 'react-bootstrap/Button';

// onOoff = 0 time on
// onOoff = 1 time off
// timeBtn = function to start or stop the timer
const StartButton = ({onOoff, timeBtn} ) => {

    return (
        <div>

{onOoff ? (


    <Button style={{ fontSize: "20px" }} variant="danger" onClick={timeBtn}>Stop</Button>
) : 
    <Button style={{ fontSize: "20px" }} variant="success" onClick={timeBtn}>Start</Button>


}
        </div>
    );
}


export default StartButton;