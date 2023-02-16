import './App.css';
import AddTodo from './components/AddTodo';
import React from 'react';
import { Table } from 'antd';

//App
function App() {

  const [data,setData]=React.useState([])

  function updateData(props){
    setData(prevData=>[...prevData,props])
  }
  /*console.log(data)

  const task = data.map(tasks => {
    return <Task key={tasks.title} title={tasks.title} due={`${tasks.due}`} tag={tasks.tag} status={tasks.status} description={tasks.description} />
  })*/
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Due Date',
      dataIndex: 'due',
      key: 'adue',
    },
    {
      title: 'Tag',
      dataIndex: 'tag',
      key: 'tag',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status'
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    
    
  ];

  return (
    <div className="App">
      <AddTodo data={data} func={updateData}/>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default App;
