import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faList,
  faTrash,
  faEdit,
  faStepBackward,
  faFastBackward,
  faStepForward,
  faFastForward,
} from '@fortawesome/free-solid-svg-icons';
import { Card, Table, Image, ButtonGroup, Button, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MyToast from './MyToast';
import './Style.css';

const Booklist = () => {
  const [books, setBooks] = React.useState([]);
  const [pagination, setPagination] = React.useState({
    currentPage: null,
    search: '',
    resPerPage: 5,
    totalPages: null,
    totalElements: null,
  });
  const [sorting, setSorting] = React.useState({
    sortToggle: true,
  });
  const [showToast, setShowToast] = React.useState(false);

  React.useEffect(() => {
    findAllBooks(1);
  }, []);

  const findAllBooks = (curPage) => {
    const currentPage = curPage - 1;
    const sortDir = sorting.sortToggle ? 'asc' : 'desc';
    axios
      .get(
        `http://localhost:8080/rest/books?pageNumber=${currentPage}
        &pageSize=${pagination.resPerPage}&sortBy=price&sortDir=${sortDir}`,
      )
      .then((response) => response.data)
      .then((data) => {
        setBooks(data.content);
        setPagination({
          ...pagination,
          totalPages: data.totalPages,
          totalElements: data.totalElements,
          currentPage: data.number + 1,
        });
      });
  };

  const deleteBook = (id) => {
    axios.delete(`http://localhost:8080/rest/books/${id}`).then((response) => {
      if (response.data != null) {
        setShowToast(true);
        setBooks(books.filter((book) => book.id !== id));
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
        findAllBooks(pagination.currentPage);
      } else {
        setShowToast(false);
      }
    });
  };

  const changePage = (event) => {
    const targetPage = parseInt(event.target.value, 10);
    if (pagination.search) {
      searchData(targetPage);
    } else {
      findAllBooks(targetPage);
    }
    setPagination({
      [event.target.name]: targetPage,
    });
  };

  const toFirstPage = () => {
    const firstPage = 1;
    if (pagination.currentPage > firstPage) {
      if (pagination.search) {
        searchData(firstPage);
      } else {
        findAllBooks(firstPage);
      }
    }
  };

  const toPrevPage = () => {
    const previousPage = 1;
    if (pagination.currentPage > previousPage) {
      if (pagination.search) {
        searchData(pagination.currentPage - previousPage);
      } else {
        findAllBooks(pagination.currentPage - previousPage);
      }
    }
  };

  const toLastPage = () => {
    const condition = Math.ceil(pagination.totalElements / pagination.resPerPage);
    if (pagination.currentPage < condition) {
      if (pagination.search) {
        searchData(condition);
      } else {
        findAllBooks(condition);
      }
    }
  };

  const toNextPage = () => {
    if (pagination.currentPage < Math.ceil(pagination.totalElements / pagination.resPerPage)) {
      if (pagination.search) {
        searchData(pagination.currentPage + 1);
      } else {
        findAllBooks(pagination.currentPage + 1);
      }
    }
  };

  const sortData = () => {
    setSorting({
      sortToggle: !sorting.sortToggle,
    });
    findAllBooks(pagination.currentPage);
  };

  const searchData = (curPage) => {
    const currentPage = curPage - 1;
    axios
      .get(
        `http://localhost:8081/rest/books/search/
        ${pagination.search}?page=${currentPage}&size=${pagination.resPerPage}`,
      )
      .then((response) => response.data)
      .then((data) => {
        setBooks(data.content);
        setPagination({
          ...pagination,
          totalPages: data.totalPages,
          totalElements: data.totalElements,
          currentPage: data.number + 1,
        });
      });
  };

  return (
    <>
      {showToast && <MyToast show={showToast} message="Book Deleted Successfully" type="danger" />}
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
                <th onClick={sortData}>
                  Price{' '}
                  <div className={sorting.sortToggle ? 'arrow arrow-down' : 'arrow arrow-up'} />
                </th>
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
                      <Image src={book.coverPhotoURL} roundedCircle width="25" height="25" />{' '}
                      {book.title}
                    </td>
                    <td>{book.author}</td>
                    <td>{book.isbnNumber}</td>
                    <td>{book.price}</td>
                    <td>{book.language}</td>
                    <td align="center">
                      <ButtonGroup>
                        <Link to={`edit/${book.id}`} className="btn btn-sm btn-outline-primary">
                          <FontAwesomeIcon icon={faEdit} />
                        </Link>{' '}
                        <Button
                          size="sm"
                          variant="outline-danger"
                          onClick={() => deleteBook(book.id)}
                        >
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
        {books.length > 0 && (
          <Card.Footer>
            <div style={{ float: 'left' }}>
              Showing Page {pagination.currentPage} of {pagination.totalPages}
            </div>
            <div style={{ float: 'right' }}>
              <InputGroup size="sm">
                <InputGroup.Prepend>
                  <Button
                    type="button"
                    variant="outline-info"
                    disabled={pagination.currentPage === 1}
                    onClick={toFirstPage}
                  >
                    <FontAwesomeIcon icon={faFastBackward} /> First
                  </Button>
                  <Button
                    type="button"
                    variant="outline-info"
                    disabled={pagination.currentPage === 1}
                    onClick={toPrevPage}
                  >
                    <FontAwesomeIcon icon={faStepBackward} /> Prev
                  </Button>
                </InputGroup.Prepend>
                <FormControl
                  className="page-num bg-dark"
                  name="currentPage"
                  value={pagination.currentPage || ''}
                  onChange={changePage}
                />
                <InputGroup.Append>
                  <Button
                    type="button"
                    variant="outline-info"
                    disabled={pagination.currentPage === pagination.totalPages}
                    onClick={toNextPage}
                  >
                    <FontAwesomeIcon icon={faStepForward} /> Next
                  </Button>
                  <Button
                    type="button"
                    variant="outline-info"
                    disabled={pagination.currentPage === pagination.totalPages}
                    onClick={() => toLastPage()}
                  >
                    <FontAwesomeIcon icon={faFastForward} /> Last
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </div>
          </Card.Footer>
        )}
      </Card>
    </>
  );
};

export default Booklist;
