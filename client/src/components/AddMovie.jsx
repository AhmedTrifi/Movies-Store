import React from 'react'

function AddMovie() {
  return (
    <div className="container">
        <form>
  <div class="form-group">
    <label for="name">name</label>
    <input type="text" class="form-control" id="name"  placeholder="Enter movie Name" />
  </div>
  <div class="form-group">
    <label for="gender">Movie Gender</label>
    <select class="form-control" id="gender">
      <option>Horror</option>
      <option>Romantic</option>
      <option>Fantasy</option>
      <option>Drama</option>
      <option>Action</option>
    </select>
  </div>
  <div class="form-group">
    <label for="image">Image</label>
    <input type="text" class="form-control" id="image" placeholder="Enter your movie image url"/>
  </div>
  <div class="form-group">
    <label for="description">Movie Review</label>
    <textarea class="form-control" id="description" rows="3"></textarea>
  </div>


  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
    )
}

export default AddMovie