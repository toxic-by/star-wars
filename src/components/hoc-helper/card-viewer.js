import React from "react";
import Spinner from "../spinner";
const cardViewer = (View, getData, getImage) => {
    return class extends React.Component {
        state = {
            item: null,
            loading: true,
            image: null,
        };
        componentDidMount() {
            this.updateItem();
        }
        componentDidUpdate(prevProps) {
            if (this.props.itemId !== prevProps.itemId) {
                this.setState({ loading: true });
                this.updateItem();
            }
        }
        updateItem() {
            if (!this.props.itemId) {
                return;
            }
            const id = this.props.itemId;
            getData(id).then((item) => {
                this.setState({ item, loading: false, image: getImage({ id }) });
            });
        }
        render() {
            if (!this.state.item) {
                return <span>Select a item from list</span>;
            }
            const spinner = this.state.loading ? <Spinner /> : null;
            const itemToView = !this.state.loading ? (
                <View {...this.props} item={this.state.item} image={this.state.image} />
            ) : null;

            return (
                <div>
                    {spinner}
                    {itemToView}
                </div>
            );
        }
    };
};
export default cardViewer;
