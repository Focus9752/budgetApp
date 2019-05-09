//Execute setDate(), updateBudget() and loginManager(); on page load. Log confirmation to
//console.

window.onload = function () {

    this.console.log("Page loaded.");

    setDate();

    updateBudget();

    loginManager();

    //Refresh time and date every 100 milliseconds.

    setInterval(setDate, 100);

    console.log("Load functions executed successfully.");

}

//Hide page on load (until password is entered).

document.getElementById("body").style.display = "none";

//Display error message if onerror returns true.

window.onerror = function () {

    alert("Something went wrong. Please reload the page.");

}

//Get valid password entry attempts counter.

var attempts = localStorage.getItem('attempts') || 5;

//Get password from storage.

var password = localStorage.getItem('password') || "";

//Login manager:

function loginManager() {

    //Check for different password input cases:

    if (password === "" || password === null) {

        var newPasswordInput = window.prompt("Please enter a password.");

        localStorage.setItem('password', newPasswordInput);

        location.reload();

    } else {

        //Get input from user.

        var passwordInput = window.prompt("Please enter your password.");

        if (password === passwordInput) {

            //User entered right password >>> Display page.

            document.getElementById("body").style.display = "block";

        } else if (passwordInput === "//Debug //Reset") {

            //Debug reset method.

            reset();

        } else if (passwordInput === "//Debug //Login") {

            //Debug login method >>> Display page.

            document.getElementById("body").style.display = "block";

        } else if (passwordInput === "//Debug //ShowPassword") {

            //Debug password displayer:

            alert(password);

            window.reload();

        } else {

            //Incorrect password.

            alert("Wrong password!");

            window.reload();

        }

    }

}

//Fetch totalBudget and userCurrency from storage. Set to default states if unable to access storage.

var totalBudget = localStorage.getItem('budget') || 0;

var userCurrency = localStorage.getItem('currency');

//Save the current currency data (for conversion).

localStorage.setItem('oldCurrency', userCurrency);

//Show date and time.

function setDate() {

    //Declare date variables.

    var date = new Date();

    var month = new Array();

    var year = date.getFullYear();

    var hour = date.getHours();

    var minute = date.getMinutes();

    var second = date.getSeconds();

    //Assing names to months.

    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    //Get current month.

    var currentMonth = month[date.getMonth()];

    //Display current date.

    document.getElementById("currentDate").innerHTML = date.getDate() + ' ';
    document.getElementById("month").innerHTML = currentMonth + ' ';
    document.getElementById("year").innerHTML = year;

    //Display hours, minutes and seconds in the 00:00:00 format. 
    //(prevent stuff like this: 1: 3: 1 and display it like this: 01:03:01)

    if (second <= 10) {

        second = "0" + second;

    }

    if (minute <= 10) {

        minute = "0" + minute;

    }

    if (hour <= 10) {

        hour = "0" + hour;

    }

    //Declare and implement time-based greetings.

    if (hour >= 12) {

        document.getElementById("greeting").innerHTML = "Good afternoon!";

    }

    if (hour >= 18) {

        document.getElementById("greeting").innerHTML = "Good evening!";

    }

    if (hour <= 12) {

        document.getElementById("greeting").innerHTML = "Good morning!";

    }

    document.getElementById("time").innerHTML = hour + ":" + minute + ":" + second;
}

//Reset system (for debugging).

function reset() {

    //Reset all variables to default state and output the results to storage.

    totalBudget = 0.00;
    localStorage.setItem('budget', totalBudget);
    localStorage.setItem('password', "");
    document.getElementById("budgetValue").innerHTML = "0.00";
    document.getElementById("goalData").style.display = "none";

    //Reload the page.

    location.reload();

}

//Check if the "reset" button was clicked.

document.getElementById("resetButton").onclick = function () {

    //Reset all variables to default state and output the results to storage.

    totalBudget = 0.00;
    localStorage.setItem('budget', totalBudget);
    localStorage.setItem('password', "");
    document.getElementById("budgetValue").innerHTML = "0.00";
    document.getElementById("goalData").style.display = "none";

    //Reload the page.

    location.reload();
}

//Currency manager:

function currencyManager() {

    //Fetch previous currency from storage.

    var oldCurrency = localStorage.getItem("oldCurrency");

    //Declare local variables.

    var chosenCurrency = document.getElementById("currencyType").value;
    var currencyStep = "";

    //Check for the chosen currency and change the variables accordingly. Output results to storage.

    if (chosenCurrency === 'kr.') {

        currencyStep = 'kr.';

        localStorage.setItem('currency', currencyStep);

    } else if (chosenCurrency === 'eur.') {

        currencyStep = 'eur.';

        localStorage.setItem('currency', currencyStep);

    } else if (chosenCurrency === '$') {

        currencyStep = '$';

        localStorage.setItem('currency', currencyStep);

    } else if (chosenCurrency === 'pound') {

        currencyStep = 'pound';

        localStorage.setItem('currency', currencyStep);

    } else if (chosenCurrency === 'jpn') {

        currencyStep = 'jpn';

        localStorage.setItem('currency', currencyStep);

    } else if (chosenCurrency === 'chf') {

        currencyStep = 'chf';

        localStorage.setItem('currency', currencyStep);

    } else if (chosenCurrency === 'egp') {

        currencyStep = 'egp';

        localStorage.setItem('currency', currencyStep);

    }

    //Convert totalBudget to new currency.

    //Converter logic:

    //Converter checks if old currency = new currency and does nothing if the check returns "true".
    //Converter converts money from old currency to new currency and outputs the results to storage.


    if (oldCurrency === 'kr.') {

        if (currencyStep === 'kr.') {

            //Do nothing.

        } else if (currencyStep === 'eur.') {

            totalBudget = totalBudget * 0.133740771;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep === '$') {

            totalBudget = totalBudget * 0.151388;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep === 'pound') {

            totalBudget = totalBudget * 0.115713433;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep === 'jpn') {

            totalBudget = totalBudget * 16.9584407;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep === 'chf') {

            totalBudget = totalBudget * 0.151698375;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep === 'egp') {

            totalBudget = totalBudget * 0.382645174;

            localStorage.setItem('budget', totalBudget);

        }

    } else if (oldCurrency === 'eur.') {

        if (currencyStep === 'eur.') {

            //Do nothing.

        } else if (currencyStep === 'kr.') {

            totalBudget = totalBudget * 7.47715143;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep === 'pound') {

            totalBudget = totalBudget * 0.86520686;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep === '$') {

            totalBudget = totalBudget * 1.131951;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep === 'jpn') {

            totalBudget = totalBudget * 126.800829;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep = 'chf') {

            totalBudget = totalBudget * 1.13427172;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep === 'egp') {

            totalBudget = totalBudget * 0.0511691761;

            localStorage.setItem('budget', totalBudget);

        }

    } else if (oldCurrency === '$') {

        if (currencyStep === '$') {

            //Do nothing.

        } else if (currencyStep === 'kr.') {

            totalBudget = totalBudget * 6.60554337;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep === 'eur.') {

            totalBudget = totalBudget * 0.883430467;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep === 'pound') {

            totalBudget = totalBudget * 0.7643501;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep === 'jpn') {

            totalBudget = totalBudget * 112.019715;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep === 'chf') {

            totalBudget = totalBudget * 1.00205019;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep === 'egp') {

            totalBudget = totalBudget * 0.057921;

            localStorage.setItem('budget', totalBudget);

        }

    } else if (oldCurrency === 'pound') {

        if (currencyStep === 'pound') {

            //Do nothing.

        } else if (currencyStep === 'kr.') {

            totalBudget = totalBudget * 8.64085744;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep === 'eur.') {

            totalBudget = totalBudget * 1.15557387;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep === '$') {

            totalBudget = totalBudget * 1.308053;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep === 'jpn') {

            totalBudget = totalBudget * 146.544141;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep === 'chf') {

            totalBudget = totalBudget * 1.31099619;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep === 'egp') {

            totalBudget = totalBudget * 0.0442719221;

            localStorage.setItem('budget', totalBudget);

        }

    } else if (oldCurrency === 'jpn') {

        if (currencyStep === 'jpn') {

            //Do nothing.

        } else if (currencyStep === 'kr.') {

            totalBudget = totalBudget * 0.0589641961;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep === 'eur.') {

            totalBudget = totalBudget * 0.00791558366;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep === '$') {

            totalBudget = totalBudget * 0.008926;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep === 'pound') {

            totalBudget = totalBudget * 0.00682388252;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep === 'chf') {

            totalBudget = totalBudget * 0.00899604822;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep === 'egp') {

            totalBudget = totalBudget * 6.48829394;

            localStorage.setItem('budget', totalBudget);

        }

    } else if (oldCurrency === 'chf') {

        if (currencyStep === 'chf') {

            //Do nothing.

        } else if (currencyStep === 'kr.') {

            totalBudget = totalBudget * 6.6029198;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep === 'eur.') {

            totalBudget = totalBudget * 0.884809901;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep === '$') {

            totalBudget = totalBudget * 0.997755;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep === 'pound') {

            totalBudget = totalBudget * 0.764041182;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep === 'jpn') {

            totalBudget = totalBudget * 111.15992;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep === 'chf') {

            totalBudget = totalBudget * 0.0580397493;

            localStorage.setItem('budget', totalBudget);

        }

    } else if (oldCurrency === 'egp') {

        if (currencyStep === 'egp') {

            //Do nothing.

        } else if (currencyStep === 'kr.') {

            totalBudget = totalBudget * 2.62357019;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep === 'eur.') {

            totalBudget = totalBudget * 19.5433102;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep === '$') {

            totalBudget = totalBudget * 17.3310225;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep === 'pound') {

            totalBudget = totalBudget * 22.6731542;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep === 'jpn') {

            totalBudget = totalBudget * 0.155840555;

            localStorage.setItem('budget', totalBudget);

        } else if (currencyStep === 'chf') {

            totalBudget = totalBudget * 17.3232236;

            localStorage.setItem('budget', totalBudget);

        }

    }

    //Log results and confirmation to console.

    console.log(currencyStep);

    console.log(userCurrency);

    console.log("currencyManager was executed.");

    //Refresh the page and apply changes.

    location.reload();

}

//Hide goal difference on page load.

document.getElementById("goalData").style.display = "none";
document.getElementById("addType").style.display = "none";

//Budget manager:

function budgetController() {

    //Check if the user wants to add or subtract money

    var plusOrMinus = document.getElementById("addType").value;
    var moneyAmount = document.getElementById("addBudget").value;

    //Calculate budget and output results to storage.

    if (plusOrMinus === "+") {

        totalBudget = (Number(totalBudget) + Number(moneyAmount));
        console.log(totalBudget);
        localStorage.setItem('budget', totalBudget);

    } else if (plusOrMinus === "-") {

        totalBudget = (Number(totalBudget) - Number(moneyAmount));
        localStorage.setItem('budget', totalBudget);
    }

    //Round budget results.

    totalBudget = totalBudget.toFixed(2);

    //Hide goal data on completion.

    document.getElementById("goalData").style.display = "none";

    //Log completion to console.

    console.log("budgetController was executed.");

    //Update budget.

    updateBudget();

    document.getElementById("addBudget").value = "";

}

//Goal manager:

function goalManager() {

    //Declare local variables from user input.

    var goal = document.getElementById("addGoal").value;
    var goalDifference = Math.abs(goal - totalBudget);
    var finalGoal = parseInt(goal);

    //Round goal difference to 2nd decimal.

    goalDifference = goalDifference.toFixed(2);

    //Check if the users goal equals the users total budget.

    if (finalGoal === "") {

        document.getElementById("goalData").style.display = "none";

    } else if (finalGoal >= totalBudget) {

        document.getElementById("goalData").innerHTML = "You are still " + goalDifference + " away from your goal.";
        document.getElementById("goalData").style.display = "block";

    } else if (finalGoal <= totalBudget) {

        document.getElementById("goalData").innerHTML = "You've reached your goal and you still have " + goalDifference + " to spare!";
        document.getElementById("goalData").style.display = "block";
    }

    //Get goal value from input field.

    document.getElementById("addGoal").value = "";

    //Log goal difference and confirmation to console.

    console.log(goalDifference);

    console.log("goalManager was executed.");

}

//Budget updater:

function updateBudget() {

    //Round budget.

    totalBudget = Number(totalBudget).toFixed(2);

    //Check for user currency and display budget accordingly.

    if (userCurrency === "kr.") {

        document.getElementById("budgetValue").innerHTML = totalBudget + " " + "kr.";

    } else if (userCurrency === "eur.") {

        document.getElementById("budgetValue").innerHTML = totalBudget + "\u20AC";

    } else if (userCurrency === "$") {

        document.getElementById("budgetValue").innerHTML = "\u0024" + totalBudget;

    } else if (userCurrency === "pound") {

        document.getElementById("budgetValue").innerHTML = "\u00A3" + totalBudget;

    } else if (userCurrency === 'jpn') {

        document.getElementById("budgetValue").innerHTML = "\u00A5" + totalBudget;

    } else if (userCurrency === 'chf') {

        document.getElementById("budgetValue").innerHTML = totalBudget + " " + "chf.";

    } else if (userCurrency === 'egp') {

        document.getElementById("budgetValue").innerHTML = "E" + "\u00A3" + totalBudget;
    }

    //Log confirmation to console.

    console.log("updateBudget was executed.");

}

//Currency converter:

//Global variables for conversion:

var dkk, gbp, usd, eur, jpn, chf, egp;

//Define conversion variables on page load.

function init() {
    dkk = document.getElementById("DKK");
    gbp = document.getElementById("GBP");
    usd = document.getElementById("USD");
    eur = document.getElementById("EUR");
    jpn = document.getElementById("JPN");
    chf = document.getElementById("CHF");
    egp = document.getElementById("EGP");

    console.log("Currency converter initiated");
}

//Converter logic:

function dkkfunc() {
    gbp.value = parseFloat(dkk.value) * 0.115218342;
    eur.value = parseFloat(dkk.value) * 0.134025637;
    usd.value = parseFloat(dkk.value) * 0.152268;
    jpn.value = parseFloat(dkk.value) * 16.730574;
    chf.value = parseFloat(dkk.value) * 0.15059119;
    egp.value = parseFloat(dkk.value) * 2.62357019;
}

function gbpfunc() {
    dkk.value = parseFloat(gbp.value) * 8.68981655;
    usd.value = parseFloat(gbp.value) * 1.321274;
    eur.value = parseFloat(gbp.value) * 1.16391796;
    jpn.value = parseFloat(gbp.value) * 146.149387;
    chf.value = parseFloat(gbp.value) * 1.31466951;
    egp.value = parseFloat(gbp.value) * 22.6731542;
}

function eurfunc() {
    dkk.value = parseFloat(eur.value) * 7.46258088 ;
    gbp.value = parseFloat(eur.value) * 0.859826198;
    usd.value = parseFloat(eur.value) * 1.136111;
    jpn.value = parseFloat(eur.value) * 124.983659;
    chf.value = parseFloat(eur.value) * 1.12416422;
    egp.value = parseFloat(eur.value) * 19.5433102;
}

function usdfunc() {
    dkk.value = parseFloat(usd.value) * 6.57401686;
    gbp.value = parseFloat(usd.value) * 0.756845287;
    eur.value = parseFloat(usd.value) * 0.88023055;
    jpn.value = parseFloat(usd.value) * 110.411836;
    chf.value = parseFloat(usd.value) * 0.993345578;
    egp.value = parseFloat(usd.value) * 17.3310225;
}

function jpnfunc() {
    dkk.value = parseFloat(jpn.value) * 0.059726985;
    gbp.value = parseFloat(jpn.value) * 0.00684231401;
    eur.value = parseFloat(jpn.value) * 0.00800104596;
    usd.value = parseFloat(jpn.value) * 0.009057;
    chf.value = parseFloat(jpn.value) * 0.0089967309;
    egp.value = parseFloat(jpn.value) * 0.155840555;
}

function chffunc() {
    dkk.value = parseFloat(chf.value) * 6.63930102;
    gbp.value = parseFloat(chf.value) * 0.760485678;
    eur.value = parseFloat(chf.value) * 0.889549746;
    usd.value = parseFloat(chf.value) * 1.006699;
    jpn.value = parseFloat(chf.value) * 111.151485;
    egp.value = parseFloat(chf.value) * 17.3232236;
}

function egpfunc() {
    dkk.value = parseFloat(egp.value) * 0.381159995;
    gbp.value = parseFloat(egp.value) * 0.0441050235;
    eur.value = parseFloat(egp.value) * 0.0511684044;
    usd.value = parseFloat(egp.value) * 0.0577;
    jpn.value = parseFloat(egp.value) * 6.41681495;
    chf.value = parseFloat(egp.value) * 0.0577259767;
}

init();