<template>
  <div class="footer">
    <img :src="require('@/assets/img/footer-logo.png')" alt="footer-logo" />

    <div class="grid">
      <ul class="menu-links">
        <li>
          <router-link to="/">Inicio</router-link>
        </li>
        <li>
          <router-link to="/mision-vision">Misión & Visión</router-link>
        </li>
        <li>
          <router-link to="/">Actividades</router-link>
        </li>
        <li>
          <router-link to="/">Donaciones</router-link>
        </li>
      </ul>

      <ul class="information-details">
        <h2>Información detallada</h2>
        <li>
          <a
            href="https://maps.google.com/?q=Cl. 15 #5-29, Riohacha, La Guajira, Colombia"
          >
            <i class="fas fa-map-marker-alt"></i>
            <p>Calle 15 No. 5-29, Riohacha, Colombia</p>
          </a>
        </li>
        <li>
          <a href="tel:+3016140464">
            <i class="fas fa-phone"></i>
            <p>301 614 0464</p>
          </a>
        </li>
        <li>
          <a href="mailto:fundacionzenobia.barliza@gmail.com">
            <i class="fas fa-at"></i>
            <p>fundacionzenobia.barliza@gmail.com</p>
          </a>
        </li>
      </ul>
    </div>

    <ul class="social-media">
      <li>
        <a href="https://wa.me/573016140464">
          <i class="fab fa-whatsapp"></i>
        </a>
      </li>
      <li>
        <a
          href="https://instagram.com/fundacionzenobiabarliza?igshid=1gapahcvqhxrx"
        >
          <i class="fab fa-instagram"></i>
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/fundacionzenobiabarliza/">
          <i class="fab fa-facebook"></i>
        </a>
      </li>
    </ul>

    <p class="disclaimer">
      <span style="font-weight: bold; display: inline;">Fundacion Zenobia</span>
      &copy;2020. All rights reserved.
      <span>Created by Aleksander Dimitrijevic.</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 2rem 1rem;
  background: linear-gradient(to left, #f4f4f8, #fff);

  &-content {
    max-width: 560px;
    margin: 2rem auto 0 auto;
  }

  img {
    width: 100px;
    margin: auto;
    display: block;
  }

  ul {
    margin: 2rem 0;

    a {
      border-bottom: none;
    }
  }

  .information-details {
    list-style: none;
    margin-top: 4rem;

    h2 {
      color: #333;
      font-size: 1.1rem;
      font-weight: 900;
    }

    li {
      display: flex;
      margin: 2rem 0;
      align-items: center;

      a {
        display: flex;
        color: #000;
        font-size: 0.9rem;
        align-items: center;
        text-decoration: none;

        p {
          word-break: break-all;
        }
      }
      i {
        color: #289ea8;
        font-size: 1.5rem;
        margin-right: 1rem;
      }
    }
  }

  .social-media {
    display: flex;
    list-style: none;
    margin: 6rem 0 2rem;
    align-items: center;
    justify-content: center;

    a {
      width: 50px;
      height: 50px;
      color: #fff;
      display: flex;
      margin: 0 1rem;
      border-radius: 50%;
      text-decoration: none;
      background: rgb(204, 204, 204);
      i {
        margin: auto;
        color: #fff;
        font-size: 1.5rem;
      }
    }
  }

  p.disclaimer {
    margin-top: 2rem;
    text-align: center;
    font-size: 0.8rem;
    span {
      display: block;
      font-size: 0.7rem;
    }
  }
}

@media screen and (min-width: 768px) {
  .footer {
    padding: 2rem 2.5rem;

    .grid {
      display: grid;
      margin: 3rem 0 0 0;
      grid-template-columns: repeat(2, 1fr);

      .menu-links,
      .information-details {
        margin: 0;
        padding: 0;

        &:nth-child(1) {
          margin: 0 auto;

          li {
            a {
              padding: 0;
              margin: 1rem 0;
            }
          }
        }
      }
    }

    .menu-links {
      display: inline-flex;

      a {
        display: inline-block;
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .footer {
    .grid {
      .menu-links,
      .information-details {
        margin: 0;
        padding: 0;
        h2 {
          font-size: 1rem;
        }

        font-size: 0.8rem;

        &:nth-child(1) {
          margin-left: auto;
          margin-right: 6rem;

          li {
            a {
              padding: 0;
              margin: 1rem 0;
            }
          }
        }
      }
    }

    .social-media {
      a {
        width: 35px;
        height: 35px;
        transition: 0.3s;
        i {
          transition: 0.3s;
          font-size: 1.3rem;
        }
        &:hover {
          background: #289ea8;
          i {
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
