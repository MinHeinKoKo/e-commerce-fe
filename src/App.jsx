import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home";
import GuestLayout from "./layout/GuestLayout"
import AdminLayout from "./layout/AdminLayout"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Error from './pages/error/Error'
import Cart from "./pages/cart/Cart";
import Shops from "./pages/shops/Shops"
import Detail from "./pages/detail/Detail"
import Profile from "./pages/profile/Profile";
import Dashboard from "./pages/dashboard/Dashboard";
import Cookies from "js-cookie"
import { useSelector } from "react-redux";
import { Edit } from './pages/profile/edit/Edit.jsx'

const App = () => {
  const mode = useSelector(state => state.display.currentMode);

  return (
    <div  className={mode === "Dark" ? "dark" : ""}>
      <Routes>
        <Route path="/" element={<GuestLayout />}>
          <Route index element={<Home />} />
          <Route path="shops" element={<Shops />} />
          <Route path="cart" element={<Cart />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/edit" element={<Edit /> } />
        </Route>

        <Route path="/dashboard" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;

          {/* <Route path="product" element={<Product />}>
            <Route index element={<ProductTable />} />
            <Route path="size" element={<Size />} />
            <Route path="color" element={<Color />} />

            <Route path="create-item" element={<CreateProD />} />
            <Route path="update-item/:id" element={<ShowProductitem />} />

            <Route path="show-size/:id" element={<ShowSize />} />
            <Route path="show-color/:id" element={<ShowColor />} />
          </Route>
          <Route path="user" element={<User />} />
          <Route path="category" element={<Category />} />
          <Route path="create-category" element={<CreateCategory />} />
          <Route path="show-category/:id" element={<ShowCategory />} />

          <Route path="viewer" element={<Viewer />} />
          <Route path="discount" element={<Discount />} />
          <Route path="create-discount" element={<CreateDiscount />} />
          <Route path="show-discount/:id" element={<ShowDiscount />} />
          <Route path="orders" element={<Orders />} /> */}