<template>
  <div>
    <div class="row">
      <div class="col direction-col">
        <label for="Courses" class="label">Cursos libres</label>
        <select id="Courses" class="text-select" v-model="form.course">
          <option
            class="text-select item"
            v-for="(course, idx) in courses"
            :key="idx"
            :value="course"
          >
            {{ course }}
          </option>
        </select>
      </div>
    </div>
    <div class="row direction-row">
      <div class="col direction-col">
        <label for="Firstname" class="label">Nombre</label>
        <input
          class="text-field"
          type="text"
          id="Firstname"
          v-model="form.firstName"
        />
      </div>
      <div class="col direction-col">
        <label for="Lastname" class="label">Apellido</label>
        <input
          class="text-field"
          type="text"
          id="Lastname"
          v-model="form.lastName"
        />
      </div>
    </div>
    <div class="row">
      <div class="col direction-row">
        <label for="Female" class="label">
          Femenino
          <input
            class="text-radio"
            type="radio"
            id="Female"
            value="Femenino"
            v-model="form.gender"
          />
        </label>
        <label for="Male" class="label ml-10">
          Masculino
          <input
            class="text-radio"
            type="radio"
            id="Male"
            value="Masculino"
            v-model="form.gender"
          />
        </label>
      </div>
    </div>
    <div class="row">
      <div class="col direction-col">
        <label class="label" for="Date">Fecha de nacimiento</label>
        <input
          v-model="form.dateOfBirth"
          class="text-date uppercase"
          type="date"
          name="Date"
          id="Date"
        />
      </div>
    </div>
    <div class="row">
      <div class="col direction-col">
        <label for="Origin" class="label">Lugar de nacimiento</label>
        <input
          class="text-field"
          v-model="form.origin"
          type="text"
          id="Origin"
        />
      </div>
    </div>
    <div class="row direction-row">
      <div class="col direction-col">
        <label for="State" class="label">Departamento</label>
        <input class="text-field" v-model="form.state" type="text" id="State" />
      </div>
      <div class="col direction-col">
        <label for="Citizenship" class="label">Nacionalidad</label>
        <input
          class="text-field"
          v-model="form.citizenship"
          type="text"
          id="Citizenship"
        />
      </div>
    </div>
    <div class="row">
      <div class="col direction-col">
        <label for="Etnicity" class="label"
          >Grupo étnico al que pertenece</label
        >
        <select
          id="Etnicity"
          class="text-select"
          v-model="form.etnicity"
          :disabled="form.otherEtnicity !== ''"
          :style="form.otherEtnicity !== '' && { background: '#ccc' }"
        >
          <option
            class="text-select item"
            v-for="(etnicity, idx) in etnicities"
            :key="idx"
            :value="etnicity"
          >
            {{ etnicity }}
          </option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col direction-col" v-if="form.etnicity === 'Otras'">
        <label for="Other" class="label">Otras</label>
        <input
          type="text"
          id="Other"
          class="text-field highlight"
          v-model="form.otherEtnicity"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
export default {
  name: "FirstStep",
  props: ["clickedNext", "currentStep"],
  mixins: [validationMixin],
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        gender: "Femenino",
        dateOfBirth: "",
        origin: "",
        state: "",
        citizenship: "",
        etnicity: "",
        course: "",
        otherEtnicity: "",
      },
      etnicities: ["Indígena", "Raizal", "Mestizo", "Negro", "Otras"],
      courses: [
        "Piano",
        "Guitarra",
        "Percusión",
        "Lectura",
        "Escritura",
        "Danza",
        "Flauta",
        "Aprestamiento musical",
      ],
    };
  },
  validations: {
    form: {
      course: {
        required,
      },
      firstName: {
        required,
      },
      lastName: {
        required,
      },
      dateOfBirth: {
        required,
      },
      origin: {
        required,
      },
      state: {
        required,
      },
      citizenship: {
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
