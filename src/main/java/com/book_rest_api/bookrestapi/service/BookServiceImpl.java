
package com.book_rest_api.bookrestapi.service;
import com.book_rest_api.bookrestapi.domain.Book;
import com.book_rest_api.bookrestapi.repository.BookRepository;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class BookServiceImpl implements IService<Book> {

    @Autowired
    private BookRepository bookRepository;

//    {
//        Book book = new Book();
//        book.setId(bookId);
//        book.setTitle("Spring Microservices in Action");
//        book.setAuthor("John Carnell");
//        book.setCoverPhotoURL("https://images-na.ssl-images-amazon.com/images/I/91oZX6G-YGL.jpg");
//        book.setIsbnNumber(161729338L);
//        book.setPrice(2776.00);
//        book.setLanguage("English");
//        bookMap.put(book.getId(), book);
//    }

    @Override
    public Collection<Book> findAll() {
        return bookRepository.findAll();
    }

    @Override
    public Book findById(Long id) {
        return bookRepository.findById(id).get();
    }

    @Override
    public Book saveOrUpdate(Book book) {
        return bookRepository.saveAndFlush(book);
    }

    @Override
    public String deleteById(Long id) {
        JSONObject jsonObject = new JSONObject();
        try {
            bookRepository.deleteById(id);
            jsonObject.put("message", "Book deleted successfully");
        } catch (JSONException e) {
            e.printStackTrace();
        }

        return jsonObject.toString();
    }
}
