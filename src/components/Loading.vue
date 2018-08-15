<template>
  <div class="loading"><span></span></div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style scoped>
  .loading{
    border-radius: 50%;
    margin: 10px auto;
    position: relative;
    height: 60px;
    width: 60px;
    background-color: #e0e0eb;
    transform: scale(0.8);
  }
  .loading:before {
    position: absolute;
    top: 30px;
    left: 27.5px;
    content: "";
    height: 35px;
    width: 5px;
    background-color: #535657;
    transform-origin: 50% 0%;
    border-radius: 8px;
    animation: clock 10s linear infinite;
  }
  .loading:after {
    position: absolute;
    content: "";
    height: 35px;
    width: 2px;
    top: 30px;
    left: 29px;
    transform-origin: 50% 0%;
    background-color: #D1462F;
    border-radius: 2px;
    animation: clock 1s linear infinite;
  }
  .loading span {
    position: absolute;
    top: 10px;
    left: 27.5px;
    height: 20px;
    width: 5px;
    border-radius: 2px;
    background: #535657;
    transform-origin: 50% 100%;
    animation: clock 100s linear infinite;
  }
  @keyframes clock {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
