export function getAllValues<V = unknown>(values: any): V {
  let tmp: any = {};
  Object.keys(values).forEach(key => {
    tmp = { ...tmp, ...values[key] };
  });
  return tmp;
}
