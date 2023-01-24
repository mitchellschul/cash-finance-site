
var totalNeeds = 0;
var totalWants = 0;
var totalSavings = 0;

var addNeeds = 0;
var addWants = 0;
var addSavings = 0;

async function retreveData() {

    const query = new Parse.Query("finances");

    try {
        const me = await query.get("9snRbJeyuD");

        const name = me.get("Name");
        const needs = me.get("Needs");
        const wants = me.get("Wants");
        const savings = me.get("Savings");

        totalNeeds = needs;
        totalWants = wants;
        totalSavings = savings;

        document.getElementById("needsVal").innerHTML = "Needs: $" + needs;
        document.getElementById("wantsVal").innerHTML = "Wants: $" + wants;
        document.getElementById("savingsVal").innerHTML = "Savings: $" + savings;
        // alert(`Needs: ${needs}`);
    } catch (error) {
        alert("Error while fetching data");
    }
}

function conlog() {
    console.log(totalNeeds);
    console.log(totalWants);
    console.log(totalSavings);
}

async function saveData() {
    const query = new Parse.Query("finances");

    newNeeds = document.getElementById("needs").innerHTML;
    newWants = document.getElementById("wants").innerHTML;
    newSavings = document.getElementById("savings").innerHTML;

    try {
        const me = await query.get("9snRbJeyuD");

        const needs = me.get("Needs");
        const wants = me.get("Wants");
        const savings = me.get("Savings");

        me.set("Needs", needs + addNeeds);
        me.set("Wants", wants + addWants);
        me.set("Savings", savings + addSavings);

        await me.save();

        alert("Data saved successfully");
    } catch (error) {
        alert("Error while fetching data");
    }

}

function splitIncome() {
    const income = document.getElementById("Income").value;
    const needs = income * 0.5;
    const wants = income * 0.3;
    const savings = income * 0.2;

    addNeeds = needs;
    addWants = wants;
    addSavings = savings;

    document.getElementById("needs").innerHTML = "$ " + needs;
    document.getElementById("wants").innerHTML = "$ " + wants;
    document.getElementById("savings").innerHTML = "$ " + savings;
}