export function toSetFirstLetter (val: string): string {
    const firstLetter =val[0].toUpperCase()
    return `${firstLetter}${val.slice(1)}`
}   


export const getOldPrice = (discount:number, price:number) => {
    return Math.floor(Number(price) * (100+Number(discount))/100)
}