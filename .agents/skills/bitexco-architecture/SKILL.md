---
name: bitexco-architecture
description: Kiến trúc cốt lõi, cấu trúc thư mục, quy ước code và các thư viện quan trọng của dự án BitexcoExpo (React Native). Sử dụng skill này mỗi khi làm việc với dự án để đảm bảo code đúng chuẩn.
---

# 🏗️ Kiến Trúc Dự Án BitexcoExpo

Đây là tài liệu tổng hợp toàn bộ các quy chuẩn, công nghệ và cấu trúc của dự án **BitexcoExpo**. Mọi thay đổi về code phải tuân thủ nghiêm ngặt các quy ước dưới đây để tránh phá vỡ kiến trúc hiện tại.

## 1. Công Nghệ Lõi (Core Tech Stack)
- **Framework:** React Native (0.81.5) + **Expo SDK 54** (Bắt buộc giữ ở bản 54 để tương thích với máy điện thoại của dev đang dùng Expo Go).
- **Ngôn ngữ:** TypeScript.
- **Quản lý State:** `Redux Toolkit` kết hợp với `redux-persist`. Toàn bộ Redux Store nằm trong `src/store/`.
- **Điều hướng (Navigation):** Sử dụng `React Navigation v7` (Native Stack & Bottom Tabs). **KHÔNG dùng `expo-router`**. Cấu hình route nằm ở `src/navigation/index.tsx`.

## 2. Các Thư Viện UI/UX Quan Trọng
- **Bottom Sheet Modal:** Dùng thư viện `@gorhom/bottom-sheet` (Cụ thể là thẻ `<BottomSheetModal>`). Root App đã được bọc bằng `<BottomSheetModalProvider>`. Không dùng phiên bản cũ của Expo UI (`@expo/ui`).
- **Icon System:** Bắt buộc sử dụng Component trung gian `<Icon>` tại `src/components/atoms/Icon.tsx`. Component này đang bọc `@expo/vector-icons/MaterialIcons` và `@react-native-vector-icons/lucide`. Tuyệt đối không import thư viện icon lẻ tẻ ở màn hình.
- **Thanh Bottom Bar (Tab Bar):** Được thiết kế custom đè lên giao diện (`position: absolute`, `bottom: 0`). Đã được ép `safeAreaInsets: { bottom: 0 }` để loại bỏ viền đen bên dưới trên iOS (cho giao diện lùn/gọn hơn).

## 3. Cấu Trúc Thư Mục (Alias: `@/` trỏ về `src/`)
- `src/App.tsx`: File gốc của ứng dụng (đã bọc đầy đủ các Provider: Redux, SafeArea, GestureHandler, BottomSheetModal).
- `src/screens/`: Chứa các màn hình (ví dụ: `Home`, `Explore`, `SettingScreen`, `LoginScreen`...).
- `src/navigation/`: Cấu hình Stack và Tab Navigators.
- `src/components/`:
  - `atoms/`: Chứa các component nhỏ, tái sử dụng cao (`Text`, `Icon`, `ElementButton`).
  - `ui/`: Các thành phần giao diện chuyên biệt (`TabBarBackground`).
- `src/constants/`: Chứa hằng số như `Colors.ts` (LegacyColors) và Metrics.

## 4. Những Lưu Ý (Gotchas) Khi Viết Code
1. **Lỗi Node.js Native Stripping:** Dự án đang chạy trên máy dev có phiên bản Node.js đời mới (v22/v23) nên các file Config Plugin gốc bằng TypeScript (như của `expo-image`) sẽ bị lỗi `ERR_UNSUPPORTED_NODE_MODULES_TYPE_STRIPPING`. Do đó, **không thêm** `expo-image` hay các thư viện tương tự vào mảng `plugins` trong `app.json` nếu không thực sự build code Native.
2. **Kiểm thử trên máy thật:** Dự án được test qua app **Expo Go**. Bất kỳ thư viện Native nào yêu cầu phải build lại Development Build (Dev Client) thì phải cẩn trọng vì dev đang không dùng Dev Client.
3. **Safe Area:** Khung hình chính (`App.tsx`) đã bọc `<SafeAreaProvider>`. Các màn hình con chỉ cần dùng `<SafeAreaView edges={['top']}>` nếu cần đệm phía trên tai thỏ.
4. **Modal / Popups:** Mọi BottomSheet dạng popup đè lên toàn màn hình phải dùng `<BottomSheetModal>`, đồng thời cài đặt backdrop mờ (`BottomSheetBackdrop` với `opacity`) và đổ bóng (shadow) để modal nổi bật so với nền màn hình (Tham khảo `QRCodeModal.tsx`).

## 5. Kiến Trúc Gọi API và Redux Store
Dự án sử dụng mô hình kết hợp **Redux Toolkit + RTK Query + Axios**:
- **Redux Store (`src/store/store.ts`):** 
  - Đã cài đặt sẵn `redux-persist` kết hợp `AsyncStorage` để lưu trạng thái (ví dụ: `authSlice`).
  - Gắn middleware của RTK Query (`baseApi.middleware`).
- **Axios & Interceptors (`src/services/`):**
  - **`axiosInstance.ts`:** Nơi khai báo Axios instance gốc. Đã có hàm `injectStore(store)` để tự động lấy token từ Redux nhét vào Header (Bearer Authorization) mỗi khi gọi API, và tự động xử lý logic Refresh Token khi bị 401. Không cần tự truyền token bằng tay ở các component.
  - **`axiosBaseQuery.ts`:** Adapter để bọc Axios lại và truyền cho RTK Query sử dụng, giúp tận dụng khả năng caching tự động của RTK Query nhưng vẫn giữ được bộ Interceptor mạnh mẽ của Axios.
  - **`api.ts`:** Khai báo `baseApi` (với `reducerPath: 'api'`). Mọi logic gọi API (như lấy danh sách, chi tiết, submit form) đều phải khai báo dưới dạng các `endpoints` của `baseApi` bằng `baseApi.injectEndpoints({...})` thay vì gọi Axios thẳng ở UI.
- **Quy trình sử dụng API chuẩn:**
  1. Khai báo endpoint trong một file riêng (VD: `src/services/endpoints/userApi.ts`) bằng `baseApi.injectEndpoints`.
  2. Tại file UI, dùng các hook tự sinh (ví dụ: `useGetUsersQuery`, `useLoginMutation`) để gọi và render. Dữ liệu sẽ được tự động cache và quản lý loading state.
