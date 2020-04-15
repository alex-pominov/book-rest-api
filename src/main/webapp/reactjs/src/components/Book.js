import React from "react";
import { Card, Form, Button, Col } from "react-bootstrap";

const Book = (props) => {
  const [inputData, setInputData] = React.useState({
    title: "",
    author: "",
    coverPhotoURL: "",
    isbnNumber: "",
    price: "",
    language: "",
  });

  const submitBook = (e) => {
    e.preventDefault();
    console.log("Book Submited");
    console.log(inputData);
    
  };

  function handleChange(e) {
    const value = e.target.value;
    setInputData({
      ...inputData,
      [e.target.name]: value,
    });
  }

  return (
    <Card className="border border-dark bg-dark text-white">
      <Card.Header>Add Book</Card.Header>
      <Form onSubmit={submitBook} id="bookFormId">
        <Card.Body>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control required
                type="text"
                name="title"
                className="bg-dark text-white"
                placeholder="Enter Book Title"
                value={inputData.title}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Author</Form.Label>
              <Form.Control required
                type="text"
                name="author"
                className="bg-dark text-white"
                placeholder="Enter Author Name"
                value={inputData.author}
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Cover Photo URL</Form.Label>
              <Form.Control required
                type="text"
                name="coverPhotoURL"
                className="bg-dark text-white"
                placeholder="Enter Book Cover Photo URL"
                value={inputData.coverPhotoURL}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>ISBN Number</Form.Label>
              <Form.Control required
                type="text"
                name="isbnNumber"
                className="bg-dark text-white"
                placeholder="Enter Book ISBN Number"
                value={inputData.isbnNumber}
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Price</Form.Label>
              <Form.Control required
                type="text"
                name="price"
                className="bg-dark text-white"
                placeholder="Enter Book Price"
                value={inputData.price}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Language</Form.Label>
              <Form.Control required
                type="text"
                name="language"
                className="bg-dark text-white"
                placeholder="Enter Book Language"
                value={inputData.language}
                onChange={handleChange}
              />
            </Form.Group>
          </Form.Row>
        </Card.Body>
        <Card.Footer style={{ textAlign: "right" }}>
          <Button size="sm" variant="success" type="submit">
            Submit
          </Button>
        </Card.Footer>
      </Form>
    </Card>
  );
};

export default Book;
