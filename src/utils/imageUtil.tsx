import { Constant } from './constants'
export class ImageUtil {
    public static getSummary(articleId: string) {
        return `${Constant.URL_BASE}blogs/${articleId}/summary.png`;
    }
}