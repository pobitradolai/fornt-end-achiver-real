import React,{useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";


export default function AddNotice() {
  
  const [noticeTitle,setNoticeTitle] = useState('');
  const [noticeDesc,setNoticeDesc] = useState('');

                              // write logic to send data to the database in the below function
  const onSubmit=()=>{
    var data={
        "noticeTitle":noticeTitle,
        "noticeDesc":noticeDesc

    }

    console.log(data);
    axios.post('http://localhost:8080/api/notice/addNotice', data).then(function (response) {
        console.log('response', response);
        if (response.data.success) {
            toast.success(response.data.message);
            setNoticeTitle('');
            setNoticeDesc('');
           
        }
        else {
            toast.error(response.data.message);
        }
    })
        .catch(function (error) {
            console.log(error);
        });
  }
  return (
    <div>
      <h1>Add Notices</h1>
      <form style={{ display: "flex", justifyContent: "center", fontFamily: "Poppins", fontSize: "1.2rem" }}>
        <table className="formTable">
          <tbody>
            <tr >
              <td className="formTableDetail">
                <label style={{ marginTop: "3px" }}>Notice Title</label>
              </td>
            </tr>
            <tr>
              <td>
                <TextField
                  fullWidth
                  required
                  id="outlined-required2"
                  label="Course Name"
                  
                  onChange={(e)=>{setNoticeTitle(e.target.value)}}
                />
              </td>
            </tr>

            <tr >
              <td className="formTableDetail">
                <label style={{ marginTop: "3px" }}>Notice Description</label>
              </td>
            </tr>
            <tr>
              <td>
                <TextField
                  fullWidth
                  id="outlined-multiline-flexible"
                  label="Course Description"
                  multiline
                  maxRows={4}
                  
                  onChange={(e)=>{setNoticeDesc(e.target.value)}}
                />
              </td>
            </tr>

            <tr >
              <td className="formTableDetail">
                <Button variant="contained" size="large" onClick={onSubmit}>Submit</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <ToastContainer/>
      
    </div>
  )
}