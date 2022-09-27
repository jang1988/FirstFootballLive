let nowDate = new Date(),
  nowDateNumber = nowDate.getDate(),
  nowMonth = nowDate.getMonth(),
  nowYear = nowDate.getFullYear(),
  container = document.querySelector('#month-calendar'),
  monthContainer = container.querySelector('.month-name'),
  yearContainer = container.querySelector('.year-name'),
  daysContainer = container.querySelector('.days'),
  prev = container.querySelector('.prev'),
  next = container.querySelector('.next'),
  monthName = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь',
];

// let curDate = nowDate.setMonth(nowDate.getMonth() - 1);


function setMonthCalendar(year, month) {
  let monthDays = new Date(year, month + 1, 0).getDate(),
    monthPrefix = new Date(year, month, 0).getDay(),
    monthDaysText = '';

  monthContainer.textContent = monthName[month];
  yearContainer.textContent = year;
  daysContainer.innerHTML = '';

  if (monthPrefix > 0) {
    for (let i = 1; i <= monthPrefix; i++) {
      monthDaysText += '<li></li>';
    }
  }

  for (let i = 1; i <= monthDays; i++) {
    monthDaysText += '<li>' + i + '</li>';
  }

  daysContainer.innerHTML = monthDaysText;

  if (month == nowMonth && year == nowYear) {
    days = daysContainer.querySelectorAll('li');
    days[monthPrefix + nowDateNumber - 1].classList.add('date-now');
  }
}

setMonthCalendar(nowYear, nowMonth);

prev.onclick = function () {
    let curDate = new Date(yearContainer.textContent,monthName.indexOf(monthContainer.textContent));

    curDate.setMonth(curDate.getMonth() - 1);
    

    let curYear = curDate.getFullYear(),
        curMonth = curDate.getMonth();

    setMonthCalendar(curYear,curMonth);
}

next.onclick = function () {
    let curDate = new Date(yearContainer.textContent,monthName.indexOf(monthContainer.textContent));

    curDate.setMonth(curDate.getMonth() + 1);

    let curYear = curDate.getFullYear(),
        curMonth = curDate.getMonth();

    setMonthCalendar(curYear,curMonth);
}
