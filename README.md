Các Lệnh Cài Đặt và Thiết Lập Dự Án Vue 3 với Vite
Đầu tiên, bạn cần cài đặt các phụ thuộc cho dự án, bao gồm Vue, Vue Router, Vuex, Vite và các công cụ liên quan khác.

1. Cài Đặt Tất Cả Các Phụ Thuộc

npm install
Lệnh này sẽ tự động tải và cài đặt tất cả các thư viện từ package.json, bao gồm cả các thư viện chính như vue, vue-router, vuex, và các công cụ phát triển như vite, eslint, prettier.

2. Cài Đặt Các Công Cụ Phát Triển
Nếu bạn muốn cài đặt riêng các công cụ phát triển như ESLint, Prettier, OxLint, bạn có thể sử dụng lệnh sau:


npm install --save-dev @vitejs/plugin-vue @vue/eslint-config-prettier eslint eslint-plugin-vue prettier oxlint npm-run-all2
3. Chạy Server Phát Triển (Vite Development Server)
Để bắt đầu phát triển và chạy dự án của bạn, sử dụng lệnh:


npm run dev
Lệnh này sẽ chạy Vite development server và tự động mở trang trên http://localhost:3000 (hoặc cổng khác nếu có thay đổi). Server sẽ theo dõi các thay đổi mã nguồn và tự động làm mới trang.

4. Xây Dựng Dự Án Cho Môi Trường Sản Xuất
Khi bạn hoàn thành phát triển và muốn xây dựng ứng dụng cho môi trường sản xuất (production), hãy sử dụng lệnh:


npm run build
Điều này sẽ tạo một thư mục dist/ chứa các tệp đã được tối ưu hóa để triển khai trên server.

5. Xem Trước Bản Build (Preview)
Sau khi xây dựng xong, bạn có thể preview dự án của mình như trong môi trường sản xuất:


npm run preview
6. Cài Đặt và Chạy Server JSON (Dành cho API hoặc Dữ Liệu Tĩnh)
Nếu bạn cần một server đơn giản để trả về dữ liệu JSON trong quá trình phát triển (ví dụ: khi muốn test API hoặc truy vấn dữ liệu JSON trong khi phát triển mà không cần một backend thật sự), bạn có thể sử dụng công cụ như json-server. Đây là cách cài đặt và cấu hình:

Cài Đặt json-server

npm install --save-dev json-server
Tạo Tệp db.json
Tạo một tệp db.json trong thư mục gốc của dự án. Tệp này sẽ chứa dữ liệu mẫu mà bạn muốn phục vụ trong quá trình phát triển. Ví dụ:

json
Sao chép mã
{
  "products": [
    { "id": 1, "name": "Product A", "price": 10 },
    { "id": 2, "name": "Product B", "price": 20 }
  ]
}
Cấu Hình Chạy Server JSON
Cập nhật package.json của bạn để thêm lệnh JSON Server vào phần scripts:

json
Sao chép 
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "start:json-server": "json-server --watch db.json --port 5000"
}
Chạy Server JSON
Sau khi thêm lệnh trên, bạn có thể chạy server JSON với lệnh:

npm run start:json-server
Server sẽ chạy trên cổng 5000 (hoặc cổng khác nếu bạn thay đổi trong lệnh). Bạn có thể truy cập vào các endpoint API qua URL như http://localhost:5000/products.

7. Kiểm Tra và Định Dạng Mã
Để duy trì mã nguồn sạch sẽ và theo đúng quy tắc, bạn có thể sử dụng các công cụ như ESLint và Prettier để kiểm tra và định dạng mã.

Kiểm tra mã với ESLint:


npm run lint:eslint
Kiểm tra mã với OxLint:


npm run lint:oxlint
Định dạng mã với Prettier:


npm run format
Tóm Tắt Các Lệnh
Dưới đây là tất cả các lệnh cài đặt và cấu hình cho dự án:

Cài đặt tất cả các phụ thuộc:
npm install
Cài đặt các công cụ phát triển (nếu cần):


npm install --save-dev @vitejs/plugin-vue @vue/eslint-config-prettier eslint eslint-plugin-vue prettier oxlint npm-run-all2
Chạy server phát triển:


npm run dev
Xây dựng dự án cho môi trường sản xuất:


npm run build
Xem trước bản build:


npm run preview
Cài đặt và chạy server JSON (phục vụ dữ liệu tĩnh hoặc API giả):


npm install --save-dev json-server
npm run start:json-server
Kiểm tra mã với ESLint:


npm run lint:eslint
Kiểm tra mã với OxLint:


npm run lint:oxlint
Định dạng mã với Prettier:

npm run format