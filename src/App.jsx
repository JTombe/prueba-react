import { cardEmployee } from "./cardEmpleyee"

function App() {
  const employee = {
    employeeId : "EMP001",
    firstName : "Alice",
    lastName: "Johnson",
    role: "Software Engineer",
    department: "Engineering",
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