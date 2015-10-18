/**
 * Share on FB
 * @author Leszek Bajkowski (cocafin)
 */

var FB_SHARE_URL = 'https://www.facebook.com/sharer/sharer.php?u=';
 
chrome.browserAction.onClicked.addListener(function(tab) {
	if (!tab || !tab.url || !/^http(s)?:\/\//i.test(tab.url)) {
		return;
	}
	chrome.tabs.create({
		'url': FB_SHARE_URL + encodeURIComponent(tab.url), 
		'active': true,
		'index': tab.index + 1
	});
});