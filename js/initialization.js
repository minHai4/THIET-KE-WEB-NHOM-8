//Khoi tao danh sach san pham
function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [
            //Combo
            {
                id: 1,
                status: 1,
                title: 'Combo Gà Cay "Bùng Nổ"',
                img: "./assets/img/products/1-combo-ga-cay-bung-no.jpg",
                category: 'Combo',
                price: 100000,
                desc: '2 miếng gà rán cay + khoai tây lắc phô mai + Coca-Cola'
            },
            {
                id: 2,
                status: 1,
                title: 'Combo Gà Mật Ong "Đỉnh Cao"',
                img: './assets/img/products/2-combo-ga-mat-ong.png',
                category: 'Combo',
                price: 180000,
                desc: '5 miếng gà rán giòn sốt mật ong + Coca-Cola'
            },
            {
                id: 3,
                status: 1,
                title: 'Combo "Tuổi Teen Năng Động"',
                img: './assets/img/products/3-combo-tuoi-teen-nang-dong.jpg',
                category: 'Combo',
                price: 120000,
                desc: 'Gà rán phủ phô mai + khoai tây chiên lớn + Coca-Cola'
            },
            {
                id: 4,
                status: 1,
                title: 'Combo "Đại Tiệc Gà"',
                img: './assets/img/products/4-combo-dai-tiec-ga.jpg',
                category: 'Combo',
                price: 250000,
                desc: '10 miếng gà + 2 khoai tây chiên lớn + 2 Coca-Cola + phô mai que'
            },
            {
                id: 5,
                status: 1,
                title: 'Combo Trưa "Xả Láng"',
                img: './assets/img/products/5-combo-trua-xa-lang.jpg',
                category: 'Combo',
                price: 140000,
                desc: 'Burger bò phô mai + khoai tây chiên lớn + Coca-Cola'
            },
            {
                id: 6,
                status: 1,
                title: 'Combo Pizza "Đôi Điểm 10"',
                img: './assets/img/products/6-combo-pizza-diem10.jpg',
                category: 'Combo',
                price: 220000,
                desc: 'Pizza BBQ gà nướng + pizza xúc xích pepperoni + 2 Coca-Cola'
            },
            {
                id: 7,
                status: 1,
                title: 'Combo "Hội Bạn Thân"',
                img: './assets/img/products/7-combo-hoi-ban-than.png',
                category: 'Combo',
                price: 200000,
                desc: '2 burger + 2 Coca-Cola + khoai tây lắc phô mai + gà popcorn'
            },
            {
                id: 8,
                status: 1,
                title: 'Combo "Phô Mai Tan Chảy"',
                img: './assets/img/products/8-combo-pho-mai-tan-chay.jpg',
                category: 'Combo',
                price: 160000,
                desc: 'Pizza phô mai 4 tầng + Coca-Cola + phô mai que'
            },
            {
                id: 9,
                status: 1,
                title: 'Combo "Ngày Hè Sảng Khoái"',
                img: './assets/img/products/9-combo-ngay-he-sang-khoai.jpg',
                category: 'Combo',
                price: 110000,
                desc: 'Gà sốt kem hành + khoai tây chiên nhỏ + Coca-Cola'
            },
            {
                id: 10,
                status: 1,
                title: 'Combo "Gia Đình Vui Vẻ"',
                img: './assets/img/products/10-combo-gd-vv.jpg',
                category: 'Combo',
                price: 300000,
                desc: '5 miếng gà + pizza lớn + khoai tây chiên lớn + 3 Coca-Cola'
            },
            
            //Ga ran
            {
                id: 11,
                status: 1,
                title: 'Gà rán truyền thống',
                img: './assets/img/products/11-ga-ran-truyen-thong.jpg',
                category: 'Gà rán',
                price: 35000,
                desc: 'Gà rán giòn, thơm ngon đậm vị truyền thống.'
            },
            {
                id: 12,
                status: 1,
                title: 'Gà rán cay',
                img: './assets/img/products/12-ga-ran-cay.jpg',
                category: 'Gà rán',
                price: 38000,
                desc: 'Gà rán giòn, tẩm sốt cay đậm đà.'
            },
            {
                id: 13,
                status: 1,
                title: 'Gà rán giòn sốt mật ong',
                img: './assets/img/products/13-ga-ran-sot-mat-ong.jpg',
                category: 'Gà rán',
                price: 40000,
                desc: 'Gà rán giòn rụm, phủ sốt mật ong ngọt dịu.'
            },
            {
                id: 14,
                status: 1,
                title: 'Gà rán phủ phô mai',
                img: './assets/img/products/14-ga-ran-phu-pho-mai.jpg',
                category: 'Gà rán',
                price: 45000,
                desc: 'Gà rán thơm ngon phủ lớp phô mai béo ngậy.'
            },
            {
                id: 15,
                status: 1,
                title: 'Gà rán Hàn Quốc sốt cay ngọt',
                img: './assets/img/products/15-ga-ran-sot-cay-ngot.jpg',
                category: 'Gà rán',
                price: 42000,
                desc: 'Gà rán giòn, sốt cay ngọt kiểu Hàn Quốc.'
            },
            {
                id: 16,
                status: 1,
                title: 'Gà rán sốt BBQ',
                img: './assets/img/products/16-ga-sot-bbq.jpg',
                category: 'Gà rán',
                price: 40000,
                desc: 'Gà rán thơm lừng, sốt BBQ đậm vị.'
            },
            {
                id: 17,
                status: 1,
                title: 'Gà sốt kem hành',
                img: './assets/img/products/17-ga-sot-kem-hanh.jpg',
                category: 'Gà rán',
                price: 50000,
                desc: 'Gà chiên giòn, sốt kem hành thơm ngậy.'
            },
            //Burger
            {
                id: 18,
                status: 1,
                title: 'Burger bò cổ điển',
                img: './assets/img/products/18-burger-bo-co-dien.png',
                category: 'Hamburger',
                price: 55000,
                desc: 'Burger bò thơm ngon, kẹp cùng rau sốt đặc trưng.'
            },
            {
                id: 19,
                status: 1,
                title: 'Burger bò phô mai',
                img: './assets/img/products/19-burger-bo-pho-mai.png',
                category: 'Hamburger',
                price: 60000,
                desc: 'Burger bò thơm ngậy với lớp phô mai tan chảy.'
            },
            {
                id: 20,
                status: 1,
                title: 'Burger gà chiên giòn',
                img: './assets/img/products/20-burger-ga-chien-gion.jpg',
                category: 'Hamburger',
                price: 50000,
                desc: 'Burger gà chiên giòn, rau sốt tươi ngon.'
            },
            {
                id: 21,
                status: 1,
                title: 'Burger gà nướng mật ong',
                img: './assets/img/products/21-burger-ga-nuong-mat-ong.jpg',
                category: 'Hamburger',
                price: 52000,
                desc: 'Burger gà nướng thơm, sốt mật ong ngọt dịu.'
            },
            {
                id: 22,
                status: 1,
                title: 'Burger tôm chiên',
                img: './assets/img/products/22-burger-tom-chien.jpg',
                category: 'Hamburger',
                price: 58000,
                desc: 'Burger tôm chiên giòn, đậm vị hải sản.'
            },
            {
                id: 23,
                status: 1,
                title: 'Burger chay',
                img: './assets/img/products/23-burger-chay.jpg',
                category: 'Hamburger',
                price: 45000,
                desc: 'Burger chay thơm ngon, giàu dinh dưỡng.'
            },
            {
                id: 24,
                status: 1,
                title: 'Double beef burger',
                img: './assets/img/products/24-double-beef-burger.jpg',
                category: 'Hamburger',
                price: 75000,
                desc: 'Burger 2 tầng thịt bò, thỏa mãn đam mê.'
            },
            //Pizza
            {
                id: 25,
                status: 1,
                title: 'Pizza hải sản',
                img: './assets/img/products/25-Pizza hải sản.jpg',
                category: 'Pizza',
                price: 120000,
                desc: 'Pizza hải sản tươi ngon, phủ phô mai béo ngậy.'
            },
            {
                id: 26,
                status: 1,
                title: 'Pizza bò bằm phô mai',
                img: './assets/img/products/26-Pizza bò bằm phô mai.jpg',
                category: 'Pizza',
                price: 110000,
                desc: 'Pizza thịt bò bằm thơm ngon, phủ phô mai tan chảy.'
            },
            {
                id: 27,
                status: 1,
                title: 'Pizza xúc xích pepperoni',
                img: './assets/img/products/27-Pizza xúc xích pepperoni.jpg',
                category: 'Pizza',
                price: 100000,
                desc: 'Pizza xúc xích pepperoni đậm vị, thơm lừng.'
            },
            {
                id: 28,
                status: 1,
                title: 'Pizza thịt nguội & nấm',
                img: './assets/img/products/28-Pizza thịt nguội & nấm.png',
                category: 'Pizza',
                price: 105000,
                desc: 'Pizza thịt nguội và nấm, hương vị hài hòa.'
            },
            {
                id: 29,
                status: 1,
                title: 'Pizza BBQ gà nướng',
                img: './assets/img/products/29-Pizza BBQ gà nướng.jpg',
                category: 'Pizza',
                price: 115000,
                desc: 'Pizza gà nướng sốt BBQ, đậm đà khó cưỡng.'
            },
            {
                id: 30,
                status: 1,
                title: 'Pizza gà cay Hàn Quốc',
                img: './assets/img/products/30-Pizza gà cay Hàn Quốc.jpg',
                category: 'Pizza',
                price: 118000,
                desc: 'Pizza gà cay ngọt kiểu Hàn, thơm nồng.'
            },
            {
                id: 31,
                status: 1,
                title: 'Pizza phô mai 4 tầng',
                img: './assets/img/products/31-Pizza phô mai 4 tầng.jpg',
                category: 'Pizza',
                price: 130000,
                desc: 'Pizza phô mai béo ngậy với 4 lớp phô mai khác nhau.'
            },
            {
                id: 32,
                status: 1,
                title: 'Pizza chay rau củ',
                img: './assets/img/products/32-Pizza chay rau củ.jpg',
                category: 'Pizza',
                price: 95000,
                desc: 'Pizza chay với rau củ tươi ngon, thanh đạm.'
            },
            //Mon phu
            {
                id: 33,
                status: 1,
                title: 'Khoai tây chiên nhỏ',
                img: './assets/img/products/33-Khoai tây chiên nhỏ.jpg',
                category: 'Món phụ',
                price: 25000,
                desc: 'Khoai tây chiên giòn rụm, ăn kèm sốt.'
            },
            {
                id: 34,
                status: 1,
                title: 'Khoai tây chiên lớn',
                img: './assets/img/products/34-Khoai tây chiên lớn.jpg',
                category: 'Món phụ',
                price: 40000,
                desc: 'Khoai tây chiên giòn, phần lớn thỏa mãn.'
            },
            {
                id: 35,
                status: 1,
                title: 'Khoai tây lắc phô mai',
                img: './assets/img/products/35-Khoai tây lắc phô mai.jpg',
                category: 'Món phụ',
                price: 35000,
                desc: 'Khoai tây chiên lắc phô mai thơm béo.'
            },
            {
                id: 36,
                status: 1,
                title: 'Phô mai que',
                img: './assets/img/products/36-Phô mai que.jpg',
                category: 'Món phụ',
                price: 30000,
                desc: 'Phô mai que chiên giòn, kéo sợi béo ngậy.'
            },
            {
                id: 37,
                status: 1,
                title: 'Cánh gà chiên nước mắm',
                img: './assets/img/products/37-Cánh gà chiên nước mắm.jpg',
                category: 'Món phụ',
                price: 45000,
                desc: 'Cánh gà chiên giòn, sốt nước mắm đậm đà.'
            },
            {
                id: 38,
                status: 1,
                title: 'Gà popcorn',
                img: './assets/img/products/38-Gà popcorn.jpg',
                category: 'Món phụ',
                price: 38000,
                desc: 'Gà viên chiên giòn, ăn vặt cực ngon.'
            },
            {
                id: 39,
                status: 1,
                title: 'Salad rau trộn',
                img: './assets/img/products/39-Salad rau trộn.jpg',
                category: 'Món phụ',
                price: 30000,
                desc: 'Salad rau tươi, giòn ngon, thanh mát.'
            },
            {
                id: 40,
                status: 1,
                title: 'Bắp xào bơ',
                img: './assets/img/products/40-Bắp xào bơ.jpg',
                category: 'Món phụ',
                price: 35000,
                desc: 'Bắp xào bơ thơm ngậy, vị ngọt tự nhiên.'
            },
            {
                id: 41,
                status: 1,
                title: 'Chả cá viên chiên',
                img: './assets/img/products/41-Chả cá viên chiên.jpg',
                category: 'Món phụ',
                price: 40000,
                desc: 'Chả cá viên chiên giòn, đậm vị hải sản.'
            },
            {
                id: 42,
                status: 1,
                title: 'Soup kem ngô',
                img: './assets/img/products/42-Soup kem ngô.jpg',
                category: 'Món phụ',
                price: 35000,
                desc: 'Soup kem ngô ngọt béo, ấm bụng.'
            },
            //Nuoc
            {
                id: 43,
                status: 1,
                title: 'Coca-Cola',
                img: './assets/img/products/43-Coca-Cola.jpg',
                category: 'Nước uống',
                price: 20000,
                desc: 'Nước ngọt có ga Coca-Cola mát lạnh'
            },
            {
                id: 44,
                status: 1,
                title: '7Up',
                img: './assets/img/products/44-7Up.jpg',
                category: 'Nước uống',
                price: 20000,
                desc: 'Nước ngọt có ga 7Up thơm mát'
            },
            {
                id: 45,
                status: 1,
                title: 'Nước cam',
                img: './assets/img/products/45-Nước cam.jpg',
                category: 'Nước uống',
                price: 30000,
                desc: 'Nước cam ép tươi, giàu vitamin C'
            },
            {
                id: 46,
                status: 1,
                title: 'Trà chanh',
                img: './assets/img/products/46-Trà chanh.jpg',
                category: 'Nước uống',
                price: 25000,
                desc: 'Trà chanh chua ngọt, sảng khoái'
            },
            {
                id: 47,
                status: 1,
                title: 'Trà đào',
                img: './assets/img/products/47-Trà đào.jpg',
                category: 'Nước uống',
                price: 30000,
                desc: 'Trà đào thơm ngon, thanh mát'
            },
            {
                id: 48,
                status: 1,
                title: 'Sữa tươi',
                img: './assets/img/products/48-Sữa tươi.jpg',
                category: 'Nước uống',
                price: 25000,
                desc: 'Sữa tươi béo ngậy, dinh dưỡng'
            },
            {
                id: 49,
                status: 1,
                title: 'Nước khoáng',
                img: './assets/img/products/49-Nước khoáng.jpg',
                category: 'Nước uống',
                price: 15000,
                desc: 'Nước khoáng tinh khiết, giải khát'
            }]
        localStorage.setItem('products', JSON.stringify(products));
    }
    // localStorage.clear();
}

window.onload = createProduct();
window.onload = createAdminAccount();