import React from "react";

function Ticket(props){
  return(
    <React.Fragment>
      <Header />
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
    </React.Fragment>
  );
}

export default Ticket;