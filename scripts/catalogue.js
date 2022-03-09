/**
 * Project ini akan mengasah kemampuan kamu dalam memanipulasi array yang berisi object
 *
 * Deskripsi:
 * Terdapat banyak fungsi, namun hanya 4 fungsi saja yang belum bekerja sebagai mana mestinya yaitu
 * 1. createStars: fungsi ini untuk menampilkan star (bintang) sesuai dengan jumlahnya secara dinamis, outputnya berupa array
 * 2. sortPriceAscending: fungsi ini untuk mengurutkan produk berdasarkan harga termurah
 * 3. sortPriceDescending: fungsi ini untuk mengurutkan produk berdasarkan harga tertinggi
 * 4. showProducts: menampilkan semua product,
 *    fungsi showProducts memiliki kriteria sebagai berikut:
 *    - semua product harus muncul semua
 *    - tidak menampilkan barang yang stoknya kurang dari filters.stockMinimal
 *    - jika filters.priceMinimal > 0 maka tampilkan product dengan harga lebih besar dari filters.priceMinimal
 *    - jika filters.priceMaximal > 0 maka tampilkan product dengan harga lebih kecil dari filters.priceMaximal
 *    - jika filters.priceMinimal dan filters.priceMaximal > 0 maka tampilkan product dengan harga pada range tersebut
 *    - jika filters.stars ada isinya, maka tampilkan product-product yang memiliki star sesuai yang ada di array filters.stars.
 *      misal filters.stars isinya [1, 2] maka tampilkan semua product yang memiliki 1 star dan 2 star
 *    - jika filtes.size ada isinya, maka tampilkan product-product yang memiliki size yang sesuai dengan filters.size, jika tidak tampilkan semua
 *    - jika filters.searchText ada isinya, maka tampilkan product-product yang nama atau deskripsinya sesuai dengan filters.searchText
 */
const filters = {
  searchText: "",
  stockMinimal: 1,
  priceMinimal: 0,
  priceMaximal: 9999999999,
  size: "",
  stars: [1, 2, 3, 4, 5],
};

function createStars(totalStars) {
  let stars = [];

  // stars masih hardcode / tidak dinamis
  if (totalStars !== 5) {
    for (let i = 0; i < totalStars; i++) {
      stars.push('<i class="fa fa-star text-warning"></i>');
    }
    for (let j = 0; j < 5 - totalStars; j++) {
      stars.push('<i class="fa fa-star text-secondary"></i>');
    }
  } else {
    for (let i = 0; i < totalStars; i++) {
      stars.push('<i class="fa fa-star text-warning"></i>');
    }
  }

  // buatlah fungsi untuk mencetak star yang menyala sesuai
  // dengan jumlah totalStars yang ada di parameter fungsi createStars

  // ...

  return stars;
}

function sortPriceAscending() {
  // isi jawaban kamu disini
  for (let i = 0; i < products.length; i++) {
    for (let j = 1; j < products.length; j++) {
      if (products[j - 1].price > products[j].price) {
        let temp = products[j];
        products[j] = products[j - 1];
        products[j - 1] = temp;
      }
    }
  }
  showProducts();
}

function sortPriceDescending() {
  // isi jawaban kamu disini
  for (let i = 0; i < products.length; i++) {
    for (let j = 1; j < products.length; j++) {
      if (products[j - 1].price < products[j].price) {
        let temp = products[j];
        products[j] = products[j - 1];
        products[j - 1] = temp;
      }
    }
  }
  showProducts();
}

function showProducts() {
  let productList = document.getElementById("product-list");
  productList.innerHTML = "";
  let result = [];
  let search = new RegExp(filters.searchText, "gi");

  if (filters.searchText == "") {
    for (let i in products) {
      let product = products[i];
      let stars = createStars(product.stars);

      // lakukan logika filter kamu disini ...\

      if (filters.stars.includes(product.stars)) {
        if (filters.size == "") {
          if (
            product.price >= filters.priceMinimal &&
            product.price <= filters.priceMaximal
          ) {
            result.push(`
      <div class="col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
          <div class="card" onclick="showDetail(this, ${i})">
              <img class="card-img-top" src="${product.image}" alt="${
              product.name
            }">
              <div class="card-body">
                  <h4 class="card-title">${product.name}</h4>
                  <p class="text-success">Rp. ${product.price.toLocaleString()}</p>
                  <div class="row">
                      <div class="col-sm-8">${stars.join("")}</div>
                      <div class="col-sm-4"><i class="badge badge-secondary">${
                        product.size
                      }</i></div>
                  </div>
              </div>
          </div>
      </div>`);
          }
        } else if (product.size === filters.size) {
          if (
            product.price >= filters.priceMinimal &&
            product.price <= filters.priceMaximal
          ) {
            result.push(`
      <div class="col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
          <div class="card" onclick="showDetail(this, ${i})">
              <img class="card-img-top" src="${product.image}" alt="${
              product.name
            }">
              <div class="card-body">
                  <h4 class="card-title">${product.name}</h4>
                  <p class="text-success">Rp. ${product.price.toLocaleString()}</p>
                  <div class="row">
                      <div class="col-sm-8">${stars.join("")}</div>
                      <div class="col-sm-4"><i class="badge badge-secondary">${
                        product.size
                      }</i></div>
                  </div>
              </div>
          </div>
      </div>`);
          }
        }
      }
    }
  } else {
    for (let i in products) {
      let product = products[i];
      let stars = createStars(product.stars);
      if (product.name.match(search) || product.description.match(search)) {
        result.push(`
        <div class="col-lg-3 col-md-4 col-sm-6 col-12 mt-4">
            <div class="card" onclick="showDetail(this, ${i})">
                <img class="card-img-top" src="${product.image}" alt="${
          product.name
        }">
                <div class="card-body">
                    <h4 class="card-title">${product.name}</h4>
                    <p class="text-success">Rp. ${product.price.toLocaleString()}</p>
                    <div class="row">
                        <div class="col-sm-8">${stars.join("")}</div>
                        <div class="col-sm-4"><i class="badge badge-secondary">${
                          product.size
                        }</i></div>
                    </div>
                </div>
            </div>
        </div>`);
      }
      product = "";
    }
  }
  productList.innerHTML += result.join("");
}

function onSearch(value) {
  filters.searchText = value;

  showProducts();
}

function changeSize(size) {
  filters.size = size;

  showProducts();
}

function changePriceMin(value) {
  if (value === "") {
    filters.priceMinimal = 0;
  } else {
    filters.priceMinimal = parseFloat(value);
  }

  showProducts();
}

function changePriceMax(value) {
  if (value === "") {
    filters.priceMaximal = 9999999999;
  } else {
    filters.priceMaximal = parseFloat(value);
  }

  showProducts();
}

function setStar(el, star) {
  if (el.checked) {
    filters.stars.push(star);
  } else {
    filters.stars.splice(filters.stars.indexOf(star), 1);
  }

  showProducts();
}

function modalVisible(show) {
  let modal = document.getElementById("myModal");
  let backdrop = document.getElementById("modal-backdrop");

  if (show) {
    modal.classList.add("show");
    backdrop.classList.add("show");
    document.body.classList.add("modal-open");
  } else {
    modal.classList.remove("show");
    backdrop.classList.remove("show");
    document.body.classList.remove("modal-open");
  }
}

document.querySelectorAll('[data-dismiss="modal"]').forEach((b) => {
  b.onclick = () => modalVisible(false);
});

function showDetail(dom, index) {
  let product = products[index];
  let title = document.getElementById("modal-title");
  let detail = document.getElementById("modal-body");
  let description = document.getElementById("modal-description");

  detail.innerHTML = dom.innerHTML;
  description.innerHTML = product.description;
  title.innerHTML = product.name;

  modalVisible(true);
}

showProducts();
