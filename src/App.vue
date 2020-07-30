<template>
    <div id="app">
        <!--    <img alt="Vue logo" src="./assets/logo.png">-->
        <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <p>App.vue - p above hr</p>
        <hr/>

        <navigation202/>

        <p><span style="color: #ff0000;">start - router-view</span></p>
        <router-view/>
        <p><span style="color: #ff0000;">finish - router-view</span></p>

        <hr/>
        <p>App.vue - p under hr</p>
    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    import Navigation202 from './components/Navigation202'

    export default {
        name: 'App',
        components: {
            Navigation202
            // HelloWorld
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    div {
        border: 4px double black;
        padding: 10px;
    }
</style>
