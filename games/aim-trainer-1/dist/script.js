let targetSize = 100;
      let isFullscreen = false;
      const multiplier = 0.85; // 85% of screen
      let xLimit = innerWidth * multiplier - targetSize; //subtracting 100 cause width and height of target = 100
      let yLimit = innerHeight * multiplier - targetSize; //90% of screen

      checkFullScreen();

      function goFullscreen() {
        document.documentElement.requestFullscreen();
      }
      function checkFullScreen() {
        xLimit = innerWidth * multiplier - targetSize;
        yLimit = innerHeight * multiplier - targetSize;
        if (innerHeight < window.screen.height) {
          document.getElementById("fullscreenLabel").style.display = "block";
          isFullscreen = false;
          return false;
        } else {
          document.getElementById("fullscreenLabel").style.display = "none";
          return true;
        }
      }
      addEventListener("resize", checkFullScreen);

      function changeCrosshairColor(e) {
        document
          .querySelectorAll("svg")
          .forEach((svg) => (svg.style.color = e.target.value));
      }
      function setCrossHairSize(val) {
        val = val > 200 ? 200 : val;
        document.querySelectorAll("svg").forEach((svg) => {
          svg.style.width = val;
          svg.style.height = val;
          svg.style.top = "calc(50% - " + val / 2 + "px)";
          svg.style.left = "calc(50% - " + val / 2 + "px)";
        });
      }
      function setTargetSize(val) {
        val = val > 200 ? 200 : val;
        document.querySelectorAll(".target").forEach((target) => {
          target.style.width = val + "px";
          target.style.height = val + "px";
        });
        targetSize = Number(val);
      }
      function setTargetRadius(val) {
        document.querySelectorAll(".target").forEach((target) => {
          target.style.borderRadius = val + "%";
        });
      }

      //game logic
      const body = document.querySelector("body");
      const target = document.getElementById("realTarget");
      const countDownLabel = document.querySelector("#countdown");
      const scoreSpan = document.querySelector("#score");
      const endMenu = document.querySelector(".end-menu");
      const menu = document.querySelector(".menu");
      const area = document.querySelector(".area");
      const crosshair = document.querySelector("#crosshair");
      let targetsHit = 0;
      let gameTime = 10000; // default in ms
      let isColliding = false;

      const setGameTime = (e) => (gameTime = e.target.value * 1000);

      addEventListener("mousemove", (e) => {
        area.style.left = innerWidth / 2 - e.clientX + "px";
        area.style.top = innerHeight / 2 - e.clientY + "px";
        area.style.transform =
          "rotateY(" +
          (0 + (innerWidth / 2 - e.clientX) / 40) +
          "deg)" +
          "rotateX(" +
          (0 - (innerHeight / 2 - e.clientY) / 40) +
          "deg)";
        const result = checkIsColliding();
        if (result !== isColliding) {
          target.classList.toggle("hover");
          isColliding = result;
        }
      });
      addEventListener("click", () => {
        if (isColliding) hit();
      });

      function startGame() {
        targetsHit = 0;
        let time = 1000; //countdown time in ms
        endMenu.style.display = "none";
        menu.style.display = "none";
        countDownLabel.style.display = "inline";

        const countdown = setInterval(() => {
          if (time === 0) {
            clearInterval(countdown);
            setTarget();
            crosshair.style.display = "block";
            area.style.display = "block";
            body.style.cursor = "none";
            countDownLabel.style.display = "none";
            isFullscreen = checkFullScreen();
            setTimeout(gameOver, gameTime);
          }

          countDownLabel.textContent = "Get Ready: " + time;
          time--;
        }, 1);
      }

      function hit() {
        isColliding = false;
        targetsHit++;
        setTarget();
      }

      function setTarget() {
        const [x, y] = getRand(xLimit, yLimit);
        target.style.left = x + "px";
        target.style.top = y + "px";
        target.classList.remove("hover");
      }

      function checkIsColliding() {
        const rect = target.getBoundingClientRect();
        if (
          rect.left + targetSize >= innerWidth / 2 &&
          innerWidth / 2 - rect.left > 0 &&
          rect.top + targetSize >= innerHeight / 2 &&
          innerHeight / 2 - rect.top > 0
        )
          return true;
        else return false;
      }

      const getRand = (x, y) => {
        const randTill = (n) => Math.floor(Math.random() * n);
        return [randTill(x), randTill(y)];
      };

      function gameOver() {
        crosshair.style.display = "none";
        area.style.display = "none";
        endMenu.style.display = "flex";
        body.style.cursor = "default";
        document.getElementById("timeOver").style.display = "block";
        scoreSpan.textContent = "Targets Hit: " + targetsHit;
        document.getElementById("score-tps").textContent =
          "Targets per second: " + targetsHit / (gameTime / 1000);
        document.getElementById("time").textContent =
          "Time: " + gameTime / 1000 + "s";
        document.getElementById("targetSizeResult").textContent =
          "Target Size: " + targetSize + "px";
        document.getElementById("isFullscreenResult").textContent =
          "Fullscreen Mode: " +
          String(isFullscreen).charAt(0).toUpperCase() +
          String(isFullscreen).slice(1);
      }

      function goToMenu() {
        endMenu.style.display = "none";
        menu.style.display = "flex";
      }