const today = document.querySelector(".today");
const lastweek = document.querySelector(".lastweek");
const lastmonth = document.querySelector(".lastmonth");
const orderPage = document.querySelector(".table-body");
const days = document.querySelector(".days");
const graph = document.querySelector(".graph");

let weekChart;
let yearChart;


getDashboardData().then(data=>{
  const  weekChartData = data.dashboard.sales_over_time_week;
   const yearChartData = data.dashboard.sales_over_time_year;
   
    today.innerText = `$${weekChartData['1'].total} / ${weekChartData['1'].orders} orders`;

    const dataLastweek = {
        "orders": 0,
        "total": 0
    };

    for (let i = 1; i <= 7 ; i++) {
        dataLastweek["orders"] += weekChartData[i].orders;
        dataLastweek["total"] += weekChartData[i].total;
    }

    lastweek.innerText = `$${dataLastweek.total} / ${dataLastweek.orders} orders`;
    lastmonth.innerText = `$${yearChartData['2'].total} / ${yearChartData['2'].orders} orders`;


    const orders  = data.dashboard.bestsellers.map(value=>{
        return `<tr>
        <td>${value.product.name}</td>
        <td>${ value.revenue/value.units}</td>
        <td>${value.units}</td>
        <td>${ value.revenue}</td>
      </tr>`
    });
    orderPage.innerHTML = orders.join("");


    //data for week graph

    var bars = [];
    var lable = [];
   

    for (let i = 1; i <= 7; i++) {

        // percentage of order for each day scale to 75 to fit graph

        const weekRevenue = (weekChartData[i].total /  dataLastweek["total"]) * 750;

        bars.push(`<div class="bar" style="height: ${weekRevenue}px;"></div>`);

        let le;
        if(i === 1){
            le = "today"
        } else if(i === 2){
            le = "yesterday"
        }else{
            le = "day "+i
        }

        lable.push( `<div class="lebal">${le}</div>`);
    }

     weekChart = 
    `<div class="chart mt-2 " style="grid-template-columns: repeat(7,100px);padding-left: 4em;">
    ${bars.join("")}
     </div>
    <div class="chart-lebal" style="grid-template-columns: repeat(7,100px);">
    ${lable.join("")}
    </div>`


    graph.innerHTML = weekChart;





    
//total order and revenue for a year

    const dataLastYear = {
        "orders": 0,
        "total": 0
    };

    for (let i = 1; i <= 12 ; i++) {
        dataLastYear["orders"] += yearChartData[i].orders;
        dataLastYear["total"] += yearChartData[i].total;
    }






//data for year graph

    var barsYear = [];
    var lableYear = [];
   

    for (let i = 1; i <= 12; i++) {

        // percentage of order for each month scale to 75 to fit graph

        const yearRevenue = (yearChartData[i].total /  dataLastYear["total"]) * 750;



        barsYear.push(`<div class="bar" style="height: ${yearRevenue}px;"></div>`);

        let le;
        if(i === 1){
            le = "this month"
        } else if(i === 2){
            le = "last month"
        }else{
            le = "month "+i
        }

        lableYear.push( `<div class="lebal">${le}</div>`);
    }

    yearChart = 
    `<div class="chart mt-2 " style="grid-template-columns: repeat(12,70px);padding-left: 2.5em;">
    ${barsYear.join("")}
     </div>
    <div class="chart-lebal" style="grid-template-columns: repeat(12,70px);">
    ${lableYear.join("")}
    </div>`



});



var checked = false;
function swichChart() {
    checked = !checked;
    if(!checked){
        days.innerText = "7 days";
        graph.innerHTML = weekChart;

    }else{
        days.innerText  = "12 months"
        graph.innerHTML = yearChart;
    }
    
}






