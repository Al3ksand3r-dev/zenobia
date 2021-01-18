<template>
  <horizontal-stepper
    :steps="demoSteps"
    @completed-step="completeStep"
    @active-step="isStepActive"
    @stepper-finished="completeWizard"
    locale="es"
  >
  </horizontal-stepper>
</template>

<script>
import HorizontalStepper from "vue-stepper";
import FirstStep from "./Steps/FirstStep.vue";
import SecondStep from "./Steps/SecondStep.vue";
import ThirdStep from "./Steps/ThirdStep.vue";
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
      {
        icon: "person",
        name: "second",
        title: "Informacíon",
        subtitle: "",
        component: SecondStep,
        completed: false,
      },
      {
        icon: "person",
        name: "third",
        title: "Informacíon",
        subtitle: "Comente por qué medio se enteró del proyecto",
        component: ThirdStep,
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

    const completeWizard = (payload) => {
      console.log(payload);
    };

    return { demoSteps, completeStep, isStepActive, completeWizard };
  },
};
</script>

<style lang="scss" scoped></style>
