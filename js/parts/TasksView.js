var TasksViewController = $V.classes.VViewController.extend({
	displayName: "TasksViewController",
	viewWillInit: function() {
		this.initNewProperty('tabId', 'tasks');
		this.setTitle('Tasks');
	},
	viewDidLoad: function(aView) {
		var self = this;
		
		aView.setContent("TasksViewController");

	}
});
