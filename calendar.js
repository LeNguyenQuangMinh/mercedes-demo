const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const date = new Date();

function render() {
    // -------Set ngày đầu tiên bằng 1 để xem nó bắt đầu thứ mấy----
    date.setDate(1);
    const firstIndex = date.getDay();

    const monthDays = $(".calendar__days");

    // -----------Ngày cuối cùng của tháng trước--------
    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    // -----------Ngày cuối cùng của tháng hiện tại----------
    const currentLastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    // ---------Thứ cuối cùng của tháng hiện tại ---------
    const currentLastIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();

    // --------Số ô còn trống ----------
    const emptyDatePlace = 7 - 1 - currentLastIndex;

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    $(".calendar__date h1").innerHTML = months[date.getMonth()];
    $(".calendar__date p").innerHTML = date.toDateString();
    let days = "";

    // -----------Hiển thị ngày của tháng trước-----
    for (let x = firstIndex; x > 0; x--) {
        days += `<div class="prev-day">${prevLastDay - x + 1}</div>`;
    }
    // Hiện thị các ngày của tháng hiện tại
    for (let i = 1; i <= currentLastDay; i++) {
        if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth() &&
            date.getFullYear() === new Date().getFullYear()
        ) {
            days += `<div class= "today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }

    // -----------Hiển thị ngày của tháng sau---------
    for (j = 1; j <= emptyDatePlace; j++) {
        days += `<div class="next-day">${j}</div>`;
    }

    monthDays.innerHTML = days;
}

// ---------Prev Month Btn--------
$(".prev").onclick = () => {
    date.setMonth(date.getMonth() - 1);
    render();
};

// ----Next Month Btn----
$(".next").onclick = () => {
    date.setMonth(date.getMonth() + 1);
    render();
};

render();
