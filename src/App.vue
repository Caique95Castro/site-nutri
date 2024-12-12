<template>
  <div class="container-geral-app">
    <div class="container-geral-header">
      <div class="box-logo">
        <h1>SEU LOGO</h1>
        <!-- <img src="" alt="LOGO EMPRESA" /> -->
      </div>
      <!-- Botão Menu Hambúrguer -->
      <button @click="toggleMenu" class="menu-button">☰</button>

      <nav :class="{ 'menu-open': isMenuOpen }">
        <router-link to="/" @click="navigateAndCloseMenu">INICIO</router-link>
        <router-link to="/consulta-onile" @click="navigateAndCloseMenu"
          >CONSULTA ONLINE</router-link
        >
        <router-link to="/servicos" @click="navigateAndCloseMenu"
          >SERVIÇOS</router-link
        >
        <router-link to="/sobre" @click="navigateAndCloseMenu"
          >SOBRE A NUTRI</router-link
        >
        <router-link to="/depoimentos" @click="navigateAndCloseMenu"
          >DEPOIMENTOS</router-link
        >
        <router-link to="/contato" @click="navigateAndCloseMenu"
          >CONTATO</router-link
        >
      </nav>
    </div>
    <router-view />
    <!-- WHATSAPP BOTÃO -->

    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
    />
    <a href="https://wa.me/5511" class="float" target="_blank">
      <i class="fa fa-whatsapp my-float"></i>
    </a>
    <!------------------------------------------->
    <footer>
      <div class="box-footer">
        <div class="box-itens-footer">
          <p>
            2024© Seu Nome Nutricionista | Desenvolvido por
            <a
              class="meusite"
              href="https://caiquecastro.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              >CaiqueCastro</a
            >
          </p>
        </div>
        <div class="box-itens-footer">
          <a href="http://" target="_blank" rel="noopener noreferrer"
            ><ion-icon class="icones-icones" name="logo-instagram"></ion-icon
          ></a>
          <a href="mailto:" target="_blank" rel="noopener noreferrer">
            <ion-icon class="icones-icones" name="mail-outline"></ion-icon>
          </a>
          <a
            href="https://wa.me/5511"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon class="icones-icones" name="logo-whatsapp"></ion-icon>
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <ion-icon class="icones-icones" name="logo-linkedin"></ion-icon>
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <ion-icon class="icones-icones" name="logo-youtube"></ion-icon>
          </a>
        </div>
        <div class="box-itens-footer" style="flex-direction: column">
          <h4>Nutricionista Seu Nome Nutricionista</h4>
          <a href="http://" target="_blank" rel="noopener noreferrer"
            >Contato: (11) 00000-0000</a
          >
          <a href="http://" target="_blank" rel="noopener noreferrer"
            >teste@teste.com</a
          >
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    navigateAndCloseMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container-geral-app {
  .container-geral-header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding-top: 20px;
    position: relative;

    .box-logo {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 20px;
    }
    .menu-button {
      display: none;
      font-size: 2rem;
      background: none;
      border: none;
      cursor: pointer;
      position: absolute;
      right: 20px;
      top: 20px;
      color: #42b983;
    }
    nav {
      display: flex;
      justify-content: center;
      align-content: center;
      border-top: 1px solid rgba(167, 166, 166, 0.36);
      padding: 20px;
      gap: 5px;
      transition: all 0.3s ease-in-out;

      &.menu-open {
        display: block;
        flex-direction: column;
      }
      a {
        font-weight: bold;
        color: #2c3e50;
        text-decoration: none;
        padding: 10px;
        display: block;

        &.router-link-exact-active {
          color: #fff;
          background-color: #42b983;
        }
      }
      a:hover {
        background-color: #42b983;
      }
    }
    @media (max-width: 810px) {
      .menu-button {
        display: block;
      }
      nav {
        display: none;
      }
    }
  }
  .float {
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 40px;
    right: 40px;
    background-color: #25d366;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    font-size: 30px;
    box-shadow: 2px 2px 3px #999;
    z-index: 100;
  }

  .my-float {
    margin-top: 16px;
  }
  footer {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
    padding: 50px 0;

    .box-footer {
      display: flex;
      justify-content: space-around;
      align-content: center;
      flex-wrap: wrap;
      width: 100%;
      gap: 20px;

      .box-itens-footer {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 300px;
        gap: 10px;

        .meusite {
          font-size: 16px;
          color: blue;
          text-decoration: underline;
        }
        .icones-icones {
          width: 30px;
          height: 30px;
          color: grey;
        }
        .icones-icones:hover {
          color: rgb(13, 119, 87);
        }
        h4 {
          color: #373533;
          font-size: 15.3px;
          font-family: "Shadows Into Light", cursive;
        }
        p {
          color: #373533;
          font-size: 13.6px;
        }
        a {
          text-decoration: none;
          color: #373533;
        }
      }
    }
  }
}
</style>
