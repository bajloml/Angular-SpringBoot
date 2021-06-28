package com.pizza.demo.pizza.entity;

import javax.persistence.*;

@Entity
@Table
public class Pizza {
    // variables which corresponds to the table columns

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "ingredients")
    private String ingredients;

    //constructors
    public Pizza() {}

    public Pizza(String name, String ingredients) {
        this.name = name;
        this.ingredients = ingredients;
    }

    // accesors
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIngredients() {
        return ingredients;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }

    // methods
    @Override
    public String toString() {
        return "pizza{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", ingredients='" + ingredients + '\'' +
                '}' + '\n';
    }
}
