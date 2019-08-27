<template>
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <h2>List of books</h2>
        <div class="col-md-12">
          <b-table striped hover :items="books.data" :fields="fields">
            <template slot="action" slot-scope="data">
              <b-button pill variant="primary" :to="{name:'EditBook', params:{id: data.item.id}}">Edit</b-button>
              <b-button pill variant="danger" @click="onDelete">Delete</b-button>
            </template>
          </b-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
	name: "ListBook",
	data() {
	  return {
		books: [],
		fields: [
		  {key: 'title', label: 'Título'},
		  {key: 'description', label: 'Descripción'},
		  {key: 'action', label: ''},
		]
	  }
	},
	created() {
	  this.getBooks();
	},
	methods: {
	  async getBooks() {
		try {
		  this.books = await this.axios.get(`${this.$api_url}book`);
		} catch (e) {
		  console.log(e);
		}
	  },
      async onDelete() {
		this.$swal.mixin(this.Toast).fire({
		  type: 'success',
		  title: 'Eliminado correctamente'
		});
      }
	}
  }
</script>

<style scoped>

</style>
