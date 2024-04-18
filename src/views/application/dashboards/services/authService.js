import axios from "axios";
import cogoToast from "cogo-toast";

import { URL } from "../utility/url";

// Login user
export const login = async (userData) => {
  const toastoptions = {
    hideAfter: 5,
    position: "top-right",
    heading: "Success",
  };
  try {
    const response = await axios.post(URL + "/login", userData);

    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    cogoToast.success("Login Success.", toastoptions);
    window.location.reload();
  } catch (error) {
   
    let toastoptions = {
      hideAfter: 5,
      position: "top-right",
      heading: "Error",
    };
    cogoToast.error(error.response.data.message, toastoptions);
  }
};

export default login
