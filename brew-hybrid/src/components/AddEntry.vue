<template>
    <div id="add-entry">
        <div class="add-form">
            <div class="row">
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="datepicker" type="text" class="datepicker">
                            <label for="datepicker">Date</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="textarea1" type="number" placeholder="87.62" />
                            <label for="textarea1" class="active">Total cash on hand</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="textarea1" type="number" placeholder="12.37 or -60.52" />
                            <label for="textarea1" class="active">Expected cash</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="form-buttons">
            <a href="index.html" id="cancel-btn" class="waves-effect waves-light btn dark-primary">Cancel</a>
            <a href="index.html" id="submit-btn" class="waves-effect waves-light btn green">Submit</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddEntry",
    data() {
        return {};
    },
    created: function() {
        $('.sidenav').sidenav('close');
    },
    methods: {}
};
</script>