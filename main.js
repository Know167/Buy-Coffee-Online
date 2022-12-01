var totalcost = 0;
function adding(Id) {
    var ele = document.getElementsByName(Id);
    var menu = [
        ["espresso", "milk", 60],
        ["espresso", "cream", 75],
        ["espresso", "latte", 100],
        ["cappuccino", "milk", 80],
        ["cappuccino", "cream", 90],
        ["cappuccino", "latte", 125],
        ["latte", "milk", 100],
        ["latte", "cream", 125],
        ["latte", "latte", 150],
    ];
    for (var i = 0; i < ele.length; i++) {
        if (ele[i].checked) break;
    }
    var iddirty = JSON.stringify(ele[i].id);
    var idval = iddirty.slice(1, iddirty.length - 1);
    var coffee = idval.split("-")[0];
    var addon = idval.split("-").pop();
    for (var i = 0; i < menu.length; i++) {
        if (menu[i][0] == coffee) {
            if (menu[i][1] == addon) {
                var coffeeval = menu[i][2];
            }
        }
    }
    var numstr = coffee + "-number";
    var num = document.getElementById(numstr).value;
    var typeval = coffeeval * num;
    document.getElementById("cart").innerHTML +=
        "<br>" +
        coffee +
        " with " +
        addon +
        "\tX " +
        num +
        " = Rs." +
        typeval +
        "<hr>";
    totalcost += typeval;
    document.getElementById("cost").innerHTML = "Total - \tRs. " + totalcost;
}
