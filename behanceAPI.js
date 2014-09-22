var Portfolio = {
    _url : 'https://www.behance.net/v2/',
    _user : '',
    _key : '',
    create : function(p) {
        return Object.create(Portfolio).init(p);
    },
    init : function(p) {
        this._user = p.user || '';
        this._key = p.key || '';
        return this;
    },
    url : function() {return this._url},
    user : function() {return this._user},    
    key : function() {return this._key},
    portfolioAPIurl : function() {
        return this._url + 'users/' + this._user + '/projects?api_key=' + this._key
    },
    projectAPIurl : function(projectId) {
        return this._url + 'projects/' + projectId + '?api_key=' + this._key
    },
    getPortfolio : function(callback) {
        var url = this.portfolioAPIurl();
        $.ajax({
            'global': false,
            'url': url + '&per_page=100',
            'dataType': 'jsonp',
            'method': 'post',
            'success': callback
        });
    },
    getProject : function(projectId, callback) {
        var url = this.projectAPIurl(projectId);
        $.ajax({
            'global': false,
            'url': url,
            'dataType': 'jsonp',
            'method': 'post',
            'success': callback
        });
    },
    addPrevNext : function(data) {
        var projectsLength = data.projects.length;
        for (var i = 0; i < projectsLength; i = i + 1) {  //add previous and next Ids to each project object to use w/ nav buttons
            if (i > 0) {
                data.projects[i].prevId = data.projects[i - 1].id;
            }
            if (i < projectsLength - 1) {
                data.projects[i].nextId = data.projects[i + 1].id;
            }
        }
        return data;
    }
};
