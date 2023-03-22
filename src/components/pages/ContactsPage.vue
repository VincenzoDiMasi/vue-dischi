<script>
const contactApi = "http://127.0.0.1:8000/api/contact";
import axios from "axios";
export default {
  name: "ContactsPage",
  data() {
    return {
      formField: {
        title: "",
        email: "",
        description: "",
        subscribe: false,
      },
      successMessage: "",
      errors: {},
    };
  },
  methods: {
    sendForm() {
      this.errors = {};
      this.successMessage = "";
      if (this.isValidate()) {
        axios
          .post(contactApi, this.formField)
          .then((res) => {
            this.successMessage = res.data.message;
            this.formField = {
              title: "",
              email: "",
              description: "",
              subscribe: false,
            };
          })
          .catch((e) => {
            this.errors = e.response.data.errors;
          });
      }
    },
    isValidate() {
      const validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!this.formField.title)
        this.errors.title = ["Il titolo è obbligatorio"];
      if (!this.formField.email) {
        this.errors.email = ["La mail è obbligatoria"];
      } else if (!this.formField.email.match(validRegex)) {
        this.errors.email = ["La mail inserita non è valida"];
      }
      if (!this.formField.description)
        this.errors.description = ["Devi inserire una descrizione valida"];

      return Object.keys(this.errors).length ? false : true;
    },
  },
};
</script>

<template>
  <div class="container my-5">
    <h1>Contattaci</h1>
    <div
      v-if="Object.keys(errors).length"
      class="alert alert-danger"
      role="alert">
      <ul class="list-unstyled">
        <li v-for="(error, i) in errors" :key="i">
          <ul class="list-unstyled">
            <li v-for="label in error" :key="label">{{ label }}</li>
          </ul>
        </li>
      </ul>
    </div>
    <div v-if="successMessage" class="alert alert-success" role="alert">
      <p>{{ successMessage }}</p>
    </div>
    <form method="post" class="row" @submit.prevent="sendForm">
      <div class="col-5">
        <div class="mb-3">
          <label for="title" class="form-label">Titolo</label>
          <input
            type="text"
            class="form-control"
            id="title"
            v-model="formField.title"
            :class="{ 'is-invalid': errors.title }" />
        </div>
      </div>

      <div class="col-4">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="name@example.com"
            v-model="formField.email"
            :class="{ 'is-invalid': errors.email }" />
        </div>
      </div>
      <div class="col-3 d-flex align-items-end justify-content-end">
        <div class="form-check form-switch mb-3">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="subscribe"
            v-model="formField.subscribe" />
          <label class="form-check-label" for="subscribe"
            >Iscriviti alla newsletter</label
          >
        </div>
      </div>
      <div class="col-12">
        <div class="mb-3">
          <label for="description" class="form-label">Decrizione</label>
          <textarea
            class="form-control"
            id="description"
            rows="3"
            v-model="formField.description"
            :class="{ 'is-invalid': errors.description }"></textarea>
        </div>
      </div>
      <div class="d-flex justify-content-end mt-4">
        <button class="btn btn-success">Invia</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
* {
  color: white;
}

.form-control {
  color: black;
}

.alert.alert-danger li {
  color: black;
}

.alert-success p {
  color: black;
  margin: 0;
}
</style>
