const createScopedSlots = (ctx) => {
  const { $scopedSlots } = ctx;

  const hasSlot = (name) => Boolean($scopedSlots[name]);

  const callScopedSlot = (name, props) => $scopedSlots[name](props);

  return { hasSlot, callScopedSlot };
};

export default createScopedSlots;
