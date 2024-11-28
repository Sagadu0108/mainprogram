document.addEventListener('DOMContentLoaded', () => {
    const stTable = document.querySelector('.st-table');
    const btnPopup = document.querySelector('.button-setting');   
    
    btnPopup.addEventListener('click', () => {
        stTable.classList.toggle('active-popup');
    });
    
});