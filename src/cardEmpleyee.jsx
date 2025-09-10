export function cardEmployee(employee) {
  return(
    <>
      <h1>Empleado: {employee.firstName+" "+employee.lastName}</h1>
      <ul>
        <li>{employee.role}</li>
        <li>{employee.departament}</li>
        <li>{employee.timeAtCompany}</li>
        <li>{employee.dateOfCreation}</li>
        <li>{employee.email}</li>
        <li>{employee.location}</li>
        <li>{employee.manager}</li>
        <li>{employee.statusEmployee}</li>
        <li>{employee.salaryBand}</li>
        <li>{employee.skills}</li>
      </ul>
    </>
    
  )
}

