const T = {
  ru: {
    nav_services:"Услуги", nav_process:"Как работаем", nav_contact:"Контакты",
    h1:"Сайты и Telegram-боты под ключ",
    lead:"Мы создаём сайты-визитки, интернет-магазины, лендинги и ботов для бизнеса. Запускаем проект и поддерживаем его после запуска.",
    cta_order:"Заказать в Telegram", cta_channel:"Наш канал", online:"Админ на связи 24/7",
    s_title:"Что мы делаем", s_sub:"Берём проект целиком: от идеи до работающего сайта или бота.",
    r1_t:"Сайты-визитки", r1_p:"Небольшой сайт, который рассказывает о вас и вашем деле: услуги, контакты, форма для заявок.",
    r2_t:"Интернет-магазины", r2_p:"Каталог, корзина и приём заказов. Покупатель выбирает товар и оформляет заказ без звонков.",
    r3_t:"Лендинги", r3_p:"Одна страница под один товар или услугу, которая ведёт посетителя к заявке.",
    r4_t:"Telegram-боты", r4_p:"Боты для заказов, заявок и ответов на частые вопросы. Клиенты пишут вам там, где им удобно.",
    r5_t:"Поддержка сайтов", r5_p:"Обновляем тексты и разделы, исправляем ошибки и развиваем уже готовые сайты.",
    p_title:"Как мы работаем", p_sub:"Четыре шага. На каждом вы знаете, что происходит с проектом.",
    st1_t:"Заявка", st1_p:"Вы пишете в бот, что нужно создать.",
    st2_t:"Обсуждение", st2_p:"Уточняем задачу, сроки и стоимость.",
    st3_t:"Разработка", st3_p:"Делаем проект и показываем промежуточный результат.",
    st4_t:"Запуск", st4_p:"Публикуем и остаёмся на связи для правок.",
    c_title:"Расскажите, что нужно создать", c_sub:"Оставьте заявку в боте или напишите администратору. Мы отвечаем в любое время.",
    l_bot:"Оставить заявку", l_admin:"Написать администратору", l_channel:"Telegram-канал",
    foot:"Сайты и IT-услуги"
  },
  uz: {
    nav_services:"Xizmatlar", nav_process:"Qanday ishlaymiz", nav_contact:"Aloqa",
    h1:"Saytlar va Telegram botlar kalit topshirish asosida",
    lead:"Biz biznes uchun vizitka saytlar, internet-do'konlar, lendinglar va botlar yaratamiz. Loyihani ishga tushiramiz va keyin ham qo'llab-quvvatlaymiz.",
    cta_order:"Telegramda buyurtma berish", cta_channel:"Kanalimiz", online:"Admin 24/7 aloqada",
    s_title:"Nima qilamiz", s_sub:"Loyihani to'liq o'z zimmamizga olamiz: g'oyadan tayyor sayt yoki botgacha.",
    r1_t:"Vizitka saytlar", r1_p:"Siz va ishingiz haqida gapiradigan ixcham sayt: xizmatlar, aloqa ma'lumotlari va ariza shakli.",
    r2_t:"Internet-do'konlar", r2_p:"Katalog, savat va buyurtmalarni qabul qilish. Xaridor qo'ng'iroqsiz mahsulot tanlab buyurtma beradi.",
    r3_t:"Lendinglar", r3_p:"Bitta mahsulot yoki xizmat uchun bitta sahifa, u mijozni arizaga olib boradi.",
    r4_t:"Telegram botlar", r4_p:"Buyurtmalar, arizalar va tez-tez beriladigan savollarga javob beruvchi botlar. Mijozlar sizga o'zlariga qulay joyda yozadi.",
    r5_t:"Saytlarni qo'llab-quvvatlash", r5_p:"Matn va bo'limlarni yangilaymiz, xatolarni tuzatamiz va tayyor saytlarni rivojlantiramiz.",
    p_title:"Qanday ishlaymiz", p_sub:"To'rt qadam. Har bir bosqichda loyiha bilan nima bo'layotganini bilasiz.",
    st1_t:"Ariza", st1_p:"Botga nima yaratish kerakligini yozasiz.",
    st2_t:"Muhokama", st2_p:"Vazifa, muddat va narxni aniqlaymiz.",
    st3_t:"Ishlab chiqish", st3_p:"Loyihani qilamiz va oraliq natijani ko'rsatamiz.",
    st4_t:"Ishga tushirish", st4_p:"E'lon qilamiz va tuzatishlar uchun aloqada qolamiz.",
    c_title:"Nima yaratish kerakligini yozing", c_sub:"Botda ariza qoldiring yoki adminga yozing. Biz istalgan vaqtda javob beramiz.",
    l_bot:"Ariza qoldirish", l_admin:"Adminga yozish", l_channel:"Telegram kanal",
    foot:"Saytlar va IT-xizmatlar"
  }
};

function setLang(l){
  document.documentElement.lang = l;
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    var v = T[l][el.getAttribute('data-i18n')];
    if (v) el.textContent = v;
  });
  document.querySelectorAll('.lang button').forEach(function(b){
    b.setAttribute('aria-pressed', b.dataset.lang === l ? 'true' : 'false');
  });
  try { localStorage.setItem('lang', l); } catch(e) {}
}

document.querySelectorAll('.lang button').forEach(function(b){
  b.addEventListener('click', function(){ setLang(b.dataset.lang); });
});

var saved = 'ru';
try { saved = localStorage.getItem('lang') || 'ru'; } catch(e) {}
if (saved !== 'ru' && T[saved]) setLang(saved);

document.getElementById('y').textContent = new Date().getFullYear();