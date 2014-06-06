var AppDelegate = VObject.extend({
	displayName: "AppDelegate",
	init: function() {
		this.Login = new LoginController();
		this.Login.show();
	},
	switchToMainWindow: function() {
		this.Login.hide();
		this.Home = new MainWindowController();
		this.Home.show();
	}
});

