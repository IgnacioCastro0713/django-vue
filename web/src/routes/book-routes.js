import {ListBook, EditBook, CreateBook} from '../views/book'

export default [
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
  {
	path: '/books/create',
	name: 'CreateBook',
	component: CreateBook
  },
]

