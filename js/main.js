function main() {
	$V.preventTouchScrolling();
	$V.preventNativeMouseWheel();

	window.SharedApplication = new AppDelegate();
};