import PageView from './pageView';

class ProfilePageView extends PageView {
	_createLayout() {
		return `        
        <div class="dashboard">
            <div class="user-panel">
            <div class="user-panel__info">
              <img class="user-panel__img" src="../assets/img/users/user-4.png" alt="user-img">
              <div class="user-panel__data">
                <h3 class="user-panel__name">Amir mohammad</h3>
                <button class="user-panel__out">Log out</button>
            </div>
            </div>
            <nav class="user-panel__tabs">
              <button class="user-panel__tab user-panel__tab_active"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 10C20 15.5234 15.5234 20 10 20C4.47656 20 0 15.5234 0 10C0 4.47656 4.47656 0 10 0C15.5234 0 20 4.47656 20 10ZM10.9375 11.4336V3.4375C10.9375 2.91992 10.5195 2.5 10 2.5C9.48047 2.5 9.0625 2.91992 9.0625 3.4375V11.4336C8.14453 11.8008 7.5 12.6992 7.5 13.75C7.5 15.1289 8.62109 16.25 10 16.25C11.3789 16.25 12.5 15.1289 12.5 13.75C12.5 12.6992 11.8555 11.8008 10.9375 11.4336ZM5.625 6.875C6.31641 6.875 6.875 6.31641 6.875 5.625C6.875 4.93359 6.31641 4.375 5.625 4.375C4.93359 4.375 4.375 4.93359 4.375 5.625C4.375 6.31641 4.93359 6.875 5.625 6.875ZM3.75 8.75C3.05977 8.75 2.5 9.30859 2.5 10C2.5 10.6914 3.05977 11.25 3.75 11.25C4.44141 11.25 5 10.6914 5 10C5 9.30859 4.44141 8.75 3.75 8.75ZM16.25 11.25C16.9414 11.25 17.5 10.6914 17.5 10C17.5 9.30859 16.9414 8.75 16.25 8.75C15.5586 8.75 15 9.30859 15 10C15 10.6914 15.5586 11.25 16.25 11.25ZM14.375 4.375C13.6836 4.375 13.125 4.93359 13.125 5.625C13.125 6.31641 13.6836 6.875 14.375 6.875C15.0664 6.875 15.625 6.31641 15.625 5.625C15.625 4.93359 15.0664 4.375 14.375 4.375Z" fill="#FF8F52"/>
                </svg>
                Dashboard</button>
              <button class="user-panel__tab"><svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 5C5 2.23839 7.23661 0 10 0C12.7634 0 15 2.23839 15 5V7.14286H17.8571C19.0402 7.14286 20 8.10268 20 9.28571V18.5714C20 20.9375 18.0804 22.8571 15.7143 22.8571H4.28571C1.91875 22.8571 0 20.9375 0 18.5714V9.28571C0 8.10268 0.959375 7.14286 2.14286 7.14286H5V5ZM7.14286 7.14286H12.8571V5C12.8571 3.42187 11.5759 2.14286 10 2.14286C8.42411 2.14286 7.14286 3.42187 7.14286 5V7.14286ZM6.07143 11.4286C6.66518 11.4286 7.14286 10.9509 7.14286 10.3571C7.14286 9.76339 6.66518 9.28571 6.07143 9.28571C5.47768 9.28571 5 9.76339 5 10.3571C5 10.9509 5.47768 11.4286 6.07143 11.4286ZM13.9286 9.28571C13.3348 9.28571 12.8571 9.76339 12.8571 10.3571C12.8571 10.9509 13.3348 11.4286 13.9286 11.4286C14.5223 11.4286 15 10.9509 15 10.3571C15 9.76339 14.5223 9.28571 13.9286 9.28571Z" fill="#838383"/>
                </svg>
                Orders</button>
              <button class="user-panel__tab"><svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 11.4286C13.1562 11.4286 15.7143 8.87009 15.7143 5.71429C15.7143 2.55848 13.1562 0 10 0C6.84375 0 4.28571 2.55848 4.28571 5.71429C4.28571 8.87009 6.84375 11.4286 10 11.4286ZM12.2634 13.5714H7.73661C3.46473 13.5714 0 17.0357 0 21.308C0 22.1625 0.692857 22.8558 1.54732 22.8558H18.4536C19.308 22.8571 20 22.1652 20 21.308C20 17.0357 16.5357 13.5714 12.2634 13.5714Z" fill="#838383"/>
                </svg>
                My information</button>
              <button class="user-panel__tab">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2.46475V13.6792C20 15.0561 18.877 16.1439 17.5001 16.1439H11.8753L6.9966 19.8031C6.689 20.0277 6.24976 19.8051 6.24976 19.4242V16.1439H2.4999C1.123 16.1439 0 15.0209 0 13.6792V2.46475C0 1.08785 1.123 0 2.4999 0H17.4993C18.9102 0 20 1.123 20 2.46475Z" fill="#838383"/>
                </svg>
                Comments</button>
            </nav>
            <a href="#" class="user-panel__help">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0C4.47656 0 0 4.47656 0 10C0 15.5234 4.47656 20 10 20C15.5234 20 20 15.5234 20 10C20 4.47656 15.5234 0 10 0ZM10 15.625C9.29688 15.625 8.75 15.0781 8.75 14.375C8.75 13.6719 9.26172 13.125 10 13.125C10.668 13.125 11.25 13.6719 11.25 14.375C11.25 15.0781 10.668 15.625 10 15.625ZM12.6992 10.0781L10.9375 11.1719V11.25C10.9375 11.7578 10.5078 12.1875 10 12.1875C9.49219 12.1875 9.0625 11.7578 9.0625 11.25V10.625C9.0625 10.3125 9.21875 10 9.53125 9.80469L11.7578 8.47656C12.0312 8.32031 12.1875 8.04688 12.1875 7.73438C12.1875 7.26562 11.7617 6.875 11.293 6.875H9.29688C8.79297 6.875 8.4375 7.26562 8.4375 7.73438C8.4375 8.24219 8.00781 8.67188 7.5 8.67188C6.99219 8.67188 6.5625 8.24219 6.5625 7.73438C6.5625 6.21094 7.77344 5 9.26172 5H11.2578C12.8516 5 14.0625 6.21094 14.0625 7.73438C14.0625 8.67188 13.5547 9.57031 12.6992 10.0781Z" fill="#838383"/>
              </svg>
              Contact with us</a>
            </div>
              <!-- 1 -->
            <!-- <div class="content">
              <div class="content__top">
                <h3 class="content__title">Your orders</h3>
              </div>
              <div class="content__box">
                <div class="content__progress-tabs">
                  <button class="content__progress-tab content__progress-tab_active">In progress</button>
                  <button class="content__progress-tab">Delivered</button>
                  <button class="content__progress-tab">Returned</button>
                  <button class="content__progress-tab">Canceled</button>
                </div>
                <div class="content__orders">
                  <div class="content__order">
                    <ul class="content__descr">
                      <li class="content__descr-item">order code <b>96541</b></li>
                      <li class="content__descr-item">date <b>2022/09/01</b></li>
                      <li class="content__descr-item">price <b>2500$</b></li>
                      <li class="content__descr-item">
                        <a class="content__descr-link" href="#">More detail</a>
                      </li>
                    </ul>
                    <div class="content__images">
                      <img class="content__images-item" src="../../assets/img/flowers/flower-1.svg" alt="flower-1">
                      <img class="content__images-item" src="../../assets/img/flowers/flower-2.svg" alt="flower-2">
                    </div>
                  </div>
                  <div class="content__order">
                    <ul class="content__descr">
                      <li class="content__descr-item">order code <b>96541</b></li>
                      <li class="content__descr-item">date <b>2022/09/01</b></li>
                      <li class="content__descr-item">price <b>2500$</b></li>
                      <li class="content__descr-item">
                        <a class="content__descr-link" href="#">More detail</a>
                      </li>
                    </ul>
                    <div class="content__images">
                      <img class="content__images-item" src="../../assets/img/flowers/flower-1.svg" alt="flower-1">
                      <img class="content__images-item" src="../../assets/img/flowers/flower-2.svg" alt="flower-2">
                    </div>
                  </div>
                </div>
              </div>
            </div>  -->

            <!-- 2 -->
            <!-- <div class="content">
              <div class="content__top">
                <h3 class="content__title">Dashboard</h3>
              </div>
              <div class="content__box">
                
              </div>
            </div> -->

            <!-- 3 -->
            <div class="content">
              <div class="content__top">
                <h3 class="content__title">Your information</h3>
                <button class="content__submit">Submit</button>
              </div>
              <div class="content__box content__box_inner">
                <div class="content__img-box">
                  <img src="../assets/img/users/user-4.png" alt="img" class="content__img">
                  <label class="content__upload" for="input_upload">Upload</label>
                  <input id="input_upload" type="file" >
                </div>
                <div class="content__labels">
                  <div class="content__label-box content__label-box_tel">
                    <label class="content__label" for="tel">Phone number</label>
                    <input class="content__input" type="text" id="tel" value="0914*****29">
                  </div>
                  <div class="content__label-box content__label-box_email ">
                    <label class="content__label" for="email">Email</label>
                    <input class="content__input" type="text" id="email" value="Amir@amir.ir">
                  </div>
                  <div class="content__label-box content__label-box_name">
                    <label class="content__label" for="name">Full name</label>
                    <input class="content__input" type="text" id="name" value="Amir mohammad">
                  </div>
                  <div class="content__label-box content__label-box_gender">
                    <label class="content__label" for="gender">Gender </label>
                    <input class="content__input " type="text" id="gender" value="Male">
                  </div>
                  <div class="content__label-box content__label-box_address">
                    <label class="content__label" for="address">Address</label>
                    <input class="content__input" type="text" id="address" value="First street , aa block , red door">
                  </div>
                  <div class="content__label-box content__label-box_state">
                    <label class="content__label" for="state">State</label>
                    <input class="content__input" type="text" id="state" value="Germi">
                  </div>
                  <div class="content__label-box content__label-box_city">
                    <label class="content__label" for="city">City</label>
                    <input class="content__input" type="text" id="city" value="Germi">
                  </div>
                  <div class="content__label-box content__label-box__code">
                    <label class="content__label" for="zip-code">zip-code</label>
                    <input class="content__input" type="text" id="zip-code" value="123456789" >
                  </div>
                  <button class="content__submit content__submit_bottom">Submit</button>
                </div>
                  
                </div>
              </div>
        </div>
`;
	}
}

export default new ProfilePageView();
