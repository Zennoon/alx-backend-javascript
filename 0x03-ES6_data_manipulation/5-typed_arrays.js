export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const typedArray = new Int8Array(buffer);
  if (typeof position !== 'number' || position >= buffer.byteLength) {
    throw new Error('Position outside range');
  }
  typedArray[position] = value;
  return new DataView(buffer);
}
