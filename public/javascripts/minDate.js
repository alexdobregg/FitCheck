(() => {
    const getDays = (year, month) => {
        return new Date(year, month, 0).getDate();
    };

    var today = new Date();
    var thisMonthDays = getDays(today.getFullYear(), today.getMonth() + 1);
    var ddS = today.getDate() + 3;
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (ddS > thisMonthDays) {
        ddS -= thisMonthDays;
        mm += 1;
        if (mm > 12) {
            mm = 1;
            yyyy += 1;
        }
    }
    var ddE = ddS + 1;
    ddS = String(ddS).padStart(2, '0');
    ddE = String(ddE).padStart(2, '0');
    mm = String(mm).padStart(2, '0');
    startDate = yyyy + '-' + mm + '-' + ddS;
    minDate = yyyy + '-' + mm + '-' + ddE;

    start_date.value = startDate;
    end_date.min = minDate;
    
})()