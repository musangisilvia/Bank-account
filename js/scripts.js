//back end
function Account(name, initialDeposit) {
    this.name = name;
    this.initialDeposit = initialDeposit;
}

function Withdraw(wAmount) {
    this.wAmount = wAmount;
}

function Deposit(amount) {
    this.dAmount = dAmount;
    this.type = [];
}

// front end
$(document).ready(function() {
    $("form#register").submit(function(event) {
        event.preventDefault();
        var inputtedName = $("input#accname").val();
        var inputtedAmount = $("input#initDeposit").val();

        var newAccount = new Account(inputtedName, inputtedAmount)
    });
    $("form#withdraw").submit(function(event) {
        event.preventDefault();
        var inputtedWithdraw = $("input#withdraw").val();

        var newWithdraw = new Withdraw(inputtedWithdraw);
    });
    $("form#deposit").submit(function(event) {
        event.preventDefault();

        var inputtedDeposit = $("input#deposit").val();

        var newDeposit = new Deposit(inputtedDeposit);
    });
});
