'use strict'

class PostController{
  index () {
    return `List of Posts.once`
  }

  show ({ params }){
    return `You're watching post ${ params.id }.`
  }

  update ({ params }){
    return `Post ${ params.id } has been updated.`
  }

  
}

module.exports = PostController
