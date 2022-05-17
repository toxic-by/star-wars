import React from "react";
import ErrorButton from "../error-button";
import "./item-details.css";

const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span>{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};
export { Record };
const ItemDetails = (props) => {
    const { item, image } = props;
    const element = (
        <div className="item-details bg-secondary rounded d-flex">
            <img
                className="item-image m-2"
                src={image}
                onError={({ currentTarget }) =>
                    (currentTarget.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg")
                }
                alt=""
            ></img>
            <div>
                <ul className="item-list list-group list-group-flush m-2">
                    {React.Children.map(props.children, (child) => {
                        return React.cloneElement(child, { item });
                    })}
                </ul>
                <ErrorButton />
            </div>
        </div>
    );

    return <div>{element}</div>;
};

export default ItemDetails;
