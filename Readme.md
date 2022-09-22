# Flawden
## Junior Java Developer

Development of Java applications for any task. 
My tech stack at the moment:

- Java 11
- Spring MVC
- Spring Boot
- Spring Data JPA
- Spring Security
- Hibernate ORM
- JDBC template
- JDBC
- SQL: PostgreSQL
- Thymeleaf
- Maven
- Gradle
- HTML/CSS/JS (Basic level)

# Projects

- [Divinity squad bank](https://github.com/Flawden/Divinity-Squad-Bank) - bank web application. It is under active development. The functionality allows you to create an account, get a loan (and a credit card for it), get a debit card, get basic information about the user. The project uses pure Spring MVC without Spring Boot in order to better understand the configuration of Spring applications. The project used: Spring Security, Spring Data JPA, PostgreSQL, Thymeleaf, Maven. Hibernate Validator was used for validation.
- [Bascov Discord Bot](https://github.com/Flawden/Divinity-Squad-Bank) - a music discord bot with a comic name that takes advantage of Spring Boot in development. The main benefit is the ease of adding new commands thanks to the dv8tion/JDA wrapper. (API for discord bot). To create a new command, you just need to create an additional event class and inherit it from Event, after which you can set a hint for the command, the command itself and the list of bot actions. Adding a command to the list of available commands for the bot is handled by Spring. Before use, it is important to create an "application.properties" file in the resource folders similar to "application.properties.origin"
- [SOAP backend API](https://github.com/Flawden/SOAPbackendAPI) - the simplest application that allows you to make requests for registration, obtaining user data, deleting and updating it. The purpose of the application is to demonstrate how to work with the SOAP protocol in a Spring application.
- [Social media API](https://github.com/Flawden/SocialMediaAPI) - simple social network API. Needs improvement. Currently allows you to create, delete, edit a user and get his information. Each user has his own list of messages and posts on the wall.
- [Exchange Rates](https://github.com/Flawden/ExchangeRates) - an application that interacts with external APIs and accumulates the result of the interaction. Depending on the change in the exchange rate of one currency to another, it displays a GIF image: joyful or sad.

# Layouts
In addition to writing code, I do not disdain the layout of sites. Layouts are taken from open sources
Here are examples of my work:

- [AOD](https://flawden.github.io/AOD/) - Layout adaptive to any screens of the site.
- [B1nary](https://flawden.github.io/B1nary/) - Crossbrowser layout. Responsive to many screen resolutions. Involved JS for sorting.
- [Pizza](https://flawden.github.io/Pizza/) - Primitive landing page layout for a pizzeria
- [mamon](https://flawden.github.io/mamon/) - Not a complex adaptive site with a list of developers of a certain company.
