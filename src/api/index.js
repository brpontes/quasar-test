import { uuid } from 'vue-uuid'

export default {
  add: (key, data) => {
    try {
      data.id = uuid.v4()
      const storage = JSON.parse(localStorage.getItem(key)) || []
      const newData = [...storage, data]
      localStorage.setItem('contacts', JSON.stringify(newData))
      return true
    } catch (e) {
      console.log(e)
      return false
    }
  },
  get: (key) => {
    try {
      const storage = JSON.parse(localStorage.getItem(key)) || []
      return storage
    } catch (e) {
      console.log(e)
    }
  },
  getById: (key, id) => {
    const storage = JSON.parse(localStorage.getItem(key)) || []
    const item = storage.filter(data => data.id === id)[0] || { name: 'Não encontrado', phone: 'Não encontrado' }
    return item
  },
  edit: (key, data) => {
    try {
      const storage = JSON.parse(localStorage.getItem(key)) || []
      const newStorage = storage.map(item => {
        if (item.id === data.id) {
          for (const prop in item) {
            item[prop] = data[prop]
          }
        }
        return item
      })
      localStorage.setItem(key, JSON.stringify(newStorage))
    } catch (e) {
      console.log(e)
    }
  },
  remove: (key, id) => {
    try {
      const storage = JSON.parse(localStorage.getItem(key)) || []
      const newStorage = storage.filter(item => item.id !== id)
      localStorage.setItem(key, JSON.stringify(newStorage))
    } catch (e) {
      console.log(e)
    }
  }
}
