<template>
  <horizontal-stepper
    :steps="demoSteps"
    @completed-step="completeStep"
    @active-step="isStepActive"
    @stepper-finished="alert"
  >
  </horizontal-stepper>
</template>

<script>
import HorizontalStepper from "vue-stepper";
import FirstStep from "./Steps/FirstStep.vue";
import { ref } from "@vue/composition-api";
export default {
  components: { HorizontalStepper },
  name: "SuscriptionForm",
  setup() {
    const demoSteps = ref([
      {
        icon: "person",
        name: "first",
        title: "Datos personales",
        subtitle: "",
        component: FirstStep,
        completed: false,
      },
    ]);

    const completeStep = (payload) => {
      demoSteps.value.forEach((step) => {
        if (step.name === payload.name) {
          step.completed = true;
        }
      });
    };

    const isStepActive = (payload) => {
      demoSteps.value.forEach((step) => {
        if (step.name === payload.name) {
          if (step.completed === true) {
            step.completed = false;
          }
        }
      });
    };

    const alert = () => {
      alert("end");
    };

    return { demoSteps, completeStep, isStepActive, alert };
  },
};
</script>

<style lang="scss" scoped></style>
