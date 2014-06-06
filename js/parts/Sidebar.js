var SidebarVC = $V.classes.VViewController.extend({
	displayName: "SidebarVC",
	viewDidLoad: function(aView) {
		var self = this;
		
		aView.beginSubviews();
		for (var i in this.tabs) {
			$V.Button.alloc({ text: this.tabs[i].getTitle(), viewId: i, action: function() {SharedApplication.Home.switchTab( self.tabs[this.viewId].getTabId() );} })
		}
		$V.endView();


	}
});
