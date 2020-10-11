$(document).ready(onReady);
const employeeList = [];
let monthlyTotal = 0;

function onReady() {
  console.log('JQuery is Loaded');

  $('.js-click-submit').on('click', submitEmployee);
  $('.js-table').on('click', 'js-click-delete', deleteEmployee);
}

function submitEmployee() {
  const firstName = $('.js-field-first-name').val();
  const lastName = $('.js-field-last-name').val();
  const id = $('.js-field-id').val();
  const title = $('.js-field-title').val();
  const salary = $('.js-field-salary').val();
  const employee = {
    firstName,
    lastName,
    id,
    title,
    salary,
  };
  employeeList.push(employee);
  output();
}

function output() {
  $('.js-employee-list').empty();
  for (let i = 0; i < employeeList.length; i++) {
    let salary = Number(employeeList[i].salary);
    let currency = salary.toFixed(0).replace(/(\d)(?=(\d{3})+$)/g, '$1,'); // 12,345.67;
    $('.js-employee-list').append(
      `<tr><td>${employeeList[i].firstName}</td>
      <td>${employeeList[i].lastName}</td>
      <td>${employeeList[i].id}</td>
      <td>${employeeList[i].title}</td>
      <td>$${currency}</td>
      <td><button class="btn js-click-delete" data-index="${i}">Delete</button></td></tr>`
    );
    monthlyTotal += salary;
  }
  outputMonthlyTotal();
}

function outputMonthlyTotal() {
  monthlyTotal = monthlyTotal / 12;
  if (monthlyTotal > 20000) {
    $('.js-total-container').css('background-color', 'red');
  }

  currency = monthlyTotal.toFixed(2).replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  $('.js-total-monthly').text('$' + currency);
}

function deleteEmployee() {
  console.log('in deleteEmployee');
  const index = $(this).data('index');
  if (index > -1) {
    let removeSalary = employeeList[index].salary;
    removeSalary = removeSalary / 12;
    monthlyTotal -= removeSalary;
    employeeList.splice(index, 1);
  }
  $(this).closest('tr').remove();

  outputMonthlyTotal();
}
