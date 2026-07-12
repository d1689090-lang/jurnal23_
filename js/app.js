// =======================
// Trading Journal Dashboard
// =======================

// Modal awal
const modalAwal = 10000;

// Ambil data dari LocalStorage
const trades = JSON.parse(localStorage.getItem("trades")) || [];

// Statistik
let totalProfit = 0;
let win = 0;
let lose = 0;

// Isi tabel
const tbody = document.getElementById("recentTrades");
tbody.innerHTML = "";

trades.forEach(trade => {

    totalProfit += Number(trade.profit);

    if(trade.result === "WIN"){
        win++;
    }

    if(trade.result === "LOSE"){
        lose++;
    }

    tbody.innerHTML += `
    <tr>
        <td>${trade.date}</td>
        <td>${trade.pair}</td>
        <td class="${trade.profit>=0?'win':'lose'}">
            ${trade.profit}
        </td>
        <td class="${trade.result==='WIN'?'win':'lose'}">
            ${trade.result}
        </td>
    </tr>
    `;

});

// Update Dashboard

document.getElementById("portfolio").textContent =
"$"+(modalAwal+totalProfit).toFixed(2);

document.getElementById("profit").textContent =
"$"+totalProfit.toFixed(2);

document.getElementById("win").textContent = win;

document.getElementById("lose").textContent = lose;

const totalTrade = win + lose;

document.getElementById("winrate").textContent =
totalTrade===0
? "0%"
: ((win/totalTrade)*100).toFixed(1)+"%";


// =======================
// Candlestick Chart
// =======================

const chart = LightweightCharts.createChart(
document.getElementById("chart"),{

width:document.getElementById("chart").clientWidth,

height:450,

layout:{
background:{
color:"#1e293b"
},
textColor:"#ffffff"
},

grid:{
vertLines:{
color:"#2f3b52"
},
horzLines:{
color:"#2f3b52"
}
}

});

const candleSeries =
chart.addCandlestickSeries();

candleSeries.setData([

{time:"2026-07-07",open:100,high:120,low:95,close:110},

{time:"2026-07-08",open:110,high:130,low:105,close:125},

{time:"2026-07-09",open:125,high:140,low:120,close:132},

{time:"2026-07-10",open:132,high:150,low:128,close:145},

{time:"2026-07-11",open:145,high:160,low:140,close:150},

{time:"2026-07-12",open:150,high:170,low:148,close:165}

]);

window.addEventListener("resize",()=>{

chart.applyOptions({

width:document.getElementById("chart").clientWidth

});

});
