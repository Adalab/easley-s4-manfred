import React from "react";
import PropTypes from "prop-types";
import ReactModal from 'react-modal';
import ExportCode from "../ExportCode";
import Button from "../Button";
ReactModal.setAppElement('#root');
class ModalHtml extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal : false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render(){
    const {cvRef, codeToExport, handleHTML} = this.props;
    return(
      <div>
        <Button
          buttonType="button"
          styles="preview__html-btn"
          handleButtonClick={this.handleOpenModal}
        >
        </Button>
        <ReactModal
          appElement={document.getElementById('App')}
          isOpen={this.state.showModal}
          contentLabel="share your CV in html code"
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={false}
        >

        <Button
          buttonType="button"
          styles="close-btn"
          handleButtonClick={this.handleCloseModal}
        >
        </Button>

          <ExportCode cvRef={cvRef} codeToExport={codeToExport} handleHTML={handleHTML}/>
        </ReactModal>
      </div>
    );
  }
};

ModalHtml.propTypes = {
  cvRef: PropTypes.object.isRequired,
  handleHTML: PropTypes.func.isRequired
};



export default ModalHtml;
