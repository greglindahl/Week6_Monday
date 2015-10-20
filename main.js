$.ajax({
	url: 'https://api.myjson.com/bins/20gec',
	type: 'GET',
	data: {
		format: 'json'
	},
	error: function(){
		alert('An error has occurred');
	},
	success: function(results){
		var states = results.data;
		for(i=0; i < states.length; i++) {
			console.log(states[i].name, states[i].capital, states[i].enteredUnion, states[i].population);
			var firstName = states[i].name;
			var cap = states[i].capital;
			var entered = states[i].enteredUnion;
			var pop = states[i].population;
			$('body').append("<h1>" + firstName + cap + entered + pop + "</h1>");
		}
	}
});

function appendResults(results) {
	var states = results.data;
	for(i=0; i < states.length; i++) {
		console.log(states[i].name);
	}
}

function appendResults(results) {
	var states = results.data;
	$.each(results)
}


function showResults(results){
  var html = '';
  $.each(results.items, function(index, item){
  	html += '<p "'+ data.snippet.thumbnails.default.url+'">' + item.snippet.title + '</p>';
  	console.log(item.snippet.title);
  });
  $('#search-results').html(html);
}

$(function(){
	$('#search-term').submit(function(event){
		event.preventDefault();
		var searchTerm = $('#query').val();
		getRequest(searchTerm);
	});
});

function getRequest (searchTerm) {
	var params = {
		part: 'snippet',
		key: 'AIzaSyDhPfCZffmwOxUui-RcXFu3RjjmDnU4BG0',
		q: searchTerm
	};
	url = 'https://www.googleapis.com/youtube/v3/search';

	$.getJSON(url, params, showResults);
}

function showResults(results){
  var html = '';
  $.each(results.items, function(index, item){
  	html += '<p><img src="'+item.snippet.thumbnails.default.url+'">' + item.snippet.title + '</p>';
  	console.log(item.snippet.title);
  });
  $('#search-results').html(html);
}


$(document).ready(function(){


});