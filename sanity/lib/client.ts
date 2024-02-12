import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skmHrA0bLKljrQclgkuWJlj6w902uXPwty9xVMoxo5yZsD9qJBUfhWw4yslpnp7cNmnGQD3tbEaAYCSBXqh605VA4ExUyw8HbQkaQMMMQW26ET2ZYLdCiiwti9riTMRJh6YLufAjrkFHKG94ydTbi2tZKTZrrXALHcTfdd5u1Qzq1U7JFwQV"
})
