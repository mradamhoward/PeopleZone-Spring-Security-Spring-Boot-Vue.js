<template>
<h2>{{ log }}</h2>
</template>

<script>
export default {
    data(){
        return {
            log: ''
        };
    }, 
    mounted(){
        this.$store.commit('auth/logout');
        this.$router.push('/');
    }   
}
</script>