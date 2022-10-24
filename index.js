let btn = document.getElementById('btn')
const inputs = document.querySelectorAll('input')

function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

btn.addEventListener('click', function (e) {
  e.preventDefault()
  inputs.forEach((input) => {
   
    if (input.name == "email_adress") {
        if (validateEmail(input.value) == null){
            input.classList.add('border-red')
            input.classList.remove('border-gray')
            input.nextElementSibling.classList.remove('hiden')
        }
    }

    if (input.value == '') {
      input.classList.add('border-red')
      input.classList.remove('border-gray')
      input.nextElementSibling.classList.remove('hiden')
    }

    input.addEventListener('focus', function () {
      input.classList.remove('border-red')
      input.classList.add('border-gray')
      input.nextElementSibling.classList.add('hiden')
    })
  })
})
