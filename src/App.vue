<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #F6ECE0">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="./assets/logo-sellsuki.png" alt="" width="141.29" height="60" class="d-inline-block align-text-top">
      </a>
      <div class="ml-2">
        <ul class="navbar-nav navbar-custom shadow text-s-16 text-w-400">
          <li class="nav-item">
            <router-link class="nav-link text-c-menu" aria-current="page" to="/Home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link border-menu text-c-menu" aria-current="page" to="/Services">Service</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link border-menu text-c-menu" aria-current="page" to="/Services">Solution</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link border-menu text-c-menu" aria-current="page" to="/Services">About Us</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link border-menu text-c-menu" aria-current="page" to="/Services">Portfolio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link border-menu text-c-menu" aria-current="page" to="/Services">Blog</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link border-menu text-c-menu" aria-current="page" to="/Services">Contact Us</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link border-menu text-c-menu" aria-current="page" to="/Services">Join Us</router-link>
          </li>
        </ul>
      </div>
      <div class="ml-2">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link text-c-menu" to="/Home" style="margin-right:20px;margin-left:10px;padding-right: 0 !important;padding-left: 0 !important;"><div class="btn-icon text-w-700" style="background-color: #FDF5E8;font-size:16px">EN</div></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-c-menu" to="/Home" style="margin-right:40px;margin-left:10x;padding-right: 0 !important;padding-left: 0 !important;"><img class="shadow-filter" style="background-color: #FFFFFF;border-radius: 50px;" src="./assets/icon/Vector.png"></router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="background-main">
    <div class="container">
      <div class="row">
        <div class="col-5">
          <font style="font-size:64px;font-weight:600;top:339px;position: absolute;color:#50151C">E-COMMERCE <br>SOLUTION</font>
        </div>
        <div class="col-7">
          <img src="./assets/image60.png" style="margin-top: -40px;">
        </div>
      </div>
      <div class="crad">
        <div class="row p-5" style="padding-top: 80px !important;">
          <div class="col-6">
            <img src="./assets/Lets-Grow-Your-Business-Together.png">
          </div>
          <div class="col-6">
            <font style="font-size:45px;font-weight:700;margin-top:50px;position: absolute;color:#50151C">LET’S GROW YOUR<br>BUSINESS TOGETHER</font>
            <font class="text-s-16 text-description" style="margin-top:219px;position: absolute;width: 532px;">แม่ค้าออนไลน์ยุค 5.0 ปรับตัวยังไงให้ทันในวันที่โลกหมุนเร็วขนาดนี้ การเข้ามา ลงเล่นในตลาดที่มีคู่แข่งมากมาย ต่อสู้กันอย่างดุเดือดเพื่อแย่งชิงพื้นที่ในการนำเสนอสินค้าให้แก่ผู้บริโภค บอกเลยว่าหากทำงานนี้คนเดียวคงจะหนักเอาการ ถ้าอยากเริ่มต้นขายของออนไลน์อย่างราบรื่นปลอดภัย การมีผู้ช่วยมือดีไว้ข้างกายก็จะช่วย แบ่งเบาภาระได้เยอะ...</font>
            <button class="btn-black text-s-16 text-w-400" style="position: absolute;margin-top:455px">Read More</button>
          </div>
        </div>
        <div class="p-5" style="padding-top: 80px !important;">
          <div class="row">
            <div class="col-4 d-flex justify-content-center">
              <p class="text-w-700 text-white" style="position: absolute;margin-top: 305px;font-size:20px">BUSINESS OWNER</p>
              <img class="card-img-top" src="./assets/Rectangle1.png" style="width: 285px;height: 373px;">
            </div>
            <div class="col-4 d-flex justify-content-center">
              <p class="text-w-700 text-white" style="position: absolute;margin-top: 305px;font-size:20px">ONLINE MERCHANT</p>
              <img class="card-img-top" src="./assets/Rectangle2.png" style="width: 285px;height: 373px;">
            </div>
            <div class="col-4 d-flex justify-content-center">
              <p class="text-w-700 text-white" style="position: absolute;margin-top: 305px;font-size:20px">CORPORATE</p>
              <img class="card-img-top" src="./assets/Rectangle3.png" style="width: 285px;height: 373px;">
            </div>
          </div>
        </div>

        <div class="p-5" style="padding-top: 40px !important;background: linear-gradient(110.74deg, #52B8E2 0%, #3D90DD 75.34%);">
          <div class="row">
            <div class="text-center">
              <font style="font-size:30px;font-weight:700;color:#FFFFFF">บทความที่น่าสนใจ</font>
            </div>
            <div class="col-4 d-flex justify-content-center" style="padding-top: 30px !important;">
              <div class="card" style="width: 331px;border-radius: 10px">
                <img class="card-img-top" src="./assets/Rectangle21.png" alt="Card image cap">
                <div class="card-body">
                  <font class="card-title" style="font-weight: bold;font-size: 24px;">News</font>
                  <p style="margin-bottom: 0rem;" class="card-text text-s-16">Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                  <button class="btn-transparent" style="left: 135px;position: relative;">Read More</button>
                </div>
              </div>
            </div>
            <div class="col-4 d-flex justify-content-center" style="padding-top: 30px !important;">
              <div class="card" style="width: 331px;border-radius: 10px">
                <img class="card-img-top" src="./assets/Rectangle21.png" alt="Card image cap">
                <div class="card-body">
                  <font class="card-title" style="font-weight: bold;font-size: 24px;">News</font>
                  <p style="margin-bottom: 0rem;" class="card-text text-s-16">Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                  <button class="btn-transparent" style="left: 135px;position: relative;">Read More</button>
                </div>
              </div>
            </div>
            <div class="col-4 d-flex justify-content-center" style="padding-top: 30px !important;">
              <div class="card" style="width: 331px;border-radius: 10px">
                <img class="card-img-top" src="./assets/Rectangle21.png" alt="Card image cap">
                <div class="card-body">
                  <font class="card-title" style="font-weight: bold;font-size: 24px;">News</font>
                  <p style="margin-bottom: 0rem;" class="card-text text-s-16">Lorem ipsum Lorem ipsum Lorem ipsum...</p>
                  <button class="btn-transparent" style="left: 135px;position: relative;">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div style="padding: 80px 80px 0px 80px">
          <div class="row mb-3">
            <div class="col-6">
              <font style="font-size:64px;font-weight:600;position: relative;color:#23233C;line-height: 90.72px;">YOUR<br>ROADMAP<br>TO SUCCESS</font>
              <p class="mt-3" style="line-height: 24px;text-transform: capitalize;color: #807F7F;width: 415px;">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.</p>
              <img class="mt-2" src="./assets/Vector-Smart-Object.png" style="position: relative;left: -80px;">
            </div>
            <div class="col-6">
              <div class="row" style="float: right;margin: auto;">
                <div class="card text-white" style="width: 485px;height: 221px;;background: #23233F;border-radius: 24px;">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-6" style="margin:58px 0px 58px 0px"><font style="font-size: 24px;left: 30px;position: relative;">Research Find <br>Insight</font></div>
                      <div class="col-6" style="margin:40px 0px 40px 0px"><img style="left: 60px;position: relative;" src="./assets/icon/Group.png"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-3" style="float: right;margin: auto;">
                <div class="card text-white" style="width: 485px;height: 221px;;background: #23233F;border-radius: 24px;">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-6" style="margin:58px 0px 58px 0px"><font style="font-size: 24px;left: 30px;position: relative;">Analytic the <br>Fact</font></div>
                      <div class="col-6" style="margin:40px 0px 40px 0px"><img style="left: 60px;position: relative;" src="./assets/icon/Group1.png"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-3" style="float: right;margin: auto;">
                <div class="card text-white" style="width: 485px;height: 221px;;background: #23233F;border-radius: 24px;">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-6" style="margin:75px 0px 75px 0px"><font style="font-size: 24px;left: 30px;position: relative;">Right Strategy</font></div>
                      <div class="col-6" style="margin:40px 0px 40px 0px"><img style="left: 60px;position: relative;" src="./assets/icon/Group2.png"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-3" style="float: right;margin: auto;">
                <div class="card text-white" style="width: 485px;height: 221px;;background: #23233F;border-radius: 24px;">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-6" style="margin:58px 0px 58px 0px"><font style="font-size: 24px;left: 30px;position: relative;">Repeat<br>Optimization</font></div>
                      <div class="col-6" style="margin:40px 0px 40px 0px"><img style="left: 60px;position: relative;" src="./assets/icon/Group3.png"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-3" style="float: right;margin: auto;">
                <div class="card text-white" style="width: 485px;height: 221px;;background: #23233F;border-radius: 24px;">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-7" style="margin:58px 0px 58px 0px"><font style="font-size: 24px;left: 30px;position: relative;">Get Feedback &<br>Never Stop learning</font></div>
                      <div class="col-5" style="margin:40px 0px 40px 0px"><img style="left: 30px;position: relative;" src="./assets/icon/Group4.png"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-12">
              <iframe width="100%" height="650" src="https://www.youtube.com/embed/dxN2yRqXTYc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <div class="row mt-3 mb-3">
            <div class="col-12">
              <table style="text-align:center;width:100%">
                <td><img src="./assets/logo/image113.png"></td>
                <td><img src="./assets/logo/image114.png"></td>
                <td><img src="./assets/logo/image115.png"></td>
                <td><img src="./assets/logo/image116.png"></td>
                <td><img src="./assets/logo/image117.png"></td>
                <td><img src="./assets/logo/image118.png"></td>
                <td><img src="./assets/logo/image119.png"></td>
                <td><img src="./assets/logo/image120.png"></td>
                <td><img src="./assets/logo/image121.png"></td>
                <td><img src="./assets/logo/image122.png"></td>
              </table>
            </div>
          </div>
        </div>
        <div style="background: linear-gradient(180deg, #7BB2DD 0%, #4B6ECC 100%);">
          <div style="padding: 40px 80px 40px 80px">
            <div class="row">
              <div class="col-12">
                  <font style="font-weight: 700;font-size: 30px;color:#ffffff">GET A QUOTE</font>
                  <hr style="width: 492px;height: 2px;color:#FFFFFF">
                  <font style="font-weight: 400;font-size: 18px;color:#ffffff">Please complete the form to request a quotation</font>
              </div>
            </div>
            <div class="row">
              <div class="col-7">
                <form>
                  <div class="row mt-4">
                    <div class="form-group col-6">
                      <label class="text-s-16 text-white">ชื่อ*</label>
                      <input type="email" class="form-control mt-2" placeholder="Name*">
                    </div>
                    <div class="form-group col-6">
                      <label class="text-s-16 text-white">นามสกุล*</label>
                      <input type="password" class="form-control mt-2" placeholder="Last Name*">
                    </div>
                    <div class="form-group col-6 mt-3">
                      <label class="text-s-16 text-white">อีเมล*</label>
                      <input type="email" class="form-control mt-2" placeholder="Email*">
                    </div>
                    <div class="form-group col-6 mt-3">
                      <label class="text-s-16 text-white">เบอร์โทรศัพท์*</label>
                      <input type="password" class="form-control mt-2" placeholder="Tel*">
                    </div>
                    <div class="form-group col-6 mt-3">
                      <label class="text-s-16 text-white">ชื่อเเบรนด์*</label>
                      <input type="email" class="form-control mt-2" placeholder="Brand*">
                    </div>
                    <div class="form-group col-6 mt-3">
                      <label class="text-s-16 text-white">เลือกความต้องการ*</label>
                      <input type="password" class="form-control mt-2" placeholder="interested about*">
                    </div>
                    <div class="form-group col-12 mt-3">
                      <label class="text-s-16 text-white">ข้อความ*</label>
                      <textarea class="form-control mt-2" style="height:130px" placeholder="Message*"></textarea>
                    </div>
                  </div>
                  <div class="text-center" style="width: 100%;margin-top:32px">
                    <button type="submit" class="btn-orange">Submit</button>
                  </div>
                </form>
              </div>
              <div class="col-5">
                <img class="mt-4" src="./assets/image52.png" style="position: relative;left: 38px;">
              </div>
            </div>
          </div>
        </div>
        <div style="background-color: #15304E">
          <div style="padding: 40px 100px 10px 100px">
            <div class="row">
              <div class="col-4">
                <p class="text-w-700" style="color:#ffffff;font-size: 20px;">บริการของเรา</p>
                <p class="text-w-400" style="font-size: 18px;"><a class="text-white" href="#">ลงโฆษณาออนไลน์</a></p>
                <p class="text-w-400" style="font-size: 18px;"><a class="text-white" href="#">คลังสินค้าครบวงจร</a></p>
                <p class="text-w-400" style="font-size: 18px;"><a class="text-white" href="#">เปิดบัญชี LINE OA</a></p>
                <p class="text-w-400" style="font-size: 18px;"><a class="text-white" href="#">ทำเว็บไซต์</a></p>
                <p class="text-w-400" style="font-size: 18px;"><a class="text-white" href="#">ทำคอนเทนต์</a></p>
                <p class="text-w-400" style="font-size: 18px;"><a class="text-white" href="#">เปรียบเทียบค่าขนส่ง</a></p>
              </div>
              <div class="col-4">
                <p class="text-w-700" style="color:#ffffff;font-size: 20px;">เกี่ยวกับเรา</p>
                <p class="text-w-400" style="font-size: 18px;"><a class="text-white" href="#">ติดต่อเรา</a></p>
                <p class="text-w-400" style="font-size: 18px;"><a class="text-white" href="#">ร่วมงานกับเรา</a></p>
                <p class="text-w-400" style="font-size: 18px;"><a class="text-white" href="#">Portfolio</a></p>
                <p class="text-w-400" style="font-size: 18px;"><a class="text-white" href="#">Blog</a></p>
              </div>
              <div class="col-4">
                <div class="row">
                  <div class="col-2" style="margin-right:15px"><img src="./assets/icon/entypo-social_facebook-with-circle.png"></div>
                  <div class="col-2" style="margin-right:15px"><img src="./assets/icon/entypo-social_twitter-with-circle.png"></div>
                  <div class="col-2" style="margin-right:15px"><img src="./assets/icon/entypo-social_youtube-with-circle.png"></div>
                  <div class="col-2" style="margin-right:15px"><img src="./assets/icon/Frame.png"></div>
                </div>
                <div class="row mt-2">
                  <div class="col-12">
                    <font class="text-w-700" style="font-size: 20px;color:#ffffff">Call Center</font><br>
                    <font class="text-w-700" style="font-size: 24px;color:#F38100">02 026 3250</font>
                  </div>
                  <div class="col-12 mt-5">
                    <p class="text-w-400" style="font-size: 18px;color:#ffffff;margin-bottom:10px !important;">sellsuki co. Ltd.<br> 4Simplex, 3rd floor, no. 10/39<br> Ratchadapisek Road, chankasem,<br> chatuchak, bangkok 10900<br> thailand</p>
                  </div>                  
                  <div class="col-12">
                    <img class="background-main" src="./assets/image13.png" style="border-radius: 5px">
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-12"><hr style="border: 1px solid #FFFFFF;width:100%;opacity:1"></div>
            </div>
            <div class="row mt-1">
              <div class="col-6"><p class="text-w-400" style="font-size: 14px;color:#FFFFFF;">© Sellsuki Co. Ltd. (c) All Rights Reserved. Dream-Theme</p></div>
              <div class="col-6" style="text-align:right"><p class="text-w-400" style="font-size: 14px;color:#FFFFFF;">Privacy Policy <font style="margin-left:6px;margin-right:6px">|</font> Terms and Conditions</p></div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  </div>

<router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

html, body {
  font-family: 'Prompt', sans-serif;
  background-color: #FDF5E8;
}

#app {
  font-family: 'Prompt', sans-serif;
}

.background-main {
  background-color: #FDF5E8;
}

a{
  text-decoration: none !important;
}

.navbar-custom {
  background-color: #FFFFFC;
  padding: 5px;
  padding-left: 10px !important;
  padding-right: 10px !important;
  border-radius: 50px;
  width: 797px !important;
}

.border-menu{
  border-left: 1px solid #E5E5E5;
}

.btn-icon{
    padding: 13px 15px !important;
    border-radius: 50px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
}

.shadow-filter{
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
}

.nav-link{
  padding-top: 2px !important;
  padding-bottom: 2px !important;
  padding-right: 18px !important;;
  padding-left: 18px !important;;
  margin-top: 5px;
  margin-bottom: 5px;
}

.text-w-400{
  font-weight: 400 !important;
}

.text-w-700{
  font-weight: 700 !important;
}

.text-s-16{
  font-size: 16px !important;
}

.text-s-30{
  font-size: 30px !important;
}

.text-description{
  line-height: 24px;
  letter-spacing: 0.02em;
  color:#373737;
}

.text-c-menu{
  color: #50151C !important;
  Fill:solid !important;
}

.crad{
  background: #FBFBFB;
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.2);
  border-radius: 40px 40px 0px 0px;
}

.btn-black{
  position: absolute;
  width: 184px !important;
  height: 40px !important;
  color: #ffffff !important;
  background: #231F20 !important;
  border-radius: 20px !important;
  border:0 !important;
}

.btn-transparent {
  width: 169px !important;
  height: 40px !important;
  color: #F38100 !important;
  background-color: #fff !important;
  border: 1px solid #F38100 !important;
  box-sizing: border-box !important;
  border-radius: 20px !important;
}

.btn-orange {
  width: 184px !important;
  height: 40px !important;
  color: #FFFFFF !important;
  background-color: #F38100 !important;
  border: 1px solid #F38100 !important;
  box-sizing: border-box !important;
  border-radius: 20px !important;
}

.card{
  border: 0 !important;
}

</style>
