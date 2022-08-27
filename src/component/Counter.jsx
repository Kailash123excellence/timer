import React from "react";
import { useState } from "react";
export default function Counter() {
  const [num, setNum] = useState(0);
  const [stop, setStop] = useState(0);
 


  function startTimer() {
    if (stop) {
      clearInterval(stop);
      setStop(0);
      return;
    }
    const startId = setInterval(() => {
      setNum((prevNum)=>prevNum+1);
    }, 1000);
    setStop(startId);
  }

  function resetTimer(){
    clearInterval(stop)
    setNum(0)
  }

  return (
    <>
      <div className="container">
        <h2>Modal Counter</h2>
        <button
          type="button"
          className="btn btn-info btn-lg background"
          data-toggle="modal"
          data-target="#myModal"
        >
          Open Counter
        </button>

        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header header">
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
                <h4 className="modal-title timer">Timer</h4>
              </div>
              <div className="modal-body">
                <p className="number">{num}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default background"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-default background"
                  onClick={startTimer}
                >
                  Start/Stop
                </button>
                <button
                  type="button"
                  className="btn btn-default background"
                  onClick={resetTimer}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {
        showBtn?
        <button className='BtnCounter' onClick={modal}>OpenCounter</button>:""
      }
      <div>
        {status?<ModalCounter/>:""}
      </div>
     */}
    </>
  );
}
