function hideComments() {
  console.log("content.hideComments");
  $('.inline-comments').hide();
}

function showComments() {
  console.log("content.showComments");
  $('.inline-comments').show();
}

chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.action == "hide") {
      hideComments();
    } else if (request.action == "show") {
      showComments();
    }
  });

$('body').append('<div style="position:fixed; top: 0; right: 0; padding: 5px; ' +
                 'border: 1px solid #D4D4D4; border-bottom-color: #BCBCBC; ' +
                 'border-radius: 3px;' +
                 'background:-webkit-linear-gradient(#FAFAFA,#EAEAEA);">' +
                 'Comments: <a href="javascript:$(\'.inline-comments\').hide();">Hide</a> ' +
                 '<a href="javascript:$(\'.inline-comments\').show();">Show</a>' +
                 '</div>');
console.log($('body'));
console.log('added');
