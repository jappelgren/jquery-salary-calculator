$(document).ready(onReady)

let employees = []
let salaryTotal = 0

function onReady() {
    $('#submit-button').on('click', addEmp)
    $('tbody').on('click', '.delete-button', delEmp)
}

function addEmp() {
    employees.push(
        {
            firstName: $('#first-name-in').val(),
            lastName: $('#last-name-in').val(),
            id: $('#id-in').val(),
            title: $('#title-in').val(),
            salary: Number($('#salary-in').val())
        })
    salaryTotal += Number($('#salary-in').val());
    $('input').val('');
    displayEmp();
}

function displayEmp() {
    $('tbody').empty();
    $('#total-monthly-cost').empty();
    for (employee of employees) {
        $('tbody').append(`<tr class="added-row">
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td>$${employee.salary}</td>
            <td><button value="${employees.indexOf(employee)}" class="delete-button">Delete</button><td>
            </tr>`)
    }
    if (salaryTotal > 20000) {
        $('#total-monthly-cost').append(`<h1 id="too-much">Total Monthly: $${Number.parseFloat(salaryTotal).toFixed(2)}</h1>`);
    } else {
        $('#total-monthly-cost').append(`<h1>Total Monthly: $${Number.parseFloat(salaryTotal).toFixed(2)}</h1>`);
    }

}

function delEmp() {
    let employeeIndex = $(this).val();
    let salaryDecrease = employees[employeeIndex].salary
    salaryTotal -= salaryDecrease
    employees.splice(employeeIndex, 1)

    displayEmp()
}

