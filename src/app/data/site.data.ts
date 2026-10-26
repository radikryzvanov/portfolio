export const SITE = {
  name: 'Радик Рызванов',
  telegramUrl: 'https://t.me/radik_ryzvanov',
  telegramHandle: '@radik_ryzvanov',
  phoneHref: 'tel:+79084741031',
  phoneText: '+7 908 474-10-31',
  githubUrl: 'https://github.com/radikryzvanov',
};

export interface Service {
  title: string;
  text: string;
  price: string;
  main?: boolean;
  bullets?: string[];
}

export const SERVICES: Service[] = [
  {
    title: 'Telegram-бот записи',
    text: 'Клиент выбирает услугу и время прямо в чате, без звонков. Вам остаётся принимать гостей.',
    price: 'от 15 000 ₽',
    main: true,
    bullets: [
      'Запись на услугу и удобное время',
      'Напоминание о визите',
      'Перенос и отмена записи в один клик',
      'Сообщение вам о каждой новой записи',
    ],
  },
  {
    title: 'Сайт-визитка или лендинг',
    text: 'Современный сайт, который хорошо выглядит на телефоне и объясняет клиенту, что вы предлагаете и как записаться.',
    price: 'от 20 000 ₽',
  },
  {
    title: 'Доработка вашего сайта',
    text: 'Исправлю то, что не работает: кнопки, формы, отображение на телефоне. Подключу онлайн-запись или заявки.',
    price: 'от 3 000 ₽',
  },
];

export interface Work {
  kind: string;
  demo: boolean;
  title: string;
  task: string;
  features: string;
  tags: string[];
  image?: string;
  alt?: string;
  position?: string;
  links?: { label: string; url: string; primary?: boolean }[];
}

export const WORKS: Work[] = [
  {
    kind: 'Демо-проект', demo: true,
    title: 'Сайт для кафе «Плов центр»',
    task: 'Принимать заказы на самовывоз без звонков и очередей.',
    features: 'Меню с ценами, корзина, выбор времени, готовый текст заказа для WhatsApp, Max и ВКонтакте.',
    tags: ['Angular 22', 'TypeScript', 'signals'],
    image: 'assets/plov-center.webp', alt: 'Главная страница сайта кафе Плов центр', position: 'top center',
    links: [
      { label: 'Смотреть', url: 'https://plov-center-cafe.vercel.app', primary: true },
      { label: 'Код', url: 'https://github.com/radikryzvanov/plov-center-cafe' },
    ],
  },
  {
    kind: 'Демо-проект', demo: true,
    title: 'Барбершоп: сайт и бот записи',
    task: 'Дать салону онлайн-запись без звонков.',
    features: 'Концепт сайта и диалога бота: услуга, мастер, время, напоминания, промокод новому клиенту. Показ по запросу.',
    tags: ['Концепт', 'Telegram-бот'],
    image: 'assets/barbershop.webp', alt: 'Концепт сайта барбершопа', position: 'top left',
  },
  {
    kind: 'Личный проект', demo: false,
    title: 'Сайт-портфолио (этот сайт)',
    task: 'Показать работы и принимать заявки в Telegram.',
    features: 'Адаптивный сайт на Angular 22. Код открыт на GitHub.',
    tags: ['Angular 22', 'TypeScript'],
    links: [{ label: 'Код', url: 'https://github.com/radikryzvanov/portfolio' }],
  },
  {
    kind: 'Личный проект', demo: false,
    title: 'Бот поиска вакансий',
    task: 'Не искать вакансии вручную каждый день.',
    features: 'Сам запускается каждые 2 часа через GitHub Actions, собирает вакансии с выбранных площадок, отсеивает лишнее и присылает новые в Telegram. Делит вакансии на основную работу и подработку. Можно запустить и вручную.',
    tags: ['Node.js', 'GitHub Actions', 'Telegram'],
    image: 'assets/vacancy-bot.webp', alt: 'Бот присылает найденные вакансии в Telegram', position: 'center',
    links: [{ label: 'Код', url: 'https://github.com/radikryzvanov/vacancy-bot' }],
  },
  {
    kind: 'Демо-проект', demo: true,
    title: 'Mister Cake: сайт-меню кофейни',
    task: 'Показать меню кофейни и собрать заказ в одну корзину.',
    features: 'Меню из четырёх разделов, пицца в трёх размерах, корзина с подсчётом суммы и готовым сообщением для мессенджера.',
    tags: ['Angular 22', 'signals', 'TypeScript'],
    image: 'assets/mister-cake.webp', alt: 'Главная страница сайта Mr.Cake', position: 'top center',
    links: [
      { label: 'Смотреть', url: 'https://mister-cake.vercel.app', primary: true },
      { label: 'Код', url: 'https://github.com/radikryzvanov/mister-cake' },
    ],
  },
  {
    kind: 'Демо-проект', demo: true,
    title: 'YieldFlow ERP: учёт птицефабрики',
    task: 'Собрать в одном окне учёт птицефабрики вместо таблиц и бумажных журналов.',
    features: 'Девять разделов: птичники, склад яйца, инкубатор, склад кормов, ветеринария, убой, логистика, элеватор и финансовый калькулятор. Прибыль и остатки считаются автоматически, данные сохраняются в браузере, таблицы выгружаются в файл. Данные в демо вымышленные.',
    tags: ['Angular 22', 'TypeScript', 'signals'],
    image: 'assets/yieldflow-erp.webp', alt: 'Раздел «Птичники» в системе учёта птицефабрики', position: 'top left',
    links: [
      { label: 'Смотреть', url: 'https://yield-flow-erp.vercel.app', primary: true },
      { label: 'Код', url: 'https://github.com/radikryzvanov/yield-flow-erp' },
    ],
  },
  {
    kind: 'Демо-проект', demo: true,
    title: 'ИИ-агент для карточек Wildberries и Ozon',
    task: 'Быстрее готовить описания и картинки для карточек товара.',
    features: 'Задаёт 4 вопроса о товаре и пишет описание с SEO-ключами, по фото собирает инфографику, отправляет описание в карточку через API Wildberries и Ozon. Публикация сделана по документации API, на реальном магазине пока не проверялась.',
    tags: ['Node.js', 'grammY', 'sharp'],
    image: 'assets/wb-ozon-bot.webp', alt: 'Бот задаёт вопросы о товаре в Telegram', position: 'center',
    links: [{ label: 'Код', url: 'https://github.com/radikryzvanov/wb-ozon-bot' }],
  },
  {
    kind: 'Личный проект', demo: false,
    title: 'Obsidian AI Bridge: заметки через Telegram',
    task: 'Не терять идеи, ссылки и конспекты.',
    features: 'Превращает текст, голосовые, фото, PDF, Word и ссылки в заметки Obsidian. Режим учёбы: конспекты, карточки с повторениями, квизы. Ответы по своим заметкам с источниками. 44 автотеста.',
    tags: ['Node.js', 'grammY', 'Gemini API'],
    image: 'assets/obsidian-bot.webp', alt: 'Ответы Telegram-бота: заметки сохранены в Obsidian', position: 'center',
    links: [{ label: 'Код', url: 'https://github.com/radikryzvanov/obsidian-ai-bridge' }],
  },
];

export const STEPS = [
  { title: 'Обсуждаем задачу', text: 'Коротко выясняю, что нужно вашему бизнесу и что у вас уже есть.' },
  { title: 'Показываю превью', text: 'Вы сразу видите, как будет выглядеть сайт или как говорит бот.' },
  { title: 'Правим до результата', text: 'Вносим правки, пока вам не понравится.' },
  { title: 'Запуск и поддержка', text: 'Запускаю и остаюсь на связи, если что-то понадобится.' },
];

export const FAQ = [
  { q: 'Сколько это стоит?', a: 'Ориентиры: бот записи от 15 000 ₽, сайт-визитка или лендинг от 20 000 ₽, доработка вашего сайта от 3 000 ₽. Точную цену называю после обсуждения задачи, до начала работы.' },
  { q: 'Сколько времени занимает работа?', a: 'Зависит от задачи. Небольшой сайт или бот обычно делается за несколько дней или пару недель. Конкретный срок называю заранее, когда понятен объём.' },
  { q: 'Что нужно от меня?', a: 'Рассказать о бизнесе и прислать то, что есть: тексты, фото, прайс, контакты. Если чего-то нет, подскажу, как это подготовить.' },
  { q: 'У вас уже есть клиенты?', a: 'Пока это демо и личные проекты, они подписаны честно. Поэтому я сначала показываю превью, и вы видите результат до запуска, а не покупаете вслепую.' },
  { q: 'Используете ли вы нейросети?', a: 'Да, я работаю с ИИ-инструментами: они ускоряют рутину и помогают быстрее показывать превью. Как делать и что выбрать, решаю я, результат проверяю сам и могу объяснить, как всё устроено. Для вас это быстрее по срокам, а контроль качества остаётся у меня.' },
  { q: 'Как оплатить?', a: 'Я самозанятый, оплата на карту, чек выдаю. Порядок оплаты (например, часть вперёд, остальное после сдачи) обсуждаем заранее.' },
  { q: 'Бот будет разговаривать как живой человек?', a: 'Тон делаю тёплым и живым, чтобы клиенту было приятно писать. Но бот не выдаёт себя за человека: если спросят, честно скажет, что это виртуальный помощник. Сложные вопросы и жалобы передаёт вам.' },
];
