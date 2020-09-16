import createScopedSlots from './scopedSlots';
import { createSingleFieldDefaultSlot, createRowDefaultSlot, createSubmitSlot, createErrorDefaultSlot } from './defaultSlots';

const groupFields = (form) => Object.keys(form)
  .map(f => ({ ...form[f], name: f, group: form[f]?.group || 'default' }))
  .reduce((prev, curr) => ({
    ...prev,
    [curr.group]: { ...prev[curr.group], [curr.name]: { ...curr, name: curr.name } }
  }), {});

const renderForm = (ctx, h) => {
  const { hasSlot, callScopedSlot } = createScopedSlots(ctx);

  const renderError = (field) => {
    const error = field.validate && field.validate(ctx.formData[field.name]);

    if (hasSlot('error')) {
      return callScopedSlot('error', error);
    }

    const defaultSlot = createErrorDefaultSlot({ h });

    return defaultSlot(error);
  };

  const renderSingleField = (field) => {
    if (hasSlot(field.name)) {
      return callScopedSlot(field.name, field);
    }

    if (hasSlot('singleField')) {
      return callScopedSlot('singleField', field);
    }

    const defaultSlot = createSingleFieldDefaultSlot({ h, ctx, renderError });

    return defaultSlot(field);
  };

  const renderRow = (group) => {
    if (hasSlot('row')) {
      return callScopedSlot('row', group);
    }

    if (hasSlot(group.name)) {
      return callScopedSlot(group.name, group);
    }

    const groupFields = Object.keys(group).map((key) => group[key]);

    const defaultSlot = createRowDefaultSlot({ group, renderSingleField, h });

    return defaultSlot(groupFields);
  };

  const renderSubmit = () => {
    if (hasSlot('submit')) {
      return callScopedSlot('submit', {});
    }

    const defaultSlot = createSubmitSlot({ h });

    return defaultSlot(ctx.form.submit);
  };

  const groupedFields = groupFields(ctx.form.fields);
  const renderedRows = Object.keys(groupedFields)
    .map((key) => renderRow(groupedFields[key]));

  return h(
    'form',
    {
      on: {
        submit: ctx.handleSubmit
      }
    },
    [...renderedRows, renderSubmit()]
  );
};

export default renderForm;
