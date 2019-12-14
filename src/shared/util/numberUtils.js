export class NumberUtils {
    static formatWithCommas = value => {
        const stringValue = typeof value === 'string' ? value : value.toString();
        return stringValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}