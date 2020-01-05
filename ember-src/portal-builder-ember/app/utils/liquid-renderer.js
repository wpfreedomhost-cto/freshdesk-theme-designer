/* eslint-disable no-undef */
export default async function liquidRenderer(liquidTemplate, params) {
  const engine = new liquidjs.Liquid();

  let result = await engine.parseAndRender(liquidTemplate, params);
  return result;
}