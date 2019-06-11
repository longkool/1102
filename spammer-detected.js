function blockLinks(parentID, children) {
var parent = document.getElementById(parentID),
content = parent.getElementsByTagName(children);
for (var i = 0; i < content.length; i++) {
if (content[i].innerHTML.indexOf('</a>') !== -1) {
content[i].innerHTML = "<mark>Direct Link Is Broken!</mark> Don't Spam, Please!";
content[i].className = "spammer-detected";
} } }
blockLinks('comment-holder', 'p');
