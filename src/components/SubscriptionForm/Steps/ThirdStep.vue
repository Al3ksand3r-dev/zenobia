<template>
  <div>
    <div class="row">
      <div class="col direction-col">
        <label for="SocialMedia" class="label"
          >Comente por qué medio se enteró del proyecto</label
        >
        <select
          id="SocialMedia"
          class="text-select"
          v-model="form.socialMedia"
          :disabled="form.otherSocialMedia !== ''"
          :style="form.otherSocialMedia !== '' && { background: '#ccc' }"
        >
          <option
            class="text-select item"
            v-for="(socialMedia, idx) in socialMediaList"
            :key="idx"
            :value="socialMedia"
          >
            {{ socialMedia }}
          </option>
        </select>
      </div>
    </div>
    <div class="row" v-if="form.socialMedia === 'Otro'">
      <div class="col direction-col">
        <label for="Other" class="label">Otro</label>
        <input
          type="text"
          id="Other"
          class="text-field highlight"
          v-model="form.otherSocialMedia"
        />
      </div>
    </div>
    <div class="row">
      <div class="col direction-col">
        <label for="Email" class="label">Correo Electronico</label
        ><input
          type="text"
          class="text-field"
          v-model="form.email"
          id="Email"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { email } from "vuelidate/lib/validators";
export default {
  name: "ThirdStep",
  props: ["clickedNext", "currentStep"],
  mixins: [validationMixin],
  data() {
    return {
      form: {
        otherSocialMedia: "",
        email: "",
        socialMedia: "",
      },
      socialMediaList: [
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
    };
  },
  validations: {
    form: {
      email: {
        email,
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
