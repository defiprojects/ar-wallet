export function convertFormat(hexString: string): string {
    // Check if the string starts with "0x" and remove it if it does
    if (hexString?.startsWith("0x")) {
      hexString = hexString.slice(2);
    } else {
      return '0x'
    }
  
    // Extract the first 4 characters and the last 8 characters
    const firstFour: string = hexString.slice(0, 4);
    const lastEight: string = hexString.slice(-4);
  
    // Combine the parts with three dots in the middle
    const newFormat: string = `${firstFour}...${lastEight}`;
  
    return newFormat;
  }