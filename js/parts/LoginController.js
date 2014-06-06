var LoginController = $V.classes.VViewController.extend({
	displayName: "LoginController",
	viewWillInit: function(prop) {
		this._view = $V.Window.alloc({ 	title: "loginWindow",
										position: 'center',
										w: 320,
										h: 320,
										windowLevel: kV.WindowLevelPanel,
										transition: kV.WindowTransitionTypePop
									});
	},
	viewDidLoad: function(aView) {
		var self = this;
		
		aView.beginSubviews();
			this.usernameField = $V.TextField.alloc({ title: "Login", placeholder: "you@yourmail.com" });
			this.passwordField = $V.TextField.alloc({ title: "Password", secure: true });
			
			this.loginBtn = $V.Button.alloc({ text: "Login", action: this.doLogin });
		$V.endView();
	},
	doLogin: function() {
		SharedApplication.switchToMainWindow();
	},
	show: function() {
		this.view().makeKeyAndOrderFront();
	},
	hide: function() {
		this.view().orderOut();
	}
});
