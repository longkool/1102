jQuery(document).ready(function($) {
    jQuery("hopp copy").before("<div class='codeHeader'><a class='copy-text' data-clipboard-target='hopp copy' data-clipboard-action='copy'>Copy</a></div>");
    $('.copy-text').tooltip({
        trigger: 'click'
    })
});
var clipboard = new ClipboardJS(".copy-text", {
    target: function(trigger) {
        return trigger.parentNode.nextElementSibling
    }
});

function setTooltip(btn, message) {
    $(btn).tooltip('hide').attr('data-original-title', message).tooltip('show');
}

function hideTooltip(btn) {
    setTimeout(function() {
        $(btn).tooltip('hide');
    }, 1000);
}
clipboard.on('success', function(e) {
    var btn = $(e.trigger);
    setTooltip(btn, 'Copied');
    hideTooltip(btn);
});
clipboard.on('error', function(e) {
    var btn = $(e.trigger);
    setTooltip('Failed');
    hideTooltip(btn);
});
