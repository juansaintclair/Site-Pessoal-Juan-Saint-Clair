$(function() {

    var JsonBehance = 'https://www.behance.net/v2/users/juansaintclair/projects?api_key=LTGKVyGjYBXqWE39dk69KvWdfI2wRVx0&callback=?';

    $.ajax({
        url: JsonBehance,
        type: 'get',
        dataType: 'json',
        async: true,
        success: function(retorno) {

            $.each(retorno.projects, function(index, value) {
                var cover_port = value.covers[230];
                var name = value.name;
                var url_portifolio = value.url;
                var class_apply = '.img_capa_' + index;

				$('.behance').append('<div class="col-md-5 col-lg-3 wow fadeInUp behance_conteudo" data-wow-duration="3s"> <a href="' + url_portifolio + '" target="_blank"> <img class="img_capa_' + index + '" src="ok" /> <div class="portfolio_nome"><strong>' + name + '</strong></div> </a> </div>');
                $(class_apply).prop('src', cover_port);

            });
        }
    });
});
