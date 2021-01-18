<template>
  <div class="container">
    <div class="container__content">
      <h1 class="container__title">Formulario de inscripción</h1>
      <subscription-form />
    </div>
  </div>
</template>

<script>
import SubscriptionForm from "../components/SubscriptionForm/SubscriptionForm.vue";
export default {
  components: { SubscriptionForm },
  name: "Subscription",
  title() {
    return "Inscripciones";
  },
};
</script>

<style lang="scss" scoped></style>
