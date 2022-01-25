import JustValidate from '../../../js/just-validate';
import Inputmask from "inputmask";
let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(inputs);

const allForm = document.querySelectorAll('.requisition__form')
const initRequisitionFormValidation = (form) => {
  const validation = new JustValidate(form, {
    errorFieldCssClass: 'is-invalid'
  });
  validation
    .addField('.input-name', [
      {
        rule: 'minLength',
        value: 2,
        errorMessage: 'Имя не может быть пустым',
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Слишком длинное имя',
      }
    ])
    .addField('.input-phone', [
      {
        validator: (value) => {
          return value.replace(/[^0-9]/g, '').length === 11;
        },
        errorMessage: 'Введите номер телефона до конца',
      },

    ])
};
allForm.forEach(form => {
  initRequisitionFormValidation(form);
});
