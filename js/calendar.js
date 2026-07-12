// ==========================
// Trading Calendar
// ==========================

const trades = JSON.parse(localStorage.getItem("trades")) || [];

const events = trades.map(trade => {

    let color = "#facc15"; // BE (kuning)

    if (trade.result === "WIN") color = "#22c55e";
    if (trade.result === "LOSE") color = "#ef4444";

    return {
        title: `${trade.pair} (${trade.result})`,
        start: trade.date,
        color: color
    };

});

document.addEventListener("DOMContentLoaded", function () {

    const calendarEl = document.getElementById("calendar");

    const calendar = new FullCalendar.Calendar(calendarEl, {

        initialView: "dayGridMonth",

        height: "auto",

        events: events

    });

    calendar.render();

});
