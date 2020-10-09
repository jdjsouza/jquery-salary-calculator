$(document).ready(onReady);
const employeeList = [];

function onReady() {
  console.log('JQuery is Loaded');

  $('.js-click-submit').on('click', submitEmployee);
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
  console.log(employeeList);
}
