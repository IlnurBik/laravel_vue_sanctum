<template>
<div>
    <table class="table w-25">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
        </tr>
        </thead>
        <tbody>
        <tr v-if="data">
            <th scope="row">{{ data.id }}</th>
            <td>{{ data.name }}</td>
            <td>{{ data.email }}</td>
        </tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default {
    name: "Personal",
    data(){
        return {
            data: null,
        }
    },
    methods:{
        getPersonal(){
            axios.get('/api/user')
            .then(res => {
                this.data = res.data;
            })
        }
    },
    mounted() {
        this.getPersonal();
    }
}
</script>

<style scoped>

</style>
