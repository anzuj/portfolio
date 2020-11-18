<template>
  <div class="hover-pointer ma-3 fade-in" @click="$router.push({ path: '/' })">
    <template>
      <div id="logoWrapper" class="d-flex">
        <img src="../assets/logo.gif" id="logoImg" />
        <div id="logotext">
          <div id="evatherm">EVATHERM</div>
          <div id="crystal">A company for crystallization<br />technology</div>
        </div>
      </div>
    </template>
  </div>
</template>

<style>
#logoWrapper {
  width: 260px;
  height: 100px;
}

#logoImg {
  object-fit: contain;
  position: relative;
  height: 100%;
}

#logotext {
  font-family: "Nunito Sans", sans-serif;
  position: relative;
  left: -24%;
  top: 18%;
}

#evatherm {
  font-size: 40px;
  color: #005591;
  font-style: italic;
  font-weight: 600;
  transform: skewX(-10deg);
}

#crystal {
  font-size: 10px;
  line-height: 1;
  color: rgb(15, 56, 102);
  position: relative;
  top: -12px;
  left: 31%;
}

@media only screen and (max-width: 1050px) {
  #logoWrapper {
    width: 195px;
    height: 63px;
  }

  #evatherm {
    font-size: 30px;
  }

  #crystal {
    font-size: 8px;
  }
}
</style>
