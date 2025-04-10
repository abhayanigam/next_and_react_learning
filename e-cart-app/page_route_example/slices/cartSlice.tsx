import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      state.items.push(action.payload);
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;


/*
    In Next.js 13+ (App Router), the app/ directory uses a new file-based routing system.
    Two of the default files you'll often see are page.tsx and layout.tsx.

    Let’s break down what each one does:

    ---

    🔹 page.tsx

    - Purpose: Represents a specific route's content.
    - Think of it like: A "screen" in your app, e.g. the homepage, about page, product detail page, etc.
    - Example: app/page.tsx will be the route for /.

    tsx --> app/page.tsx

    export default function HomePage() {
    return <div>Hello from Home Page!</div>;
    }


    > If you're using pages/index.tsx (like in the cart app above), 
    you're using the Pages Router. If you instead use app/page.tsx, you're using the App Router.

    ---

    🔸 layout.tsx

    - Purpose: Provides shared layout (header, sidebar, footer) across pages inside the directory.
    - Think of it like: A wrapper for all pages under a route segment.
    - Example: app/layout.tsx wraps every page inside app/.

    tsx --> app/layout.tsx

    export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
            <header>Header</header>
            {children}
            <footer>Footer</footer>
        </body>
        </html>
    );
    }


    ---

    🛒 How This Affects Your E-Cart App

    In your current app, you're using the Pages Router (pages/index.tsx), 
    not the App Router (app/page.tsx and app/layout.tsx).

    > If you want to migrate to the App Router, you'd move your files into the app/ 
    folder and define your layouts and pages accordingly.

    ---

    ✅ TL;DR

    | File           | Purpose                              | Used In         |
    |----------------|---------------------------------------|------------------|
    | page.tsx     | Defines a single route's content      | App Router       |
    | layout.tsx   | Wraps pages with shared UI/layout     | App Router       |
    | pages/index.tsx | Defines homepage content           | Pages Router     |

*/