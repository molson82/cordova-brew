<template>
    <div id="calendar">
        <div class="calendar-panel">
            <iframe src="https://calendar.google.com/calendar/b/1/embed?showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=wvandebe%40gmail.com&amp;color=%231B887A&amp;src=en.usa%23holiday%40group.v.calendar.google.com&amp;color=%230F4B38&amp;ctz=America%2FNew_York"
                style="border-width:0" width="100%" height="600" frameborder="0" scrolling="no"></iframe>
        </div>
    </div>
</template>

<script>
export default {
    name: "Calendar",
    data() {
        return {};
    },
    created: function() {
        $('.sidenav').sidenav('close');
    },
    methods: {}
};
</script>