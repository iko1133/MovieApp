import { create } from "apisauce";

import hosts from "./hosts";

const apiClient = create({
  baseURL: hosts.base_url,
});

export default apiClient;
