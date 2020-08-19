export class ImageUtil {
    public static getImagePath(path: string) {
        if (path.startsWith("/")) {
            path = path.replace("/", "");
        }
        return `/images/${path}`;
    }
}