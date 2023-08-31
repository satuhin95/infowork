let animatedContainer = document.getElementById("animatedContainer");
let footerAnimation = document.getElementById("footerAnimation");
let btnShopNow = document.getElementById("btnShopNow");
let shortText = document.getElementById("shortText");
let longText = document.getElementById("longText");
let wipesMangoImg = document.getElementById("wipesMangoImg");
let wipesCoconutImg = document.getElementById("wipesCoconutImg");
let mangoImg = document.getElementById("mangoImg");
let flowerImg = document.getElementById("flowerImg");
let coconutImg = document.getElementById("coconutImg");
let lysolImg = document.getElementById("lysolImg");
let bgImage = document.getElementById("bgImage");

if (window.innerWidth > 425) {
  document.querySelectorAll(".animation").forEach((item) => {
    item.addEventListener("mouseenter", (event) => {
      footerAnimation.style.height = "180px";
      animatedContainer.style.height = "200px";

      btnShopNow.style.position = "absolute";
      btnShopNow.style.top = "60%";
      btnShopNow.style.right = "140px";
      btnShopNow.style.transform = "translateY(50%)";

      shortText.classList.add("animate__fadeOutDown");
      shortText.style.position = "absolute";
      shortText.style.top = "50%";
      shortText.style.transform = "translateY(-50%)";
      shortText.style.right = "100px";
      shortText.style.width = "150px";

      longText.classList.remove("hidden");
      longText.classList.remove("animate__fadeOutTopLeft");
      longText.classList.add("animate__fadeInTopLeft");

      wipesMangoImg.style.width = "100px";
      wipesMangoImg.style.bottom = "-15px";
      wipesCoconutImg.style.width = "90px";
      wipesCoconutImg.style.left = "275px";
      wipesCoconutImg.style.bottom = "-15px";

      lysolImg.style.width = "90px";
      lysolImg.style.top = "50px";
      mangoImg.style.width = "50px";
      mangoImg.style.left = "125px";
      flowerImg.style.width = "75px";
      flowerImg.style.left = "80px";
      coconutImg.style.width = "80px";
      coconutImg.style.left = "345px";
      bgImage.style.clipPath = "polygon(0 0, 100% 0%, 33% 41%, 0 41%)";
    });
  });

  document.querySelectorAll(".animation").forEach((item) => {
    item.addEventListener("mouseleave", (event) => {
      footerAnimation.style.height = "60px";
      animatedContainer.style.height = "80px";

      btnShopNow.style.position = "absolute";
      btnShopNow.style.top = "30%";
      btnShopNow.style.right = "10px";
      btnShopNow.style.transform = "translateY(50%)";

      shortText.classList.remove("animate__fadeOutDown");
      shortText.classList.add("animate__fadeInUp");

      shortText.style.position = "absolute";
      shortText.style.top = "30%";
      shortText.style.transform = "translateY(-50%)";
      shortText.style.right = "100px";
      shortText.style.width = "150px";

      longText.classList.remove("animate__fadeInTopLeft");
      longText.classList.add("animate__fadeOutTopLeft");
      longText.classList.add("hidden");

      lysolImg.style.width = "70px";
      lysolImg.style.top = "10px";
      wipesMangoImg.style.width = "55px";
      wipesCoconutImg.style.width = "47px";
      wipesCoconutImg.style.left = "230px";
      mangoImg.style.width = "30px";
      mangoImg.style.left = "145px";
      flowerImg.style.width = "46px";
      flowerImg.style.left = "105px";
      coconutImg.style.left = "260px";
      coconutImg.style.width = "75px";
      bgImage.style.clipPath = "polygon(0 0, 80% 0%, 33% 41%, 0 41%)";
    });
  });
} else {
  document.querySelectorAll(".animation").forEach((item) => {
    item.addEventListener("mouseenter", (event) => {
      footerAnimation.style.height = "180px";
      animatedContainer.style.height = "200px";

      btnShopNow.style.position = "absolute";
      btnShopNow.style.top = "70%";
      btnShopNow.style.right = "10px";
      btnShopNow.style.fontSize = "12px";
      btnShopNow.style.transform = "translateY(50%)";

      shortText.classList.add("animate__fadeOutDown");
      shortText.style.position = "absolute";
      shortText.style.top = "50%";
      shortText.style.transform = "translateY(-50%)";
      shortText.style.right = "100px";
      shortText.style.width = "150px";

      longText.classList.remove("hidden");
      longText.classList.remove("animate__fadeOutTopLeft");
      longText.classList.add("animate__fadeInTopLeft");

      wipesMangoImg.style.width = "70px";
      wipesMangoImg.style.bottom = "-15px";
      wipesMangoImg.style.left = "25px";
      wipesCoconutImg.style.width = "55px";
      wipesCoconutImg.style.left = "97px";
      wipesCoconutImg.style.bottom = "-15px";

      lysolImg.style.width = "55px";
      lysolImg.style.top = "10px";
      mangoImg.style.width = "50px";
      mangoImg.style.left = "-10px";
      flowerImg.style.width = "65px";
      flowerImg.style.left = "-55px";
      coconutImg.style.width = "80px";
      coconutImg.style.left = "130px";
      coconutImg.style.bottom = "-10px";
      bgImage.style.clipPath = "polygon(0px 0px, 62% 0%, 0% 35%, 0px 41%)";
      bgImage.style.height = "395px";
    });
  });

  document.querySelectorAll(".animation").forEach((item) => {
    item.addEventListener("mouseleave", (event) => {
      footerAnimation.style.height = "60px";
      animatedContainer.style.height = "80px";

      btnShopNow.style.top = "30%";
      btnShopNow.style.right = "5px";
      btnShopNow.style.fontSize = "8px";
      btnShopNow.style.transform = "translateY(50%)";

      shortText.classList.remove("animate__fadeOutDown");
      shortText.classList.add("animate__fadeInUp");

      shortText.style.position = "absolute";
      shortText.style.top = "30%";
      shortText.style.transform = "translateY(-50%)";
      shortText.style.right = "55px";
      shortText.style.width = "70px";

      longText.classList.remove("animate__fadeInTopLeft");
      longText.classList.add("animate__fadeOutTopLeft");
      longText.classList.add("hidden");

      lysolImg.style.width = "40px";
      lysolImg.style.top = "25px";
      lysolImg.style.left = "10px";
      wipesMangoImg.style.width = "43px";
      wipesMangoImg.style.left = "65px";
      wipesCoconutImg.style.width = "35px";
      wipesCoconutImg.style.left = "107px";
      mangoImg.style.width = "30px";
      mangoImg.style.left = "47px";
      flowerImg.style.width = "35px";
      flowerImg.style.bottom = "0px";
      flowerImg.style.left = "20px";
      coconutImg.style.left = "135px";
      coconutImg.style.bottom = "-5px";
      coconutImg.style.width = "40px";
      bgImage.style.clipPath = "polygon(0 0, 51% 0%, 0% 41%, 0 41%)";
      bgImage.style.width = "445px";
      bgImage.style.height = "182px";
    });
  });
}
