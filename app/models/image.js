export default class Image {
    constructor(data) {
        console.log('[RAW IMAGE API DATA]', data);  
        
        this.pic = data.url;
        this.largePic = data.large_url;
    }
}