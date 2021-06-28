package com.pizza.demo.pizza.dao_jpa_repository;

import com.pizza.demo.pizza.entity.Pizza;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

// interface has to extend interface JpaRepository.
// It has to be of type <entity class, id type> to access the entity Pizza it has to be
// <Pizza, Integer> represents the class type and the id column

@CrossOrigin()
public interface PizzaRepository extends JpaRepository<Pizza, Integer> {
    // the CRRUD methods are already implemented in the JpaRepository interface and there is no need to write new ones.
    // CRRUD --> create, read one, read all, update, delete
}

