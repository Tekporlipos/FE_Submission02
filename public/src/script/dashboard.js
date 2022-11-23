const today = document.querySelector(".today");
const lastweek = document.querySelector(".lastweek");
const lastmonth = document.querySelector(".lastmonth");
const orderPage = document.querySelector(".table-body");
const days = document.querySelector(".days");

let weekChart = {};
let yearChart  = {};


getDashboardData().then(data=>{
    weekChart = data.dashboard.sales_over_time_week;
    yearChart = data.dashboard.sales_over_time_year;
   
    today.innerText = `$${weekChart['1'].total} / ${weekChart['1'].orders} orders`;

    const dataLastweek = {
        "orders": 0,
        "total": 0
    };

    for (let i = 1; i <= 7 ; i++) {
        dataLastweek["orders"] += weekChart[i].orders;
        dataLastweek["total"] += weekChart[i].total;
    }
    lastweek.innerText = `$${dataLastweek.total} / ${dataLastweek.orders} orders`;
    lastmonth.innerText = `$${yearChart['2'].total} / ${yearChart['2'].orders} orders`;




    const orders  = data.dashboard.bestsellers.map(value=>{
        return `<tr>
        <td>${value.product.name}</td>
        <td>${ value.revenue/value.units}</td>
        <td>${value.units}</td>
        <td>${ value.revenue}</td>
      </tr>`
    });
    orderPage.innerHTML = orders.join("");

});





var checked = false;
function swichChart() {
    checked = !checked;
    days.innerText = !checked? "7 days":"12 months"
}






