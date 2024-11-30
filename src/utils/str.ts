export function middleEllipsis(text: string, start = 6, end = -4): string {
  return `${text.slice(0, start)}...${text.slice(end)}`
}
