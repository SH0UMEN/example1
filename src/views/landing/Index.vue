<template>
    <div class="landing">
        <landing-header></landing-header>
        <vue-page-transition class="landing__inner" name="fade">
            <router-view></router-view>
        </vue-page-transition>
    </div>
</template>

<script>
    import LandingHeader from "../../components/landing/Header"

    export default {
        name: "Index",
        components: {
            LandingHeader,
        },
    }
</script>

<style lang="sass">
    @import "../../assets/sass/landing/index"
</style>