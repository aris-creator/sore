export default function scrollBehavior (_to, _from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  }

  return { x: 0, y: 0 };
}
