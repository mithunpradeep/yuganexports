$(document).ready(function () {

    $.urlParam = function (name) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)')
            .exec(window.location.search);

        return (results !== null) ? results[1] || 0 : false;
    }

    if($.urlParam('msg')){
        $('#msgSent').show();
    }





});