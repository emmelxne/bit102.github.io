document.addEventListener('DOMContentLoaded', function() {
  const calendarGrid = document.querySelector('.calendar-grid');
  const eventDetails = document.getElementById('event-details');
  const monthYear = document.getElementById('month-year');
  const prevMonthButton = document.getElementById('prev-month');
  const nextMonthButton = document.getElementById('next-month');
  const upcomingEventsContainer = document.querySelector('.event-list');

  const events = {
    '2025-03-01': [
      {
        name: 'Event 1',
        time: '2025-03-01T10:00',
        description: 'Description for Event 1'
      }
    ],
    '2025-03-02': [
      {
        name: 'Event 2',
        time: '2025-03-02T14:00',
        description: 'Description for Event 2'
      }
    ],
    '2025-03-03': [
      {
        name: 'Event 3',
        time: '2025-03-03T09:00',
        description: 'Description for Event 3'
      }
    ]
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();

  function generateCalendar(month, year) {
    calendarGrid.innerHTML = '';
    monthYear.textContent = `${months[month]} ${year}`;

    const firstDay = new Date(year, month, 1).getDay();
    const days = daysInMonth[month];

    const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dayHeaders.forEach(day => {
      const dayHeader = document.createElement('div');
      dayHeader.classList.add('calendar-day-header');
      dayHeader.textContent = day;
      calendarGrid.appendChild(dayHeader);
    });

    for (let i = 0; i < firstDay; i++) {
      const emptyCell = document.createElement('div');
      emptyCell.classList.add('calendar-day');
      calendarGrid.appendChild(emptyCell);
    }

    for (let day = 1; day <= days; day++) {
      const date = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const dayElement = document.createElement('div');
      dayElement.classList.add('calendar-day');
      dayElement.setAttribute('data-date', date);
      dayElement.textContent = day;
      calendarGrid.appendChild(dayElement);

      dayElement.addEventListener('click', function() {
        const date = this.getAttribute('data-date');
        displayEvents(date);
      });
    }
  }

  function displayEvents(date) {
    eventDetails.innerHTML = '';
    if (events[date]) {
      events[date].forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.classList.add('calendar-item');

        const dateElement = document.createElement('div');
        dateElement.classList.add('date');
        const day = new Date(event.time).getDate();
        const month = new Date(event.time).toLocaleString('default', { month: 'short' });
        dateElement.innerHTML = `<span class="day">${day}</span><span class="month">${month}</span>`;

        const eventDetailsElement = document.createElement('div');
        eventDetailsElement.classList.add('event-details');
        eventDetailsElement.innerHTML = `
          <h3>${event.name}</h3>
          <time datetime="${event.time}">${new Date(event.time).toLocaleString()}</time>
          <p>${event.description}</p>
        `;

        eventItem.appendChild(dateElement);
        eventItem.appendChild(eventDetailsElement);
        eventDetails.appendChild(eventItem);
      });
      eventDetails.style.display = 'block';
    } else {
      eventDetails.style.display = 'none';
    }
  }

  function displayUpcomingEvents() {
    upcomingEventsContainer.innerHTML = '';
    const upcomingEvents = Object.keys(events).sort().slice(0, 5); // Display the next 5 upcoming events
    upcomingEvents.forEach(date => {
      events[date].forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.classList.add('event-item');
        eventItem.innerHTML = `
          <h3>${event.name}</h3>
          <time datetime="${event.time}">${new Date(event.time).toLocaleString()}</time>
        `;
        upcomingEventsContainer.appendChild(eventItem);
      });
    });
  }

  prevMonthButton.addEventListener('click', function() {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    generateCalendar(currentMonth, currentYear);
    calendarGrid.classList.add('fade-in');
    setTimeout(() => calendarGrid.classList.remove('fade-in'), 500);
  });

  nextMonthButton.addEventListener('click', function() {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    generateCalendar(currentMonth, currentYear);
    calendarGrid.classList.add('fade-in');
    setTimeout(() => calendarGrid.classList.remove('fade-in'), 500);
  });

  generateCalendar(currentMonth, currentYear);
  displayUpcomingEvents();
});