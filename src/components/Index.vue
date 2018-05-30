<template>
  <div>
    {{msg}}
  </div>
</template>
<script>
import { mapGetter } from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: {
    msg() {
      return 'hello,Vue'
    }
  },
  mounted() {
    // this.$http.get('https://cnodejs.org/api/v1/topics').then(res => console.log(res.data.data))

  },
}

</script>
<style>


</style>
