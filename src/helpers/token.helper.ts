
export function getTokenId(contract: string,nativeId: BigInt): string {
    return `${contract}-${String(nativeId).padStart(9,'0')}`
}