// import Sidebar from "./components/Sidebar";
import ProductList from "./components/ProductList";
// import Cart from  "./components/Cart";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen">
//       <Sidebar />
//       <main className="flex-1 p-4">
//         <h1 className="text-2xl font-bold mb-4">Simple E-Cart</h1>
//         <ProductList />
//         <Cart />
//       </main>
//     </div>
//   );
// }

export default function Home() {
  return <ProductList />;
}