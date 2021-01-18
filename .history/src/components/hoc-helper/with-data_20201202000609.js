import React, { Component } from 'react';

import Spinner from '../spinner/spinner';

const withData = (View) => {
    return class extends Component {

        state = {
            data: null,
            loading: false,
            error: false
        };

        componentDidUpdate(prevProps) {
            if (this.props.getData !== prevProps.getData) {
                this.update();
            }
        }

        componentDidMount() {
            this.update();
        }

        update() {
            this.setState({
                loading: true,
                error: false
            })
            this.props.getData()
                .then((data) => {
                    this.setState({
                        data
                    });
                });
        }

        render() {
            const { data } = this.state;

            if (!data) {
                return <Spinner / > ;
            }

            return <View {...this.props }
            data = { data }
            />;
        }
    };
};

export default withData;