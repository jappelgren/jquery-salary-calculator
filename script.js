$(document).ready(onReady)

let employees = []
let salaryTotal = 0

function onReady() {
    $('#error-box').hide()
    $('#submit-button').on('click', emptyFieldDetector)
    $('tbody').on('click', '.delete-button', delEmp)
} //end onReady


//emptyFieldDetector checks to see if all fields are complete before submitting info.
//Failure to fill out all fields will result in a pop up asking user to fill out all fields.
function emptyFieldDetector() {
    if ($('#first-name-in').val() === '' || $('#last-name-in').val() === '' || $('#id-in').val() === '' || $('#title-in').val() === '' || $('#salary-in').val() === '') {
        $('#error-box').fadeIn(300, 'linear').delay(5000).fadeOut(300, 'linear')
    } else {
        $('#error-box').fadeOut(300, 'linear')
        addEmp()
    }
} //end emptyFieldDetector


//addEmp takes data from input fields and stores them as an object in the employees array.
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


//displayEmp clears table dom and repopulates it with object data from employees array.
//Function also stores each objects index in the array as a value held in the delete button
//If monthly total exceeds 20,000 displayEmp changes the background of the text of the total monthly display to red.
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


//delEmp deletes employee object out of the employee array and updates dom based on that change
function delEmp() {
    let employeeIndex = $(this).val();
    let salaryDecrease = employees[employeeIndex].salary
    salaryTotal -= salaryDecrease
    employees.splice(employeeIndex, 1)

    displayEmp()
} //end delEmp