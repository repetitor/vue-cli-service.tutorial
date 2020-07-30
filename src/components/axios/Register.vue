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
        name: 'Register',

        data() {
            return {
                title: 'component: Axios Register',
                message: 'default'
            }
        },

        components: {
            Navigation: () => import('@/components/axios/Navigation')
        },

        mounted() {
            axios.post(
                process.env.VUE_APP_BACKEND_API + '/register',
                {
                    'name': process.env.VUE_APP_NAME,
                    'email': process.env.VUE_APP_EMAIL,
                    'password': process.env.VUE_APP_PASSWORD
                },
                {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            )
                .then(response => {
                    console.log(response)

                    this.message = response.data.message
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
