import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class ListGroupContextualClasses extends React.Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem color="success">Cras justo odio</ListGroupItem>
        <ListGroupItem color="info">Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem color="warning">Morbi leo risus</ListGroupItem>
        <ListGroupItem color="danger">Porta ac consectetur ac</ListGroupItem>
      </ListGroup>
    );
  }
}
