<template>
  <horizontal-stepper
    :steps="demoSteps"
    @completed-step="completeStep"
    @active-step="isStepActive"
    @stepper-finished="completeWizard"
    locale="es"
    ref="formWizard"
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
        icon: "info",
        name: "second",
        title: "Informacíon",
        subtitle: "Comente por qué decide tomar el curso",
        component: SecondStep,
        completed: false,
      },
      {
        icon: "forum",
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

    const input = ref({});
    const formWizard = ref([]);

    const completeWizard = () => {
      const formValues = formWizard.value.$children.map((child) => child.form);
      input.value = Object.assign(...formValues);
      console.log(input.value);
    };

    return {
      demoSteps,
      completeStep,
      isStepActive,
      completeWizard,
      formWizard,
    };
  },
};
</script>

<style lang="scss" scoped></style>
