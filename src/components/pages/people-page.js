import { withRouter } from "react-router";
import { PersonList } from "../sw-components";

const PeoplePage = ({ history }) => {
    return (
        <PersonList
            onItemSelected={(itemId) => {
                const newPath = `/people/${itemId}`;
                history.push(newPath);
            }}
        ></PersonList>
    );
};
export default withRouter(PeoplePage);
