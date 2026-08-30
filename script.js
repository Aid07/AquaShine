<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.5, user-scalable=yes">
    <title>AquaShine — автомойка премиум класса</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
        }

        body {
            background: #f9fbfd;
            color: #1a1a1a; /* черный текст */
            line-height: 1.5;
            padding: 0 20px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .top-nav {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            gap: 10px 18px;
            padding: 20px 15px;
            border-bottom: 2px solid #d0d9e4;
            margin-bottom: 30px;
            position: sticky;
            top: 0;
            background: #ffffff;
            z-index: 50;
            border-radius: 0 0 20px 20px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.02);
        }

        .brand-logo {
            font-weight: 700;
            font-size: 1.8rem;
            color: #1a1a1a;
            letter-spacing: -0.5px;
            margin-right: auto;
            white-space: nowrap;
        }
        .brand-logo span { color: #2a7faa; }

        .nav-links {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            align-items: center;
        }

        .nav-btn, .verify-top {
            background: #ffffff;
            border: 1px solid #cbd8e8;
            padding: 12px 22px;
            border-radius: 40px;
            font-weight: 600;
            font-size: 0.95rem;
            cursor: pointer;
            transition: all 0.2s;
            color: #1a1a1a;
            box-shadow: 0 2px 5px rgba(0,0,0,0.02);
            text-decoration: none;
            display: inline-block;
        }
        .nav-btn:hover, .verify-top:hover {
            background: #2a7faa;
            color: white;
            border-color: #2a7faa;
        }
        .nav-btn.active {
            background: #1a1a1a;
            color: white;
            border-color: #1a1a1a;
        }

        .page { display: none; animation: fadeIn 0.3s ease; }
        .page.active-page { display: block; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        h1, h2, h3 { color: #1a1a1a; }
        h1 { font-size: 2.4rem; margin-bottom: 20px; }
        h2 { font-size: 1.8rem; margin: 30px 0 20px; border-left: 6px solid #2a7faa; padding-left: 18px; }
        .brand-highlight { color: #2a7faa; font-weight: 700; }

        .welcome-block {
            background: #ffffff;
            padding: 30px 25px;
            border-radius: 30px;
            margin-bottom: 40px;
            text-align: center;
            box-shadow: 0 8px 20px rgba(0,0,0,0.03);
            border: 1px solid #e0e8f0;
            color: #1a1a1a;
        }

        .grid-reasons, .grid-services {
            display: grid;
            gap: 25px;
            margin: 30px 0;
            justify-content: center;
        }
        @media (min-width: 900px) {
            .grid-services { grid-template-columns: repeat(3, 1fr); }
            .grid-reasons { grid-template-columns: repeat(4, 1fr); }
        }
        @media (max-width: 600px) {
            .grid-services, .grid-reasons { grid-template-columns: 1fr; }
        }

        .card {
            background: #ffffff;
            border-radius: 24px;
            padding: 20px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.04);
            transition: transform 0.2s;
            display: flex;
            flex-direction: column;
            border: 1px solid #dce4ee;
            color: #1a1a1a;
        }
02:10
.card h3 { color: #1a1a1a; }
        .card p { color: #333; }
        .card:hover { transform: translateY(-5px); }
        .photo-placeholder {
            width: 100%;
            aspect-ratio: 1 / 1;
            background: #eef2f7;
            border-radius: 18px;
            margin-top: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #4a5568;
            border: 2px dashed #b6c6d8;
            min-height: 160px;
        }

        .address-line {
            background: #ffffff;
            padding: 16px 25px;
            border-radius: 50px;
            display: inline-block;
            color: #1a1a1a;
            box-shadow: 0 4px 12px rgba(0,0,0,0.03);
            border: 1px solid #dbe4ef;
        }

        .modal, .verify-modal, .verify-panel {
            display: none;
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(20,25,35,0.6);
            z-index: 1000;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        .modal-content, .verify-panel-content {
            background: #ffffff;
            border-radius: 30px;
            max-width: 500px;
            width: 100%;
            padding: 30px;
            position: relative;
            box-shadow: 0 30px 50px rgba(0,0,0,0.2);
            color: #1a1a1a;
        }
        .modal-close, .verify-close {
            position: absolute;
            top: 15px; right: 22px;
            font-size: 2rem;
            cursor: pointer;
            color: #4a5568;
        }
        .price-tag {
            font-weight: 700;
            font-size: 1.5rem;
            background: #e5f0fa;
            padding: 8px 22px;
            border-radius: 40px;
            margin-top: 12px;
            display: inline-block;
            color: #1a1a1a;
        }

        .contact-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 25px;
            justify-content: center;
            margin: 40px 0;
        }
        .contact-card {
            background: #ffffff;
            border-radius: 30px;
            padding: 25px 20px;
            flex: 1 1 200px;
            text-align: center;
            box-shadow: 0 10px 20px rgba(0,0,0,0.04);
            border: 1px solid #dce4ee;
            color: #1a1a1a;
        }
        .contact-card i { font-size: 2.5rem; color: #2a7faa; }

        .review-form {
            background: #ffffff;
            border-radius: 30px;
            padding: 30px 25px;
            margin: 30px 0;
            box-shadow: 0 10px 25px rgba(0,0,0,0.04);
            border: 1px solid #dce4ee;
            color: #1a1a1a;
        }
        .stars i {
            font-size: 2rem;
            color: #cbd8e6;
            cursor: pointer;
            margin-right: 5px;
        }
        .stars i.active { color: #1a1a1a; }
        select, input, textarea {
            width: 100%;
            padding: 14px;
            border-radius: 20px;
            border: 1px solid #c3d5e8;
            margin: 8px 0 15px;
            background: #ffffff;
            color: #1a1a1a;
        }
        .submit-review {
            background: #1a1a1a;
            color: white;
            border: none;
            padding: 16px 28px;
            border-radius: 40px;
            cursor: pointer;
            font-weight: 700;
        }
        .verify-option {
            display: flex;
            align-items: center;
            gap: 12px;
            background: #f0f4f9;
            border: 1px solid #c2d6ea;
            border-radius: 50px;
            padding: 15px;
            margin: 12px 0;
            cursor: pointer;
            font-weight: 600;
            color: #1a1a1a;
        }
        .verify-option:hover { background: #2a7faa; color: white; }
        .verification-badge {
            display: flex;
            flex-wrap: wrap;
02:10
gap: 10px;
            margin: 15px 0;
        }
        .verify-btn {
            background: #f0f4f9;
            border: 1px solid #c2d6ea;
            border-radius: 40px;
            padding: 10px 18px;
            cursor: pointer;
            font-weight: 500;
            transition: 0.2s;
            color: #1a1a1a;
        }
        .verify-btn:hover { background: #2a7faa; color: white; }
    </style>
</head>
<body>

    <div class="top-nav" id="topNav">
        <div class="brand-logo">🚗  <span>AquaShine</span></div>
        <div class="nav-links">
            <button class="nav-btn active" data-page="home">Главное</button>
            <button class="nav-btn" data-page="services">Услуги</button>
            <button class="nav-btn" data-page="contacts">Контакты</button>
            <button class="nav-btn" data-page="reviews">Отзывы</button>
            <button class="verify-top" id="verifyTopBtn"><i class="fas fa-user-check"></i> Верификация</button>
        </div>
    </div>

    <!-- ГЛАВНАЯ -->
    <div id="home" class="page active-page">
        <div class="welcome-block">
            <h1>Добро пожаловать в <span class="brand-highlight">AquaShine</span>!</h1>
            <p>AquaShine — это место, где ваш автомобиль получает заботу, который он заслуживает.</p>
        </div>
        <h2>Почему выбирают <span class="brand-highlight">AquaShine</span>?</h2>
        <div class="grid-reasons">
            <div class="card"><h3>💎  Премиум уход</h3><p>Сертифицированные средства.</p><div class="photo-placeholder">📷 Фото 4:4</div></div>
            <div class="card"><h3>⚡ Скорость</h3><p>30 минут.</p><div class="photo-placeholder">📷 Фото 4:4</div></div>
            <div class="card"><h3>🔧  Профессионалы</h3><p>Опытные мастера.</p><div class="photo-placeholder">📷 Фото 4:4</div></div>
            <div class="card"><h3>🌿  Экологично</h3><p>Биоразлагаемая химия.</p><div class="photo-placeholder">📷 Фото 4:4</div></div>
        </div>
        <p class="address-line">📍  г. Москва, ул. Автомобильная, д. 15, стр. 2</p>
        <p style="font-size: 1.3rem; font-weight: 600; color: #1a1a1a;">🚗  Заезжайте в <span class="brand-highlight">AquaShine</span> — и убедитесь в качестве сами!</p>
    </div>

    <!-- УСЛУГИ -->
    <div id="services" class="page">
        <h1>Наши услуги</h1>
        <div class="grid-services">
            <div class="card service-card" data-service="standard"><h3>🚿  Стандартная</h3><p>Кузов, коврики.</p><div class="photo-placeholder">📷 Фото 4:4</div></div>
            <div class="card service-card" data-service="premium"><h3>✨ Премиум</h3><p>Воск, чернение.</p><div class="photo-placeholder">📷 Фото 4:4</div></div>
            <div class="card service-card" data-service="express"><h3>⏱️  Экспресс</h3><p>15 минут.</p><div class="photo-placeholder">📷 Фото 4:4</div></div>
            <div class="card service-card" data-service="carpets"><h3>🧹  Выбивка ковров</h3><p>Глубокая чистка.</p><div class="photo-placeholder">📷 Фото 4:4</div></div>
            <div class="card service-card" data-service="dryclean"><h3>🧼  Химчистка</h3><p>Салон полностью.</p><div class="photo-placeholder">📷 Фото 4:4</div></div>
            <div class="card service-card" data-service="maintenance"><h3>🔩  ТО</h3><p>Диагностика.</p><div class="photo-placeholder">📷 Фото 4:4</div></div>
            <div class="card service-card" data-service="allinclusive"><h3>👑  Всё включено</h3><p>Максимум.</p><div class="photo-placeholder">📷 Фото 4:4</div></div>
        </div>
    </div>

    <!-- КОНТАКТЫ -->
    <div id="contacts" class="page">
        <h1>Контакты</h1>
        <div class="contact-grid">
            <div class="contact-card"><i class="fas fa-phone-alt"></i><p>+7 (999) 123-45-67</p></div>
            <div class="contact-card"><i class="fab fa-telegram-plane"></i><p>@aquashine_car</p></div>
            <div class="contact-card"><i class="fab fa-vk"></i><p>vk.com/aquashine</p></div>
02:10
<div class="contact-card"><i class="fas fa-maxcdn"></i><p>@aquashine.max</p></div>
        </div>
    </div>

    <!-- ОТЗЫВЫ -->
    <div id="reviews" class="page">
        <h1>Отзывы клиентов</h1>
        <div class="review-form">
            <div class="verification-badge">
                <span class="verify-btn" data-method="phone"><i class="fas fa-phone"></i> Телефон</span>
                <span class="verify-btn" data-method="email"><i class="fas fa-envelope"></i> Email</span>
                <span class="verify-btn" data-method="car"><i class="fas fa-car"></i> Номер авто</span>
                <span class="verify-btn" data-method="receipt"><i class="fas fa-receipt"></i> Номер чека</span>
                <span class="verify-btn" data-method="vk"><i class="fab fa-vk"></i> VK</span>
                <span class="verify-btn" data-method="telegram"><i class="fab fa-telegram"></i> Telegram</span>
                <span class="verify-btn" data-method="google"><i class="fab fa-google"></i> Google</span>
            </div>
            <p id="verificationStatus" style="color: #1a1a1a;">⚠️  Не верифицирован — выберите способ</p>
            <div class="stars" id="starContainer">
                <i class="fas fa-star" data-value="1"></i>
                <i class="fas fa-star" data-value="2"></i>
                <i class="fas fa-star" data-value="3"></i>
                <i class="fas fa-star" data-value="4"></i>
                <i class="fas fa-star" data-value="5"></i>
            </div>
            <select id="serviceSelect">
                <option>Стандартная мойка</option>
                <option>Премиум мойка</option>
                <option>Экспресс мойка</option>
                <option>Выбивка ковров</option>
                <option>Химчистка салона</option>
                <option>ТО автомобиля</option>
                <option>Всё включено</option>
            </select>
            <textarea id="reviewText" rows="3" placeholder="Опишите впечатления..."></textarea>
            <button class="submit-review" id="submitReviewBtn">Отправить отзыв</button>
            <p id="reviewMessage" style="margin-top: 10px; color: #1a1a1a;"></p>
        </div>
        <div id="reviewList"></div>
    </div>

    <!-- МОДАЛКА УСЛУГИ -->
    <div class="modal" id="serviceModal">
        <div class="modal-content">
            <span class="modal-close" id="modalClose">&times;</span>
            <h3 id="modalTitle"></h3>
            <p id="modalDescription"></p>
            <p id="modalIncludes"></p>
            <div class="price-tag" id="modalPrice"></div>
        </div>
    </div>

    <!-- ПАНЕЛЬ ВЕРИФИКАЦИИ -->
    <div class="verify-panel" id="verifyPanel">
        <div class="verify-panel-content">
            <span class="verify-close" id="verifyPanelClose">&times;</span>
            <h3>Верификация</h3>
            <p>Выберите способ подтверждения:</p>
            <div class="verify-option" data-method="phone"><i class="fas fa-phone"></i> Телефон (код по SMS)</div>
            <div class="verify-option" data-method="email"><i class="fas fa-envelope"></i> Email (код на почту)</div>
            <div class="verify-option" data-method="car"><i class="fas fa-car"></i> Номер автомобиля</div>
            <div class="verify-option" data-method="receipt"><i class="fas fa-receipt"></i> Номер чека</div>
            <div class="verify-option" data-method="vk"><i class="fab fa-vk"></i> ВКонтакте (переход)</div>
            <div class="verify-option" data-method="telegram"><i class="fab fa-telegram"></i> Telegram (переход)</div>
            <div class="verify-option" data-method="google"><i class="fab fa-google"></i> Google (переход)</div>
        </div>
    </div>

    <!-- МОДАЛКА ВВОДА ДАННЫХ -->
    <div class="verify-modal" id="verifyModal">
        <div class="verify-panel-content">
            <span class="verify-close" id="verifyModalClose">&times;</span>
            <h3 id="verifyModalTitle">Введите данные</h3>
02:10
<input type="text" id="verifyInput" placeholder="Введите значение">
            <button id="sendCodeBtn" class="submit-review" style="margin-top: 10px;">Получить код / Подтвердить</button>
            <p id="codeMessage" style="margin-top: 15px; color: #1a1a1a;"></p>
        </div>
    </div>

    <script>
        (function() {
            // Навигация
            const navButtons = document.querySelectorAll('.nav-btn');
            const pages = { home: document.getElementById('home'), services: document.getElementById('services'), contacts: document.getElementById('contacts'), reviews: document.getElementById('reviews') };
            navButtons.forEach(btn => {
                btn.addEventListener('click', function() {
                    navButtons.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    for (let key in pages) pages[key].classList.remove('active-page');
                    pages[this.getAttribute('data-page')].classList.add('active-page');
                });
            });

            // Верификация панель
            const verifyTopBtn = document.getElementById('verifyTopBtn');
            const verifyPanel = document.getElementById('verifyPanel');
            const verifyPanelClose = document.getElementById('verifyPanelClose');
            verifyTopBtn.addEventListener('click', () => verifyPanel.style.display = 'flex');
            verifyPanelClose.addEventListener('click', () => verifyPanel.style.display = 'none');

            // Модалка ввода
            const verifyModal = document.getElementById('verifyModal');
            const verifyModalClose = document.getElementById('verifyModalClose');
            const verifyModalTitle = document.getElementById('verifyModalTitle');
            const verifyInput = document.getElementById('verifyInput');
            const sendCodeBtn = document.getElementById('sendCodeBtn');
            const codeMessage = document.getElementById('codeMessage');

            // Обработчики методов верификации (и в панели, и в блоке отзывов)
            const allVerifyOptions = document.querySelectorAll('.verify-option, .verify-btn');
            allVerifyOptions.forEach(opt => {
                opt.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const method = this.getAttribute('data-method');
                    if (!method) return;

                    // Для соцсетей — переход
                    if (method === 'vk' || method === 'telegram' || method === 'google') {
                        let url = '#';
                        if (method === 'vk') url = 'https://vk.com';
                        else if (method === 'telegram') url = 'https://telegram.org';
                        else if (method === 'google') url = 'https://accounts.google.com';
                        window.open(url, '_blank');
                        document.getElementById('verificationStatus').innerHTML = '✅ Верификация пройдена (' + method + ')';
                        document.getElementById('verificationStatus').style.color = '#1a1a1a';
                        isVerified = true;
                        verifyPanel.style.display = 'none';
                        return;
                    }

                    // Для остальных — открываем модалку ввода
                    let title = 'Введите данные';
                    let placeholder = '';
                    if (method === 'phone') {
                        title = 'Введите номер телефона';
                        placeholder = '+7 (900) 123-45-67';
                    } else if (method === 'email') {
                        title = 'Введите email';
                        placeholder = 'example@mail.ru';
                    } else if (method === 'car') {
                        title = 'Введите номер автомобиля';
                        placeholder = 'А123БВ 77';
                    } else if (method === 'receipt') {
02:10
title = 'Введите номер чека';
                        placeholder = '№ 123456';
                    }
                    verifyModalTitle.textContent = title;
                    verifyInput.placeholder = placeholder;
                    verifyInput.value = '';
                    codeMessage.textContent = '';
                    verifyModal.style.display = 'flex';
                    verifyPanel.style.display = 'none';
                });
            });

            // Отправка кода (имитация)
            sendCodeBtn.addEventListener('click', function() {
                const val = verifyInput.value.trim();
                if (val.length < 3) {
                    codeMessage.textContent = '❌ Введите корректные данные';
                    codeMessage.style.color = '#c0392b';
                } else {
                    codeMessage.textContent = '📩  Код подтверждения отправлен! (демо: 1234)';
                    codeMessage.style.color = '#1e7e34';
                    setTimeout(() => {
                        verifyModal.style.display = 'none';
                        document.getElementById('verificationStatus').innerHTML = '✅ Верификация пройдена';
                        document.getElementById('verificationStatus').style.color = '#1a1a1a';
                        isVerified = true;
                    }, 1500);
                }
            });

            verifyModalClose.addEventListener('click', () => verifyModal.style.display = 'none');
            window.addEventListener('click', (e) => {
                if (e.target === verifyPanel) verifyPanel.style.display = 'none';
                if (e.target === verifyModal) verifyModal.style.display = 'none';
            });

            // Данные услуг
            const serviceData = {
                standard: { title: 'Стандартная', desc: 'Регулярный уход', includes: 'Кузов, коврики', price: 'от 2 100 ₽' },
                premium: { title: 'Премиум', desc: 'Комплекс', includes: 'Воск, чернение', price: 'от 4 500 ₽' },
                express: { title: 'Экспресс', desc: 'Быстро', includes: 'Кузов 15 мин', price: 'от 1 500 ₽' },
                carpets: { title: 'Выбивка', desc: 'Чистка', includes: 'Выбивка, сушка', price: 'от 1 200 ₽' },
                dryclean: { title: 'Химчистка', desc: 'Полная', includes: 'Салон, потолок', price: 'от 10 500 ₽' },
                maintenance: { title: 'ТО', desc: 'Диагностика', includes: 'Жидкости, фильтры', price: 'от 7 500 ₽' },
                allinclusive: { title: 'Всё включено', desc: 'Максимум', includes: 'Все услуги', price: 'от 20 000 ₽' }
            };

            const serviceModal = document.getElementById('serviceModal');
            document.querySelectorAll('.service-card').forEach(card => {
                card.addEventListener('click', function() {
                    const data = serviceData[this.getAttribute('data-service')];
                    document.getElementById('modalTitle').textContent = data.title;
                    document.getElementById('modalDescription').textContent = data.desc;
                    document.getElementById('modalIncludes').textContent = data.includes;
                    document.getElementById('modalPrice').textContent = data.price;
                    serviceModal.style.display = 'flex';
                });
            });
            document.getElementById('modalClose').addEventListener('click', () => serviceModal.style.display = 'none');

            // Отзывы
            let isVerified = false;
            let selectedRating = 0;
            const starIcons = document.querySelectorAll('#starContainer .fa-star');
            starIcons.forEach(star => {
                star.addEventListener('click', function() {
                    selectedRating = parseInt(this.getAttribute('data-value'));
                    updateStars();
                });
                star.addEventListener('mouseenter', function() {
02:10
starIcons.forEach(s => {
                        if (parseInt(s.getAttribute('data-value')) <= parseInt(this.getAttribute('data-value'))) s.classList.add('active');
                        else s.classList.remove('active');
                    });
                });
                star.addEventListener('mouseleave', updateStars);
            });
            function updateStars() {
                starIcons.forEach(s => {
                    if (parseInt(s.getAttribute('data-value')) <= selectedRating) s.classList.add('active');
                    else s.classList.remove('active');
                });
            }

            document.getElementById('submitReviewBtn').addEventListener('click', function() {
                const reviewMessage = document.getElementById('reviewMessage');
                if (!isVerified) {
                    reviewMessage.textContent = '❌ Сначала пройдите верификацию!';
                    reviewMessage.style.color = '#c0392b';
                    return;
                }
                if (selectedRating === 0) {
                    reviewMessage.textContent = '❌ Поставьте оценку!';
                    reviewMessage.style.color = '#c0392b';
                    return;
                }
                const text = document.getElementById('reviewText').value.trim();
                if (text.length < 5) {
                    reviewMessage.textContent = '❌ Напишите отзыв.';
                    reviewMessage.style.color = '#c0392b';
                    return;
                }
                const service = document.getElementById('serviceSelect').value;
                const stars = '★'.repeat(selectedRating) + '☆'.repeat(5-selectedRating);
                const div = document.createElement('div');
                div.style.background = 'white';
                div.style.padding = '15px';
                div.style.borderRadius = '20px';
                div.style.marginTop = '10px';
                div.style.color = '#1a1a1a';
                div.innerHTML = `<strong>${service}</strong> ${stars}<br>${text}`;
                document.getElementById('reviewList').appendChild(div);
                reviewMessage.textContent = '✅ Отзыв опубликован!';
                reviewMessage.style.color = '#1e7e34';
                document.getElementById('reviewText').value = '';
                selectedRating = 0;
                updateStars();
            });
        })();
    </script>
</body>
</html>
