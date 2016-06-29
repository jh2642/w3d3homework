function validate(form) {
  var name = form.querySelector('#name'),
      email = form.querySelector('#email'),
      phone = form.querySelector('#phone'),
      comment = form.querySelector('#comment')


  if (name.value.length < 2) {
    return false;
  }
  else if (!email.value.includes('@') || !email.value.includes('.')) {
    return false;
  }
  else if (phone.value.length != 10 || isNaN(phone.value)) {
    return false;
  }
  else if (comment.value.length < 5 && comment.value.length !== 0 ) {
    return false;
  }
  else {
    return true;
  }
}
