const AUDIO_EXT: Record<string, string> = {
  mp3: "audio/mpeg",
  m4a: "audio/mp4",
  aac: "audio/aac",
  ogg: "audio/ogg",
  opus: "audio/ogg",
  wav: "audio/wav",
  webm: "audio/webm",
};

function isRemote(src: string) {
  return /^(https?:)?\/\//i.test(src);
}

export function audioHref(base: string, src: string) {
  if (isRemote(src)) return src;
  const file = src.replace(/^\/+/, "").replace(/^audio\//, "");
  const prefix = base.endsWith("/") ? base : `${base}/`;
  return `${prefix}audio/${file}`;
}

export function audioType(src: string) {
  const ext = src.split(".").pop()?.toLowerCase() ?? "";
  return AUDIO_EXT[ext];
}
