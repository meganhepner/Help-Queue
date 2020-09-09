import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

class TicketControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState({
      formVisibleOnPage: !prevState.formVisibleOnPage
    })
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm />
      buttonText = "Return to Ticket LIst";
    } else {
      currentlyVisibleState = <TicketList />
      buttonText = "Add TIcket";
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default TicketControl;