import React from "react";
import { Card, Form, Button, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSave,
  faPlusSquare,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import MyToast from "./MyToast";

import axios from "axios";

const Book = (props) => {
  const initialState = {
    title: "",
    author: "",
    coverPhotoURL: "",
    isbnNumber: "",
    price: "",
    language: "",
  };

  const [inputData, setInputData] = React.useState(initialState);
  const [showToast, setShowToast] = React.useState(false);

  const submitBook = (e) => {
    e.preventDefault();

    const book = {
      ...inputData,
    };

    axios.post("http://localhost:8080/rest/books", book).then((response) => {
      if (response.data != null) {
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      } else {
        setShowToast(false);
      }
    });

    setInputData(initialState);
  };

  function handleChange(e) {
    const value = e.target.value;
    setInputData({
      ...inputData,
      [e.target.name]: value,
    });
  }

  return (
    <>
      {showToast && (
        <MyToast
          show={showToast}
          message="Book Saved Successfully"
          type="success"
        />
      )}

      <Card className="border border-dark bg-dark text-white">
        <Card.Header>
          <FontAwesomeIcon icon={faPlusSquare} /> Add Book
        </Card.Header>
        <Form
          onSubmit={(e) => submitBook(e)}
          onReset={() => setInputData(initialState)}
          id="bookFormId"
        >
          <Card.Body>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="title"
                  className="bg-dark text-white"
                  placeholder="Enter Book Title"
                  autoComplete="off"
                  value={inputData.title || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} id="formGridAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="author"
                  className="bg-dark text-white"
                  placeholder="Enter Author Name"
                  autoComplete="off"
                  value={inputData.author}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} id="formGridCoverPhotoURL">
                <Form.Label>Cover Photo URL</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="coverPhotoURL"
                  className="bg-dark text-white"
                  placeholder="Enter Book Cover Photo URL"
                  autoComplete="off"
                  value={inputData.coverPhotoURL}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} id="formGridISBNNumber">
                <Form.Label>ISBN Number</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="isbnNumber"
                  className="bg-dark text-white"
                  placeholder="Enter Book ISBN Number"
                  autoComplete="off"
                  value={inputData.isbnNumber}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} id="formGridPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="price"
                  className="bg-dark text-white"
                  placeholder="Enter Book Price"
                  autoComplete="off"
                  value={inputData.price}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group as={Col} id="formGridLanguage">
                <Form.Label>Language</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="language"
                  className="bg-dark text-white"
                  placeholder="Enter Book Language"
                  autoComplete="off"
                  value={inputData.language}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form.Row>
          </Card.Body>
          <Card.Footer style={{ textAlign: "right" }}>
            <Button size="sm" variant="success" type="submit">
              <FontAwesomeIcon icon={faSave} /> Submit
            </Button>{" "}
            <Button size="sm" variant="info" type="reset">
              <FontAwesomeIcon icon={faUndo} /> Reset
            </Button>
          </Card.Footer>
        </Form>
      </Card>
    </>
  );
};

export default Book;
