import React from "react";
import "./CreateRoom.css";
const CreateRoom = () => {
  return (
    <div className="mx-5">
      <div>
        <div className="form1">
          <h2 className="text-center text-primary mb-4">Create Room</h2>
          <form>
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-lg mb-2"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="form-group d-flex">
              <input
                type="text"
                className="form-control form-control-lg"
                id="exampleInputPassword1"
                placeholder="Generate Room Code"
                disabled
              />
              <button type="button" className="btn btn-primary mx-1 btn-sm">
                Generate
              </button>
              <button type="button" className="btn btn-sm  btn-outline-danger">
                Copy
              </button>
            </div>
            <button type="submit" className="btn btn-primary btn-lg w-100 mt-3">
              Generate Room
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;
