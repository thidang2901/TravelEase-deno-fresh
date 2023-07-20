// import { Handlers } from "$fresh/server.ts";
// import type { WithSession } from "$fresh_session";
// import { error, validateFormData, z, ZodIssue } from "$fresh_validation";

// interface IUser {
//   username: string;
//   password: string;
// }

// export const handler: Handlers<{ errors: ZodIssue[] }, WithSession> = {
//   GET(req, ctx) {
//     // We use Fresh Session to flash errors and pass it down to the page
//     // more info: https://github.com/xstevenyung/fresh-session
//     const errors = ctx.state.session.flash("errors");
//     return ctx.render({ errors });
//   },

//   async POST(req, ctx) {
//     const userSchema = {
//       username: z.string().min(2),
//       password: z.string().min(8),
//     };
//     // We just need this to validate our FormData
//     const { validatedData, errors } = await validateFormData(req, userSchema);

//     // `errors` will be null if the validation is correct
//     if (errors) {
//       // we can deal with errors here
//       // we recommend using Fresh Session to pass errors between endpoints
//       // more info: https://github.com/xstevenyung/fresh-session
//       ctx.state.session.flash("errors", errors);
//     }

//     // here we get back the validated data casted to the right type
//     //   validatedData.username;
//     //   validatedData.password;

//     // For the sake of the example, we will redirect to the dashboard after a successful login
//     return new Response(validatedData, {
//       status: 303,
//       headers: { redirect: "/" },
//     });
//   },
// };
// export default function Login(data: IUser) {
//   return (
//     <form method="post">
//       <label
//         for="username"
//         // We can display a specific class or style if there is any errors on a specific field
//         className={error(data.errors, "username") ? "invalid" : ""}
//       >
//         Username
//       </label>
//       <input id="username" name="username" />
//       {/* And we can use the `error` function to retrieve the right error to display to the user*/}
//       {!!error(data.errors, "username") && (
//         <p>{error(data.errors, "username")?.message}</p>
//       )}

//       <label for="password">Password</label>
//       <input id="password" name="password" />
//       {!!error(data.errors, "password") && (
//         <p>{error(data.errors, "password")?.message}</p>
//       )}
//     </form>
//   );
// }
