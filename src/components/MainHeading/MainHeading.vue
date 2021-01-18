<template>
  <div class="main-heading" :id="`${setID}`">
    <h1>{{ heading }}</h1>
  </div>
</template>

<script>
export default {
  name: "MainHeading",
  props: {
    setID: String,
    heading: String
  }
};
</script>

<style lang="scss" scoped>
.main-heading {
  margin: auto;
  color: #000;
  max-width: 560px;
  padding: 5rem 1rem;

  &::after {
    content: "";
    height: 10px;
    width: 120px;
    display: block;
    margin-top: 4rem;
    background: #289ea8;
  }
}

@media screen and (min-width: 768px) {
  .main-heading {
    margin: 0 auto;
    padding: 5rem 0;
  }
}

@media screen and (min-width: 1024px) {
  .main-heading {
    font-size: 1.2rem;
    max-width: 1024px;
    margin: 1rem auto;
    padding: 5rem 2rem 0 2rem;
  }
}
</style>
