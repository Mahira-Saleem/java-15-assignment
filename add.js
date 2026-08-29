// Initial Employee Data Array
    let employees = [
      { id: 1, name: "Aaliyah Ramirez", role: "Head of Customer", dept: "Customer Support", salary: "$64,000/yr" },
      { id: 2, name: "Abigail White", role: "Revenue Ops Lead", dept: "Sales & Growth", salary: "$158,500/yr" },
      { id: 3, name: "Alexander Smith", role: "Senior Lead Architect", dept: "Engineering", salary: "$95,000/yr" }
    ];

    // Function to render table rows
    function renderEmployees() {
      const tbody = document.getElementById('employeeTableBody');
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
              <button class="action-btn delete-btn" onclick="deleteEmployee(${index})">Delete</button>
            </td>
          </tr>
        `;
      });
    }

    // Toggle Add Form visibility
    function toggleForm() {
      const form = document.getElementById('addForm');
      form.style.display = form.style.display === 'block' ? 'none' : 'block';
    }

    // Add New Employee
    function addEmployee() {
      const name = document.getElementById('empName').value;
      const role = document.getElementById('empRole').value;
      const dept = document.getElementById('empDept').value;
      const salary = document.getElementById('empSalary').value;

      if (!name || !role || !dept || !salary) {
        alert("Please fill all fields!");
        return;
      }

      employees.push({ id: Date.now(), name, role, dept, salary });
      
      // Clear inputs
      document.getElementById('empName').value = '';
      document.getElementById('empRole').value = '';
      document.getElementById('empDept').value = '';
      document.getElementById('empSalary').value = '';
      
      toggleForm();
      renderEmployees();
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
      window.location.href = "index.html";
    }

    // Load initial data on startup
    renderEmployees();


// Global variable taa ke pata chale ke hum Edit kar rahe hain ya Naya Add kar rahe hain
let editIndex = null;

// 1. Updated renderEmployees Function (Edit button ke saath)
function renderEmployees() {
  const tbody = document.getElementById('employeeTableBody');
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

// 2. Edit Function (Form mein data populate karne ke liye)
function editEmployee(index) {
  editIndex = index; // Save kar liya ke kis index ko edit karna hai
  const emp = employees[index];

  // Form ke input boxes mein purani details fill kar dein
  document.getElementById('empName').value = emp.name;
  document.getElementById('empRole').value = emp.role;
  document.getElementById('empDept').value = emp.dept;
  document.getElementById('empSalary').value = emp.salary;

  // Form open kar dein
  document.getElementById('addForm').style.display = 'block';
}

// 3. Updated addEmployee Function (Add aur Edit dono handle karega)
function addEmployee() {
  const name = document.getElementById('empName').value;
  const role = document.getElementById('empRole').value;
  const dept = document.getElementById('empDept').value;
  const salary = document.getElementById('empSalary').value;

  if (!name || !role || !dept || !salary) {
    alert("Please fill all fields!");
    return;
  }

  if (editIndex === null) {
    // Naya Employee Add karo
    employees.push({ id: Date.now(), name, role, dept, salary });
  } else {
    // Existing Employee Update karo
    employees[editIndex] = { id: employees[editIndex].id, name, role, dept, salary };
    editIndex = null; // Edit mode khatam
  }

  // Inputs clear karo
  document.getElementById('empName').value = '';
  document.getElementById('empRole').value = '';
  document.getElementById('empDept').value = '';
  document.getElementById('empSalary').value = '';

  toggleForm();
  renderEmployees();
}