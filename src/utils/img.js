export default function Image(params) {
  console.log(params);
  return `<img :src="https://picsum.photos/500/300?random" />`
}