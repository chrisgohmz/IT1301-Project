document.addEventListener('DOMContentLoaded', () => {
  const options1 = {
    input: true,
    actions: {
      changeToInput(e, HTMLInputElement, dates, time, hours, minutes, keeping) {
        if (dates[0]) {
          HTMLInputElement.value = dates[0];
          // if you want to hide the calendar after picking a date
          const sel_dt = new Date(dates[0])
          calendar2.settings.range.min = (new Date(sel_dt.setDate(sel_dt.getDate() + 1))).toISOString().split('T')[0];
          calendar2.reset()
          calendar.HTMLElement.classList.add('vanilla-calendar_hidden');
          calendar2.HTMLInputElement.value = '';
        } else {
          HTMLInputElement.value = '';
        }
      },
    },

    date: {
      min: (new Date()).toISOString().split('T')[0]
    }
  };

  const options2 = {
    input: true,
    actions: {
      changeToInput(e, HTMLInputElement, dates, time, hours, minutes, keeping) {
        if (dates[0]) {
          HTMLInputElement.value = dates[0];
          // if you want to hide the calendar after picking a date
          calendar2.HTMLElement.classList.add('vanilla-calendar_hidden');
        } else {
          HTMLInputElement.value = '';
        }
      },
    },
  };
  
  const calendar = new VanillaCalendar('#calendar-input', options1);
  calendar.init();

  const calendar2 = new VanillaCalendar('#calendar-input2', options2);
  calendar2.init();
});

