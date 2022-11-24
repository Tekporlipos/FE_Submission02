const page = document.querySelector(".current-page");
const totalPage = document.querySelector(".total-page");
const orderPage = document.querySelector(".table-body");
const search = document.querySelector(".search");
var searchPage = 1;
var searchValue = "";
getOrdersBySearch();





function searchOrders(){
    searchValue = search.value;
    if(searchValue.length > 0){
        searchPage = 1;
    }
    getOrdersBySearch();
  }


const inputChange = debounce(() => searchOrders());



function orderByPagePrev() {
    searchPage = searchPage < 1 ? 1 : searchPage > 50 ? 50 : searchPage-1;
    getOrdersBySearch();
}



function orderByPageNext() {
    searchPage = searchPage < 1 ? 1 : searchPage > 50 ? 50 : searchPage+1;
    getOrdersBySearch();
}




function getOrdersBySearch() {
    orderPage.innerHTML= "";
    getOrdersData(searchPage,searchValue).then(data=>{

        if(data.orders){
            const orders  = data.orders.map(value=>{
                let status = "";
                switch (value.status) {
                    case "processing":
                        status = "text-danger"
                        break;
                    case "delivered":
                        status = "text-success"
                        break;
                }
        
                return `<tr>
                <td>${value.product.name}</td>
                <td>${ value.created_at.substring(0,10)}</td>
                <td>${ value.currency} ${ value.total}</td>
                <td class="${status} text-capitalize">${ value.status}</td>
              </tr>`
            });
        
            orderPage.innerHTML = orders.join("");
            
            page.innerText = data.page;
            totalPage.innerText = data.total;
            if(data.total === 0){
                page.innerText = 0;
            }

        }else{

            //check if user is authenticated on any error

            checkAuth();
        }
        
    });
}