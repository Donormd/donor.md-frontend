# DONOR.MD - МЕСТО, ГДЕ ЛЮДИ ПОМОГАЮТ ЛЮДЯМ

Web-сервис для тех, кто сдает и ищет донорскую кровь в Приднестровье

## Дизайн

- [Текущий макет в Figma](https://www.figma.com/file/8tE5uYcQyCLz3V4t3Xy4J6).

## Разработка

- Установка зависимостей: `yarn install`
- Старт сервера для локальной разработки: `yarn dev`

## Участие в разработке

Вы можете выбрать [issue из списка](https://github.com/open-priorities/donor-frontend/issues) и сказать, что берётесь за работу.

Форкните и присылайте Pull requests.

Для разработчиков проекта есть чат в Телеграме, где можно синхронизироваться, обсуждать и планировать процесс. Постучите [@maxilamb](https://t.me/maxilamb) в Телеграме, если хотите попасть туда.

## Окружение и технологии

Движок [Next.js](https://nextjs.org/)  
State manager [Redux](https://redux.js.org/)  
Архитектурный стиль API [RESTful](https://habr.com/ru/post/483202/)

## Принципы верстки

**Mobile-first.**  
Сначала мы делаем мобильную версию UI, а потом начинаем увеличивать с помощью `@media`.

**Основные брейкпойнты**

| Девайс                           | Ширина экрана |
| -------------------------------- | ------------- |
| Смартфоны                        | до 576px      |
| Смартфоны (альбомная ориентация) | от 576px      |
| Планшеты                         | от 768px      |
| Ноутбуки                         | от 992px      |
| Все остальные                    | от 1200px     |

#### **Также елементы сайта могут иметь собственные брекпоинты отличные от основных**

Работает на [Next.js](https://nextjs.org/).
