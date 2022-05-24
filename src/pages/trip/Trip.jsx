import React from 'react'
import Footer from '../../components/footer/Footer'
import BannerTrip from '../../components/trip/BannerTrip'
import Navbar from '../../components/navbar/NavbarMain'

function Trip() {
  return (
    <div>
      <Navbar />
      <BannerTrip />
      <div class="container-fluid">
            <h2 class="text-center mt-5">Edit User Profile</h2>
            <form action="/edit/<%- user %>" method="POST">
                <div class="mb-3">
                  <label for="exampleInputName" class="form-label">Name</label>
                  <input type="name" class="form-control" name="username" value="<%= datauser.username %>"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email Address</label>
                    <input type="email" class="form-control" name="email" aria-describedby="emailHelp" value="<%= datauser.email %>"/>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" name="password" value="<%= %>"/>
                  </div>
                <button class="btn btn-primary">Save Profile</button>
              </form>
              <form action="/delete?id=<%= datauser.uuid %>" method="post">
                <button class="btn btn-danger mt-3">
                  Delete Account
                </button>
              </form>
      </div>
      <div>Trips</div>
      <Footer />
    </div>
  )
}

export default Trip