const levels = [
  {
    title: "Ниво 1",
    type: "photo",
    mapLink: "https://www.google.com/maps/search/?api=1&query=ул.+Пенчо+Славейков",
    text: `📍 Старт: ул. Пенчо Славейков
📸 ВАЖНО!

Всички снимки от мисията се изпращат в групата:

"НАСРАНИ ОТ ЯДЕНЕ"

Следим те. 👀
ВАЖНО! ПАЗИ ВСИЧКИ ПЛИКОВЕ.

Първата следа се крие там,
където ароматът на кафе събужда града,
а разговорите никога не свършват.

Когато стигнеш до мястото — изпрати снимка пред него.`
  },
  {
    title: "Ниво 2",
    type: "photo",
    image: "images/coffee.png",
    text: `Отлична работа, агент Александра.
Събра първото доказателство.

Следващото място е там,
където всеки ден се грижиш никой ученик да не остане гладен.

Там те чака плик.

Когато стигнеш — изпрати селфи.`
  },
  {
    title: "Ниво 3",
    type: "free",
    mapLink: "https://www.google.com/maps/search/?api=1&query=ул.+Любен+Каравелов",
    text: `🗺 Отвори картата.

Следващото доказателство е в приблизителна зона около ул. Любен Каравелов.

Къде ходеше, когато казваше, че играеш карти в Криска?

Там те чака скрит плик.`
  },
  {
    title: "Ниво 4",
    type: "answer",
    text: "В плика има въпрос:",
    question: "Какво е презимето на Борко?",
    answers: ["миленов"]
  },
  {
    title: "Ниво 5",
    type: "answer",
    question: "Коя година ходихте в Русе с Петрова?",
    answers: ["2021", "2021г", "2021 г"]
  },
  {
    title: "Ниво 6",
    type: "free",
    text: `Намери още един плик.

Подсказка: намира се в Борко.`
  },
  {
    title: "Ниво 7",
    type: "free",
    text: `Намери пейка.

Седни за 30 секунди.

Усмихни се.

Продължи.

ВИЖДАМЕ ТЕ!`
  },
  {
    title: "Ниво 8",
    type: "answer",
    question: "Кой винаги закъснява най-много?",
    answers: ["криска", "кристина"]
  },
  {
    title: "Ниво 9",
    type: "answer",
    question: "На коя дата е родена Йони Георгиева?",
    answers: ["26.10.2002", "26/10/2002", "26 10 2002"]
  },
  {
    title: "Ниво 10",
    type: "photo",
    text: `Мини мисия:

Изпрати ни снимка на най-смешната физиономия.`
  },
  {
    title: "Ниво 11",
    type: "photo",
    text: `Намери куче.

Или поне снимка на куче.

Изпрати снимката, за да продължиш.`
  },
  {
    title: "Ниво 12",
    type: "freeText",
    image: "images/birthday-girl.jpg",
    question: "Напиши една дума, която описва последните 25 години."
  },
  {
    title: "Ниво 13",
    type: "answer",
    question: "Какъв е номерът на колата на Мони?",
    answers: ["вт4920мв", "вт 4920 мв", "vt4920mv", "vt 4920 mv"]
  },
  {
    title: "Ниво 14",
    type: "answer",
    question: `Познай кой е написал:

„Мара е Къно, виждам ти зърната“`,
    answers: ["георги", "гого"]
  },
  {
    title: "Ниво 15",
    type: "answer",
    question: "Кой казва – „Каква е тази татуировка? Ти нормална ли си? Мн грозна.“",
    answers: ["митко"]
  },
  {
    title: "Ниво 16",
    type: "free",
    mapLink: "https://www.google.com/maps/search/?api=1&query=улица+Г.+Столетов",
    text: `📍 Отвори картата.

Отиди до мястото, което познаваш добре от семейството си.

Там те чака следващият плик.

След като го намериш, продължи.`
  },
  {
    title: "Ниво 17",
    type: "photo",
    text: `Намери предмет, започващ с буквата А.

Прикачи снимка и продължи.`
  },
  {
    title: "Ниво 18",
    type: "photo",
    text: "Изпрати снимка на любимото си място в Стражица."
  },
  {
    title: "Ниво 19",
    type: "free",
    text: `Кажи на случаен човек:

“Днес съм на 25!”

После продължи към следващото ниво.`
  },
  {
    title: "Ниво 20",
    type: "answer",
    question: "На коя дата се гаджосахте с Борко?",
    answers: ["03.12.2025", "3.12.2025", "03/12/2025", "3/12/2025"]
  },
  {
    title: "Ниво 21",
    type: "answer",
    question: "Коя зодия е Ива?",
    answers: ["водолей"]
  },
  {
    title: "Ниво 22",
    type: "photo",
    text: `Добре, де, спираме да те разкарваме.

Отиди там, където Криска работи.

Там те чака твоят подарък и последният плик.

Когато ги откриеш, изпрати снимка.`
  },
  {
    title: "Ниво 23",
    type: "answer",
    question: `ХА ХА. Сори, за това имаме пари.

Кои са петте момичета, които организираха това приключение?
Започни с най-голямата до най-малката.`,
    answers: [
      "кристина, иванела, мирелла, йоанна, йоана",
      "кристина иванела мирелла йоанна йоана"
    ]
  },
  {
    title: "Ниво 24",
    type: "answer",
    image: "images/friends.jpg",
    question: `🎉 Финал

Честит 25-ти рожден ден, Александра!

Разшифровай буквите от 6-те плика и въведи последната дестинация.`,
    answers: ["базата", "bazata"],
    final: true
  }
];

let current = Number(localStorage.getItem("alexandra-level") || 0);

const title = document.getElementById("title");
const text = document.getElementById("text");
const badge = document.getElementById("badge");
const bar = document.getElementById("bar");
const levelImage = document.getElementById("levelImage");
const mapBtn = document.getElementById("mapBtn");
const answerBox = document.getElementById("answerBox");
const answerInput = document.getElementById("answerInput");
const checkBtn = document.getElementById("checkBtn");
const photoBox = document.getElementById("photoBox");
const photoInput = document.getElementById("photoInput");
const preview = document.getElementById("preview");
const photoNextBtn = document.getElementById("photoNextBtn");
const freeBox = document.getElementById("freeBox");
const nextBtn = document.getElementById("nextBtn");
const message = document.getElementById("message");

function normalize(s) {
  return (s || "")
    .toLowerCase()
    .replaceAll("ѝ", "и")
    .replace(/[.,!?'"„“:;()\-\s]/g, "")
    .trim();
}

function hideAll() {
  levelImage.classList.add("hidden");
  mapBtn.classList.add("hidden");
  answerBox.classList.add("hidden");
  photoBox.classList.add("hidden");
  freeBox.classList.add("hidden");
  preview.classList.add("hidden");
  photoInput.value = "";
  photoNextBtn.disabled = true;
  answerInput.value = "";
  message.textContent = "";
}

function render() {
  if (current >= levels.length) {
    title.textContent = "Край ❤️";
    text.textContent = "Мисията е изпълнена. Чакаме те!";
    hideAll();
    badge.textContent = "Готово";
    bar.style.width = "100%";
    confetti();
    return;
  }

  const l = levels[current];
  hideAll();

  title.textContent = l.title;
  badge.textContent = `${l.title} / ${levels.length}`;
  bar.style.width = `${((current + 1) / levels.length) * 100}%`;

  if (l.image) {
    levelImage.src = l.image;
    levelImage.classList.remove("hidden");
  }

  if (l.mapLink) {
    mapBtn.href = l.mapLink;
    mapBtn.classList.remove("hidden");
  }

  if (l.type === "answer") {
    text.textContent = (l.text ? l.text + "\n\n" : "") + l.question;
    answerBox.classList.remove("hidden");
  } else if (l.type === "photo") {
    text.textContent = l.text;
    photoBox.classList.remove("hidden");
  } else if (l.type === "freeText") {
    text.textContent = l.question;
    answerBox.classList.remove("hidden");
  } else {
    text.textContent = l.text;
    freeBox.classList.remove("hidden");
  }
}

function goNext() {
  playSuccess();
  confetti();
  current++;
  localStorage.setItem("alexandra-level", current);
  render();
}

checkBtn.addEventListener("click", () => {
  const l = levels[current];

  if (l.type === "freeText") {
    if (answerInput.value.trim().length < 2) {
      message.textContent = "Напиши поне една дума 😄";
      return;
    }
    goNext();
    return;
  }

  const user = normalize(answerInput.value);
  const ok = l.answers.some(a => normalize(a) === user);

  if (ok) {
    if (l.final) {
      document.getElementById("finalSound").play().catch(() => {});
      confetti();
      title.textContent = "🎉 Честит рожден ден!";
      text.textContent = `Правилен отговор: БАЗАТА!

Тичай към последната дестинация.
Ние те чакаме с подаръци, торта и много любов ❤️`;
      answerBox.classList.add("hidden");
      mapBtn.classList.add("hidden");
      bar.style.width = "100%";
      localStorage.setItem("alexandra-level", levels.length);
    } else {
      goNext();
    }
  } else {
    message.textContent = "Грешен отговор 😈 Опитай пак!";
  }
});

answerInput.addEventListener("keydown", e => {
  if (e.key === "Enter") checkBtn.click();
});

photoInput.addEventListener("change", () => {
  const file = photoInput.files[0];
  if (!file) return;
  preview.src = URL.createObjectURL(file);
  preview.classList.remove("hidden");
  photoNextBtn.disabled = false;
});

photoNextBtn.addEventListener("click", goNext);
nextBtn.addEventListener("click", goNext);

function playSuccess() {
  document.getElementById("successSound").play().catch(() => {});
}

function confetti() {
  const box = document.getElementById("confetti");
  const colors = ["#ff5da2", "#7c5cff", "#00c2ff", "#ffe36e", "#6effa8"];

  for (let i = 0; i < 90; i++) {
    const p = document.createElement("div");
    p.className = "confetti-piece";
    p.style.left = Math.random() * 100 + "vw";
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.animationDelay = Math.random() * 0.5 + "s";
    p.style.transform = `rotate(${Math.random() * 360}deg)`;
    box.appendChild(p);
    setTimeout(() => p.remove(), 3500);
  }
}

document.getElementById("musicBtn").addEventListener("click", () => {
  window.open("https://www.youtube.com/results?search_query=Billie+Eilish+bad+guy", "_blank");
});

render();
