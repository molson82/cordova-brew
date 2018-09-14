<template>
  <div id="app">
    <BrewHeader />
    <WeeklyTotals />
    <router-view/>
  </div>
</template>

<script>
import BrewHeader from "@/components/BrewHeader";
import WeeklyTotals from "@/components/WeeklyTotals";

export default {
    name: "App",
    components: {
        BrewHeader,
        WeeklyTotals
    }
};
</script>
