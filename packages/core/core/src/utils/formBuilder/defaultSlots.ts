import { getFieldData } from './field';

export const createErrorDefaultSlot = ({ h }) => (error) => h(
  'div',
  {},
  [error]
);

export const createSingleFieldDefaultSlot = ({ h, ctx, renderError }) => (field) => h('div', {}, [
  h('label', { domProps: { for: field.name } }, [field.label]),
  h(
    field.type,
    getFieldData(field, ctx)
  ),
  renderError(field)
]);

export const createRowDefaultSlot = ({ group, renderSingleField, h }) => (fields) => {
  const renderedFields = fields.map(f => renderSingleField(f));

  if (group.name === 'default') {
    return renderedFields;
  }

  return h(
    'div',
    {},
    renderedFields
  );
};

export const createSubmitSlot = ({ h }) => (props) => {
  return h(
    'div',
    {},
    [
      h('button', { domProps: { type: 'submit' } }, [props.text || 'submit'])
    ]
  );
};
