import { cardEmployee } from "./cardEmpleyee"

function App() {
  const employee = {
    employeeId : "EMP001",
    firstName : "Alice",
    lastName: "Johnson",
    role: "Software Engineer",
    departament: "Engineering",
    timeAtCompany: "3 years 2 months",
    dateOfCreation: "2021-07-15",
    email: "alice.johnson@example.com",
    location: "New York, USA",
    manager: "Robert Smith",
    statusEmployee: "Active",
    salaryBand: "Level 2",
    skills:["JavaScript", "React", "Node.js"]
  }
  return cardEmployee(employee)
}
export default App;

class Employee {
  constructor(employeeId, firstName, lastName, role, departament, timeAtCompany, dateOfCreation, email, location,
    manager, statusEmployee, salaryBand, skills) {
      this.employeeId = employeeId
      this.firstName = firstName
      this.lastName = lastName
      this.role = role
      this.departament = departament
      this.timeAtCompany = timeAtCompany
      this.manager = manager
      this.statusEmployee = statusEmployee
      this.salaryBand = salaryBand
      this.skills = skills
    }
}