<template>
    <section class="content-section">
        <h1>О студии</h1>
        <div class="content-section-main">
            <div class="content-section-main__text">
                <h2>Мы находимся по адресу:</h2>
                <p>Первомайский проспект, 33Б, офис 302<br>
                8 (900) 901-88-16, 52-72-17<br>
                <a href="mailto:Abracadabrarzn@gmail.com">Abracadabrarzn@gmail.com</a><br>
                <a href="https://vk.com/abracadabra_rzn">Абра Кадабра</a> (запись ВКонтакте)</p>
            </div>
            <div class="content-section-main__supp" id="yandexMap"></div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'info',
        data() {
            return {
                coord: {
                    lat:54.628507,
                    lng: 39.719963
                }
            }
        },
        mounted() {
            ymaps.ready(init);
            var myMap,
                myPlacemark;

            function init(){
                myMap = new ymaps.Map("yandexMap", {
                    center: [54.62870956, 39.71979628],
                    zoom: 18
                });

                myPlacemark = new ymaps.Placemark([54.62870956, 39.71979628], {
                    hintContent: 'Тату-студия «Абракадабра»',
                    balloonContent: 'Тату-студия «Абракадабра». +7 (920) 632-78-89'
                });

                myMap.geoObjects.add(myPlacemark);
            }
        }
    }
</script>