class Cart {
  constructor() {
    this.cart = [];
  }
  
  getItemIndex(kodeProduk) {
    return this.cart.findIndex(produk => produk.kodeProduk === kodeProduk);
  }

  tambahProduk(kodeProduk, kuantitas) {
    if(this.getItemIndex(kodeProduk) < 0) {
      this.cart.push({kodeProduk, kuantitas});
    } else {
      this.cart[this.getItemIndex(kodeProduk)].kuantitas += kuantitas
    }
  }

  hapusProduk(kodeProduk) {
    if(this.getItemIndex(kodeProduk) < 0) {
      return;
    } else {
      this.cart.splice(this.getItemIndex(kodeProduk), 1);
    }
  }

  tampilkanCart() {
    this.cart.forEach((itemOnCart) => {
      console.log(`${itemOnCart.kodeProduk} (${itemOnCart.kuantitas})`);
    });
  }
  
}

const keranjang = new Cart();

keranjang.tambahProduk("Topi Putih", 2);

keranjang.tambahProduk("Kemeja Hitam", 3);

keranjang.tambahProduk("Sepatu Merah", 1);
keranjang.tambahProduk("Sepatu Merah", 4);
keranjang.tambahProduk("Sepatu Merah", 2);

keranjang.hapusProduk("Kemeja Hitam");

keranjang.hapusProduk("Baju Hijau");

keranjang.tampilkanCart();
