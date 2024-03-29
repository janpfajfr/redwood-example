// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/customers" page={CustomersPage} name="customers" />
      <Route path="/images/new" page={NewImagePage} name="newImage" />
      <Route path="/images/{id:Int}/edit" page={EditImagePage} name="editImage" />
      <Route path="/images/{id:Int}" page={ImagePage} name="image" />
      <Route path="/images" page={ImagesPage} name="images" />
      <Route path="/contact" page={ContactPage} name="contact" />
      <Route path="/blog-post/{id:Int}" page={BlogPostPage} name="blogPost" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/" page={HomePage} name="home" />
      <Private unauthenticated="home">
        <Route path="/admin/posts/new" page={NewPostPage} name="newPost" />
        <Route path="/admin/posts/{id:Int}/edit" page={EditPostPage} name="editPost" />
        <Route path="/admin/posts/{id:Int}" page={PostPage} name="post" />
      </Private>
      <Route path="/admin/posts" page={PostsPage} name="posts" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
