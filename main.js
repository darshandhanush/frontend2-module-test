document.addEventListener("DOMContentLoaded", () => {
    const employeeForm = document.getElementById('employeeForm');
    const messageDiv = document.getElementById('message');
    const employeeList = document.getElementById('employeeList');
    let employees = [];
    let idCounter = 1;

    employeeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const profession = document.getElementById('profession').value.trim();
        const age = document.getElementById('age').value.trim();

        if (name && profession && age) {
            const newEmployee = {
                id: idCounter++,
                name,
                profession,
                age: parseInt(age)
            };
            employees.push(newEmployee);
            renderEmployees();
            showMessage('Employee added successfully!', 'success');
            employeeForm.reset();
        } else {
            showMessage('All fields are required!', 'error');
        }
    });

    function renderEmployees() {
        employeeList.innerHTML = '';
        employees.forEach(employee => {
            const employeeDiv = document.createElement('div');
            employeeDiv.className = 'employee';
            employeeDiv.innerHTML = `
                <p>ID: ${employee.id}</p>
                <p>Name: ${employee.name}</p>
                <p>Profession: ${employee.profession}</p>
                <p>Age: ${employee.age}</p>
                <button class="delete" onclick="deleteEmployee(${employee.id})">Delete User</button>
            `;
            employeeList.appendChild(employeeDiv);
        });
    }

    window.deleteEmployee = (id) => {
        employees = employees.filter(employee => employee.id !== id);
        renderEmployees();
    };

    function showMessage(message, type) {
        messageDiv.textContent = message;
        messageDiv.className = type;
        setTimeout(() => {
            messageDiv.textContent = '';
            messageDiv.className = '';
        }, 3000);
    }
});
