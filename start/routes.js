'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.on('/').render('welcome')

// Route.get('/users',() => 'List of users').as('users.index')

Route.get('/users',({ request }) => {
  switch (request.format()) {
    case 'json':
      return [
        { name: 'wanghao'},
        { name: 'xiaoxue'}
      ]

    default:
      return `
        - chenchong
        - kaikai
        - caixuexia
      `
  }
}).formats(['json','html'],true)


Route
  .group(()=>{
    Route.get('users',() => 'Manage users')
    Route.get('posts',() => 'Manage posts')
  })
  .prefix('admin')

Route.any('*', ({ view }) => view.render('welcome'))
