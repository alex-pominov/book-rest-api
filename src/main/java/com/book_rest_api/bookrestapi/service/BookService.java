package com.book_rest_api.bookrestapi.service;

import com.book_rest_api.bookrestapi.domain.Book;

import java.util.Collection;

public interface BookService {

    Collection<Book> findAll();

    Book findById(Long id);

    Book save(Book book);

    Book update(Book book);

    Book deleteById(Long id);

}
