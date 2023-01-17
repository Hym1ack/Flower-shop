import PageView from './pageView';

class LoginPageView extends PageView {
	_createLayout() {
		return `   <div class="auth">
        <div class="auth__container">
          <div class="auth__heading">
            <h3 class="auth__title">Login</h3>
            <a class="auth__back" href="/">
              <img class="auth__home" src="../assets/img/home.svg" alt="home" />Back to home
            </a>
          </div>
          <h5 class="auth__subtitle">Login and have more fun</h5>
          <form class="auth-form">
            <label>
              <input class="auth__input" type="text" placeholder="Username" />
            </label>
            <label>
              <input class="auth__input" type="password" placeholder="Password" />
            </label>
            <label for="auth__checkbox">
              <input type="checkbox" class="auth__checkbox" id="auth__checkbox" />
              <span class="custom_checkbox"></span>
              <span class="auth__remember">Remember me</span>
            </label>
            <button class="auth__submit">Login</button>
          </form>
          <p class="auth__redirect">
            dont have an account? <a href="Registration.html" class="auth__link">Register</a>
          </p>
        </div>
        <div class="auth__decor auth__decor_login"></div>
      </div>`;
	}
}

export default new LoginPageView();
