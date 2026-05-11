import { useState } from 'react';
import './App.css';
import UseState from './Component/Hooks/UseState';
import Props from './Component/Props/props';
import UseEffect from './Component/Hooks/UseEffect';
import StudentReg from './Component/form/StudentReg';

function App() {
  /*   const students = [
    { name: "Faraz", rollno: "250B1034", course: "B.Tech" },
    { name: "Vikas", rollno: "250B1035", course: "MCA" },
    { name: "Rahul", rollno: "250B1036", course: "BCA" }
  ]; */

  return (
      <>
      {/* <Props name="Faraz" rollno="250B1034" course="B.Tech"/> */}
    {/* for multiple data */}
    {/* <Props students={students} /> */}
    {/* <UseState/> */}
{/* <UseEffect/> */}
<StudentReg/>
    </>
  );
}

export default App;

