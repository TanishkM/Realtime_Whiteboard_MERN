import React from 'react'
import './JoinRoom.css'
const JoinRoom = () => {
  return (
    <div>
      <div className='form1'>
        <h2 className='text-center text-primary mb-4'>Join Room</h2>
      <form>
  <div className="form-group">
    <input type="email" className="form-control form-control-lg mb-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name"/>
  </div>
  <div className="form-group">
    <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Enter Room Code"/>
  </div>
  <button type="submit" className="btn btn-primary btn-lg w-100 mt-3">Enter Room</button>
</form>
      </div>
    </div>
  )
}

export default JoinRoom
