package com.book_rest_api.bookrestapi.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface IService<T> {

    Page<T> findAll(Pageable pageable);

    T findById(Long id);

    T saveOrUpdate(T t);

    String deleteById(Long id);

}
