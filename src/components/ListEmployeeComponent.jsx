import React, { Component } from 'react'

export default class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            employees:[]
        }
    }
  render() {
    return (
      <div>
        <h2 className='text-center'>Employee List</h2>
        <div className="row">
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Departmant Id</th>
                      
                       
                         
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.employees.map(
                            employee=>
                            <tr key ={employee.id}>
                              <td>{employee.id}</td> 
                              <td>{employee.firstName}</td> 
                              <td>{employee.lastName}</td>
                              <td>{employee.departmentId}</td>  
                            </tr>
                        )
                    }
                </tbody>

            </table>
        </div>
      </div>
    )
  }
}
