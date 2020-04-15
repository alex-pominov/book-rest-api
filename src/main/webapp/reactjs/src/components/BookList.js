import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Card, Table, Image, ButtonGroup, Button } from "react-bootstrap";
import axios from "axios";

const Booklist = () => {
  const [books, setBooks] = React.useState([]);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:8080/rest/books");
    setBooks(response.data);
  }

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
            {books.length === 0 ? (
              <tr align="center">
                <td colSpan="6">No Books available</td>
              </tr>
            ) : (
              books.map((book) => (
                <tr key={book.id}>
                  <td>
                    <Image
                      src={book.coverPhotoURL}
                      roundedCircle
                      width="25"
                      height="25"
                    />{" "}
                    {book.title}
                  </td>
                  <td>{book.author}</td>
                  <td>{book.isbnNumber}</td>
                  <td>{book.price}</td>
                  <td>{book.language}</td>
                  <td align="center">
                    <ButtonGroup>
                      <Button size="sm" variant="outline-primary">
                        <FontAwesomeIcon icon={faEdit} />
                      </Button>{" "}
                      <Button size="sm" variant="outline-danger">
                        <FontAwesomeIcon icon={faTrash} />
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default Booklist;
