var Library=angular.module('Library',[]);
Library.factory('Library',function(){
	var Library={};
	Library.books=[];
	Library.books.push({Name:"book1",Author:"author1",Price:300});
    Library.books.push({Name:"book2",Author:"author2",Price:500});
	Library.addBook=function (book){
		Library.books.push(book);
	}
	Library.getAllBooks = function(){
		return Library.books;
	}
	Library.removeBook=function(book){
		var _index = Library.books.indexOf(book);  
        Library.books.splice(_index, 1);  
	}
	return Library;
});