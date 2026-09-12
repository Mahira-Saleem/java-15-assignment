// Initial Employee Data
let employees = [
  { id: 1, name: "Aaliyah Ramirez", role: "Head of Customer", dept: "Customer Support", salary: "$64,000/yr" },
  { id: 2, name: "Abigail White", role: "Revenue Ops Lead", dept: "Sales & Growth", salary: "$158,500/yr" },
  { id: 3, name: "Alexander Smith", role: "Senior Lead Architect", dept: "Engineering", salary: "$95,000/yr" }
];

let editIndex = null;

// Render Table Data
function renderEmployees() {
  const tbody = document.getElementById('employeeTableBody');
  if (!tbody) return;
  
  tbody.innerHTML = "";

  employees.forEach((emp, index) => {
    tbody.innerHTML += `
      <tr>
        <td>${emp.name}</td>
        <td>${emp.role}</td>
        <td>${emp.dept}</td>
        <td>${emp.salary}</td>
        <td>
          <button class="action-btn view-btn" onclick="viewDetails(${index})">View</button>
          <button class="action-btn" style="background:#f59e0b; color:white;" onclick="editEmployee(${index})">Edit</button>
          <button class="action-btn delete-btn" onclick="deleteEmployee(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}

// Toggle Form Visibility
function toggleForm() {
  const form = document.getElementById('addForm');
  if (form) {
    if (form.style.display === 'block') {
      form.style.display = 'none';
      clearForm();
    } else {
      form.style.display = 'block';
    }
  }
}

// Clear Form Inputs
function clearForm() {
  document.getElementById('empName').value = '';
  document.getElementById('empRole').value = '';
  document.getElementById('empDept').value = '';
  document.getElementById('empSalary').value = '';
  editIndex = null;
}

// Add or Update Employee
function addEmployee() {
  const name = document.getElementById('empName').value.trim();
  const role = document.getElementById('empRole').value.trim();
  const dept = document.getElementById('empDept').value.trim();
  const salary = document.getElementById('empSalary').value.trim();

  if (!name || !role || !dept || !salary) {
    alert("Please fill all fields!");
    return;
  }

  if (editIndex === null) {
    // New Employee Add
    employees.push({ id: Date.now(), name, role, dept, salary });
  } else {
    // Existing Employee Update
    employees[editIndex] = { id: employees[editIndex].id, name, role, dept, salary };
    editIndex = null;
  }

  clearForm();
  toggleForm();
  renderEmployees();
}

// Edit Function
function editEmployee(index) {
  editIndex = index;
  const emp = employees[index];

  document.getElementById('empName').value = emp.name;
  document.getElementById('empRole').value = emp.role;
  document.getElementById('empDept').value = emp.dept;
  document.getElementById('empSalary').value = emp.salary;

  document.getElementById('addForm').style.display = 'block';
}

// View Details
function viewDetails(index) {
  const emp = employees[index];
  alert(`Employee Details:\n\nName: ${emp.name}\nRole: ${emp.role}\nDepartment: ${emp.dept}\nSalary: ${emp.salary}`);
}

// Delete Employee
function deleteEmployee(index) {
  if (confirm("Are you sure you want to delete this employee?")) {
    employees.splice(index, 1);
    renderEmployees();
  }
}

// Logout Function
function logout() {
  window.location.href = "login.html";
}

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggle');
  
  if (toggleBtn) {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      document.body.classList.add('dark');
      toggleBtn.checked = true;
    }

    toggleBtn.addEventListener('change', function() {
      if (this.checked) {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    });
  }

  renderEmployees();
});