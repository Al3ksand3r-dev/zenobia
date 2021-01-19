<template>
  <div class="container">
    <div class="container__content">
      <main-heading
        heading="Formulario de inscripción"
        class="px-0 text-center"
      />
      <subscription-form />
    </div>
  </div>
</template>

<script>
import MainHeading from "../components/MainHeading/MainHeading.vue";
import SubscriptionForm from "../components/SubscriptionForm/SubscriptionForm.vue";
export default {
  components: { SubscriptionForm, MainHeading },
  name: "Subscription",
  title() {
    return "Inscripciones";
  },
};
</script>

<style lang="scss" scoped></style>
