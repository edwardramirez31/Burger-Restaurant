import Modal from "components/UI/Modal/Modal";
import Auxiliary from "hoc/Auxiliary/Auxiliary";
import PropTypes from "prop-types";
import React, { Component } from "react";

function withErrorHandling(WrappedComponent, axios) {
  return class extends Component {
    state = {
      showError: null,
    };

    closeModalHandler = () => {
      this.setState({ showError: false });
    };
    constructor(props) {
      super(props);
      this.reqInterceptor = axios.interceptors.request.use(
        (req) => req,
        (err) => {
          this.setState({ showError: true });
          return Promise.reject(err);
        }
      );

      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (err) => {
          this.setState({ showError: true });
          return Promise.reject(err);
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    render() {
      return (
        <Auxiliary>
          <Modal
            isActive={this.state.showError}
            handleModalClicked={this.closeModalHandler}
          >
            Something went wrong...
          </Modal>
          <WrappedComponent {...this.props} />
        </Auxiliary>
      );
    }
  };
}

withErrorHandling.prototype = {
  WrappedComponent: PropTypes.any,
};

export default withErrorHandling;
