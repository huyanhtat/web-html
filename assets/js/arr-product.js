// mảng sản phẩm
const productInLocalStorage = localStorage.getItem("product");
let product;
if (productInLocalStorage != null) // kiểm tra xem localstore có mảng product chưa
{
  product = JSON.parse(localStorage.getItem("product"));
  // fix loi khong load dc product sau khi add items...
  //localStorage.clear;
}
else {
  product = [
    {
      id: "1",
      type: "keyboard",
      name: "Bàn Phím Bluetooth Logitech K380 - Hàng Chính Hãng",
      price: "599000",
      description: "Logitech - Không dây Bluetooth",
      detail: `Bàn Phím Bluetooth Logitech K380 có thiết kế gọn nhẹ và độc đáo với các nút phím tròn mang nét cổ điển nhưng rất ấn tượng. Vì không có bàn phím số nên sản phẩm khá nhỏ gọn giúp bạn có thể dễ dàng mang theo bên mình và sử dụng bất cứ khi nào.`,
      img: "./assets/img/622f03e09e1dbaa5b3d96506236f5a84.png.webp",
    },
    {
      id: "2",
      type: "mouse",
      name: "Chuột Gaming Yindiao A5",
      description: "Bluetooth/Wireless,pin Sạc E-sports, Led RBG 7 màu - Chính Hãng",
      detail: `
      - Cổng kết nối: wireless with 2.4G <
      - Khoảng cách sử dụng :Over 10M (No shielding) <br>
      - Pin : 930 mAh <br>
      - Sensor: PAN3512 <br>
      - DPI: 800-6400 <br>
      - Thời gian sạc: 3h <br>
      - Dây 1.8m <br>
      - Trọng lượng: 100g +/- 10g <br>
      - Kích thước: 125.5*68.6*39.6mm <br>`,
      img: "./assets/img/ChuộtGamingYindiaoA5.webp",
      price: "269000",
    },
    {
      id: "3",
      type: "keyboard",
      name: "Bàn phím không dây Bluetooth Logitech MX Keys Mini - Hàng chính hãng",
      description: "Nhỏ gọn, Sạc USB-C, Phím tắt thông minh, Có bản cho Mac",
      detail: `
      • CÁC PHÍM THÔNG MINH PERFECT STROKE: Gõ trên các phím được tạo hình phù hợp với ngón tay bạn, cùng 4 phím tắt thông minh: chuyển đổi giọng nói thành văn bản, Tắt tiếng/Hủy tắt tiếng Mic và các phím Emoji và cắt nhanh màn hình.<br>
      • KÍCH CỠ MINI, HIỆU SUẤT MẠNH MẼ: Bố cục được thiết kế để dễ dàng gõ thật chính xác, với hình dáng tối giản và công thái học, có thể dễ dàng mang theo đi đến bất cứ nơi nào để cùng bạn làm việc.<br>
      • PIN SẠC USB-C: Bàn phím Bluetooth MX Keys Mini dùng được 10 ngày trong một lần sạc đầy hoặc lên tới 5 tháng khi tắt chức năng chiếu sáng nền.<br>`,
      img: "./assets/img/fa3b402ea600bb5763a6655ec50bc74b.png.webp",
      price: "699000",
    },
    {
      id: "4",
      type: "mouse",
      name: "Chuột không dây Dareu LM106G Black/ Red /Blue / Pink / White",
      description: "Siêu bền , sạc nhanh",
      detail: `
      - Cổng kết nối: wireless with 2.4G<br>
      - Khoảng cách sử dụng :Over 10M (No shielding)<br>
      - Pin : 930 mAh<br>
      - Sensor: PAN3512<br>
      - DPI: 800-6400<br>
      - Thời gian sạc: 3h<br>
      - Dây 1.8m<br>
      - Trọng lượng: 100g +/- 10g<br>
      - Kích thước: 125.5*68.6*39.6mm<br>`,
      img: "./assets/img/chuot-khong-day-dareu-LM106G-768x768.png",
      price: "120000",
    },
    {
      id: "5",
      type: "speaker",
      name: "Loa 2.1 Logitech Z213 (Đen)",
      description: "none",
      detail: `
      - Thiết Kế: Hệ Thống Loa 2.1,<br>
      - Kết Nối: Jack 3.5mm (headphone) / Jack 3.5mm (input) / Jack 3.5mm (output)<br>
      - Chức Năng: Volume Control / Bass Control<br>
      - Công Suất: 15W RMS
      `,
      img: "./assets/img/Loa LogitechZ213.webp",
      price: "499000",
    },
    {
      id: "6",
      type: "mouse",
      name: "Chuột không dây DAREU LM115G Black",
      description: "Siêu bền , sạc nhanh",
      detail: `
      - Cổng kết nối: wireless with 2.4G<br>
      - Khoảng cách sử dụng :Over 10M (No shielding)<br>
      - Pin : 930 mAh<br>
      - Sensor: PAN3512<br>
      - DPI: 800-6400<br>
      - Thời gian sạc: 3h<br>
      - Dây 1.8m<br>
      - Trọng lượng: 100g +/- 10g<br>
      - Kích thước: 125.5*68.6*39.6mm<br>`,
      img: "./assets/img/chuot-khong-day-dareu-lm115g-01-768x768.jpg",
      price: "125000",
    },
    {
      id: "7",
      type: "headphone",
      name: "Tai Nghe Bluetooth Chụp Tai Sony WH-1000XM4 Hi-Res Noise Canceling - Hàng Chính Hãng",
      description: "Tai nghe hiphop",
      detail: `
      Tai nghe Sony WH-1000XM4 chính hãng <br>

      Mới đây, Sony vừa công bố thế hệ thứ 4 của dòng tai nghe chụp đầu chống ồn cao cấp: WH1000XM4. Sony WH-1000XM4 có thiết kế tương tự như người đàn anh của mình, và cũng được trang bị bộ xử lý chống ồn QN1, thứ giúp cho Sony WH-1000XM3 trở thành một trong những tai nghe không dây tốt nhất trong phân khúc chống ồn chủ động.
      
      `,
      img: "./assets/img/tainghe1.jpg",
      price: "6090000",
    },
    {
      id: "8",
      type: "headphone",
      name: "Tai nghe không dây Logitech Zone Vibe 100",
      description: "Tai nghe magaming",
      detail: `
      Tai nghe nhẹ, thoáng khí này chỉ nặng 185 gram và đủ thoải mái để đeo cả ngày, với đệm tai bằng mút hoạt tính mềm mại và thiết kế có thể điều chỉnh. <br>
      Điều chỉnh âm phụ, mức âm lượng mic và EQ để có trải nghiệm âm thanh ưa thích của bạn bằng ứng dụng Logi Tune trên máy tính để bàn hoặc thiết bị di động`,
      img: "./assets/img/tainghe2.png",
      price: "2090000",
    },
    {
      id: "9",
      type: "keyboard",
      name: "Bàn Phím chơi Game Keyboard Bosston G7 - Hàng Nhập Khẩu",
      price: "77390",
      description: "Keyboard for gamer",
      detail: `Bàn phím nghiêng 8 độ nhằm giảm thiểu tối đa tình trạng mỏi tay khi đánh máy <br>
    Các phím được khắc laser chống bay, kết hợp 8 nút xanh thời trang<br>
    Điều chỉnh độ cao tùy ý theo sở thích riêng của bạn<br>
    Thời gian đáp ứng hơn 10 triệu lần<br>
    Plug and Play<br>
    `,
      img: "./assets/img/01a6abe31c5de71032588632db2e0d69.jpg.webp",
    },
    {
      id: "10",
      type: "mouse",
      name: "Chuột gaming không dây DARE-U RGB",
      description: "Độ trễ thấp, phạm vi hoạt động hiệu quả 10m không vật cản",
      detail: `
      - Cổng kết nối: wireless with 2.4G<br>
      - Khoảng cách sử dụng :Over 10M (No shielding)<br>
      - Pin : 930 mAh<br>
      - Sensor: PAN3512<br>
      - DPI: 800-6400<br>
      - Thời gian sạc: 3h<br>
      - Dây 1.8m<br>
      - Trọng lượng: 100g +/- 10g<br>
      - Kích thước: 125.5*68.6*39.6mm<br>`,
      img: "./assets/img/Chuột gaming không dây DARE-U RGB.webp",
      price: "719000",
    },
    {
      id: "11",
      type: "keyboard",
      name: "Bàn phím cơ gaming mini AK33 cho máy tính",
      description: "Keyboard for gamer",
      detail: `
    - Bàn Phím Cơ mini Ajazz AK33 Gọn gàng , đơn giản và tinh tế <br>
    - Switch 82 Phím chống ồn , gõ êm , nhanh và nhạy hơn<br>
    - Led trắng đơn sắc , hỗ trợ nhiều hiệu ứng , hỗ trợ gõ chính xác trong điều kiện ánh sáng yếu<br>
    - Chip ARM 32 bit cho hiệu ứng led mượt mà<br>
    - Thiết kế Công thái học phù hợp cho tất cả nhu cầu khách hàng , đặc biệt là Gamer E-sports<br>`,
      img: "./assets/img/6bc41690ca3f941a664e1a1524a21977.jpg.webp",
      price: "659000",
    },
    {
      id: "12",
      type: "mouse",
      name: "Chuột không dây DAREU LM115G Multi-Color Dog",
      description: "Độ trễ thấp, phạm vi hoạt động hiệu quả 10m không vật cản",
      detail: `
      - Cổng kết nối: wireless with 2.4G<br>
      - Khoảng cách sử dụng :Over 10M (No shielding)<br>
      - Pin : 930 mAh<br>
      - Sensor: PAN3512<br>
      - DPI: 800-6400<br>
      - Thời gian sạc: 3h<br>
      - Dây 1.8m<br>
      - Trọng lượng: 100g +/- 10g<br>
      - Kích thước: 125.5*68.6*39.6mm<br>`,
      img: "./assets/img/chuot-khong-day-dareu-lm115g-dog-01-768x768.jpg",
      price: "249000",
    },
    {
      id: "13",
      type: "speaker",
      name: "Loa Logitech Z120 (Trắng)",
      description: "none",
      detail: `
      - Thiết Kế: Hệ Thống Loa 2.0<br>
      - Kết Nối: Jack 3.5mm (input) / USB (power)<br>
      - Chức Năng: Volume Control<br>
      - ông Suất: 3W RMS<br>
      `,
      img: "./assets/img/Loa-logitech-z120.png",
      price: "239000",
    },
    {
      id: "14",
      type: "mouse",
      name: "Chuột không dây DAREU LM115G Multi-Color Bear",
      description: "Siêu bền , sạc nhanh",
      detail: `
      - Cổng kết nối: wireless with 2.4G<br>
      - Khoảng cách sử dụng :Over 10M (No shielding)<br>
      - Pin : 930 mAh<br>
      - Sensor: PAN3512<br>
      - DPI: 800-6400<br>
      - Thời gian sạc: 3h<br>
      - Dây 1.8m<br>
      - Trọng lượng: 100g +/- 10g<br>
      - Kích thước: 125.5*68.6*39.6mm<br>`,
      img: "./assets/img/chuot-khong-day-dareu-lm115g-bear-01.jpg",
      price: "249000",
    },
    {
      id: "15",
      type: "headphone",
      name: "Tai Nghe Bluetooth Chụp Tai Lenovo HD200 Gamming 5.1",
      description: "Tai nghe hiphop",
      detail: `Tai nghe chụp tai chống ồn ANC Remax RB-800HB âm thanh sống động, siêu nhẹ, khử ồn. Ưu đãi 10% khi đặt hàng tại iCybernet. <br>
      Tích hợp chống ồn chủ động ANC<br>
      Chụp tai bọc da PU êm ái, ôm khít tai<br>
      Âm thanh sống động: bass mạnh mẽ; âm trong trẻo<br>`,
      img: "./assets/img/tainghe3.jpg",
      price: "2090000",
    },
    {
      id: "16",
      type: "headphone",
      name: "Tai nghe bluetooth chụp tai chống ồn chủ động ANC Remax RB-800HB ",
      description: "Tai nghe magaming",
      detail: `Tai nghe chụp tai chống ồn ANC Remax RB-800HB âm thanh sống động, siêu nhẹ, khử ồn. Ưu đãi 10% khi đặt hàng tại iCybernet. <br>
      Tích hợp chống ồn chủ động ANC<br>
      Chụp tai bọc da PU êm ái, ôm khít tai<br>
      Âm thanh sống động: bass mạnh mẽ; âm trong trẻo<br>`,
      img: "./assets/img/tainghe2.png",
      price: "569000",
    },
    {
      id: "17",
      type: "keyboard",
      name: "Bàn Phím Cơ không dây mini Đa kết nối RF84 White Gaming cho máy tính",
      description: "Keyboard for gamer",
      detail: `
    - Đa Kết nối : Bluetooth 5.0 - USB 2.4G - cáp USB . Có thể tháo rời , thay thế dễ dàng<br>
    - Khoảng cách kết nối không dây lên đến 10m<br>
    - Kết nối cùng lúc lên đến 3 thiết bị , chuyển đổi nhanh thiết bị bằng phím FN+...<br>
    - Pin sạc 3000 mah , cho thời gian sử dụng rất dài , Cổng sạc Type C<br>
    - Bàn Phím có Chế độ tiết kiêm pin thông minh khi không sử dụng trong 2-3 phút<br>`,
      img: "./assets/img/70979306a536cfd53f1ca349577fd719.jpg.webp",
      price: "870000",
    },
    {
      id: "18",
      type: "mouse",
      name: "Chuột gaming Newmen G11 ",
      description: "Bi trọng lực tích hợp giúp chuột định vị chính xác trong game",
      detail: `
      - Cổng kết nối: wireless with 2.4G<br>
      - Khoảng cách sử dụng :Over 10M (No shielding)<br>
      - Pin : 930 mAh<br>
      - Sensor: PAN3512<br>
      - DPI: 800-6400<br>
      - Thời gian sạc: 3h<br>
      - Dây 1.8m<br>
      - Trọng lượng: 100g +/- 10g<br>
      - Kích thước: 125.5*68.6*39.6mm<br>`,
      img: "./assets/img/Chuột gaming Newmen G11.webp",
      price: "179000",
    },
    {
      id: "19",
      type: "keyboard",
      name: "Bàn Phím Cơ Máy Tính XSmart K2 Pro Màu Xanh Led RGB",
      description: "Keyboard for gamer",
      detail: `
    - 4 màu sắc thời trang và trẻ trung, tuyệt đẹp và Charming. 87 phím tiêu chuẩn, ký tự và ánh sáng mát mẻ giữa bảng. <br>
    - Bàn phím cơ sử dụng Blue switch. Cho âm thanh gõ giống như Đoạn Văn hay cảm giác cơ học, loại thân công tắc thoải mái và dễ sử dụng hơn. Âm thanh của nó sắc nét và có nhịp gõ mạnh mẽ. Nó chủ yếu phù hợp để đánh máy trong các trò chơi.<br>
    - Bàn phím nổi sáu hàng thứ tư phù hợp với quỹ đạo chuyển động của ngón tay, gõ phím thoải mái và không dễ bị mỏi.<br>
    - Cắm và chạy, đèn nền năng động và rực rỡ, các nhân vật và tấm giữa phát sáng để giải trí ban đêm, nhiều đèn Charming hơn.<br>
    - Thiết kế chống nước và chống bụi, với nhiều lỗ thoát nước ở phía dưới, có thể đẩy chất lỏng và trà càng sớm càng tốt và chăm sóc bàn phím của bạn.<br>
    `,
      img: "./assets/img/a0869744ebcc1b4b546e12468832f8af.jpg",
      price: "383000",
    },
    {
      id: "20",
      type: "mouse",
      name: "Chuột không dây DAREU LM115G Multi-Color- Panda",
      description: "Siêu nhẹ ,siêu bền",
      detail: `
      - Cổng kết nối: wireless with 2.4G<br>
      - Khoảng cách sử dụng :Over 10M (No shielding)<br>
      - Pin : 930 mAh<br>
      - Sensor: PAN3512<br>
      - DPI: 800-6400<br>
      - Thời gian sạc: 3h<br>
      - Dây 1.8m<br>
      - Trọng lượng: 100g +/- 10g<br>
      - Kích thước: 125.5*68.6*39.6mm<br>`,
      img: "./assets/img/chuot-khong-day-dareu-lm115g-panda-01-768x768.jpg",
      price: "249000",
    },
    {
      id: "21",
      type: "speaker",
      name: "Loa Fenda F380X",
      description: "none",
      detail: `
      - Màn hình LED trắng sáng với góc nhìn tốt<br>
      - Đèn LED đa màu tự động<br>
      - Phạm vi hoạt động của Bluetooth lên đến 15 m<br>
      - Đầu đọc USB hỗ trợ giải mã định dạng kép MP3 / WMA<br>
      - Bộ nhớ FM lên đến 100 đài<br>
      `,
      img: "./assets/img/Loa Fenda F380X.webp",
      price: "1190000",
    },
    {
      id: "22",
      type: "mouse",
      name: "Chuột Gaming DAREU A960 – ULTRALIGHT",
      description: "siêu bền , led RGB",
      detail: `
      - Cổng kết nối: wireless with 2.4G<br>
      - Khoảng cách sử dụng :Over 10M (No shielding)<br>
      - Pin : 930 mAh<br>
      - Sensor: PAN3512<br>
      - DPI: 800-6400<br>
      - Thời gian sạc: 3h<br>
      - Dây 1.8m<br>
      - Trọng lượng: 100g +/- 10g<br>
      - Kích thước: 125.5*68.6*39.6mm<br>`,
      img: "./assets/img/chuot-gaming-sieu-nhe-dareu-a960-black-banner-768x768.jpg",
      price: "750000",
    },
    {
      id: "23",
      type: "headphone",
      name: "Tai nghe chụp tai Bluetooth 5.0 K6131 Macaron Hỗ Trợ Thẻ Nhớ, Dây 3.5mm",
      description: "Tai nghe hiphop",
      detail: `
      Tai nghe Bluetooth K6131 được thiết kế nhỏ gọn, màu sắc trẻ trung cá tính thích hợp cho các bạn trẻ cá tính, năng động<br>
      Phần đệm tai dày và êm ái để bạn có thể nghe nhạc trong thời gian dài mà vẫn cảm thấy dễ chịu. Bên cạnh đó, thiết kế đệm tai còn giúp âm thanh được giữ kín, âm bass thật sâu và trầm, tạo hiệu ứng âm thanh tốt hơn cho bạn
      `,
      img: "./assets/img/tainghe2.png",
      price: "320000",
    },
    {
      id: "24",
      type: "headphone",
      name: "Tai Nghe Chụp Tai Bluetooth Chống Ồn GS-H3",
      description: "Tai nghe magaming",
      detail: `
      Loại sản phẩm: Tai nghe Bluetooth <br>
      Phiên bản Bluetooth: V4.2<br>
      Hỗ trợ chế độ Bluetooth: A2DP 1.2, AVRCP 1.0, HSP, HSF 1.5<br>
      Tần số: 2.402 đến 2.480GHz, dải ISM 2.4G<br>
      Hiệu suất RF: nhận độ nhạy cảm: 84dBm, truyền tải điện lên đến 4dBm<br>
      Phản hồi tần số: 20 Hz đến 20 KHz<br>
      Tỉ số tín hiệu đến tiếng ồn (SNR): 70Db;<br>
      `,
      img: "./assets/img/tainghe2.png",
      price: "215000",
    },
    {
      id: "25",
      type: "keyboard",
      name: "Bàn phím giả cơ FREE WOLF K15 chơi game - hàng nhập khẩu",
      price: "144000",
      description: "Keyboard for gamer",
      detail: `
    Chiếc bàn phím giả cơ FREE WOLF K15 được làm từ vật liệu ABS bền bỉ cùng phím cắt Lazer nên có độ bền cực cao, thêm chế độ bán cơ nên khi gõ phím tạo cảm giác khá "phê" không khác gì trên chiếc bàn phím cơ đắt tiền thông thường. <br>
    Hơn thế nữa trên chiếc bàn phím bán cơ bàn tay được thiết kế một tay với phần bố trí vị trí phù hợp cho sự di chuyển linh hoạt ở các ngón tay nên tạo điều kiện thuận tiện cho bạn chơi thoải mái với các game hot nhất thị trường.<br>
    Hơn thế nữa trên chiếc bàn phím bán cơ FREE WOLF K15 còn trang bị thêm LED background giúp làm nổi bật hệ thống bàn phím khi chơi trong điều kiện thiếu ánh sáng và tốt cho đôi mắt của người chơi trong thời gian lâu dài.<br>
    `,
      img: "./assets/img/622f03e09e1dbaa5b3d96506236f5a84.png.webp",
    },
    {
      id: "26",
      type: "mouse",
      name: "Chuột gaming Logitech G502 HERO",
      description: "Cảm biến: HERO ,độ phân giải: 16000 DPI",
      detail: `
      - Cổng kết nối: wireless with 2.4G<br>
      - Khoảng cách sử dụng :Over 10M (No shielding)<br>
      - Pin : 930 mAh<br>
      - Sensor: PAN3512<br>
      - DPI: 800-6400<br>
      - Thời gian sạc: 3h<br>
      - Dây 1.8m<br>
      - Trọng lượng: 100g +/- 10g<br>
      - Kích thước: 125.5*68.6*39.6mm<br>`,
      img: "./assets/img/Chuột gaming Logitech G502 HERO.webp",
      price: "999000",
    },
    {
      id: "27",
      type: "keyboard",
      name: "Bàn Phím Có Dây ROBOT RK20 Bàn Phím Máy Tính Văn Phòng - Hàng Chính Hãng",
      description: "Keyboard for gamer",
      detail: `
      Loại sản phẩm: Bàn phím có dây văn phòng <br>
      - Kích thước sản phẩm: 445,1 (L) x166 ((W) x26,5 (H) mm<br>
      - Trọng lượng sản phẩm: 498g ± 5%<br>
      - Số phím: 104: phím<br>
      - Giao diện dây: USB<br>
      - Chiều dài dây: 1.5M<br>`,
      img: "./assets/img/622f03e09e1dbaa5b3d96506236f5a84.png.webp",
      price: "179000",
    },
    {
      id: "28",
      type: "mouse",
      name: "Chuột Gaming DAREU EM908 Queen",
      description: "LED RGB, BRAVO sensor",
      detail: `
      - Cổng kết nối: wireless with 2.4G<br>
      - Khoảng cách sử dụng :Over 10M (No shielding)<br>
      - Pin : 930 mAh<br>
      - Sensor: PAN3512<br>
      - DPI: 800-6400<br>
      - Thời gian sạc: 3h<br>
      - Dây 1.8m<br>
      - Trọng lượng: 100g +/- 10g<br>
      - Kích thước: 125.5*68.6*39.6mm<br>`,
      img: "./assets/img/chuot-gaming-dareu-em908-queen-01-768x768.jpg",
      price: "299000",
    },
    {
      id: "29",
      type: "speaker",
      name: "Loa 5.1 Logitech Z906 (Đen)",
      description: "none",
      detail: `
      - Thiết Kế: Hệ Thống Loa 5.1<br>
      - Kết Nối: Jack 3.5mm (headphone) / Jack 3.5mm (input) / RCA (input) / Jack 3.5 (surround input) / Coaxial (input) / Optical (input) / Push Ternminal (output)<br>
      - Chức Năng: Volume Control / Bass Control / 2.1 Mode / 4.1 Mode / 3D Mode / DTS Interative / Dolby Digital / THX / Loa treo tường được<br>
      - Công Suất: 500W RMS
      `,
      img: "./assets/img/Loa LogitechZ906-5.1.webp",
      price: "6400000",
    },
    {
      id: "30",
      type: "mouse",
      name: "Chuột không dây DAREU LM115G Multi-Color Sheep",
      description: "Siêu nhẹ, siêu bền",
      detail: `
      - Cổng kết nối: wireless with 2.4G<br>
      - Khoảng cách sử dụng :Over 10M (No shielding)<br>
      - Pin : 930 mAh<br>
      - Sensor: PAN3512<br>
      - DPI: 800-6400<br>
      - Thời gian sạc: 3h<br>
      - Dây 1.8m<br>
      - Trọng lượng: 100g +/- 10g<br>
      - Kích thước: 125.5*68.6*39.6mm<br>`,
      img: "./assets/img/chuot-may-tinh-khong-day-dareu-lm115g-sheep-pink-01-768x768.jpg",
      price: "249000",
    },
    {
      id: "31",
      type: "headphone",
      name: "Tai nghe chụp tai Bluetooth Gaming Sony INZONE H9 WH-G900N",
      description: "Tai nghe hiphop",
      detail: `
      Sản phẩm chính hãng Sony <br>
      Thiết kế tinh tế, thời trang<br>
      Công nghệ không dây tiên tiến<br>
      Phát hiện mục tiêu chính xác với công nghệ 360 Spatial Sound<br>
      Tinh chỉnh với phần mềm PC INZONE Hub<br>
      Âm thanh đối xứng và sống động<br>
      Vật liệu co giãn với khả năng cách âm và thoải mái<br>
      Công nghệ cảm biến tiếng ồn kép chống ồn hiệu quả<br>
      Thời gian sử dụng lên đến 32 giờ<br>
      Sản phẩm bao gồm: Tai nghe, cáp sạc, sách hướng dẫn,<br>
      `,
      img: "./assets/img/tainghe4.jpg",
      price: "6199000",
    },
    {
      id: "32",
      type: "headphone",
      name: "Tai Nghe Có Dây Nhét Tai Sennheiser IE 80 S ",
      description: "Tai nghe magaming",
      detail: `Tai Nghe Có Dây Nhét Tai Sennheiser IE 80 S - Hàng Chính Hãng ấn tượng với thiết kế thẩm mĩ và và tính năng chuyên nghiệp ở 1 đẳng cấp mới. Tinh tế về mọi góc độ, tai nghe Sennheiser IE 80S có âm thanh trung thực tuyệt vời, độ chi tiết cao và chính xác vượt trội.`,
      img: "./assets/img/tainghe5.jpg",
      price: "12990000",
    },
    {
      id: "33",
      type: "keyboard",
      name: "Bàn phím số không dây Mini Number Keyboard AZONE",
      description: "Keyboard for gamer",
      detail: `
    TÍNH NĂNG BÀN PHÍM SỐ MINI NUMBER KEYBOARD <br>
    - Cắm và sử dụng, không cần cài đặt driver.<br>
    - Bàn phím số không dây sử dụng kết nối 2.4G mạnh mẽ và ổn định.<br>
    - Sử dụng pin AAA 1.5V thông dụng.<br>
    - Tương thích với Windows/Linux/Mac.<br>
    `,

    img: "./assets/img/9a2a107f5df45b97a9145d9ffcfe062a.jpg.webp",
    price: "101999",
  },
  {
    id: '34',
    type: 'Laptop',
    name: "Laptop Gaming GIGABYTE G5 GD-51VN123SO i5-11400H/16GB/512GB/RTX3050/15.6",
    description: 'Laptop Gaming',
    detail: `
    Tốc độ CPU: Intel Core i3-1125G4 (4C / 8T, 2.0 / 3.7GHz, 8MB) <br>

    Dung lượng ổ cứng: 256GB PCIe NVMe M.2 SSD<br>

    Bộ nhớ RAM: 4GB DDR4<br>

    pin : 3 Cell<br>

    Màn hình: 14" FHD<br>

    Card màn hình: Intel UHD Graphics<br>

    Hệ điều hành: Windows 11 Home<br>

    Tính năng khác: Wireless, Bluetooth, Webcam, HDMI<br>
    `,
    img: './assets/img/laptop1.png',
    price: '18490000'
  },
  {
    id: '35',
    type: 'Laptop',
    name: 'Laptop HP Envy 16-h0033TX 6K7F9PA-i9-12900H/16GB/512GB/RTX3060/16.0120Hz',
    description: 'Laptop Gaming',
    detail: `
    RAM chuẩn DDR4 2 khe với tốc độ Bus RAM lên đến 3200 MHz cho khả năng đa nhiệm mượt mà nhiều tác vụ cùng lúc, vừa học tập, làm việc trên phần mềm Office 365 vừa lướt web và nghe nhạc giải trí mà không lo giật lag máy.<br>
    Dung lượng SSD M2 NVMe PCIe cung cấp không gian lưu trữ đáp ứng tốt cho nhu cầu của bạn, đồng thời tăng tốc độ khởi động máy, truy xuất dữ liệu nhanh hơn, giảm thời gian phản hồi.`,
    img: './assets/img/laptop2.png',
    price: '56890000'
  },
  {
    id: "36",
    type: "headphone",
    name: "Tai nghe chụp tai bluetooth chống ồn GS-H3 cao cấp",
    description: "Tai nghe hiphop",
    detail: `
    Tai nghe Sony WH-1000XM4 chính hãng <br>
    Mới đây, Sony vừa công bố thế hệ thứ 4 của dòng tai nghe chụp đầu chống ồn cao cấp: WH1000XM4. Sony WH-1000XM4 có thiết kế tương tự như người đàn anh của mình, và cũng được trang bị bộ xử lý chống ồn QN1, thứ giúp cho Sony WH-1000XM3 trở thành một trong những tai nghe không dây tốt nhất trong phân khúc chống ồn chủ động.
    `,
    img: "./assets/img/tainghe1.jpg",
    price: "239000",
  },
  {
    id: '37',
    type: 'Laptop',
    name: 'Laptop HP Envy 16-h0034TX 6K7G0PA-i7-12700H/16GB/512GB/RTX 3060 6GB/16 Inch',
    description: 'Laptop văn phòng',
    detail: `Tấm nền IPS mang đến góc nhìn rộng mở lên đến 178 độ, đảm bảo chất lượng hình ảnh luôn được giữ nguyên hình dạng ban đầu, không bị bóp méo dù nhìn từ hướng nghiêng, đồng thời cho tác dụng chống lóa, chống bóng gương, bảo vệ mắt khi sử dụng ở nơi ánh sáng cao nhờ công nghệ chống chói Anti Glare.`,
    img: './assets/img/laptop3.png',    
    price: '47890000'
  },
  {
    id: '38',
    type: 'Laptop',
    name: 'Laptop Lenovo Legion 5 15ACH6 - 82JW00JPVN- R5 5600H/8GB/256GB/GTX1650',
    description: 'Laptop văn phòng',
    detail: `Được thiết kế dành cho doanh nghiệp, khiến đây là lựa chọn thông minh cho các startup tham vọng, những tổ chức giáo dục uy tín và các công ty đang phát triển ở mọi quy mô. Sản phẩm tự hào với hiệu suất cao, độ bền đạt chuẩn quân đội và các tùy chọn mở rộng giúp tăng cường trang bị cho doanh nghiệp bạn. Ngoài ra, sản phẩm này còn có thể tự tin xử lý mọi tác vụ công việc với đầy đủ các cổng I/O, WiFi 6 tốc độ cao và công nghệ khử tiếng ồn AI. ExpertBook B1400 rút gọn quy trình làm việc giúp bạn luôn duy trì năng suất.`,
    img: './assets/img/laptop5.png',    
    price: '20490000'
  },
  {
    id: "39",
    type: "headphone",
    name: "Tai nghe Blutooth Mèo Cao Cấp headphone Hoco W27",
    description: "Tai nghe hiphop",
    detail: `Tai nghe chụp tai chống ồn ANC Remax RB-800HB âm thanh sống động, siêu nhẹ, khử ồn. Ưu đãi 10% khi đặt hàng tại iCybernet. <br>
    Tích hợp chống ồn chủ động ANC<br>
    Chụp tai bọc da PU êm ái, ôm khít tai<br>
    Âm thanh sống động: bass mạnh mẽ; âm trong trẻo<br>`,
    img: "./assets/img/tainghe3.jpg",
    price: "1220000",
  },
  {
    id: '40',
    type: 'Laptop',
    name: 'Laptop Gaming Lenovo Legion 5 15ARH7- 82RE0035VN- R7 6800H/8GB/512GB',
    description: 'Laptop sexy',
    detail: `Là phiên bản nâng cấp của T440s với thiết kế vẫn rất sexy, mỏng nhẹ, hoàn thiện cao cấp, bền bỉ và cấu hình được nâng cấp. Điểm nhấn của T450s là chất liệu chế tạo bằng carbon và magnesium, nhẹ nhưng rất chắc chắn, màn hình có độ tương phản cao và bàn phím cho cảm giác gõ rất tốt.`,
    img: './assets/img/laptop2.png',    
    price: '29490000'
  },
  {
    id: '41',
    type: 'Laptop',
    name: 'Laptop ASUS TUF Gaming A15 FA507RC-HN051W,R7-6800H/8GB/512GB/15.6FHD144Hz/',
    description: 'Laptop hiphop',
    detail: 'được thiết kế đơn giản, sang trọng với  vỏ ngoài được phủ sơn màu đen và các cạnh bên được vát mỏng, các đường nét góc cạnh được bo tròn gọn gàng, mặt lưng trơn in nổi logo Dell. Ngoài tính thẩm mĩ, Dell cũng đảm bảo độ bền bỉ, chắc chắn và tính di động để có thể đồng hành với bạn trong mọi hành trình lâu dài. Khung máy chắc chắn, bền bỉ giúp bảo vệ linh kiện tối đa trước tác động bên ngoài.',
    img: './assets/img/laptop4.png',    
    price: '22990000'
  },
  {
    id: '42',
    type: 'Laptop',
    name: 'Laptop Gaming Acer Nitro 5 Eagle AN515-57-54MV (i5-11400H/8GB/512GB PCIE)',
    description: 'Laptop gaming',
    detail: `Laptop HP 14s-cf2527TU 4K4A1PA mang tới cho người dùng một hiệu năng ổn định nhờ được trang bị dòng CPU Core i thế hệ 10 giúp chạy mượt mà các ứng dụng office hoặc lướt web nhanh chóng, cho trải nghiệm xem phim, nghe nhạc tốt…<br>

    Máy có nhiều tùy chọn RAM khác nhau và có khả năng nâng cấp dễ dàng giúp đa nhiệm mượt mà. Bên cạnh đó ổ cứng SSD đáp ứng đủ các nhu cầu lưu trữ tài liệu đồng thời đảm bảo tốc độ khởi động và truy xuất dữ liệu mà không hệ giật, lag hay là đứng màn hình.<br>`,
    img: './assets/img/laptop1.png',    
    price: '21690000'
  },
  {
    id: "43",
    type: "headphone",
    name: "Tai nghe bluetooth chụp tai dáng đẹp nghe hay CDHPBT01",
    description: "Tai nghe magaming",
    detail: `- Thiết kế nổi bật, phong cách và sang trọng, tai nghe chụp tai Bluetooth gây ấn tượng với lớp vỏ ngoài độc đáo và thời trang. Tai nghe được phủ một lớp màu matte khiến cho các đường nét càng trở nên sắc sảo, cá tính. <br>
    - Cũng như hầu hết các loại tai nghe hiện nay, tai nghe chụp tai Bluetooth P47 cũng bao gồm các nút tùy chỉnh phố biến như: Nút nguồn, nút chỉnh âm lượng, nút chuyển bài hát và nhận cuộc gọi (khi có kết nối Bluetooth với điện thoại). Nhờ vậy bạn có thể sử dụng tai nghe một cách thoải mái với giao diện thân thiện.  <br>
    - Tai nghe kết nối không dây với các thiết bị Bluetooth, nghe đài FM với âm thanh radio high-quality stereo. - Sạc thông qua USB, pin sạc, thuận tiện và thiết thực.  <br>
    - Thời gian Playing lên đến 6 giờ, và tiếp tục thời gian thoại lên đến 5-6 giờ, thời gian chờ lên đến 150 giờ.`,
    img: "./assets/img/tainghe5.jpg",
    price: "99000",
  },
  {
    id: '44',
    type: 'Laptop',
    name: 'Laptop ASUS TUF Gaming FX506HM-HN366W, i7-11800H/8GB/512GB/RTX3060/15.6FHD1',
    description: 'Laptop cho văn phòng',
    detail: 'Laptop HP 14S-CF2527TU 4K4A1PA được thiết kế khá mềm mại và tinh tế nhờ các đường bo viền. Lớp vỏ nhựa màu sắc trang nhã, trọng lượng nhẹ, độ mỏng tối ưu sẽ mang tới khả năng di động vô cùng ấn tượng.',
    img: './assets/img/laptop3.png',    
    price: '27890000'
  },
  {
    id: '45',
    type: 'Laptop',
    name: 'Macbook Pro M2 13" 2022 - 256GB - Chính hãng Apple Việt Nam ',
    description: 'Laptop văn phòng',
    detail: `
    Chip Apple M1 mang đến một bước đột phá về hiệu năng máy học, CPU và GPU <br>
    CPU 8 lõi cho hiệu năng nhanh hơn đến 3.5x, xử lý công việc nhanh chóng hơn bao giờ hết(2)<br>
    GPU lên đến 8 lõi cho hiệu năng nhanh hơn đến 5x cho các ứng dụng đòi hỏi cao về đồ hoạ(2)<br>
    `,
    img: './assets/img/laptop3.png',    
    price: '30490000'
  },
  {
    id: '46',
    type: 'Laptop',
    name: 'Macbook Pro M2 13" 2022 - 16GB/256GB - Chính hãng Apple Việt Nam',
    description: 'Macbook cho dân quẩy',
    detail: `
    Neural Engine 16 lõi cho công nghệ máy học hiện đại <br>
    Tăng thời gian sử dụng với thời lượng pin lên đến 18 giờ(1)<br>
    Bộ nhớ thống nhất 8GB hoặc 16GB giúp bạn làm việc gì cũng nhanh chóng và trôi chảy<br>
    Màn hình Retina 13.3 inch với dải màu rộng P3 cho hình ảnh sống động và chi tiết ấn tượng(3)<br>
    `,
    img: './assets/img/laptop5.png',    
    price: '36990000'
  },
  {
    id: '47',
    type: 'Laptop',
    name: 'Laptop Gaming Asus Rog Strix G15 G513RC HN038W - R7-6800H/8GB/512GB',
    description: 'none',
    detail: `
    Cho phép bạn kết nối, chia sẻ và sáng tạo hơn bao giờ hết, sử dụng các Phím Tắt để làm bài nhanh hơn và chọn chế độ Tập Trung để tránh bị sao nhãng <br>
    Ổ lưu trữ SSD siêu nhanh giúp mở các ứng dụng và tập tin chỉ trong tích tắc<br>
    Thiết kế không quạt giảm tối đa tiếng ồn khi sử dụng<br>
    Camera FaceTime HD với bộ xử lý tín hiệu hình ảnh tiên tiến cho các cuộc gọi video đẹp hình, rõ tiếng hơn<br>
    `,
    img: './assets/img/laptop2.png',    
    price: '24490000'
  },
  {
    id: "48",
    type: "headphone",
    name: "Tai Nghe Chụp Tai Bluetooth Chống Ồn GS-H3",
    description: "Tai nghe magaming",
    detail: `
    Loại sản phẩm: Tai nghe Bluetooth <br>
    Phiên bản Bluetooth: V4.2<br>
    Hỗ trợ chế độ Bluetooth: A2DP 1.2, AVRCP 1.0, HSP, HSF 1.5<br>
    Tần số: 2.402 đến 2.480GHz, dải ISM 2.4G<br>
    Hiệu suất RF: nhận độ nhạy cảm: 84dBm, truyền tải điện lên đến 4dBm<br>
    Phản hồi tần số: 20 Hz đến 20 KHz<br>
    Tỉ số tín hiệu đến tiếng ồn (SNR): 70Db;<br>
    `,
    img: "./assets/img/tainghe2.png",
    price: "515000",
  },
  {
    id: '49',
    type: 'Laptop',
    name: 'Laptop HP Gaming VICTUS 16 - e0168AX - 4R0U6PA  (R7-5800H/8GD4/512GB SSD',
    description: 'Laptop văn phòng',
    detail: 'Xuất hiện liên tục với các laptop siêu mỏng nhẹ với chứng chỉ Evo của Intel, Tiger Lake 11 sử dụng tiến trình mới với SuperFin 10nm. Với nâng cấp này thì các máy thuộc dòng Dell Latitude nói chung và 3520 nói riêng sẽ mang lại tốc độ xung nhịp cao hơn, hiệu suất tăng 20% so với chính thế hệ tiền nhiệm (Ice Lake) cùng khả năng hỗ trợ đồ họa tăng gấp đôi so với Iris Xe.',
    img: './assets/img/laptop5.png',    
    price: '21890000'
  },
  {
    id: '50',
    type: 'Laptop',
    name: 'Laptop HP VICTUS 16-d0294TX- 5Z9R5PA - i5-11400H/8GB/512GB/ RTX 3050Ti 4GB',
    description: 'Laptop văn phòng',
    detail: `
    Máy sở hữu màn hình 11,6 inch với độ phân giải HD mang lại khả năng hiển thị sắc nét và trung thực. Màn hình này được thiết kế với viền siêu mỏng ở hai cạnh bên giúp góc nhìn được mở rộng hơn.<br>
    Chiếc laptop được thiết kế bàn phím rộng rãi với hành trình phím nông, độ đàn hồi cao cho cảm giác gõ vô cùng thoải mái. Touchpad được thiết kế khá rộng với bề mặt phủ nhám mịn, dễ di chuyển.<br>
    `,
    img: './assets/img/laptop3.png',    
    price: '18990000'
  },
  {
    id: '51',
    type: 'Laptop',
    name: 'Laptop Acer Gaming Aspire 7 A715-43G-R8GA (R5-5625U/8GB/512GB/15.6FHD144HZ',
    description: 'Laptop Gaming',
    detail: 'Laptop Acer TravelMate B3 TMB311-31-C2HB cho hiệu năng hoạt động ổn định với con chip Intel Celeron C-N4020 cùng dung lượng RAM 4GB. Với cấu hình này, máy có thể hoạt động tốt ở các tác vụ văn phòng như word, excel point power, hay chỉnh thao tác sửa hình ảnh đơn giản với Photoshop.',
    img: './assets/img/laptop4.png',    
    price: '19390000'
  },
  {
    id: "52",
    type: "headphone",
    name: "Tai nghe bluetooth chụp tai pangpai p800 / P88 version 4.2",
    description: "Tai nghe magaming",
    detail: `
    Tai nghe nhẹ, thoáng khí này chỉ nặng 185 gram và đủ thoải mái để đeo cả ngày, với đệm tai bằng mút hoạt tính mềm mại và thiết kế có thể điều chỉnh. <br>
    Điều chỉnh âm phụ, mức âm lượng mic và EQ để có trải nghiệm âm thanh ưa thích của bạn bằng ứng dụng Logi Tune trên máy tính để bàn hoặc thiết bị di động`,
    img: "./assets/img/tainghe2.png",
    price: "159000",
  },
  {
    id: '53',
    type: 'Laptop',
    name: 'Laptop MSi Gaming GF63 11UC 443VN - Chính hãng - I5-11400H/8GB/512GB PCIE',
    description: 'Laptop gaming',
    detail: 'Bộ vi xử lý CPU Intel Core i5-1135G7 (upto 4.20 GHz, 8MB) cung cấp nhiều lợi ích đa phương tiện để bạn giải trí và làm việc cả ngày. Cùng với bộ nhớ DDR4 có dung lượng 8GB, bạn có thể dễ dàng thực hiện đa nhiệm và chuyển đổi giữa các ứng dụng đang mở. Ổ cứng SSD 512GB SSD PCIe NVMe cung cấp hiệu suất nhanh hơn và yên tĩnh hơn. Ngoài ra, bằng việc trang bị card đồ họa  Intel Iris Xe Graphics giúp bạn dễ dàng thực hiện các công việc đồ họa hoặc chơi các tựa game yêu thích.',
    img: './assets/img/laptop1.png',    
    price: '21790000'
  },
{
    id: '54',
    type: 'speaker',
    name: 'Loa Soundmax A140 (2.0)',
    description: 'none',
    detail: `
    - Thiết kế nhỏ gọn với hai loa nhỏ hình hộp chữ nhật<br>
    - Nút điều chỉnh âm lượng thiết kế ngay trước mặt điều chỉnh nhanh chóng<br>  
    - Công suất 10W , âm thanh mạnh mẽ, trong trẻo đủ thỏa mãn nhu cầu giải trí
    `,
    img: './assets/img/Loa SoundmaxA104.webp',
    price: '350000'
  },
  {
    id: '55',
    type: 'speaker',
    name: 'Loa Thanh Soundbar LG SNH5 ',
    description: 'none',
    detail: `
    - Trải nghiệm đắm chìm trong âm thanh siêu thực<br>
    - DTS Virtual:X - Cảm nhận sự khác biệt với âm thanh 3D ngập tràn<br>
    - Trải nghiệm căn phòng ngập tràn âm thanh như trong rạp<br>
    - LG ThinQ - TV và Loa thanh trở thành trung tâm điều khiển của bạn<br>
    - AI Sound Pro - Âm thanh phù hợp với nội dung bạn xem
    `,
    img: './assets/img/Loa Thanh Soundbar LG SNH5.webp',
    price: '3850000'
  },
  {
    id: '56',
    type: 'speaker',
    name: 'Loa Bluetooth Microtek X-216BT (2.1)',
    description: 'none',
    detail: `
    - Trang bị hệ thống loa Portable 2.1<br>
    - Nguồn : 220V - 50Hz<br>
    - Tỷ số nén nhiễu : > 65dB<br>
    - Điều chỉnh âm lượng : Volume tổng , treble, bass và Remote điều khiển

    `,
    img: './assets/img/Loa Bluetooth Microtek X-216BT.webp',
    price: '1999000'
  },
  {
    id: '57',
    type: 'speaker',
    name: 'Loa 2.1 Bose Companion 2 Series III (Đen)',
    description: 'none',
    detail: `
    - Thiết Kế: Hệ Thống Loa 2.0<br>
    - Kết Nối: Jack 3.5mm (headphone) / Jack 3.5mm (input)<br>
    - Chức Năng: Volume Control<br>
    - Công Suất: 22W RMS
    `,
    img: './assets/img/Loa 2.1 Bose Companion 2 Series III (Đen).webp',
    price: '3690000'
  },
  {
    id: '58',
    type: 'speaker',
    name: 'Loa Soundbar Samsung HW-S800B/XV',
    description: 'none',
    detail: `
    - Thiết kế thanh mảnh<br>
    - Âm thanh vòm Dolby Audio / DTS Virtual:X<br>
    -	Âm Thanh Vòm Chuẩn 3.1.2 kênh<br>
    `,
    img: './assets/img/Loa Soundbar Samsung HW-S800BXV.webp',
    price: '14490000'
  },
  {
    id: '59',
    type: 'speaker',
    name: 'Loa Bluetooth JBL Bar 5.1 Surround BAR51IMBLKAS (Đen)',
    description: 'none',
    detail: `
    - Thiết kế dạng thanh vuông dài, mang trên mình đến 9 loa con tạo hiệu ứng Stereo<br>
    - Phía trên là dải nút điều khiển, phía trước là màn hình LED hiển thị<br>
    - Hai loa vòm không dây chạy bằng pin có thể tháo rời<br>
    - Thời gian chơi 10 giờ, tổng công suất hệ thống 510W<br>
    - Được lập trình để có thể điều khiển mọi thứ bằng điều khiển TV từ xa<br>
    `,
    img: './assets/img/Loa Bluetooth JBL Bar 5.1 Surround BAR51IMBLKAS (Đen).jpg',
    price: '14900000'
  },
  {
    id: '60',
    type: 'speaker',
    name: 'Loa Soundbar Samsung HW-B550/XV',
    description: 'none',
    detail: `
    -	Loa siêu trầm tích hợp<br>
    -	Chế độ tăng cường âm trầm Bass Boost<br>
    -	Tự động tối ưu âm thanh với nội dung bằng AI<br>
    `,
    img: './assets/img/Loa Soundbar Samsung HW-B550XV.webp',
    price: '5790000'
  },
  {
    id: '61',
    type: 'speaker',
    name: 'Loa Máy Tính Bluetooth Z407 ',
    description: 'none',
    detail: `
    - Nguồn điện 80 watt tham gia vào quá trình xử lý tín hiệu kỹ thuật số chính xác (DSP) để đem lại âm thanh đắm chìm, chân thực.<br> 
    - Nghe các nốt cao rõ ràng, các âm trung và thấp mạnh mẽ cùng tất cả âm trầm bạn có thể xử lý.<br>
    `,
    img: './assets/img/Loa Logitech Z407.jpg',
    price: '2310000 '
  },
  {
    id: '62',
    type: 'speaker',
    name: 'G560 LIGHTSYNC RGB ',
    description: 'none',
    detail: `
    - Hệ thống loa 2.1 với LIGHTSYNC RGB toàn dải phản ứng với hành động và âm thanh trong trò chơi. <br>
    - Âm thanh vòm định hướng DTS:X đem lại âm thanh bùng nổ cho loa siêu trầm hướng xuống và hai loa vệ tinh với các màng loa góc rộng.<br>
    `,
    img: './assets/img/Loa g560-gallery-1.webp',
    price: '5499000'
  },
  {
    id: '63',
    type: 'speaker',
    name: 'Loa Microlab M-108 ',
    description: 'none',
    detail: `
    -	Thiết kế thân thiện và gọn gàng, tinh tế<br>
    -	Công suất loa 11W cho âm thanh lớn và rõ ràng<br>
    -	Jack kết nối 3.5mm thông dụng với nhiều thiết bị<br>
    -	Tùy chỉnh âm thanh dễ dàng với nút điều chỉnh âm lượng<br>
    -	Loa có chân đế chống rung và chống trượt<br> 
    -	Đem đến trải nghiệm nghe nhạc xem phim cực chất<br>

    `,
    img: './assets/img/Loa Microlab M-108.jpg',
    price: '535000'
  },
  {
    id: '64',
    type: 'speaker',
    name: 'Loa Microlab B56 (2.0)(Đen)',
    description: 'none',
    detail: `
    - Thiết kế thời trang, ấn tượng<br> 
    - Chất lượng âm thanh chất lượng<br> 
    - Kích thước nhỏ gọn, kết nối đơn giản  
    `,
    img: './assets/img/Microlab B56 (2.0).webp',
    price: '310000'
  },
  {
    id: '65',
    type: 'speaker',
    name: 'Loa Microlab M106BT 2.1(Đen)',
    description: 'none',
    detail: `
    - Thiết Kế: Hệ Thống Loa 2.1<br>
    - Kết Nối: Jack 3.5mm (input) / RCA (output) / Bluetooth (audio)<br>
    - Chức Năng: Volume Control / Bass Control<br>
    - Công Suất: 10W RMS
 
    `,
    img: './assets/img/Loa bluetooth 2.1 Microlab M106BT.webp',
    price: '600000'
  },
  {
    id: '66',
    type: 'mouse',
    name: 'Chuột không dây Gaming DAREU EM901X RGB Pink',
    description: 'SUPERLIGHT, FAST CHARING DOCK',
    detail: `
    - RGB FAST CHARGING DOCK</br>
    - SUPERLIGHT: 86g</br>
    - Sensor: BRAVO (ATG4090)</br>
    - DPI: 800-6000</br>
    - Tracking: 150IPS</br>
    - Polling rate: 1000Hz</br>
    - Dung lượng PIN: 930 mAh</br>
    - Thời gian sử dụng: 30h | 18h LED RGB</br>
    - Thời gian sạc: 3h</br>
    - Switch: DareU (10 triệu lần click)</br>
    - Kích thước: 125.5*68.6*39.6mm</br>
    - Trọng lượng: 86g</br>
    - WIRELESS – 2.4G</br>
    - Lưu ý:  Cổng USB </br>
    `, 
    img: './assets/img/chuot-khong-day-gaming-dareu-em901x-pink-01.jpg',
    price: '715000'
  },
  {
    id: '67',
    type: 'mouse',
    name: 'Chuột không dây Gaming DAREU A950 TRIPLE MODE',
    description: 'Siêu nhẹ, sạc nhanh',
    detail: `
      - TRIPLE MODE: Type-C – Bluetooth 5.1 – 2.4G<br>
      - RGB FAST CHARGING DOCK<br>
      - SUPERLIGHT: 88g     <br>
      - Sensor: DAREU AIM-WL<br>
      - DPI: 400-12.000<br>
      - Tracking: 300IPS<br>
      - Polling rate: 1000Hz<br>
      - Thời gian sử dụng: 12-30 ngày<br>
      - Switch: DareU<br>
      - Kích thước: 123*64*39mm<br>
      - Trọng lượng: 88g<br>
    `, 
    img: './assets/img/chuot-khong-day-gaming-dareu-a950-triple-mode-sieu-nhe-01-768x768.jpg',
    price: '969000'
  },
  {
    id: '68',
    type: 'mouse',
    name: 'Chuột không dây DAREU LM115G WHITE',
    description: 'Siêu nhẹ, sạc nhanh',
    detail: `
      - Cổng kết nối: wireless with 2.4G<br>
      - Khoảng cách sử dụng :Over 10M (No shielding)<br>
      - Pin : 6mA<br>
      - Sensor: PAN3212<br>
      - DPI: 800/1200(Default)/1600<br>
      - IPS: 30<br>
      - Acceleration: 10G<br>
      - Backlight: No<br>
      - Button: 6<br>
      - Trọng lượng: 70±5g<br>
      - Kích thước: 59*107*38mm<br>
    `, 
    img: './assets/img/chuot-khong-day-lm115h-white-01-768x768.png',
    price: '125000'
  },
  {
    id: '69',
    type: 'mouse',
    name: 'Chuột không dây DAREU LM115G Multi-Color Monkey',
    description: 'Siêu nhẹ, sạc nhanh',
    detail: `
      - Cổng kết nối: wireless with 2.4G<br>
      - Khoảng cách sử dụng :Over 10M (No shielding)<br>
      - Pin : 6mA<br>
      - Sensor: PAN3212<br>
      - DPI: 800/1200(Default)/1600<br>
      - IPS: 30<br>
      - Acceleration: 10G<br>
      - Backlight: No<br>
      - Button: 6<br>
      - Trọng lượng: 70±5g<br>
      - Kích thước: 59*107*38mm<br>
    `, 
    img: './assets/img/chuot-khong-day-dareu-lm115g-monkey-01-768x768.jpg',
    price: '249000'
  },
  {
    id: '70',
    type: 'mouse',
    name: 'Chuột DAREU LM130s (RGB, USB)',
    description: 'Siêu bền , có đèn led',
    detail: `
      - Cổng kết nối: wireless with 2.4G<br>
      - Khoảng cách sử dụng :Over 10M (No shielding)<br>
      - Pin : 6mA<br>
      - Sensor: PAN3512<br>
      - DPI: 1000<br>
      - IPS: 30<br>
      - Acceleration: 10G<br>
      - Dây 1.8m<br>
      - Trọng lượng:  100g +/- 10g<br>
      - Kích thước: 118*61*38.4mm<br>
    `, 
    img: './assets/img/chuot-dareu-led-rgb-lm130s-01-768x768.png',
    price: '119000'
  },
  {
    id: '71',
    type: 'mouse',
    name: 'Chuột không dây DAREU LM118B',
    description: 'Siêu bền , Dual Mode: Bluetooth + 2.4G',
    detail: `
      - Cổng kết nối: wireless with 2.4G<br>
      - Khoảng cách sử dụng :Over 10M (No shielding)<br>
      - Pin : 6mA<br>
      - Sensor: PAN3512<br>
      - DPI:  800-1200-1600<br>
      - Acceleration: 10G<br>
      - Dây 1.8m<br>
      - Trọng lượng: 90g +/- 10g<br>
      - Kích thước: 107.5*59.15*38.29mm<br>
    `, 
    img: './assets/img/chuot-khong-day-dareu-lm118b-black-01-768x768.jpg',
    price: '249000'
  },
  {
    id: '72',
    type: 'mouse',
    name: 'Chuột không dây Gaming DAREU EM905 PRO PINK',
    description: 'Siêu bền , LED RGB',
    detail: `
      - Cổng kết nối: wireless with 2.4G<br>
      - Khoảng cách sử dụng :Over 10M (No shielding)<br>
      - Pin : 930 mAh<br>
      - Sensor: PAN3512<br>
      - DPI: 800-6400<br>
      - Thời gian sạc: 3h<br>
      - Dây 1.8m<br>
      - Trọng lượng: 100g +/- 10g<br>
      - Kích thước: 125.5*68.6*39.6mm<br>
    `, 
    img: './assets/img/chuot-khong-day-gaming-dareu-em905-pink-01-768x768.jpg',
    price: '649000'
  },

  {
    id: '73',
    type: 'mouse',
    name: 'Chuột không dây DAREU LM115G Multi-Color Cat',
    description: 'Siêu bền , LED RGB',
    detail: `
      - Cổng kết nối: wireless with 2.4G<br>
      - Khoảng cách sử dụng :Over 10M (No shielding)<br>
      - Pin : 930 mAh<br>
      - Sensor: PAN3512<br>
      - DPI: 800-6400<br>
      - Thời gian sạc: 3h<br>
      - Dây 1.8m<br>
      - Trọng lượng: 100g +/- 10g<br>
      - Kích thước: 125.5*68.6*39.6mm<br>
    `, 
    img: './assets/img/chuot-khong-day-dareu-lm115g-cat-01-768x768.jpg',
    price: '249000'
  },

  {
    id: '74',
    type: 'mouse',
    name: 'Chuột Gaming DAREU EM908 White',
    description: 'Siêu bền , LED RGB',
    detail: `
      - Cổng kết nối: wireless with 2.4G<br>
      - Khoảng cách sử dụng :Over 10M (No shielding)<br>
      - Pin : 930 mAh<br>
      - Sensor: PAN3512<br>
      - DPI: 800-6400<br>
      - Thời gian sạc: 3h<br>
      - Dây 1.8m<br>
      - Trọng lượng: 100g +/- 10g<br>
      - Kích thước: 40*122*67mm<br>
    `, 
    img: './assets/img/13552-768x768.png',
    price: '299000'
  },
  {
    id: '75',
    type: 'mouse',
    name: 'Chuột không dây DAREU LM115G Multi-Color Lion',
    description: 'Siêu bền , LED RGB',
    detail: `
      - Cổng kết nối: wireless with 2.4G<br>
      - Khoảng cách sử dụng :Over 10M (No shielding)<br>
      - Pin : 930 mAh<br>
      - Sensor: PAN3512<br>
      - DPI: 800-6400<br>
      - Thời gian sạc: 3h<br>
      - Dây 1.8m<br>
      - Trọng lượng: 100g +/- 10g<br>
      - Kích thước: 59*107*38mm<br>
    `, 
    img: './assets/img/chuot-khong-day-dareu-lm115g-lion-01-768x768.jpg',
    price: '249000'
  },
  {
    id: "76",
    type: "keyboard",
    name: "Bàn Phím Có Dây ROBOT RK20 Bàn Phím Máy Tính Văn Phòng - Hàng Chính Hãng",
    description: "Keyboard for gamer",
    detail: `
    Loại sản phẩm: Bàn phím có dây văn phòng <br>
    - Kích thước sản phẩm: 445,1 (L) x166 ((W) x26,5 (H) mm<br>
    - Trọng lượng sản phẩm: 498g ± 5%<br>
    - Số phím: 104: phím<br>
    - Giao diện dây: USB<br>
    - Chiều dài dây: 1.5M<br>`,
    img: "./assets/img/622f03e09e1dbaa5b3d96506236f5a84.png.webp",
    price: "179000",
  },
  {
    id: "77",
    type: "keyboard",
    name: "Bàn Phím Có Dây ROBOT RK20 Bàn Phím Máy Tính Văn Phòng - Hàng Chính Hãng",
    description: "Keyboard for gamer",
    detail: `
    Loại sản phẩm: Bàn phím có dây văn phòng <br>
    - Kích thước sản phẩm: 445,1 (L) x166 ((W) x26,5 (H) mm<br>
    - Trọng lượng sản phẩm: 498g ± 5%<br>
    - Số phím: 104: phím<br>
    - Giao diện dây: USB<br>
    - Chiều dài dây: 1.5M<br>`,
    img: "./assets/img/622f03e09e1dbaa5b3d96506236f5a84.png.webp",
    price: "179000",
  },
  {
    id: "78",
    type: "keyboard",
    name: "Bàn Phím Có Dây ROBOT RK20 Bàn Phím Máy Tính Văn Phòng - Hàng Chính Hãng",
    description: "Keyboard for gamer",
    detail: `
    Loại sản phẩm: Bàn phím có dây văn phòng <br>
    - Kích thước sản phẩm: 445,1 (L) x166 ((W) x26,5 (H) mm<br>
    - Trọng lượng sản phẩm: 498g ± 5%<br>
    - Số phím: 104: phím<br>
    - Giao diện dây: USB<br>
    - Chiều dài dây: 1.5M<br>`,
    img: "./assets/img/622f03e09e1dbaa5b3d96506236f5a84.png.webp",
    price: "179000",
  },
  {
    id: "79",
    type: "keyboard",
    name: "Bàn Phím Có Dây ROBOT RK20 Bàn Phím Máy Tính Văn Phòng - Hàng Chính Hãng",
    description: "Keyboard for gamer",
    detail: `
    Loại sản phẩm: Bàn phím có dây văn phòng <br>
    - Kích thước sản phẩm: 445,1 (L) x166 ((W) x26,5 (H) mm<br>
    - Trọng lượng sản phẩm: 498g ± 5%<br>
    - Số phím: 104: phím<br>
    - Giao diện dây: USB<br>
    - Chiều dài dây: 1.5M<br>`,
    img: "./assets/img/622f03e09e1dbaa5b3d96506236f5a84.png.webp",
    price: "179000",
  },
  ];
  localStorage.setItem("product", JSON.stringify(product));
}
