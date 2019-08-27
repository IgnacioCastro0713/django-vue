<template>
  <div class="container">
    <div class="row">
      <div class="col text-left">
        <h2>Edit Book</h2>
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <b-form @submit.prevent="onUpdate">
                  <b-form-group label="Título" label-for="title">
                    <b-form-input placeholder="ingrese un título"
                                  v-model="form.title"></b-form-input>
                  </b-form-group>
                  <b-form-group label="Descripción" label-for="description">
                    <b-form-textarea placeholder="Escribe una descripción..."
                                     v-model="form.description"
                                     rows="4"></b-form-textarea>
                  </b-form-group>
                  <b-button type="submit" variant="primary">Editar Cambios</b-button>
                  <b-button type="submit" :to="{ name: 'ListBook'}">Cancelar</b-button>
                </b-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
	name: "EditBook",
	data() {
	  return {
		bookId: this.$route.params.id,
		form: {
		  title: '',
		  description: ''
		}
	  }
	},
	created() {
	  this.getBook();
	},
	methods: {
	  async onUpdate() {
		try {
		  await this.axios.put(`${this.$api_url}book/${this.bookId}/`, this.form);
		  this.$router.push({name: 'ListBook'});
		} catch (e) {
		  console.log(e);
		}
	  },
	  async getBook() {
		try {
		  let res = await this.axios.get(`${this.$api_url}book/${this.bookId}/`);
		  this.form = res.data;
		} catch (e) {
		  console.log(e);
		}
	  }
	}
  }
</script>

<style scoped>

</style>
