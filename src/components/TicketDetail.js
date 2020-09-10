import React from "react";
import PropTYpes from 'prop-types';

function TicketDetail(props) {
  const { ticket } = props
  
  return(
    <React.Fragment>
      <h1>Ticket Detail</h1>
      <h3><em>{ticket.issue}</em></h3>
      <button onClick = {()=> props.onClickingDelete(ticket.id)}>Close Ticket</button>
      <hr />
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTYpes.object,
  onClickingDelete: PropTYpes.func
};

export default TicketDetail;