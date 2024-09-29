# Flawden
## Junior Java разработчик
Разработка Java приложений под любые задачи. 

# Проекты

- [Divinity squad bank](https://github.com/Flawden/Divinity-Squad-Bank) - банковское веб приложение. Он находится в стадии активной разработки. Функционал позволяет создать учетную запись, получить кредит (и кредитную карту для него), получить дебетовую карту, получить основную информацию о пользователе. В проекте были использован Spring MVC без Spring Boot в целях более глубокого понимания конфигурации Spring приложений. Также в проекте использованы следующие технологии: Spring Security, Spring Data JPA, PostgreSQL, Thymeleaf, Maven, Hibernate Validator.
- [Team-Job](https://github.com/Ivan-Kovalev/Team-job) - Сервис рекомендаций основан на микросервисной архитектуре с использованием Spring Framework. Основная задача системы — предоставление рекомендаций услуг пользователям на основе динамически задаваемых правил. Сервис использует REST API для управления правилами и получения рекомендаций. Логика обработки правил инкапсулирована в модульные сервисы, обеспечивая гибкость и расширяемость системы. Для повышения производительности внедрено кэширование на уровне бизнес-логики с использованием Spring Cache.
- [Bascov Discord Bot](https://github.com/Flawden/BaskovDiscordBot) - музыкальный бот discord с шуточным названием, который использует преимущества Spring Boot в разработке. Основным преимуществом является простота добавления новых команд благодаря оболочке dv8tion/JDA. (API для discord-бота). Чтобы создать новую команду, вам необходимо создать класс и унаследовать его от "Event", после чего вы можете задать подсказку для команды, саму команду и список действий бота. Добавление команды в список доступных команд для бота обрабатывается Spring. Перед использованием важно создать файл "application.properties" в папках ресурсов, аналогичный "application.properties.origin".
- [SOAP backend API](https://github.com/Flawden/SOAPbackendAPI) - простейшее приложение, позволяющее делать запросы на регистрацию, получение пользовательских данных, их удаление и обновление. Цель приложения - продемонстрировать, как работать с протоколом SOAP в приложении Spring.
- [Social media API](https://github.com/Flawden/SocialMediaAPI) - простой API социальной сети. Нуждается в улучшении. В настоящее время позволяет создавать, удалять, редактировать пользователя и получать его информацию. У каждого пользователя есть свой собственный список сообщений и постов на стене.
- [Exchange Rates](https://github.com/Flawden/ExchangeRates) - приложение, которое взаимодействует с внешними API-интерфейсами. В зависимости от изменения курса обмена одной валюты на другую, он отображает GIF-изображение: радостное или грустное.

# Верстка
Помимо написания кода, я не брезгую версткой сайтов. Макеты взяты из открытых источников
Вот примеры моих работ:

- [AOD](https://flawden.github.io/AOD/) - Макет адаптивен к любым экранам сайта.
- [B1nary](https://flawden.github.io/B1nary/) - Кроссбраузерная верстка. Реагирует на многие разрешения экрана. Задействован JS для сортировки.
- [Pizza](https://flawden.github.io/Pizza/) - Примитивный макет страницы для пиццерии
- [mamon](https://flawden.github.io/mamon/) - Не сложный адаптивный сайт со списком разработчиков определенной компании.

## Мой стек технологий на данный момент:

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
