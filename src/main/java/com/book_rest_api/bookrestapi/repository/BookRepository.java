package com.book_rest_api.bookrestapi.repository;

import com.book_rest_api.bookrestapi.domain.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

}
