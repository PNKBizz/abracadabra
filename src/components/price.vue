<template>
    <section class="content-section">
        <h1>Наши цены</h1>
        <div class="content-section-main">
            <div class="content-section-main__text">
                <h2>Татуировка</h2>
                <p>Mинимальная стоимость - 2000 р.<br>
                    1 СЕАНС (3-4 часа) - 6000 р. Если по времени выходит меньше то и цена будет меньше!<br>
                    Разработка индивидуального эскиза : 1000 р.<br>
                    (если делаем татуировку у нас - то эскиз уже входит в стоимость татуировки)</p>
                <h2>Пирсинг</h2>
                <table class="content-section-main__table">
                    <tr>
                        <td>Мочка уха</td>
                        <td>400</td>
                    </tr>
                    <tr>
                        <td>Хрящ</td>
                        <td rowspan="9">700</td>
                    </tr>
                    <tr><td>Язык</td></tr>
                    <tr><td>Пупок</td></tr>
                    <tr><td>Бровь</td></tr>
                    <tr><td>Губа</td></tr>
                    <tr><td>Крыло носа</td></tr>
                    <tr><td>Септум</td></tr>
                    <tr><td>Индастриал</td></tr>
                    <tr><td>Растяжка 1 тоннеля</td></tr>
                    <tr>
                        <td>Интимный пирсинг</td>
                        <td>1200</td>
                    </tr>
                </table>
            </div>
            <div class="content-section-main__supp content-section-main__supp--priceback"></div>
        </div>
    </section>
</template>

<style lang="scss">
    .content-section-main__supp--priceback {
        background-image: url('/src/assets/onwork.jpg');
        background-size: cover;
    }
</style>