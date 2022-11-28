import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
  return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Taste</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav mr-auto">
  <li class="nav-item active">

          <Link class="nav-link " to="/">Home</Link>
          </li>
          <li class="nav-item active">

         <Link class="nav-link " to="/add">Add Review</Link>
         </li>
       </ul>
   </div>
</nav>  )
}

export default Header