<template>
  <div class="wrapper">
    <div class="image-box">
      <carousel
        :per-page="$mq === 'desktop' ? 3 : 1"
        :mouse-drag="true"
        :loop="true"
        :autoplay="true"
        :minSwipeDistance="1"
        :autoplayTimeout="5000"
        pagination-color="#ccc"
        pagination-active-color="#289EA8"
      >
        <slide class="slide">
          <ImageContent
            :imgUrl="require('@/assets/img/activities/1.jpg')"
            title="Lectoescritura"
            desc="Buscamos que los niños aprendan a leer y amar la lectura, aprendan a expresar sus pensamientos y emociones, aprendan a comunicarse."
          />
        </slide>
        <slide class="slide">
          <ImageContent
            :imgUrl="require('@/assets/img/activities/2.jpg')"
            title="Artes"
            desc="Enseñando arte buscamos ampliar su capacidad para expresar la visión de su entorno y del mundo"
          />
        </slide>
        <slide class="slide">
          <ImageContent
            :imgUrl="require('@/assets/img/activities/3.jpg')"
            title="Música"
            desc="Mediante lúdicas y juegos, se realiza el acercamiento del niño a la música para desarrollar las diferentes habilidades y sobre todo, el disfrute de la música."
          />
        </slide>
        <slide class="slide">
          <ImageContent
            :imgUrl="require('@/assets/img/activities/4.png')"
            title="Coral"
            desc="Trabajo realizado en la modalidad de ensayo. Se trabaja calentamiento corporal y vocal a través de vocalizos, que ejercitan la pronunciación y entonación."
          />
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import ImageContent from "@/components/ImageBox/ImageContent.vue";
export default {
  name: "ImageBox",
  components: {
    ImageContent,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  margin: auto;
  background: linear-gradient(to right, #f4f4f8, #fff);
}
.image-box {
  margin: auto;
  max-width: 560px;
  padding: 6rem 1rem;
}

@media screen and (min-width: 768px) {
  .image-box {
    padding: 6rem 0;
  }
}

@media screen and (min-width: 1024px) {
  .image-box {
    width: 100%;
    max-width: 1024px;
    padding: 6rem 1rem;
    .slide {
      cursor: grab;
      &:active {
        cursor: grabbing;
      }
      padding: 0 1rem;
    }
  }
}
</style>
