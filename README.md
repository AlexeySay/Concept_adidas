<h1 align="center">Concept adidas</h1>

![Demo gif](demo.gif)

### О проекте:

[Ссылка на сайт](https://alexeysay.github.io/Concept_adidas/)

Верстка выполнена с использованием CSS, JS и так же подключен jQuery, я не умею использовать jQuery, но его нужно было подключить для работы библеотеки slick для создания слайдера, этой библеотекой я уже пользовался в [ActiveBox](https://github.com/AlexeySay/ActiveBox.github.io). 

Отсутствует адаптивная вёрстка под телефон, причина: я верстал по макету, в котором не было дизайна для телефонов, я мог бы постараться придумать собственный дизайн под телефон, но у меня вряд ли бы получилось скопировать стиль дизайна, поэтому я решил не создавать мобильную версию.

Вёрстка была выполнена по макету дизайнера, [ссылка на его аккаунт behance](https://www.behance.net/dgladenko)

#### CSS и HTML
В html создан элемент с классом page, в который вложен элемент с классом container. У page есть только цвет фона, а у container есть grid сетка с 3 областями и отсупами слева и справа, почему я так сделал: если бы всё находилось в page, у которого были бы отсупы, то на месте отступов были бы белые края, я решил не придавать body цвет фона, а придать этот цвет page и уже в него положить container с отступами и сеткой. 

У container есть 3 области - header, product, buttons. В Html создан элемент header с классом header, ему я назначил область header, элемент main с классом product и областью product, элемент section с классом buttons и областью buttons (в макете buttons на месте footer, но на footer это не похоже). Области я использую не как блоки с информацией, а как контейнер для позиционирования, на эти области я применяю flex.

Элемент header, содержит 2 элемента - header__inner и nav с классом nav. Я до конца не уверен, какое название класса подойдёт header__inner, потому что nav так же входит в header и можно было бы назвать header__block вместо header__inner, но я решил оставить header__inner.

Элемент product, содержит 3 элемента - product__info__left, product__item, product__info__right. В элемент с классом product__item вложен элемент с id slider, к этому элементу привязан код из библеотеки slick для создания слайдера.

#### JS, библеотека slick
Эта библеотека помогла мне в создании слайдера, я использовал CDN для подключения библеотеки. А вот весь код создания слайдера:
```js
document.addEventListener("DOMContentLoaded", () => {
    const slider = $("#slider");
    slider.slick({
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
        dots: true
    });
});
```
Всё что оставалось сделать - добавить немного CSS. [Ссылка на библеотеку](https://kenwheeler.github.io/slick/)

##### Ссылки на другие репозитории, которые я хотел бы показать
(все репозитории на GitHub Pages)

[Vue-Clicker](https://github.com/AlexeySay/Vue-Clicker.github.io) - здесь я создал игру-кликер на Vue с достижениями, магазином улучшений, статистикой, звуком и оповещениями

[js_task.github.io](https://github.com/AlexeySay/js_task.github.io) - здесь я выполнял задания по JS, которые находил в интернете

[vue_shop](https://github.com/AlexeySay/vue_shop) - здесь я создавал магазин по обучающему видео, использовал Vue CLI, Vuex, Vue-router, Axios

[ActiveBox](https://github.com/AlexeySay/ActiveBox.github.io) - здесь я создавал сайт по обучающему видео, в котором использовалась библеотека slick, адаптивня вёрстка и др.
