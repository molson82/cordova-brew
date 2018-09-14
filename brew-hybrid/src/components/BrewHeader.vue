<template>
    <div id="brew-header">
        <nav>
            <div class="nav-wrapper dark-primary">
                <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="fa fa-bars fa-2x"></i></a>
                <a href="index.html" class="brand-logo center">Brew Co</a>
                <a class="btn-floating profile-btn">
                    <img src="../assets/gaby-profile.jpg" alt="" height="40" width="40">
                </a>
            </div>
        </nav>
        <ul id="slide-out" class="sidenav">
            <li><a href="index.html" class="waves-effect">Home</a></li>
            <li><router-link to="/change-week" class="waves-effect">Change week</router-link></li>
            <li><router-link to="/calendar" class="waves-effect">Google Calendar</router-link></li>
            <li><router-link to="/add" class="waves-effect">Add entry</router-link></li>
            <li>
                <div class="divider"></div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "BrewHeader"
};
</script>
