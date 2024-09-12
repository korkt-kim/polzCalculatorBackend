import React,{useState,useEffect, useRef} from 'react';
import ReactDOM from 'react-dom'
import myAPI from './apis/myAPI';
import './App.css';
import useAsync from './hooks/useAsync';


const App = () => {
  const [{data:employees,loading,error},fetchEmployee] = useAsync(myAPI);
  
  useEffect(()=>{
    fetchEmployee();
  },[])

  return (
    <div className="App">
      {loading ? <h1>Loading</h1> :''}
      {error ? <h1>error!</h1> : ''}
      {employees? <ul>{employees.map(employee=><li key={employee.id}><div>{employee.name}</div><div>{employee.email}</div></li>)}</ul> : ''}
    </div>
  );
};

export default App;