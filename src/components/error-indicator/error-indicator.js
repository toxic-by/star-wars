import React from "react";
import "./error-indicator.css";
export default class ErrorIndicator extends React.Component {
    render() {
        return (
            <div className="error-indicator">
                <span>Something has gone terribly wrong</span>
                <br />
                <span>Sorry...we are working on it</span>
            </div>
        );
    }
}
