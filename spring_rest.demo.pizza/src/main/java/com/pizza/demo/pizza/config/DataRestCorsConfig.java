package com.pizza.demo.pizza.config;



import com.pizza.demo.pizza.entity.Pizza;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//@Configuration
//class DataRestConfig implements RepositoryRestConfigurer {
//    @Override
//    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
//
//        HttpMethod[] theUnsupportedReq = {HttpMethod.DELETE};
//
//        //configuration for the Pizza entity
//        config.getExposureConfiguration()
//                .forDomainType(Pizza.class)
//                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedReq))
//                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedReq));
//
//        cors.addMapping("/**")
//                .allowedOrigins("http://localhost:4200")
//                .allowedMethods("*")
//                .allowedHeaders("*");
//    }
//}
