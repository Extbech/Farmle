export const FormatNumber = (num: number): string => {
    if (num < 100) {
        return num.toFixed(1).toString();
    }
    if (num < 10_000) {
        return Math.round(num).toString();
    }
    if (num < 1_000_000) {
        return (num / 1_000).toFixed(1) + 'K';
    }
    if (num < 1_000_000_000) {
        return (num / 1_000_000).toFixed(1) + 'M';
    }
    return (num / 1_000_000_000).toFixed(1) + 'B';
}