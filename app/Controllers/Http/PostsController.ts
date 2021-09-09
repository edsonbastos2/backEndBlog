// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
  public index() {
    return ['post1', 'post2', 'post3']
  }
}
