<template>
    <div id="weekly-totals">
        <div id="hoursPanel">
            <div class="col s12 m6 hours-panel primary-color">
                <h3>{{totalHours}} </h3>
                <h5>hrs </h5>
                <h3>{{totalMin}} </h3>
                <h5>mins</h5>
            </div>
            <div class="whole-panel">
                <div class="col s12 week-panel">
                    <i class="fa fa-calendar fa-lg"></i>
                    <p id="thisWeekValue" class="week-value">{{currentWeek}}</p>
                </div>
            </div>
            <div class="whole-panel right" id="money">
                <div class="col s12 money-panel">
                    <i class="fa fa-usd fa-lg"></i>
                    <p class="week-value">{{totalDollars}} . {{totalCents}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "WeeklyTotals",
    data() {
        return {
            totalHours: 22,
            totalMin: 42,
            currentWeek: "# / # / #",
            totalDollars: 135,
            totalCents: 98
        };
    },
    created: function() {
        this.getWeek();
    },
    methods: {
        getWeek: function() {
            var curr = new Date(); // get current date
            var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
            var firstday = new Date(curr.setDate(first)).toISOString();
            var firstdaySplit = firstday.split("T");
            var split2 = firstdaySplit[0].split("-");
            var year = split2[0].split("20")[1];
            var month = split2[1];
            var day = split2[2];
            var fullWeek = month + " / " + day + " / " + year;
            console.log(fullWeek);
            this.currentWeek = fullWeek;
        },
        updateWeek: function(value) {
            console.log("value: " + value);
            this.currentWeek = value;
        }
    }
};
</script>
