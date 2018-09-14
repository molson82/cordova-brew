<template>
    <div id="carousel">
        <div id="carouselPanel" class="carousel carousel-slider">
            <div class="carousel-item secondary-text" v-for="(panel, index) in listOfPanels" :key="`panel-${index}`">
                <div class="row">
                    <div class="col s12">
                        <div class="card green">
                            <div class="card-content white-text center">
                                <span class="card-title">{{panel.day}} {{panel.month}} {{panel.date}}</span>
                                <p class="day-value">{{panel.hours}} hours {{panel.mins}} mins</p>
                                <p class="day-value">$ {{panel.dollars}} . {{panel.cents}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Carousel",
    data() {
        return {
            listOfPanels: []
        };
    },
    created: function() {
        this.panelTestLoad();
    },
    methods: {
        panelTestLoad: function() {
            var panelObj1 = {
                day: "Tuesday",
                month: "Sept",
                date: "4th",
                hours: "10",
                mins: "00",
                dollars: "126",
                cents: "78"
            };
            var panelObj2 = {
                day: "Wednesday",
                month: "Sept",
                date: "5th",
                hours: "5",
                mins: "22",
                dollars: "26",
                cents: "99"
            };
            var panelObj3 = {
                day: "Saturday",
                month: "Sept",
                date: "8th",
                hours: "8",
                mins: "00",
                dollars: "52",
                cents: "12"
            };
            this.listOfPanels.push(panelObj1);
            this.listOfPanels.push(panelObj2);
            this.listOfPanels.push(panelObj3);
        }
    }
};
</script>
