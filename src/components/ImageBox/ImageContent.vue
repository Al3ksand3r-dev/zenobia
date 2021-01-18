<template>
  <div>
    <div class="image" :style="{ backgroundImage: `url(${imgUrl})` }"></div>
    <h1>{{ title }}</h1>
    <p>{{ desc }}</p>
  </div>
</template>

<script>
export default {
  name: "ImageContent",
  props: {
    imgUrl: String,
    title: String,
    desc: String
  }
};
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
  height: 350px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

h1 {
  margin: 2rem 0;
  color: #289ea8;
  font-weight: 100;
}

p {
  line-height: 1.7;
}

@media screen and (min-width: 1024px) {
  .image {
    height: 250px;
  }
}
</style>
