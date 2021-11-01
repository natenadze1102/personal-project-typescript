export function validate(obj: {
  call: Function;
  index: number;
  meta: { title: string; description: string };
}): void {
  if (!obj.call) throw new Error('No Call Function is specified');
  if (typeof obj?.call !== 'function')
    throw new Error('Call is not a function');
  if (!obj.index) throw new Error('No Index Is specified');
  if (!obj.meta || !obj.meta.title || !obj.meta.description)
    throw new Error('No Meta or some property of meta');
  if (typeof obj.meta !== 'object') throw new Error('Meta is not an object');
  if (typeof obj.meta.title !== 'string')
    throw new Error('Title is not a string');
  if (typeof obj.meta.description !== 'string')
    throw new Error('Description is not a string');
}

// გაქვს თუ არა ფროფერთი
// undefined? null?
// index => number??
// meta => object??
// meta.title => string??
// meta.description => string??
// call => function??
