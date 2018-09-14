import Vue from "vue";
import Router from "vue-router";
import HomeRoute from "@/components/HomeRoute";
import AddEntry from "@/components/AddEntry";
import Calendar from "@/components/Calendar";
import ChangeWeek from "@/components/ChangeWeek";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HomeRoute",
      component: HomeRoute
    },
    {
      path: "/add",
      name: "AddEntry",
      component: AddEntry
    },
    {
      path: "/calendar",
      name: "Calendar",
      component: Calendar
    },
    {
      path: "/change-week",
      name: "ChangeWeek",
      component: ChangeWeek
    }
  ]
});
