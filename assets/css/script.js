$(document).ready(function() {
    $.getJSON('data.json', function(data) {
        var items = [];

        $.each(data, function(key, val) {
            items.push('<tr>');
            items.push('<td>' + val.id + '</td>');
            items.push('<td>' + val.name + '</td>');
            items.push('<td>' + val.email + '</td>');
            items.push('</tr>');
        });

        $('#data').html(items.join(''));
    });
});
