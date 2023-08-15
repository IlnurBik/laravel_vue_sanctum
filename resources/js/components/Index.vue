<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item" v-if="$store.getters.showMenu">
                            <router-link :to="{name: 'post.index'}" class="nav-link">Post</router-link>
                        </li>
                        <li class="nav-item" v-if="!$store.getters.showMenu">
                            <router-link :to="{name: 'user.login'}" class="nav-link">Login</router-link>
                        </li>
                        <li class="nav-item" v-if="!$store.getters.showMenu">
                            <router-link :to="{name: 'user.registration'}" class="nav-link">Registration</router-link>
                        </li>
                        <li class="nav-item" v-if="$store.getters.showMenu">
                            <router-link :to="{name: 'user.personal'}" class="nav-link">Personal</router-link>
                        </li>
                        <li class="nav-item" v-if="$store.getters.showMenu">
                            <a href="#" @click.prevent="logout" class="nav-link">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Index",
    methods:{
        logout(){
            axios.post('/logout')
            .then(res => {
                this.$router.push({name: 'user.login'});
                localStorage.removeItem('x_xsrf_token');
                this.$store.commit('setShowMenu', false);
            })
        },
        showMenu(){
            const token = localStorage.getItem('x_xsrf_token');
            if(token){
                this.$store.commit('setShowMenu', true);
            }
        }
    },
    mounted() {
        this.showMenu();
    }

}
</script>

<style scoped>

</style>
