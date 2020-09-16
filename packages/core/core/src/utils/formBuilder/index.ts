import { defineComponent, computed } from '@vue/composition-api';
import { vsfRef } from './../ssr';
import renderForm from './renderForm';

const getInitialValues = props => {
  const { form: { fields } } = props;

  return Object.keys(fields)
    .reduce((prev, curr) => ({
      ...prev,
      [curr]: fields[curr].value || ''
    }), {});
};

const isFormValid = (props, formData) => {
  const { fields } = props.form;

  return Object.keys(fields)
    .filter(k => fields[k].validate)
    .some(k => fields[k].validate(formData[k]));
};

const FormBuilder = defineComponent({
  props: ['form'],
  setup(props, context) {
    const formData = vsfRef(getInitialValues(props), 'form-builder');

    const isValid = computed(() => !isFormValid(props, formData.value));

    const handleSubmit = (evt) => {
      evt.preventDefault();
      context.emit('submit', formData.value, isValid.value);
    };

    return {
      formData,
      handleSubmit
    };
  },
  render(h) {
    return renderForm(this, h);
  }
});

export { FormBuilder };
