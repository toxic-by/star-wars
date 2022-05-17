import React from "react";
import { withRouter } from "react-router";
import { PlanetList } from "../sw-components";

const PlanetPage = ({ history }) => {
    return (
        <PlanetList
            onItemSelected={(itemId) => {
                const newPath = `/planets/${itemId}`;
                history.push(newPath);
            }}
        ></PlanetList>
    );
};
export default withRouter(PlanetPage);
