# Реализация корпоративного портала для Газпромбанка
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

# Front-end
The solution was written using the **React / Redux stack**. 
The design system of **Gazprombank HOLISM** (https://holism.gpbdev.ru/about) was also used.

# Back-end
Server side implemented on **Java 1.8**. Web services implemented using the framework **Spring Boot**.
The following dependencies are used:
  - Spring MVC
  - Spring Security
  - PostgreSQL
  - Lombok
  - LiquiBase
  - Swagger

OpenAPI documentation available on:
```sh
http://localhost:8075/api/v1/documentation
```
After registration or authorization, a Web Token is generated for working with the API.

Using the API, you can create a user, fill in information about yourself, create a theme and manage it, and so on.

# Microservice
Calendar-microservice implementation on **GoLang**. 
With it, you can manage events: add, delete, update.
