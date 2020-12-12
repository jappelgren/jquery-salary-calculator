$(document).ready(onReady)

let employees = []
let salaryTotal = 0

function onReady() {
    $('#error-box').hide()
    $('#submit-button').on('click', emptyFieldDetector)
    $('tbody').on('click', '.delete-button', delEmp)
} //end onReady

function emptyFieldDetector() {
    if ($('#first-name-in').val() === '' || $('#last-name-in').val() === '' || $('#id-in').val() === '' || $('#title-in').val() === '' || $('#salary-in').val() === '') {
        $('#error-box').fadeIn(300, 'linear').delay(5000).fadeOut(300, 'linear')
    } else {
        $('#error-box').fadeOut(300, 'linear')
        addEmp()
    }
} //end emptyFieldDetector

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
} //end adddEmp

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
            <td><button value="${employees.indexOf(employee)}" class="delete-button">Delete</button></td>
            </tr>`)
    }
    if (salaryTotal > 20000) {
        $('#total-monthly-cost').append(`<h1 id="too-much">Total Monthly: $${Number.parseFloat(salaryTotal).toFixed(2)}</h1>`);
    } else {
        $('#total-monthly-cost').append(`<h1>Total Monthly: $${Number.parseFloat(salaryTotal).toFixed(2)}</h1>`);
    }

} // end displayEmp 

function delEmp() {
    let employeeIndex = $(this).val();
    let salaryDecrease = employees[employeeIndex].salary
    salaryTotal -= salaryDecrease
    employees.splice(employeeIndex, 1)

    displayEmp()
} //end delEmp