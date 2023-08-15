<template>
    <div>
        Доступ к защищенному url: {{ access }}
    </div>
</template>

<script>
export default {
    name: "Index",
    data(){
      return {
          access: null,
      }
    },
    methods:{
        getPost(){
            axios.get('/api/get')
            .then(res => {
                console.log(res);
                this.access = 'Yes';
            })
            .catch(err =>{
                console.log(err.response.data.message);
                this.access = 'No';
            })
        },
    },
    mounted() {
        this.getPost();
    }
}
</script>

<style scoped>

</style>
