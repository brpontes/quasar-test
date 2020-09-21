<template>
  <div class="q-pa-md">
    <h4>Cadastro de Contato</h4>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Nome do contato*"
        hint="Nome do contato"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Nome do contato é obrigatório']"
      />
      <q-input
        filled
        v-model="phone"
        label="Telefone *"
        lazy-rules
        mask="(##) ####-#####"
        :rules="[
          val => val !== null && val !== '' || 'Telefone é obrigatório '
        ]"
      />
      <q-toggle v-model="accept" label="I accept the license and terms" @change="toggleTerm" />
      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>

<script>
import api from '../api'
export default {
  name: 'FormAdd',
  data: function () {
    return {
      name: '',
      phone: '',
      accept: false
    }
  },
  methods: {
    toggleTerm () {
      this.accept = !this.accept
    },
    onSubmit () {
      api.add('contacts', { name: this.name, phone: this.phone })
      this.$router.replace('/')
    },
    onReset () {
      console.log('age', this.age)
    }
  }
}
</script>
