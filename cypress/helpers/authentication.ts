import { Logins } from '@cypress/logins';
import { FramePage } from '@cypress/page-objects/modules/frame.po';
import { SystemMessagesPage } from '@cypress/page-objects/modules/system-messages.po';
import { LoginMclPage } from '@cypress/page-objects/pages/login-mcl.po';
import { LoginPage } from '@cypress/page-objects/pages/login.po';
import { ProfilePage } from '@cypress/page-objects/pages/profile.po';

export class Authentication {
	static navigateAndLogin(login: Logins) {
		LoginPage.navigateTo();
		Authentication.login(login);
		ProfilePage.isCurrentPath();
		SystemMessagesPage.hasValidSystemMessagesLoggedIn();
	}

	static login(login: Logins) {
		LoginPage.getLoginInput().type(login);
		LoginPage.getPasswordInput().type('aaa111AAA!!!');
		LoginPage.getLoginButton().click();
	}

	static loginMcl() {
		LoginMclPage.navigateTo();
	}

	static logout() {
		FramePage.getLoginStatusButton()
			.scrollIntoView()
			.click();
	}

	static changeContext() {
		FramePage.getChangeContextButton().click();
	}
}
