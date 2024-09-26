import { Buffer } from "buffer";

function getB64FromBuffer(buffer: Buffer): string {
  return Buffer.from(buffer).toString("base64")
}

export default getB64FromBuffer