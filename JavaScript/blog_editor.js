CKEDITOR.replace('content');

function ok()
{
    // it is the text in HTML format typed by user on the blog editor
    // Using a plugin the HTML can be converted into .md format if necessary
    var data = CKEDITOR.instances.content.getData();

    // using AJAX pass the variable 'data' to php
    // in php save the file with the content of 'data'
    // in folder 'HTML/Blogs/' or any other folder
}