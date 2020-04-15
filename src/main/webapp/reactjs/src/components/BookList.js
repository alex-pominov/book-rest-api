import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { Card, Table } from "react-bootstrap";

const Booklist = () => {
  return (
    <Card className="border border-dark bg-dark text-white">
      <Card.Header>
        <FontAwesomeIcon icon={faList} /> Book List
      </Card.Header>
      <Card.Body>
        <Table bordered hover striped variant="dark">
          <thead>
            <tr>
              <th>Title</th>
              <th>Authot</th>
              <th>ISBN Number</th>
              <th>Price</th>
              <th>Language</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr align="center">
              <td colSpan="6">No Books available</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default Booklist;