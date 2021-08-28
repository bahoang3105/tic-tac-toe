import { connect } from "react-redux";
import { jumpTo } from "../redux/actions";

function Moves(props) {
    const desc = props.move ?
        "Go to move #" + props.move : "Go to game start"; 
    return (
        <li key={props.move}>
            <button onClick={() => props.jumpTo(props.move)}>{desc}</button>
        </li>
    );
};

export default connect(
    null,
    { jumpTo }
)(Moves);