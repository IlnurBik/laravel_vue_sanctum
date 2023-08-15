<template>
    <div class="w-25">
        <div class="mb-2 mt-2">
            <input v-model="name" type="text" class="form-control" placeholder="name">
        </div>
        <div class="mb-2">
            <input v-model="email" type="email" class="form-control" placeholder="email">
        </div>
        <div class="mb-2">
            <input v-model="password" type="password" class="form-control" placeholder="password">
        </div>
        <div class="mb-2">
            <input v-model="password_confirmation" type="password" class="form-control" placeholder="password_confirmation">
        </div>
        <div>
            <input @click.prevent="registr" type="submit" value="registration" class="btn btn-primary">
        </div>
    </div>
</template>

<script>
export default {
    name: "Registration",
    data(){
        return {
            name: null,
            email: null,
            password: null,
            password_confirmation: null,
        }
    },
    methods:{
        registr(){
            axios.get('/sanctum/csrf-cookie')
            .then(response => {
                axios.post('/register', {name: this.name, email: this.email, password: this.password,
                    password_confirmation: this.password_confirmation})
                .then(res => {
                    localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN']);
                    this.$store.commit('setShowMenu', true);
                    this.$router.push({name: 'user.personal'});
                })
                .catch(err =>{
                    // console.log(err)
                })
            })
        }
    }
}
</script>

<style scoped>

</style>
