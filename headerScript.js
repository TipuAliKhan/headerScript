document.addEventListener("DOMContentLoaded", function(event) {
  addNfHeader();
});
function addNfHeader(event) {

  var template = `<style>
        body {
            margin: 0;
        padding: 0;
        font-family: 'Open Sans';
        }
        
header.nf-plugin-header {
            background: #777474;
        margin: 0;
        height: 40px;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 10000001;
        }
        
.nf-plugin-header ul {
            padding: 0 30px;
        margin: 0;
        list-style: none;
        line-height: 40px;
        }
        
.nf-plugin-header ul li {
            display: inline-block;
        margin: 0 20px;
        }
        
.nf-plugin-header ul li a {
            color: #fff;
        text-decoration: none;
        }
        
.popup iframe {
            width: 98%;
        height: 100vh;
        margin: 0 auto;
        }
        
.wrapper {
            position: relative;
        margin-top: 40px;
        }
        
a.close {
            position: absolute;
        top: 0;
        right: 5px;
        text-decoration: none;
        color: #333;
        border-radius: 50%;
        border: 1px solid #333;
        padding: 0 6px;
        z-index: 99999;
        }
</style>
    <div>
        <header class="nf-plugin-header">
            <ul class="links">
                <li><a class="openpop" href="https://cairo.nowfloats.com/all-our-products/1" id="product">Products</a></li>
                <li><a class="openpop" href="https://cairo.nowfloats.com/latest-updates/1" id="update">Updates</a></li>
            </ul>
        </header>
        <div class="wrapper">
            <div class="popup">
                <iframe src="">
                    <p>Your browser does not support iframes.</p>
                </iframe>
                <a href="#" class="close">X</a>
            </div>
        </div>
    </div>`;
  var div = document.createElement("div");
  div.innerHTML = template;
  document.getElementsByTagName("body")[0].prepend(div);

  document.getElementsByClassName("popup")[0].style.display = "none";
  var openlink = document.getElementsByClassName("openpop");
  for (var i = 0; i < openlink.length; i++) {
    openlink[i].addEventListener("click", function(e) {
      e.preventDefault();
      document.getElementsByTagName("iframe")[0].src = this.href;
      document.getElementsByClassName("popup")[0].style.display = "block";
    });
  }

  var closeiframe = document.getElementsByClassName("close");
  closeiframe[0].addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementsByClassName("popup")[0].style.display = "none";
  });
}
