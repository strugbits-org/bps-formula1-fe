// export default async function handler(req, res) {
//   try {
//     const { email, password } = req.body;
//     console.log({ email, password }, ">>>>");

//     // Set cookie with name 'authToken' and value 'yourAuthTokenHere' with an expiration time
//     res.setHeader(
//       "Set-Cookie",
//       "authToken=yourAuthTokenHere; Max-Age=3600; HttpOnly"
//     );
//     // Cookie will expire after 3600 seconds (1 hour)

//     console.log("Cookie set successfully.");
//     res.status(200).json({ message: "Successfully set cookie!" });
//   } catch (error) {
//     if (error.type === "CredentialsSignin") {
//       res.status(401).json({ error: "Invalid credentials." });
//     } else {
//       res.status(500).json({ error: "Something went wrong." });
//     }
//   }
// }
