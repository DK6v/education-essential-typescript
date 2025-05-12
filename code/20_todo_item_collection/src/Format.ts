export function format(formatString: string,...args: any[]): string {
    const regex = /\{(\d+)\}/g;
    return formatString.replace(regex, (match, index) => {
        const pos = parseInt(index);
        if (pos < args.length) {
            return args[pos];
        }
        return match;
    });
}
