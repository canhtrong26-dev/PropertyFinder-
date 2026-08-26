# PropertyFinder v2.0

## Mô tả
PropertyFinder là ứng dụng tìm kiếm bất động sản SPA được xây dựng bằng React + TypeScript,
mô phỏng các website thực tế như Zillow, Batdongsan. Cho phép người dùng tìm kiếm,
lọc, xem chi tiết và lưu yêu thích các bất động sản.

## Tính năng chính
- Property Listing: Xem danh sách bất động sản với filter nâng cao
- Property Detail: Xem chi tiết từng căn nhà với map placeholder
- Favorites: Lưu nhà yêu thích, persist localStorage
- Admin CRUD: Thêm/sửa/xóa bất động sản
- Auth: Đăng nhập admin với protected routes

## Tech Stack
- React 19 + TypeScript
- Redux Toolkit (state management)
- React Router v7
- Context API + useReducer (UI state)
- Sass (theme, variables, mixins)
- Vite

## Hướng dẫn chạy local
1. Clone repo
2. Cài dependencies: `npm install`
3. Chạy dev server: `npm run dev`
4. Mở trình duyệt: http://localhost:5173
5. Link demo: https://property-finder-omega.vercel.app/
