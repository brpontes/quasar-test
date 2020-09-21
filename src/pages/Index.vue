<template>
  <div class="q-pa-sm">
   <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Lista de Contatos</div>
      </q-card-section>

      <q-markup-table>
        <thead>
          <tr>
            <th class="text-left">Nome</th>
            <th class="text-left">Telefone</th>
            <th class="text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="contact in contacts" :key="contact.id" v-bind="contact">
            <td class="text-left">{{contact.name}}</td>
            <td class="text-left">{{contact.phone}}</td>
            <td class="text-center">
              <div class="q-p-md q-gutter-sm">
                <q-btn round color="primary" icon="edit" @click="$router.replace(`edit/${contact.id}`)" />
                <q-btn round color="red" icon="delete" @click="removeContact(contact.id)"/>
              </div>
            </td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card>
  </div>
</template>

<script>
import api from '../api'

export default {
  name: 'ListContacts',
  data: function () {
    return {
      contacts: []
    }
  },
  methods: {
    removeContact (id) {
      api.remove('contacts', id)
      this.setContacts(api.get('contacts'))
    },
    setContacts (data) {
      this.contacts = data
    }
  },
  mounted () {
    const data = api.get('contacts')
    this.contacts = data
  }
}
</script>
