<template>
    <div id="change-week">
        <Carousel />
        <div id="weekPanel" class="changeWeek">
            <ul class="collection with-header">
                <li class="collection-header center">
                    <h4>List Of Weeks</h4>
                </li>
                <a class="collection-item" v-for="(week, index) in listOfWeeks" :key="`week-${index}`" v-bind:class="{ active: index == active }"
                    v-on:click="changeActive(index)">{{week.month}} / {{week.day}} / {{week.year}}</a>
            </ul>
        </div>
    </div>
</template>

<script>
import Carousel from "./Carousel";

export default {
    name: "ChangeWeek",
    components: {
        Carousel
    },
    data() {
        return {
            listOfWeeks: [],
            listOfWeekStrings: [],
            active: 0
        };
    },
    created: function() {
        this.weekTestLoad();
        this.active = this.listOfWeekStrings.indexOf($("#thisWeekValue").text());

        $(".sidenav").sidenav("close");
        $(document).ready(function() {
            $(".carousel").carousel({
                fullWidth: true,
                indicators: true
            });
        });
    },
    methods: {
        weekTestLoad: function() {
            var week = {
                dateObj: new Date(),
                month: "09",
                day: "02",
                year: "18"
            };
            var week2 = {
                dateObj: new Date(),
                month: "09",
                day: "09",
                year: "18"
            };
            var week3 = {
                dateObj: new Date(),
                month: "09",
                day: "16",
                year: "18"
            };
            this.listOfWeeks.push(week);
            this.listOfWeeks.push(week2);
            this.listOfWeeks.push(week3);
            let string1 = week.month + " / " + week.day + " / " + week.year;
            let string2 = week2.month + " / " + week2.day + " / " + week2.year;
            let string3 = week3.month + " / " + week3.day + " / " + week3.year;
            this.listOfWeekStrings.push(string1);
            this.listOfWeekStrings.push(string2);
            this.listOfWeekStrings.push(string3);
        },
        changeActive: function(index) {
            this.active = index;
            let currentWeek = this.listOfWeeks[index].month + " / " + this.listOfWeeks[index].day + " / " + this.listOfWeeks[index].year;
        }
    }
};
</script>
