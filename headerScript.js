document.addEventListener("DOMContentLoaded", function (event) {
  addNfHeader();
});
function addNfHeader(event) {

  var template = `<style>
  :root {
    --bg-color: #4a4a4a;
    --text-color: #ffffff;
    --primary-color: #ffb900;
  }
  body{
    margin:0;
  }
  #nf-header {
    color: var(--text-color);
    background-color: var(--bg-color);
    padding: 6px;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    font-size: 16px;
    font-family: inherit;
  }
  
  #nf-header a:hover {
    color: var(--primary-color);
    text-decoration: underline;
  }
  
  #nf-header * {
    color: var(--text-color);
    background-color: var(--bg-color);
    text-decoration: none;
    list-style: none;
    border: none;
  }
  
  #nf-header .content {
    width: 90%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -ms-flex-pack: distribute;
        justify-content: space-around;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  
  #nf-header .content .logo img {
    vertical-align: bottom;
    width: 20px;
    height: 20px;
    padding-right: 8px;
    display: inline-block;
    -o-object-fit: contain;
       object-fit: contain;
  }
  
  #nf-header .content nav ul {
    margin: 0;
    padding: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
  }
  
  #nf-header .content nav ul li {
    padding: 10px 30px 10px 0;
  }
  
  #nf-header .content nav ul li .btn {
    background-color: var(--text-color);
    color: var(--bg-color);
    padding: 6px 16px;
    border-radius: 40px;
  }
  
  #nf-header .content nav ul li .btn:hover {
    background-color: var(--text-color);
    color: var(--primary-color);
    text-decoration: none;
  }
  
  #nf-header .action {
    position: absolute;
    top: 50%;
    right: 0;
    -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
    cursor: pointer;
  }
  
  #nf-header .action img {
    width: 18px;
    height: 18px;
    -o-object-fit: contain;
       object-fit: contain;
    cursor: pointer;
  }
  
  #nf-header-content iframe {
    width: 100%;
    height: 100vh;
    border: none;
  }
  
  #nf-headerCTA {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9999999999;
  }
  
  #nf-headerCTA img {
    width: 130px;
    height: 130px;
    -o-object-fit: cover;
       object-fit: cover;
  }
</style>
<header id="nf-header" style="display: none;">
<div class="content">
    <div class="logo">
        <a href="#">
            <img src="//proj-demo.s-cdn.boostkit.dev/5e96e8a76e0572000109d196/cwd/img/boost.png?v=6" alt="" />
            Check out our exclusive content
        </a>
    </div>
    <nav>
        <ul>
            <li>
                <a href="https://bubblesspa.nowfloats.com/all-services/1" class="openpop">Services</a>
            </li>
            <li>
                <a href="https://bubblesspa.nowfloats.com/memberships" class="openpop">Memberships</a>
            </li>
            <li>
                <a href="https://bubblesspa.nowfloats.com/latest-updates/1" class="openpop">Updates</a>
            </li>
            <li>
                <a href="https://bubblesspa.nowfloats.com/image-gallery/1" class="openpop">Gallery</a>
            </li>
            <li>
                <a href="tel:08042781862" title="Get in contact with us.">08042781862</a>
            </li>
            <li>
                <a href="https://5e9709e9c7627e00015c7b0c.preview.boostkit.dev/reservation" class="openpop btn"
                    title="Book your appointment">Book Appointment</a>
            </li>
        </ul>
    </nav>
</div>
<div class="action">
    <button class="closeNFIframe" style="display: none;" title="Close Frame">
        <img src="//proj-demo.s-cdn.boostkit.dev/5e96e8a76e0572000109d196/cwd/img/up.png?v=6" alt="" />
    </button>
    <button class="closeNFNav" title="Close Navbar">
        <img src="//proj-demo.s-cdn.boostkit.dev/5e96e8a76e0572000109d196/cwd/img/close.png?v=6" alt="" />
    </button>
</div>
</header>
<div id="nf-header-content">
<iframe id="nf-frame">
    <p>Your browser does not support iframes.</p>
</iframe>
</div>
<div id="nf-headerCTA" title="Open Navbar">
<img src="//proj-demo.s-cdn.boostkit.dev/5e96e8a76e0572000109d196/cwd/img/headerCTA.png?v=6" alt="" />
</div>`;
  debugger;
  var div = document.createElement("div");
  div.innerHTML = template;
  document.getElementsByTagName("body")[0].prepend(div);

  document.getElementById("nf-header-content").style.display = "none";
  var openlink = document.getElementsByClassName("openpop");

  var NFHeaderCta = document.getElementById('nf-headerCTA');
  var NFIframeWrapper = document.getElementById('nf-header-content');
  var NFIframe = document.getElementById('nf-frame');
  var nfHeader = document.getElementById('nf-header');
  var btnCloseNfNav = document.getElementsByClassName('closeNFNav')[0];
  var btnCloseNfFrame = document.getElementsByClassName('closeNFIframe')[0];

  // add listner on every anchor in list
  for (var i = 0; i < openlink.length; i++) {
    openlink[i].addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById('nf-frame').src  = this.href;
      document.getElementById("nf-header-content").style.display = "block";
      btnCloseNfNav.style.display = "none";
      btnCloseNfFrame.style.display = "block";
    });
  }

  // opens header and close cta to open header
  NFHeaderCta.addEventListener("click", function(e){
    e.preventDefault();
    nfHeader.style.display = "block";
    NFHeaderCta.style.display = "none";
  });

  // closes ifram opened
  btnCloseNfFrame.addEventListener('click',function(e){
    e.preventDefault();
    NFIframeWrapper.style.display = "none";
    btnCloseNfFrame.style.display = "none";
    btnCloseNfNav.style.display = "block";
  });

  // closes header & open cta to open header
  btnCloseNfNav.addEventListener('click', function(e){
    e.preventDefault();
    nfHeader.style.display = "none";
    NFHeaderCta.style.display = "block";
  })
}
