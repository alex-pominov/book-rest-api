package com.book_rest_api.bookrestapi;

import com.book_rest_api.bookrestapi.domain.Book;
import com.book_rest_api.bookrestapi.service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BookRestApiApplication implements CommandLineRunner {

    @Autowired
    private IService<Book> bookService;

    public static void main(String[] args) {
        SpringApplication.run(BookRestApiApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        for (int i = 1; i <= 100; i++) {
            Book book = new Book();
            book.setTitle("Spring Microservices in Action " + i);
            book.setAuthor("John Carnell" + i);
            book.setCoverPhotoURL("https://images-na.ssl-images-amazon.com/images/I/91oZX6G-YGL.jpg");
            book.setIsbnNumber(161729338L);
            book.setPrice(2776.00 + i);
            book.setLanguage("English");
            bookService.saveOrUpdate(book);
        }
    }
}


