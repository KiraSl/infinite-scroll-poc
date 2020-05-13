export function generateHexColor() {
  let color = '#';
  const availableCharacters = '0123456789ABCDEF';
  for (let i = 0; i < 6; i++) {
    color += availableCharacters[Math.floor(Math.random() * 16)];
  }
  return color;
}
