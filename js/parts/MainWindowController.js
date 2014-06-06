var MainWindowController = $V.classes.VViewController.extend({
	displayName: "MainWindowController",
	viewWillInit: function(prop) {
		this._view = $V.Window.alloc({ 	title: "mainWindow",
										fullScreen: true });
	},
	viewDidLoad: function(aView) {
		var self = this;
	
		this.splitView = aView.append( $V.SplitView.alloc({ id: "MainSplitView" }) );

		this.subviews = {};
		this.subviews.tasksVC = new TasksViewController();
		this.subviews.sessionsVC = new SessionsViewController();

		this.sidebarVC = new SidebarVC({margins: { top: 0, left: 0, right: 'auto', bottom: 0 }, tabs: this.subviews, parentVC: this });
		
		this.splitView.append( this.sidebarVC.view() );
		this.tabView   = this.splitView.append( $V.TabView.alloc({ id: "MainTabView", hasTabs: false, margins: { top: 0, left: 220, right: 0, bottom: 0 } }) );


		for (var i in this.subviews) {
			this.tabView.addTab({ id: this.subviews[i].getTabId(), title: this.subviews[i].getTitle(), content: this.subviews[i].view().getElem() })
		}
		this.tabView.switchTab('tasks');
		
	},
	switchTab: function(id) {
		this.tabView.switchTab( id );
	},
	show: function() {
		this.view().makeKeyAndOrderFront();
		this.view().hide();
		this.view().fadeIn();
	},
	hide: function() {
		this.view().orderOut();
	}
});

