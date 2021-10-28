import React from "react";
import "./AddOfficersPage.css";

function AddOfficersPage() {
  return (
    <div className="modify_page">
      <div className="insert_feild">
        <h3>Add Officer</h3>
        <div className="test_input">
          <div className="input_form">
            <form>
              <input type="text" name="username" placeholder="Name" />
              <input type="text" name="title" placeholder="Role" />
              <input type="text" name="email" placeholder="Email" />
              <input type="text" name="linkedin" placeholder="LinkedIn" />
              <input type="file" />

              <button className="submit_button">Submit</button>
              <button className="submit_button">Submit</button>
            </form>
          </div>

          <h3>Current Officers</h3>
          <div className="input_form">
            <form>
              <input type="text" name="username" placeholder="Name" />
              <input type="text" name="role" placeholder="Role" />
              <input type="text" name="email" placeholder="Email" />
              <input type="text" name="linkedin" placeholder="LinkedIn" />
              <input type="text" name="password" placeholder="Password" />
              <button className="submit_button">Update</button>
              <button className="submit_button">Delete</button>
            </form>
          </div>
        </div>

        <h3>Add Video</h3>
        <div className="test_input">
          <div className="input_form">
            <form>
              <input type="text" name="Title" placeholder="Title" />
              <input type="text" name="Link" placeholder="Link" />
              <input type="text" name="Description" placeholder="Description" />
              <input type="text" name="Tags" placeholder="Tags" />
              <button className="submit_button">Submit</button>
            </form>
          </div>

          <h3>Current Videos</h3>
          <div className="input_form">
            <form>
              <input type="text" name="username" placeholder="Name" />
              <input type="text" name="role" placeholder="Role" />
              <input type="text" name="email" placeholder="Email" />
              <input type="text" name="linkedin" placeholder="LinkedIn" />
              <input type="text" name="password" placeholder="Password" />
              <button className="submit_button">Update</button>
              <button className="submit_button">Delete</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddOfficersPage;