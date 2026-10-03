import { EMAIL, STRONG_PASSWORD } from '@/components/ui';

function required(data, errors, field, label) {
  if (!data[field] || data[field].trim() === '') errors[field] = `Please fill the ${label}.`;
}

function checkEmail(data, errors) {
  if (!data.email || data.email.trim() === '') errors.email = 'Please fill the email.';
  else if (!EMAIL.test(data.email)) errors.email = 'Please enter a valid email.';
}

export function checkPassword(data, errors) {
  if (!data.password || data.password.trim() === '') errors.password = 'Please fill the password.';
  else if (data.password.length < 5) errors.password = 'Password must be at least 5 characters long.';
  else if (!STRONG_PASSWORD.test(data.password)) {
    errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character (@$!%*?&).';
  }
}

export function validateAdmin(data) {
  const errors = {};
  required(data, errors, 'username', 'username');
  checkEmail(data, errors);
  checkPassword(data, errors);
  required(data, errors, 'address', 'address');
  return errors;
}

export function validateManager(data) {
  const errors = {};
  required(data, errors, 'name', 'name');
  checkEmail(data, errors);
  checkPassword(data, errors);
  required(data, errors, 'address', 'address');
  return errors;
}

export function validateConsultant(data) {
  const errors = {};
  required(data, errors, 'name', 'name');
  required(data, errors, 'phone', 'phone');
  checkEmail(data, errors);
  checkPassword(data, errors);
  required(data, errors, 'country', 'country');
  return errors;
}

export function validateUser(data) {
  const errors = {};
  required(data, errors, 'name', 'name');
  required(data, errors, 'phone', 'phone');
  checkEmail(data, errors);
  checkPassword(data, errors);
  return errors;
}

export function validateApplication(data) {
  const errors = {};
  required(data, errors, 'destinationCountry', 'destination country');
  required(data, errors, 'studyLevel', 'study level');
  required(data, errors, 'program', 'program');
  required(data, errors, 'intake', 'intake');
  return errors;
}
