import Vigovia from "../assets/Vigvia logo.png"; // Assuming this is your logo
function VigoviaFooter(){
    return(
        <div
        style={{ fontFamily: "Roboto" }}
        className="w-full flex justify-center px-4 sm:px-6 md:px-10 py-6 "
      >
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-start">
          {/* Company Info */}
          <div className="text-sm text-black space-y-1 font-roboto">
            <p className="font-[700] text-xl">Vigovia Tech Pvt. Ltd</p>
            <p>Registered Office: Hd-109 Cinnabar Hills,</p>
            <p>Links Business Park, Karnataka, India.</p>
          </div>

          {/* Contact Info */}
          <div className="text-sm text-black space-y-2 font-roboto">
            <p>
              <span className="font-semibold">Phone:</span> +91-99X9999999
            </p>
            <p>
              <span className="font-semibold">Email ID:</span>{" "}
              Contact@Vigovia.Com
            </p>
          </div>

          {/* Logo */}
          <div className="flex justify-start md:justify-end ">
            <img
              src={Vigovia}
              alt="Vigovia Logo"
              className="w-48 sm:w-56 md:w-64 lg:w-72 object-contain -mt-4"
            />
          </div>
        </div>
      </div>
    )
}

export default VigoviaFooter;