# sber-project

## Описание проделанной работы

В ходе работы был создан сайт для работы с номерами машин, содержащимися в файле формата xlsx.

Сайт работает засчет сервера с MVC-архитектурой на NodeJS и ExpressJS. Данные технологии были выбраны для корректной обработки файла на строне сервера и дальнейшей масштабируемости программы. 

В проделанной работе реализован следующий функционал:
* Поиск значения номера с двумя типами ответов: найдено/не найдено
* Отображение списка номеров
* Выделение и нахождение на странице найденного номера в списке
* Валидация значений серийного, регистрационного номеров и кода региона по длине и корректности значений
* Буквы из кириллицы, соответствующие буквам латиницы для номерных знаков, будут проходить проверку (работает в обратную сторону)  

## Установка

Для работы с программой рекомендуется иметь версию NodeJS - v16.13.1.

Для установки требуется:

* Скачать репозиторий
* Установить записимости через команду npm install
* Запустить сервер командой npm start
* Перейти на локальную сеть по адресу http://localhost:3000/

## Алгоритм использования

1 Пользователь вводит данные 

&emsp;1.1 Если часть или все поля пустые, покажется вспывающее окно с подсказкой

&emsp;1.2 Если часть или все значения имеют некорректную длину, покажется вспывающее окно с подсказкой

&emsp;1.3 Если часть или все значения некорректны, покажется вспывающее окно с подсказкой

2 Пользователь нажимает кнопку "найти"

&emsp;2.1 Программа не находит значение и выводит после кнопки надпись "Номер не найден!"

&emsp;2.2 Программа находит значение и выводит после кнопки надпись "Номер найден!"

&emsp;&emsp;2.2.3 Программа выделяет зеленым цветом найденное значение и перелистывает страницу к нему

**Демо-версию работы приложения можно посмотреть по ссылке: https://disk.yandex.ru/i/4E3nW2Y7uPsZ6Q**
