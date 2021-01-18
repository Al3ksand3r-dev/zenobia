<template>
  <div>
    <div class="row direction-row">
      <div class="col direction-col">
        <label for="HeardFrom" class="label"
          >Comente por qué decide tomar el curso</label
        >
        <textarea
          class="text-area"
          id="HeardFrom"
          v-model="form.heardFrom"
        ></textarea>
      </div>
    </div>
    <div class="row">
      <div class="col direction-col">
        <label class="label" for="HealthCare"
          >Entidad prestadora de salud o Sisben</label
        >
        <input
          v-model="form.healthCare"
          class="text-field"
          type="text"
          id="HealthCare"
        />
      </div>
    </div>
    <div class="row direction-row">
      <div class="col direction-col">
        <label for="State" class="label">Nombre del colegio</label>
        <input
          class="text-field"
          v-model="form.school"
          type="text"
          id="State"
        />
      </div>
      <div class="col direction-col">
        <label for="Grade" class="label">Grado que cursa</label>
        <input class="text-field" v-model="form.grade" type="text" id="Grade" />
      </div>
    </div>
    <div class="row direction-row">
      <div class="col direction-col">
        <label for="Parent" class="label">Nombre del adulto responsable</label>
        <input
          class="text-field"
          v-model="form.parent"
          type="text"
          id="Parent"
        />
      </div>
      <div class="col direction-col">
        <label for="Activity" class="label">Actividad</label>
        <input
          class="text-field"
          v-model="form.activity"
          type="text"
          id="Activity"
        />
      </div>
    </div>
    <div class="row direction-row">
      <div class="col direction-col">
        <label for="Phone" class="label">Teléfono de contacto</label>
        <input class="text-field" v-model="form.phone" type="text" id="Phone" />
      </div>
      <div class="col direction-col">
        <label for="Address" class="label">Dirección de residencia</label>
        <input
          class="text-field"
          v-model="form.address"
          type="text"
          id="Address"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
export default {
  name: "SecondStep",
  props: ["clickedNext", "currentStep"],
  mixins: [validationMixin],
  data() {
    return {
      form: {
        heardFrom: "",
        healthCare: "",
        school: "",
        grade: "",
        parent: "",
        activity: "",
        phone: "",
        address: "",
      },
    };
  },
  validations: {
    form: {
      healthCare: {
        required,
      },
      school: {
        required,
      },
      grade: {
        required,
      },
      parent: {
        required,
      },
      activity: {
        required,
      },
      phone: {
        required,
      },
      address: {
        required,
      },
    },
  },
  watch: {
    $v: {
      handler: function(val) {
        if (!val.$invalid) {
          this.$emit("can-continue", { value: true });
        } else {
          this.$emit("can-continue", { value: false });
        }
      },
      deep: true,
    },
    clickedNext(val) {
      if (val === true) {
        this.$v.form.$touch();
      }
    },
  },
  mounted() {
    if (!this.$v.$invalid) {
      this.$emit("can-continue", { value: true });
    } else {
      this.$emit("can-continue", { value: false });
    }
  },
};
</script>

<style lang="scss" scoped></style>
