actuallyerimd = erimd
erimd = function(content) {
  const text = content 
		.replace("&lt;:yuhhuh:1227268820213698611&gt;", "__TEMPYUHHUH__") 
		.replace("&lt;:nuhhuh:1233290735999258664&gt;", "&lt;:yuhhuh:1227268820213698611&gt;")
		.replace("__TEMPYUHHUH__", "&lt;:nuhhuh:1233290735999258664&gt;")
	return actuallyerimd(text)
}
