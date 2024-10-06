const calendar = document.getElementById('calendar-body');
const monthYear = document.getElementById('month-year');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

function renderCalendar(month, year) {
    calendar.innerHTML = '';  // Clear previous calendar

    
    let firstDay = new Date(year, month, 1).getDay();

    // Days in month
    let daysInMonth = new Date(year, month + 1, 0).getDate();

    // Update month-year display
    monthYear.textContent = `${months[month]} ${year}`;

    // Create table rows and cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        let row = document.createElement('tr');

        // Create table cells for each day of the week
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement('td');
                row.appendChild(cell);
            } else if (date > daysInMonth) {
                break;
            } else {
                let cell = document.createElement('td');
                cell.textContent = date;

                // Highlight today's date
                if (date === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                    cell.style.backgroundColor = '#FFDDC1';
                }

                row.appendChild(cell);
                date++;
            }
        }

        calendar.appendChild(row);
    }
}

function changeMonth(direction) {
    currentMonth += direction;

    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }

    renderCalendar(currentMonth, currentYear);
}

prevBtn.addEventListener('click', () => changeMonth(-1));
nextBtn.addEventListener('click', () => changeMonth(1));

// Initial render
renderCalendar(currentMonth, currentYear);