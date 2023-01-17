import PageView from './pageView';

class RegisterPageView extends PageView {
	_createLayout() {
		return ` <div class="auth">
        <div class="auth__container">
          <div class="auth__heading">
            <h3 class="auth__title">Register</h3>
            <a class="auth__back" href="/">
              <img class="auth__home" src="../assets/img/home.svg" alt="home" />Back to home
            </a>
          </div>
          <p class="auth__subtitle">Register and help us help you</p>
          <form class="auth__form">
            <label>
              <input class="auth__input" type="email" placeholder="Email" />
            </label>
            <label>
              <input class="auth__input" type="text" placeholder="Username" />
            </label>
            <label>
              <input class="auth__input" type="password" placeholder="Password" />
            </label>
            <div class="auth__policy">
              <p class="auth__policy-links">
                with registering your accepting our
                <a href="#" class="auth__policy-link">terms</a> and
                <a href="#" class="auth__policy-link">privacy policy</a>
              </p>
            </div>
            <button class="auth__submit">Register</button>
          </form>
          <p class="auth__redirect">
            Already have an account? <a href="Login.html" class="auth__link">Login</a>
          </p>
        </div>
        <div class="auth__decor auth__decor_reg"></div>
      </div>`;
	}
}

export default new RegisterPageView();
