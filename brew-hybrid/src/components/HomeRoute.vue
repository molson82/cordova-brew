<template>
  <div id="home-route">
    <Carousel />
    <BottomPanels />
  </div>
</template>

<script>
import Carousel from "@/components/Carousel";
import BottomPanels from "@/components/BottomPanels";

export default {
    name: "HomeRoute",
    components: {
        Carousel,
        BottomPanels
    },
    created: function() {}
};
</script>
