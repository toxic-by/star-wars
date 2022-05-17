import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
export default class Header extends React.Component {
    render() {
        return (
            <div className="header d-flex">
                <h3 className="header-logo">
                    <Link to="/">Star DB</Link>
                </h3>
                <ul className="header-nav">
                    <li className="list-inline-item">
                        <Link to="/people">People</Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to="/planets">Planets</Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to="/starships">Starships</Link>
                    </li>
                </ul>
            </div>
        );
    }
}
