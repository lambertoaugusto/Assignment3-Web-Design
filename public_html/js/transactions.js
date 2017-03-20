var descriptionOk = false;
var amountOk = false;

//addTransaction starts as disabled 
//document.getElementsByClassName("addTransaction").disabled = true;

function checkDescription(description) {
    var pattern = /(^([a-z0-9\s\u005f\u002d]{10}))(([a-z0-9\s\u005f\u002d]*)$)/i;
    if (!pattern.test(description)) {
        descriptionOk = false;
        if (document.getElementById("description-alert") == null) {
            html = '<div id="description-alert" class="alert fade alert-dismissable alert-success in">' +
                    '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>' +
                    '<label>Description must be at least 10 characters long, consisting of letters, numbers, "&#95;", "&#45;" and space</label>' +
                    '</div>';
            document.getElementById("dashboard-alert").innerHTML += html;
        }
    } else {
        descriptionOk = true;
    }

    if (descriptionOk && amountOk) {
        if (document.getElementsByClassName("addTransaction")[0].classList.contains("disabled")) {
            document.getElementsByClassName("addTransaction")[0].classList.remove("disabled");
        }
    } else {
        if (!document.getElementsByClassName("addTransaction")[0].classList.contains("disabled")) {
            document.getElementsByClassName("addTransaction")[0].classList.add("disabled");
        }
    }
}

function checkAmount(amount) {
    var pattern = /(^(|-))((10,000)|(([1-9]{1},[0-9]{3}|[1-9]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9]{1})))((\.([0-9]{2}))$)/;
    if (!pattern.test(amount)) {
        amountOk = false;
        if (document.getElementById("amount-alert") == null) {
            html = '<div id="amount-alert" class="alert fade alert-dismissable alert-success in">' +
                    '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>' +
                    '<label>The amount must be between &#36;10,000.00 and -&#36;10,000.00 with two decimal places</label>' +
                    '</div>';
            document.getElementById("dashboard-alert").innerHTML += html;
        }
    } else {
        amountOk = true;
    }

    if (descriptionOk && amountOk) {
        if (document.getElementsByClassName("addTransaction")[0].classList.contains("disabled")) {
            document.getElementsByClassName("addTransaction")[0].classList.remove("disabled");
        }
    } else {
        if (!document.getElementsByClassName("addTransaction")[0].classList.contains("disabled")) {
            document.getElementsByClassName("addTransaction")[0].classList.add("disabled");
        }
    }
}

//JSON data
var JSON_transactions = [
    {
        "data": "Fev 16, 2017",
        "description": "ZEHRS PIONEER PARK",
        "value": "-$66.25",
        "location": "KITCHENER ON"
    },
    {
        "data": "Fev 13, 2017",
        "description": "Bill Payment VISA CARD",
        "value": "-$1,000.00"
    },
    {
        "data": "Fev 10, 2017",
        "description": "Deposit",
        "value": "$1,900.00"
    },
    {
        "data": "Fev 7, 2017",
        "description": "TIM HORTONS",
        "value": "-$16.35",
        "location": "WATERLOO ON"
    }
];

//JSON parsing
var str_JSON_transactions = JSON.stringify(JSON_transactions);
var transactions = JSON.parse(str_JSON_transactions);

//inserting transactions into dashboard        
transactions.forEach(function (transaction, index) {
    var locationOrDescription;
    if ("location" in transaction) {
        locationOrDescription = '<td class="col-xs-2">Location:</td>\
                                         <td class="col-xs-4">' + transaction.location + '</td>';
    } else {
        locationOrDescription = '<td class="col-xs-2">Description:</td>\
                                         <td class="col-xs-4">' + transaction.description + '</td>';
    }

    document.getElementById("panel-transactions").innerHTML += '<div class="panel panel-default">\
                                                                            <div class="panel-heading">\
                                                                                <a class="panel-title collapsed" data-toggle="collapse" data-parent="#panel-transactions" href="#panel-element-' + index + '">' + transaction.data + '</a>\
                                                                            </div>\
                                                                            <div id="panel-element-' + index + '" class="panel-collapse collapse">\
                                                                                <div class="panel-body">\
                                                                                    <div class="col-xs-6">\
                                                                                        <table class="table">\
                                                                                            <tbody id="data-transaction-' + index + '">\
                                                                                                <tr>' +
            locationOrDescription +
            '</tr>\
                                                                                                <tr>\
                                                                                                    <td class="col-xs-2">Value:</td>\
                                                                                                    <td class="col-xs-4">' + transaction.value + '</td>\
                                                                                                </tr>\
                                                                                            </tbody>\
                                                                                        </table>\
                                                                                    </div>\
                                                                                </div>\
                                                                            </div>\
                                                                        </div>';
});

//Function that opens a modal to insert new transaction
function addTransaction() {
    bootbox.dialog({message:
                '<div class="container">' +
                '<div class="col-sm-12">' +
                '<form method="get" action="dashboard.html">' +
                '<div class="row">' +
                '<div class="col-sm-3">' +
                '<label>Date</label>' +
                '<input type="text" class="form-control" id="add_trans_Date">' +
                '</div>' +
                '</div>' +
                '<br>' +
                '<div class="row">' +
                '<div class="col-sm-3">' +
                '<label>Description</label>' +
                '<input type="text" class="form-control" id="add_trans_Description" onblur="checkDescription(this.value)">' +
                '</div>' +
                '</div>' +
                '<br>' +
                '<div class="row">' +
                '<div class="col-sm-3">' +
                '<label>Value</label>' +
                '<input type="text" class="form-control" id="add_trans_Value" onblur="checkAmount(this.value)">' +
                '</div>' +
                '</div>' +
                '<br>' +
                '<div class="row">' +
                '<div class="col-sm-3">' +
                '<label>Location</label>' +
                '<input type="text" class="form-control" id="add_trans_Location">' +
                '</div>' +
                '</div>' +
                '</form>' +
                '</div>' +
                '</div>' +
                '<br>' +
                '<div class="col-sm-9" id="dashboard-alert-div">' +
                '<div id="dashboard-alert"></div>' +
                '</div>',
        buttons: {
            cancel: {
                label: 'Add Transaction',
                className: 'btn btn-info disabled addTransaction'
            }
        },
        title: "Adds Transaction Categories"});
}