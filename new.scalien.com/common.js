originalImageSources = new Array();

function changeImageOnMouseOver(img, url)
{
	img.onmouseout = function() { changeImageOnMouseOut(img); };
	originalImageSources[img] = img.src;
	img.src = url;
}

function changeImageOnMouseOut(img)
{
	img.src = originalImageSources[img];
}
