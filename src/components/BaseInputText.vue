<template>
  <input type="text" :value="value" class="input" @input="$emit('input',$event.target.value)">
</template>

<script>
export default {
  name: 'BaseInputText',
  props: ['value']
}
</script>

<style scoped>
  .input{
    padding: 8px 10px;
  }
</style>
