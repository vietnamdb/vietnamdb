'use strict';

export interface ILicensePlate {
  license: string | number;
  definition: string;
  type: string;
}

export const licensePlates: Array<ILicensePlate> = [
  { license: 11, definition: 'Cao Bằng', type: 'Tỉnh' },
  { license: 12, definition: 'Lạng Sơn', type: 'Tỉnh' },
  { license: 13, definition: 'Bắc Ninh', type: 'Tỉnh' },
  { license: 13, definition: 'Bắc Giang', type: 'Tỉnh' },
  { license: 14, definition: 'Quảng Ninh', type: 'Tỉnh' },
  { license: 15, definition: 'Hải Phòng', type: 'Thành Phố Trực Thuộc Trung Ương' },
  { license: 16, definition: 'Hải Phòng', type: 'Thành Phố Trực Thuộc Trung Ương' },
  { license: 17, definition: 'Thái Bình', type: 'Tỉnh' },
  { license: 18, definition: 'Nam Định', type: 'Tỉnh' },
  { license: 19, definition: 'Phú Thọ', type: 'Tỉnh' },
  { license: 20, definition: 'Thái Nguyên', type: 'Tỉnh' },
  { license: 21, definition: 'Yên Bái', type: 'Tỉnh' },
  { license: 22, definition: 'Tuyên Quang', type: 'Tỉnh' },
  { license: 23, definition: 'Hà Giang', type: 'Tỉnh' },
  { license: 24, definition: 'Lào Cai', type: 'Tỉnh' },
  { license: 25, definition: 'Lai Châu', type: 'Tỉnh' },
  { license: 26, definition: 'Sơn La', type: 'Tỉnh' },
  { license: 27, definition: 'Điện Biên', type: 'Tỉnh' },
  { license: 28, definition: 'Hòa Bình', type: 'Tỉnh' },
  { license: 29, definition: 'Hà Nội', type: 'Thành Phố Trực Thuộc Trung Ương' },
  { license: 30, definition: 'Hà Nội', type: 'Thành Phố Trực Thuộc Trung Ương' },
  { license: 31, definition: 'Hà Nội', type: 'Thành Phố Trực Thuộc Trung Ương' },
  { license: 32, definition: 'Hà Nội', type: 'Thành Phố Trực Thuộc Trung Ương' },
  { license: 34, definition: 'Hải Dương', type: 'Tỉnh' },
  { license: 35, definition: 'Ninh Bình', type: 'Tỉnh' },
  { license: 36, definition: 'Thanh Hoá', type: 'Tỉnh' },
  { license: 37, definition: 'Nghệ An', type: 'Tỉnh' },
  { license: 38, definition: 'Hà Tĩnh', type: 'Tỉnh' },
  { license: 39, definition: 'Đồng Nai', type: 'Tỉnh' },
  { license: 40, definition: 'Hà Nội', type: 'Thành Phố Trực Thuộc Trung Ương' },
  { license: 41, definition: 'Hồ Chí Minh', type: 'Thành Phố Trực Thuộc Trung Ương' },
  { license: 43, definition: 'Đà Nẵng', type: 'Thành Phố Trực Thuộc Trung Ương' },
  { license: 47, definition: 'Đắk Lắk', type: 'Tỉnh' },
  { license: 48, definition: 'Đắk Nông', type: 'Tỉnh' },
  { license: 49, definition: 'Lâm Đồng', type: 'Tỉnh' },
  { license: 50, definition: 'Hồ Chí Minh', type: 'Thành Phố Trực Thuộc Trung Ương' },
  { license: 51, definition: 'Hồ Chí Minh', type: 'Thành Phố Trực Thuộc Trung Ương' },
  { license: 52, definition: 'Hồ Chí Minh', type: 'Thành Phố Trực Thuộc Trung Ương' },
  { license: 53, definition: 'Hồ Chí Minh', type: 'Thành Phố Trực Thuộc Trung Ương' },
  { license: 54, definition: 'Hồ Chí Minh', type: 'Thành Phố Trực Thuộc Trung Ương' },
  { license: 55, definition: 'Hồ Chí Minh', type: 'Thành Phố Trực Thuộc Trung Ương' },
  { license: 56, definition: 'Hồ Chí Minh', type: 'Thành Phố Trực Thuộc Trung Ương' },
  { license: 57, definition: 'Hồ Chí Minh', type: 'Thành Phố Trực Thuộc Trung Ương' },
  { license: 58, definition: 'Hồ Chí Minh', type: 'Thành Phố Trực Thuộc Trung Ương' },
  { license: 59, definition: 'Hồ Chí Minh', type: 'Thành Phố Trực Thuộc Trung Ương' },
  { license: 60, definition: 'Đồng Nai', type: 'Tỉnh' },
  { license: 61, definition: 'Bình Dương', type: 'Tỉnh' },
  { license: 62, definition: 'Long An', type: 'Tỉnh' },
  { license: 63, definition: 'Tiền Giang', type: 'Tỉnh' },
  { license: 64, definition: 'Vĩnh Long', type: 'Tỉnh' },
  { license: 65, definition: 'Cần Thơ', type: 'Thành Phố Trực Thuộc Trung Ương' },
  { license: 66, definition: 'Đồng Tháp', type: 'Tỉnh' },
  { license: 67, definition: 'An Giang', type: 'Tỉnh' },
  { license: 68, definition: 'Kiên Giang', type: 'Tỉnh' },
  { license: 69, definition: 'Cà Mau', type: 'Tỉnh' },
  { license: 70, definition: 'Tây Ninh', type: 'Tỉnh' },
  { license: 71, definition: 'Bến Tre', type: 'Tỉnh' },
  { license: 72, definition: 'Bà Rịa - Vũng Tàu', type: 'Tỉnh' },
  { license: 73, definition: 'Quảng Bình', type: 'Tỉnh' },
  { license: 74, definition: 'Quảng Trị', type: 'Tỉnh' },
  { license: 75, definition: 'Huế', type: 'Tỉnh' },
  { license: 76, definition: 'Quảng Ngãi', type: 'Tỉnh' },
  { license: 77, definition: 'Bình Định', type: 'Tỉnh' },
  { license: 78, definition: 'Phú Yên', type: 'Tỉnh' },
  { license: 79, definition: 'Khánh Hoà', type: 'Tỉnh' },
  { license: 80, definition: 'Chính Phủ', type: 'Đặc biệt' },
  { license: 81, definition: 'Gia Lai', type: 'Tỉnh' },
  { license: 82, definition: 'Kom Tum', type: 'Tỉnh' },
  { license: 83, definition: 'Sóc Trăng', type: 'Tỉnh' },
  { license: 84, definition: 'Trà Vinh', type: 'Tỉnh' },
  { license: 85, definition: 'Ninh Thuận', type: 'Tỉnh' },
  { license: 86, definition: 'Bình Thuận', type: 'Tỉnh' },
  { license: 88, definition: 'Vĩnh Phúc', type: 'Tỉnh' },
  { license: 89, definition: 'Hưng Yên', type: 'Tỉnh' },
  { license: 90, definition: 'Hà Nam', type: 'Tỉnh' },
  { license: 92, definition: 'Quảng Nam', type: 'Tỉnh' },
  { license: 93, definition: 'Bình Phước', type: 'Tỉnh' },
  { license: 94, definition: 'Bạc Liêu', type: 'Tỉnh' },
  { license: 95, definition: 'Hậu Giang', type: 'Tỉnh' },
  { license: 97, definition: 'Bắc Cạn', type: 'Tỉnh' },
  { license: 98, definition: 'Bắc Giang', type: 'Tỉnh' },
  { license: 99, definition: 'Bắc Ninh', type: 'Tỉnh' },
  { license: 'AA', definition: 'Quân đoàn 1 - Binh đoàn Quyết Thắng', type: 'Quân Đoàn' },
  { license: 'AB', definition: 'Quân đoàn 2 - Binh đoàn Hương Giang', type: 'Quân Đoàn' },
  { license: 'AC', definition: 'Quân đoàn 3 - Binh đoàn Tây Nguyên', type: 'Quân Đoàn' },
  { license: 'AD', definition: 'Quân Đoàn 4 - Binh đoàn Cửu Long', type: 'Quân Đoàn' },
  { license: 'AN', definition: 'Binh đoàn 15', type: 'Quân Đoàn' },
  { license: 'AP', definition: 'Lữ đoàn M44', type: 'Quân Đoàn' },
  { license: 'AT', definition: 'Binh đoàn 12 - Tổng công ty Trường Sơn', type: 'Quân Đoàn' },
  { license: 'AV', definition: 'Binh đoàn 11 - Tổng Công Ty Xây Dựng Thành An', type: 'Quân Đoàn' },
  {
    license: 'BBB',
    definition: 'Bộ binh - Binh chủng Tăng thiết giáp',
    type: 'Bộ Tư lệnh, Binh chủng'
  },
  { license: 'BC', definition: 'Binh chủng Công binh', type: 'Bộ Tư lệnh, Binh chủng' },
  { license: 'BH', definition: 'Binh chủng Hóa học', type: 'Bộ Tư lệnh, Binh chủng' },
  { license: 'BK', definition: 'Binh chủng Đặc công', type: 'Bộ Tư lệnh, Binh chủng' },
  { license: 'BL', definition: 'Bộ tư lệnh bảo vệ lăng', type: 'Bộ Tư lệnh, Binh chủng' },
  { license: 'BP', definition: 'Bộ tư lệnh Pháo binh', type: 'Bộ Tư lệnh, Binh chủng' },
  { license: 'BS', definition: 'Lực lượng cảnh sát biển VN', type: 'Bộ Tư lệnh, Binh chủng' },
  { license: 'BT', definition: 'Bộ tư lệnh Thông tin liên lạc', type: 'Bộ Tư lệnh, Binh chủng' },
  { license: 'BV', definition: 'Tổng Công ty Dịch vụ bay', type: 'Bộ Tư lệnh, Binh chủng' },
  { license: 'CA', definition: 'Tổng công ty 36 - Bộ Quốc Phòng', type: 'Tổng cục' },
  { license: 'CB', definition: 'Ngân hàng TMCP Quân Đội - Bộ Quốc Phòng', type: 'Tổng cục' },
  { license: 'CC', definition: 'Tổng công ty xăng dầu quân đội - Bộ Quốc Phòng', type: 'Tổng cục' },
  {
    license: 'CH',
    definition: 'Bộ phận chính trị của Khối văn phòng - Bộ Quốc Phòng',
    type: 'Tổng cục'
  },
  { license: 'CM', definition: 'Tổng công ty Thái Sơn - Bộ Quốc Phòng', type: 'Tổng cục' },
  { license: 'CP', definition: 'Tổng Công Ty 319 - Bộ Quốc Phòng', type: 'Tổng cục' },
  { license: 'CV', definition: 'Tổng công ty xây dựng Lũng Lô - Bộ Quốc Phòng', type: 'Tổng cục' },
  { license: 'DB', definition: 'Tổng công ty Đông Bắc - Bộ Quốc Phòng', type: 'Tổng cục' },
  { license: 'HA', definition: 'Học viện Quốc phòng', type: 'Học viện' },
  { license: 'HB', definition: 'Học viện Lục quân', type: 'Học viện' },
  { license: 'HC', definition: 'Học viện Chính trị quân sự', type: 'Học viện' },
  { license: 'HD', definition: 'Học viện Kỹ thuật Quân sự', type: 'Học viện' },
  { license: 'HE', definition: 'Học viện Hậu cần', type: 'Học viện' },
  { license: 'HH', definition: 'Học viện quân y', type: 'Học viện' },
  { license: 'HN', definition: 'Học viện chính trị Quân sự Bắc Ninh', type: 'Học viện' },
  { license: 'HQ', definition: 'Trường Sỹ quan lục quân II', type: 'Học viện' },
  { license: 'HT', definition: 'Trường Sỹ quan lục quân I', type: 'Học viện' },
  { license: 'KA', definition: 'Quân khu 1', type: 'Quân khu' },
  { license: 'KB', definition: 'Quân khu 2', type: 'Quân khu' },
  { license: 'KC', definition: 'Quân khu 3', type: 'Quân khu' },
  { license: 'KD', definition: 'Quân khu 4', type: 'Quân khu' },
  { license: 'KK', definition: 'Quân khu 9', type: 'Quân khu' },
  { license: 'KN', definition: 'Đặc khu Quảng Ninh', type: 'Quân khu' },
  { license: 'KP', definition: 'Quân khu 7', type: 'Quân khu' },
  { license: 'KT', definition: 'Quân khu Thủ đô', type: 'Quân khu' },
  { license: 'KV', definition: 'Quân khu 5', type: 'Quân khu' },
  {
    license: 'ND',
    definition: 'Tổng công ty Đầu tư Phát triển nhà - Bộ Quốc Phòng',
    type: 'Tổng cục'
  },
  { license: 'NG', definition: 'Ngoại giao', type: 'Đặc biệt' },
  { license: 'NN', definition: 'Nước ngoài', type: 'Đặc biệt' },
  { license: 'PA', definition: 'Cục đối ngoại BQP', type: 'Cơ quan đặc biệt' },
  { license: 'PC', definition: 'Tổng cục tình báo', type: 'Cơ quan đặc biệt' },
  { license: 'PK', definition: 'Ban Cơ yếu - Bộ Quốc phòng', type: 'Cơ quan đặc biệt' },
  { license: 'PM', definition: 'Viện thiết kế - Bộ Quốc phòng', type: 'Cơ quan đặc biệt' },
  { license: 'PP', definition: 'Bệnh viện 108 - Bộ Quốc phòng', type: 'Cơ quan đặc biệt' },
  { license: 'PQ', definition: 'Trung tâm khoa học và kỹ thuật QS', type: 'Cơ quan đặc biệt' },
  { license: 'PT', definition: 'Cục tài chính - Bộ Quốc phòng', type: 'Cơ quan đặc biệt' },
  { license: 'PX', definition: 'Trung tâm nhiệt đới Việt – Nga', type: 'Cơ quan đặc biệt' },
  { license: 'PY', definition: 'Cục Quân Y - Bộ Quốc phòng', type: 'Cơ quan đặc biệt' },
  { license: 'QA', definition: 'Quân chủng Phòng không không quân', type: 'Quân chủng' },
  { license: 'QB', definition: 'Bộ tư lệnh Bộ đội biên phòng', type: 'Quân chủng' },
  { license: 'QH', definition: 'Quân chủng Hải quân', type: 'Quân chủng' },
  { license: 'TC', definition: 'Tổng cục Chính trị', type: 'Tổng cục' },
  { license: 'TH', definition: 'Tổng cục Hậu cần', type: 'Tổng cục' },
  { license: 'TK', definition: 'Tổng cục Công nghiệp quốc phòng', type: 'Tổng cục' },
  { license: 'TM', definition: 'Bộ Tổng tham mưu', type: 'Tổng cục' },
  { license: 'TN', definition: 'Tổng cục tình báo quân đội', type: 'Tổng cục' },
  { license: 'TT', definition: 'Tổng cục kỹ thuật', type: 'Tổng cục' },
  { license: 'VB', definition: 'Khối văn phòng Binh chủng - Bộ Quốc Phòng', type: 'Tổng cục' },
  { license: 'VK', definition: 'Ủy ban tìm kiếm cứu nạn - Bộ Quốc Phòng', type: 'Tổng cục' },
  { license: 'VT', definition: 'Tập đoàn Viettel - Bộ Quốc Phòng', type: 'Tổng cục' }
];
