<template>
    <div class="w-25">
        <div class="mb-2 mt-2">
            <input v-model="email" type="email" class="form-control" placeholder="email">
        </div>
        <div class="mb-2">
            <input v-model="password" type="password" class="form-control" placeholder="password">
        </div>
        <div>
            <input @click.prevent="login" type="submit" value="Login" class="btn btn-primary">
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data(){
      return {
          email: null,
          password: null,
      }
    },
    methods:{
        login(){
            axios.get('/sanctum/csrf-cookie')
            .then(response => {
                axios.post('/login', {email: this.email, password: this.password})
                .then(res =>{
                    // console.log(res);
                    this.$router.push({name: 'user.personal'});
                    this.$store.commit('setShowMenu', true);
                    localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN']);
                })
            })
        }
    }
}
</script>

<style scoped>

</style>
