<template>
		<div class="preloader">
            <header class="bg-header"></header>

                        <section>
                            <div class="termsFrame">
                            <div class="termsFrameTop"></div>

                            <div class="title1 pb-5">Privacy Policy</div>

                            <div class="title2 pt-3">What information do we collect?</div>
                            <div class="text1">
                                <p>
                                We collect information from you when you register on our site.
                                </p>
                                <p>
                                When ordering or registering on our site, as appropriate, you may be asked to enter your: name or e-mail address. You may,
                                however, visit our site anonymously.
                                </p>
                            </div>

                            <div class="title2">What do we use your information for?</div>
                            <div class="text1">
                                <p>
                                Any of the information we collect from you may be used in one of the following ways:
                                </p>
                                <ul>
                                <li>To personalize your experience
                                    <br>(your information helps us to better respond to your individual needs)</li>
                                <li>To improve our website
                                    <br>(we continually strive to improve our website offerings based on the information and feedback we receive from
                                    you)</li>
                                <li>To improve customer service
                                    <br>(your information helps us to more effectively respond to your customer service requests and support needs)</li>
                                <li>To process transactions
                                    <br>Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other
                                    company for any reason whatsoever, without your consent, other than for the express purpose of delivering the
                                    purchased product or service requested.</li>
                                <li>To administer a contest, promotion, survey or other site feature</li>
                                <li>To send periodic emails</li>
                                </ul>
                                <p>
                                The email address you provide may be used to send you information, respond to inquiries, and/or other requests or questions.
                                </p>
                            </div>

                            <div class="title2">How do we protect your information?</div>
                            <div class="text1">
                                <p>
                                We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or
                                access your personal information.
                                </p>
                            </div>

                            <div class="title2">Do we use cookies?</div>
                            <div class="text1">
                                <p>
                                Yes (Cookies are small files that a site or its service provider transfers to your computers hard drive through your Web
                                browser (if you allow) that enables the sites or service providers systems to recognize your browser and capture
                                and remember certain information
                                </p>
                                <p>
                                We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and
                                site interaction so that we can offer better site experiences and tools in the future.
                                </p>
                            </div>

                            <div class="title2">Do we disclose any information to outside parties?</div>
                            <div class="text1">
                                <p>
                                We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include
                                trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long
                                as those parties agree to keep this information confidential. We may also release your information when we believe
                                release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property,
                                or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing,
                                advertising, or other uses.
                                </p>
                            </div>

                            <div class="title2">Third party links</div>
                            <div class="text1">
                                <p>
                                Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party
                                sites have separate and independent privacy policies. We therefore have no responsibility or liability for the
                                content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome
                                any feedback about these sites.
                                </p>
                            </div>

                            <div class="title2">California Online Privacy Protection Act Compliance</div>
                            <div class="text1">
                                <p>
                                Because we value your privacy we have taken the necessary precautions to be in compliance with the California Online Privacy
                                Protection Act. We therefore will not distribute your personal information to outside parties without your consent.
                                </p>
                                <p>
                                As part of the California Online Privacy Protection Act, all users of our application may make any changes to their information
                                at anytime by logging into their account and going to the 'Setting' page.
                                </p>
                            </div>

                            <div class="title2">Childrens Online Privacy Protection Act Compliance</div>
                            <div class="text1">
                                <p>
                                We are in compliance with the requirements of COPPA (Childrens Online Privacy Protection Act), we do not collect any information
                                from anyone under 13 years of age. Our website, products and services are all directed to people who are at least
                                13 years old or older.
                                </p>
                            </div>

                            <div class="title2">Online Privacy Policy Only</div>
                            <div class="text1">
                                <p>
                                This online privacy policy applies only to information collected through our website and not to information collected offline.
                                </p>
                            </div>

                            <div class="title2">Terms and Conditions</div>
                            <div class="text1">
                                <p>
                                Please also visit our Terms and Conditions section establishing the use, disclaimers, and limitations of liability governing
                                the use of our website at
                                <router-link @click="scrollToTop" to="/TermsOfUse">www.sellsuki.co.th/TermsOfUse</router-link>
                                </p>
                            </div>

                            <div class="title2">Your Consent</div>
                            <div class="text1">
                                <p>
                                By using our site, you consent to our web site privacy policy.
                                </p>

                            </div>

                            <div class="title2">Changes to our Privacy Policy</div>
                            <div class="text1">
                                <p>
                                If we decide to change our privacy policy, we will post those changes on this page.
                                <router-link @click="scrollToTop" to="/">www.sellsuki.co.th</router-link>
                                </p>
                                <p>
                                This policy is powered by Trust Guard PCI compliance.
                                </p>
                            </div>

                            </div>
                        </section>

		</div>
</template>

<script>
export default {
	name: 'Policy',
    head() {
      return {
          title: "Policy"
      };
    },
    methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    }
  }
}
</script>

<style scoped>

  .preloader{
	position: absolute;
	width: 100%;
	height: 2100px;
	background-color: #F5F5F5;
	z-index: 9999;
  }

  header.bg-header {
    height: 186px;
    padding-bottom: 0px;
    background: url("https://s3.ap-southeast-1.amazonaws.com/staging.sellsuki.com-static/Header_Policy_01_cbfd9ea655.webp") no-repeat top center #FDF5E8;
    background-size: 200px 200px;
}

section .termsFrame {
    background: #fff;
    width: 1000px;
    margin: -30px auto 0;
    padding: 60px 40px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    position: relative;
}

section .termsFrameTop {
    width: 100%;
    height: 16px;
    background: url("https://www.sellsuki.co.th/img/bg-head-terms-of-use.png") no-repeat;
    position: absolute;
    top: -16px;
    left: 0px;
}

.title1{
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    line-height: 30px;
}

.title2{
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
}

.text1{
    display: block;
    font-size: 14px;
    font-weight: 200;
}

p{
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
}
</style>