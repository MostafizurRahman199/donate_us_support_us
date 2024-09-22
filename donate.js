const noakhaliInput = getById("noakhali_amount");
const feniInput = getById("feni_amount");
const quotaInput = getById("quota_amount");

const noakhaliBtn = getById("noakhali_donate_btn");
const feniBtn = getById("feni_donate_btn");
const quotaBtn = getById("quota_donate_btn");

const donate_btn = getById("donate_btn");
const donate_btn_2 = getById("donate_btn_2");
const history_btn = getById("history_btn");
const history_btn_2 = getById("history_btn_2");
const blog_btn = getById("blog_btn");

const my_modal_1 = getById("my_modal_1");
const balance = getById("balance");
const modal_close = getById("modal_close");
const history_section = getById("history_section");
const card_section = getById("card_section");
const footer = getById("footer");

const quota_balance= getById("quota_balance");
const feni_balance = getById("feni_balance");
const noakhali_balance = getById("noakhali_balance");






function getById(id){
    const item = document.getElementById(id);
    return item;
}

function checkValidation(balance, amount){
    if(!isNaN(parseFloat(amount))){
        if(parseFloat(balance) > parseFloat(amount)){
            return true;
        }else{
            alert("Insufficient balance");
          
            return false;
        }
    }else{
        alert("Invalid amount");
        return false;
    }
}

function reset(){
    noakhaliInput.value = "";
    feniInput.value = "";
    quotaBtn.value = "";
}


function HistoryAdd(amount, text){
    const div = document.createElement("div");
    const date = new Date();
    const formattedDate = date.toString();
    div.innerHTML = `
    <div class="card bg-base-100 w-full shadow-xl">
        <div class="card-body">
        <p class="text-xl font-bold">${amount}${text}</p>
        <p class="text-sm  text-gray-500">Date : ${formattedDate}</p>
        
        </div>
    </div>

    `
    history_section.appendChild(div);

}


modal_close.addEventListener('click', function(event) {
  
    event.preventDefault();
    document.getElementById('my_modal_1').close();
});


function updateDonateBalance(id, amount){
    const element = getById(id);
    const elementParseValue = parseFloat(element.innerText);
    const newAmount = parseFloat(amount);
    const total = elementParseValue + newAmount
    element.innerText = total;
}


blog_btn.addEventListener("click", (event)=>{
    window.location.href = "./blog.html"
    
})

donate_btn.addEventListener("click", ()=>{
    history_section.className = "hidden";
    card_section.className = "";


    history_btn_2.className = "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600  text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
    history_btn.className = "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-white-900 text-black hover:text-white rounded-md group-hover:bg-opacity-0"
    
    donate_btn_2.className ="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600  text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800";

    donate_btn.className = "relative px-5 py-2.5 transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0";

    footer.className = "";
})
history_btn.addEventListener("click", ()=>{
    card_section.className = "hidden"
    history_section.className = "flex flex-col space-y-4";

    donate_btn_2.className = "relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600  text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
    donate_btn.className = "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-white-900 text-black hover:text-white rounded-md group-hover:bg-opacity-0"
    
    history_btn_2.className ="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600  text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800";

    history_btn.className = "relative px-5 py-2.5 transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0";

    footer.className = "fixed bottom-0 left-0 w-full";

    

})




noakhaliBtn.addEventListener("click", ()=>{

    let amountValue = noakhaliInput.value;
    let balanceValue = balance.innerText;
    const flag = checkValidation(balanceValue, amountValue);
 
    reset();
    if(flag){
        const newBalance = parseFloat(balanceValue) - parseFloat(amountValue);
        balance.innerText = newBalance;
        my_modal_1.showModal();
        updateDonateBalance("noakhali_balance", amountValue);
        HistoryAdd(amountValue, " Taka is Donated for Flood Relief in Noakhali, Bangladesh");
        
     }
})


feniBtn.addEventListener("click", ()=>{

    let amountValue = feniInput.value;
    let balanceValue = balance.innerText;
    const flag = checkValidation(balanceValue, amountValue);
 
    reset();
    if(flag){
        const newBalance = parseFloat(balanceValue) - parseFloat(amountValue);
        balance.innerText = newBalance;

        my_modal_1.showModal();
        
     }
})



