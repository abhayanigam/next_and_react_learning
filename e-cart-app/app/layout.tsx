'use client';

import './globals.css';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         <Provider store={store}>
//           <ProductList /> {/* will show on every page */}
//           {children}
//         </Provider>
//       </body>
//     </html>
//   );
// }


/*
  Note :
    Let's break it down step-by-step so you understand how children in RootLayout connects to your Home component like ProductList.

    📦 Your File Structure (probably looks something like this):


    /app
      └── layout.tsx        <-- this is your RootLayout
      └── page.tsx          <-- this is your Home (ProductList) page
      └── components/
            └── ProductList.tsx
            └── Sidebar.tsx
            └── Cart.tsx
            └── ...other components
      └── store.ts          <-- Redux store setup
      └── globals.css       <-- global styles
      └── ...other files
    └── ...other folders

    ---

    🧠 How It Works (The Flow):

    1. RootLayout (layout.tsx):
      
      export default function RootLayout({ children }: { children: ReactNode }) {
        return (
          <html lang="en">
            <body>
              <Provider store={store}>
                {children}  // <- This is where your page content (like ProductList) gets rendered
              </Provider>
            </body>
          </html>
        );
      }
      

    2. Home Page (page.tsx):
      
      import ProductList from "./components/ProductList";

      export default function Home() {
        return <ProductList />;
      }
      

    3. Next.js Routing System:
      - In Next.js 13+ with the App Router, every page.tsx inside a folder (like /app/page.tsx) automatically becomes a route, and the content of that page becomes the children prop passed to the nearest layout.tsx.
      - So your Home component's <ProductList /> is rendered as the children inside the RootLayout.

    ---

    🔄 Visualized Flow:


    <RootLayout>
      <Home>  <-- page.tsx
        <ProductList />
      </Home>
    </RootLayout>


    So, to sum it up:
    > children in RootLayout is whatever your route (like page.tsx) returns — and in your case, that's <ProductList />.

    ---

    You *can* use <ProductList /> directly inside layout.tsx, but whether you *should* depends on your design intentions.

    Let’s break it down:

    ---

    ✅ When it's okay to use <ProductList /> in layout.tsx:
    If you want <ProductList /> to appear on *every* page (e.g., like a sidebar, footer, or permanent component), then:

    import ProductList from './components/ProductList';

    export default function RootLayout({ children }: { children: React.ReactNode }) {
      return (
        <html lang="en">
          <body>
            <Provider store={store}>
              <ProductList /> //-->  will show on every page 
              {children}
            </Provider>
          </body>
        </html>
      );
    }

    This means:
    - If you visit / → you'll see ProductList + Home page content
    - If you go to /about → you'll still see ProductList + About content

    ---

    ❌ When you should *not* do this:
    If ProductList is only relevant to one route (like / or /products), then:
    - You should only import it inside the corresponding page.tsx, not the global layout.

    Why?
    - Layouts should be for shared UI: navbars, footers, context providers, themes, etc.
    - Putting route-specific components in the layout can clutter all pages with unnecessary stuff.

    ---

    🔄 Important:

    | Use case                 | Where to put <ProductList />    |
    |--------------------------|---------------------------------|
    | Appears on *every* page  | ✅ layout.tsx                   |
    | Only appears on homepage | ❌ put it in page.tsx           |

*/