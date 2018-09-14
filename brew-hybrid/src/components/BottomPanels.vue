<template>
    <div id="bottom-panels">
        <div class="bottom-panels">
            <!-- Notes -->
            <div class="notes-frame">
                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s12">
                                <textarea id="textarea1" class="materialize-textarea" placeholder="Enter whatever notes you have here..."></textarea>
                                <label for="textarea1">Notes</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <!-- add new entry -->
            <div class="add-frame">
                <router-link to="/add" class="btn-floating btn-large right red darken-3">
                    <i class="fa fa-plus fa-3x"></i>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BottomPanels",
    data() {
        return {};
    },
    created: function() {},
    methods: {}
};
</script>
