import Vue from 'vue'

export default {
  methods: {
    toast: (type, message) => {
	  Vue.prototype.$swal.mixin({
		toast: true,
		position: 'top',
		showConfirmButton: false,
		timer: 3000
	  }).fire({
		type: type,
		title: message
	  });
	},
	confirmDelete: () => {
	  return Vue.prototype.$swal.fire({
		title: '¿Estas seguro?',
		text: "No podrás revertir este proceso.",
		type: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Eliminar'
	  })
	}
  }
}
