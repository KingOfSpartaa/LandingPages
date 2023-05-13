const textPhone =
  "Specjalizuję się w pozagwarancyjnej wymianie potłuczonych ekranów, szybek oraz całych modułów wyświetlacza. Jeśli Twój telefon nie działa lub ma uszkodzenia mechaniczne, skontaktuj się ze mną, a zaproponuję Ci najbardziej optymalny sposób naprawy Twojego urządzenia.";
const textDesktop =
  "Specjalizuję się w pozagwarancyjnej wymianie potłuczonych ekranów, szybek oraz całych modułów wyświetlacza. Wymieniam zużyte baterie oraz regeneruję gniazda i taśmy ładowania wszystkich popularnych smartfonów: Samsung, Huawei, Sony, Xiaomi, iPhone, Lenovo, HTC, Motorola, LG itd. Jeśli Twój telefon nie działa lub ma uszkodzenia mechaniczne, skontaktuj się ze mną, a zaproponuję Ci najbardziej optymalny sposób naprawy Twojego urządzenia.";

window.addEventListener(
  "resize",
  function () {
    const img = document.querySelector(".person");
    let windowWidth = window.innerWidth;
    if (windowWidth < 576) {
      img.setAttribute("src", "./img/krystek-small.png");
      document.querySelector(".header-paragraph p").textContent = textPhone;
    } else {
      img.setAttribute("src", "./img/krystek.png");
      document.querySelector(".header-paragraph p").textContent = textDesktop;
    }
  },
  false
);
