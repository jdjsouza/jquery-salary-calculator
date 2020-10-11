$(document).ready(onReady);
const employeeList = [];
let salaryTotal = 0;
let monthlyTotal = 0;

function onReady() {
  console.log('JQuery is Loaded');

  $('.js-click-submit').on('click', submitEmployee);
  $('.js-table').on('click', '.js-click-delete', deleteEmployee);
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
  // $('.inputBox').val('');
  salaryTotal += Number(salary);
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
  }
  outputMonthlyTotal();
}

function outputMonthlyTotal() {
  monthlyTotal = salaryTotal / 12;
  if (monthlyTotal > 20000) {
    $('.js-total-container').css('background-color', 'red');
  } else {
    $('.js-total-container').css('background-color', '');
  }
  let currency = monthlyTotal.toFixed(2).replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  $('.js-total-monthly').text('$' + currency);
}

function deleteEmployee() {
  const index = $(this).data('index');
  if (index > -1) {
    salaryTotal -= Number(employeeList[index].salary);
    employeeList.splice(index, 1);
  }
  output();
}
