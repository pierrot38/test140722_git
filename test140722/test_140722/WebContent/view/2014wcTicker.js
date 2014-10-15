(function() {
	
	$(document).ready(function(){		
		must();
	});
	
    var template_vars = {
        	name: 'Reuven',
        	number_of_children: 3
    };
    
	var must = funtcion(){
		var template = "<b>{{name}}</b> has {{number_of_children}} children.";
		var html = Mustache.to_html(template, template_vars);
		$('#target').html(html);
	};
	

}());