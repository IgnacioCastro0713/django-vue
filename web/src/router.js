import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import {ListBook, EditBook} from './views/book'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
	{
	  path: '/',
	  name: 'home',
	  component: Home
	},
	{
	  path: '/books',
	  name: 'ListBook',
	  component: ListBook
	},
	{
	  path: '/books/:id/edit',
	  name: 'EditBook',
	  component: EditBook
	},
  ]
})
