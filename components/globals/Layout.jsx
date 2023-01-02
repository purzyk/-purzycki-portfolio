import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <main className="max-w-screen-2xl	 mx-auto sm:px-6 lg:px-8  m-2 p-2 font-dm">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
