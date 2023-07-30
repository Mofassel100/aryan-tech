
import Footer from '../Layout/Footer';
import Navber from '../Layout/Navber';

const RootLayout = ({ children }) => {

  return (
    <div>
      <Navber></Navber>
      {/* children page */}
      <div style={{
        padding: " 24px",
        minHeight: "100vh"
      }}>
        {children}
      </div>
      {/* --- */}
      {/* footer */}
      <div>

      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;