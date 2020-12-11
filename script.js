$(document).ready(onReady)

let employees = []
let salaryTotal = 0

function onReady() {
    $('button').on('click', addEmp)
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
    $('input').val('')
    displayEmp()
}

function displayEmp() {
    $('tbody').empty();
    $('#total-monthly-cost').empty()
    for (employee of employees) {
        $('tbody').append(`<tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td>${employee.salary}</td>
            </tr>`)
    }
    $('#total-monthly-cost').append(`<h1>Total Monthly: ${salaryTotal}</h1>`)
}