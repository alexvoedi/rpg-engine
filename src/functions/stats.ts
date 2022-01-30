interface StatValues {
  level: number;
  base: number;
}

interface StatOptions {}

export const healthFunction = (values: StatValues, options?: StatOptions) => {
  const f = 0.1 * values.base;

  const b = 10 * values.level;
  const e = f * 0.1 * values.level;
  const t = Math.pow(f * values.level, 2);

  return Math.round(b + Math.pow(2, e) + t);
};

export const attributeFunction = (
  values: StatValues,
  options?: StatOptions
) => {
  return Math.round(10 + Math.pow(values.base * values.level, 1.25));
};
