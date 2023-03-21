export function toSetFirstLetter (val: string): string {
    const firstLetter =val[0].toUpperCase()
    return `${firstLetter}${val.slice(1)}`
}   