
const getEvents = (field, ctx) => {
  if (!field.events) {
    return {
      input: (evt) => {
        ctx.formData[field.name] = evt.target.value;
      }
    };
  }

  return Object.keys(field.events)
    .reduce((prev, curr) => ({
      ...prev,
      [curr]: (event) => {
        const returnedValue = field.events[curr](event);

        if (returnedValue !== null) {
          ctx.formData[field.name] = returnedValue;
        }
      }
    }), {});
};

const isNativeComponent = (field) => typeof field.type === 'string';

export const getFieldData = (field, ctx) => {
  const propsKey = isNativeComponent(field) ? 'domProps' : 'props';

  return {
    [propsKey]: {
      name: field.name,
      [field.valuePropName || 'value']: ctx.formData[field.name]
    },
    on: getEvents(field, ctx)
  };
};
