(() => {
    var today = new Date();
    var ddS = String(today.getDate() + 3).padStart(2, '0');
    var ddE = String(today.getDate() + 4).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    startDate = yyyy + '-' + mm + '-' + ddS;
    minDate = yyyy + '-' + mm + '-' + ddE;

    start_date.value = startDate;
    end_date.min = minDate;
    
})()