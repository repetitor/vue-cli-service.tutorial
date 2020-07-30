<template>
    <div>
        <h1>{{ title }}</h1>

        <navigation/>

        <p>message: {{ message }}</p>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'QuicklyGet',

        data() {
            return {
                title: 'component: Axios QuicklyGet',
                message: 'default'
            }
        },

        components: {
            Navigation: () => import('@/components/axios/Navigation')
        },

        mounted() {
            axios.get(
                process.env.VUE_APP_BACKEND_API + '/try?lalala=123',
                {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            )
                .then(response => {
                    console.log(response)

                    this.message = response.data
                    console.log(this.message)
                })
                .catch(response => {
                    console.log(response)
                    console.log(response.response)

                    this.message = response.response.data.message
                    console.log(this.message)
                })
        }
    }
</script>
