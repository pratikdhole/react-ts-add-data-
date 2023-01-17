import * as React from 'react';
import { useState } from 'react';
import './style.css';

export default function App() {
  const [inputarr, setinputarr] = useState([]);

  const [inputdata, setInputdata] = useState({
    taskname: '',
    duration: '',
  });

  function changehandle(e) {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  }

  let { taskname, duration } = inputdata;
  function changhandle(e) {
    e.preventDefault();
    setinputarr([...inputarr, { taskname, duration }]);
    setInputdata({ taskname: '', duration: '' });
  }

  function changehandle2() {
    console.log();
  }
  return (
    <div className="task2">
      <form>
        <div>
          <label>task Name</label>
          <input
            type="text"
            value={inputdata.taskname}
            className="text1"
            onChange={changehandle}
            name="taskname"
            required
          />
        </div>
        <div>
          <label>Duration</label>
          <input
            type="number"
            value={inputdata.duration}
            className="text1"
            onChange={changehandle}
            name="duration"
            required
          />
        </div>
        <button className="addlist" onClick={changhandle}>
          Add list
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Task Duration</th>
          </tr>
        </thead>
        <tbody>
          {inputarr.map((info, ind) => {
            return (
              <tr key={ind}>
                <td>{info.taskname}</td>
                <td>{info.duration}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
