import MojoPortalComic from './templates/MojoPortalComic.mjs';

export default class NhatTruyen extends MojoPortalComic {

    constructor() {
        super();
        super.id = 'nhattruyen';
        super.label = 'NhatTruyen';
        this.tags = [ 'manga', 'vietnamese' ];
        this.url = 'http://nhattruyenvip.com';
        this.links = {
            login: this.url + '/Secure/Login.aspx'
        };
    }
}