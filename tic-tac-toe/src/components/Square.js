import React from 'react';
import { connect } from "react-redux";
import { mark } from "../redux/actions";

function Square(props) {
    return (
        <button className="square" onClick={() => props.mark(props.pos)}>
            {props.value}
        </button>
    )
}

export default connect(
    null,
    { mark }
)(Square);