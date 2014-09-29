/*jslint nomen: true */
/*global $ */

var Portfolio = {
    _url : 'https://www.behance.net/v2/',
    _user : '',
    _key : '',
    create : function (p) {
        'use strict';
        return Object.create(Portfolio).init(p);
    },
    init : function (p) {
        'use strict';
        this._user = p.user || '';
        this._key = p.key || '';
        return this;
    },
    url : function () {
        'use strict';
        return this._url;
    },
    user : function () {
        'use strict';
        return this._user;
    },
    key : function () {
        'use strict';
        return this._key;
    },
    portfolioAPIurl : function () {
        'use strict';
        return this._url + 'users/' + this._user + '/projects?api_key=' + this._key;
    },
    projectAPIurl : function (projectId) {
        'use strict';
        return this._url + 'projects/' + projectId + '?api_key=' + this._key;
    },
    getPortfolio : function (callback) {
        'use strict';
        var url = this.portfolioAPIurl();
        $.ajax({
            'global': false,
            'url': url + '&per_page=100',
            'dataType': 'jsonp',
            'method': 'post',
            'success': callback
        });
    },
    getProject : function (projectId, callback) {
        'use strict';
        var url = this.projectAPIurl(projectId);
        $.ajax({
            'global': false,
            'url': url,
            'dataType': 'jsonp',
            'method': 'post',
            'success': callback
        });
    },
    addPrevNext : function (data) {
        'use strict';
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
