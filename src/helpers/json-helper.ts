export function jsonify(payload: object) {
  return JSON.stringify(payload);
}

export function dejson(payload: string) {
  return JSON.parse(payload);
}