import Navigation from "./Navigation";
import Meta from "./meta";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Navigation />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
