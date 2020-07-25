export class StringUtil {
    static isStringNotEmpty(str: string | undefined): boolean {
        if (str === null || str === undefined) {
            return false;
        }
        return str !== "";
    }
}