import React from "react";

import { withRouter } from "react-router";
import { StarshipList } from "../sw-components";

const StarshipPage = ({ history }) => {
    return (
        <StarshipList
            onItemSelected={(itemId) => {
                const newPath = `/starships/${itemId}`;
                history.push(newPath);
            }}
        ></StarshipList>
    );
};
export default withRouter(StarshipPage);
