var SessionsViewController = $V.classes.VViewController.extend({
	displayName: "SessionsViewController",
	viewWillInit: function() {
		this.initNewProperty('tabId', 'sessions');
		this.setTitle('Sessions');
	},
	viewDidLoad: function(aView) {
		var self = this;
		this.view().setContent("SessionsViewController");
	}
});
