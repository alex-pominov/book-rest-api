package com.book_rest_api.bookrestapi.repository;

import com.book_rest_api.bookrestapi.domain.Book;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends PagingAndSortingRepository<Book, Long> {

}
