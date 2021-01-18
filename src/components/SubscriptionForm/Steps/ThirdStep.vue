<template>
  <div class="row">
    <div class="col direction-col">
      <label for="SocialMedia" class="label"
        >Comente por qué medio se enteró del proyecto</label
      >
      <select
        id="SocialMedia"
        class="text-select"
        v-model="form.selected"
        v-if="form.selected !== 'Otro'"
      >
        <option
          class="text-select item"
          v-for="(socialMedia, idx) in form.socialMedia"
          :key="idx"
          :value="socialMedia"
        >
          {{ socialMedia }}
        </option>
      </select>
      <div class="col" v-else>
        <label for="Other" class="label">
          <input
            type="text"
            id="Other"
            class="text-field highlight"
            v-model="form.other"
          />
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
export default {
  name: "ThirdStep",
  props: ["clickedNext", "currentStep"],
  mixins: [validationMixin],
  data() {
    return {
      form: {
        other: "",
        selected: "",
        socialMedia: [
          "Página web de la Fundación",
          "Facebook",
          "Twitter",
          "Correo electrónico",
          "Radio",
          "Me conto un amigo",
          "Volante",
          "Whatsapp",
          "Otro",
        ],
      },
    };
  },
  validations: {
    form: {
      selected: {
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
