document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('mainForm');
    const organization = document.getElementById('organization');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const comment = document.getElementById('comment');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (checkInputs()) {
            showModal();
        }
    });

    organization.addEventListener('input', () => {
        validateField(organization, organization.value.trim() !== '', 'Поле заказчика не может быть пустым');
    });

    phone.addEventListener('input', () => {
        validateField(phone, isPhone(phone.value.trim()), 'Неверный номер телефона');
    });

    comment.addEventListener('input', () => {
        validateField(comment, comment.value.trim() !== '', 'Комментарий не может быть пустым');
    });

    subject.addEventListener('input', () => {
        validateField(subject, subject.value.trim() !== '', 'Предмет закупа не может быть пустым');
    });

    email.addEventListener('input', () => {
        validateField(email, isEmail(email.value.trim()), 'Неправильный Email');
    });

    function checkInputs() {
        let isValid = true;
        validateField(organization, organization.value.trim() !== '', 'Это поле не может быть пустым');
        validateField(phone, isPhone(phone.value.trim()), 'Неверный номер телефона');
        validateField(subject, subject.value.trim() !== '', 'not empty');
        validateField(comment, comment.value.trim() !== '', 'Комментарий не может быть пустым');
        validateField(email, isEmail(email.value.trim()), 'Неправильный Email');

        document.querySelectorAll('.form-control').forEach((control) => {
            if (control.classList.contains('error')) {
                isValid = false;
            }
        });

        return isValid;

    }

    function validateField(input, condition, errorMessage) {
        if (condition) {
            setSuccess(input);
        } else {
            setError(input, errorMessage);
        }
    }

    function setError(input, message) {
        const formControl = input.parentElement;
        const icon = formControl.querySelector('.icon');
        formControl.className = 'form-control error';
        icon.className = 'icon fas fa-times-circle';
        input.placeholder = message;
    }

    function setSuccess(input) {
        const formControl = input.parentElement;
        const icon = formControl.querySelector('.icon');
        formControl.className = 'form-control success';
        icon.className = 'icon fas fa-check-circle';
    }

    function isPhone(phone) {
        return /^\+?(\d.*){11,}$/.test(phone);
    }

    function isEmail(email) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
    }

    function showModal() {
        const modal = document.getElementById('successModal');
        modal.style.display = 'block';

        const closeBtn = document.querySelector('.close-button');
        closeBtn.onclick = function () {
            modal.style.display = 'none';
        };

        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
    }

    var element = document.getElementById('phone');
    var maskOptions = {
        mask: '+7 (000) 000-00-00',
        lazy: false
    }
    var mask = new IMask(element, maskOptions);

    });


