export function validate(obj: {
  call: Function;
  index: number;
  meta: { title: string; description: string };
}): void {
  if (!obj.call) throw new Error('No Call Function is specified');
  if (!obj.index) throw new Error('No Index Is specified');
  if (!obj.meta || !obj.meta.title || !obj.meta.description)
    throw new Error('No Meta or some property of meta');
}
