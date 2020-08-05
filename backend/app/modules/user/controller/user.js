const output = require("../../_models/output");
// const db_library = require("../../_helpers/db_library");
// const bcrypt = require("bcrypt");
// const appConfig = require("../../../../config/appConfig");
// const mail_template = require("../../MailTemplate/mailTemplate");

function welcome(req, res, next) {
  var _output = new output();
  _output.data = "API Running at 8081 Port";
  _output.status = true;
  _output.message = "Welcome to Tradingo";
  res.send(_output);
};

function register(req, res, next) {
  var _output = new output();
  _output.data = req.body;
  _output.status = true;
  _output.message = "Welcome to Tradingo";
  res.send(_output);
}

module.exports = {
  welcome,
  register
}

// exports.registerUser = async function (req, res, next) {
//   var _output = new output();

//   const {
//     firstName,
//     lastName,
//     email,
//     gender,
//     mobile,
//     postalCode,
//     cityId,
//     password,
//     roleId
//   } = req.body;

//   if (
//     firstName != "" &&
//     lastName != "" &&
//     email != "" &&
//     gender != "" &&
//     mobile != "" &&
//     postalCode != "" &&
//     cityId != "" &&
//     password != "" &&
//     roleId != ""
//   ) {
//     var encry_pass = await bcrypt.hash(password, 10);

//     var query =
//       "INSERT INTO `users`(`firstName`, `lastName`, `email`, `gender`, `password`, `mobile`, `postalCode`, `cityId`, `roleId`, `isActive`)" +
//       " VALUES (?,?,?,?,?,?,?,?,?,?);";

//     var coach_query =
//       "INSERT INTO `coaches_dbs`(`Coach_Fname`, `Coach_Lname`, `Coach_Email`, `Coach_Phone`, `Coach_Password`, `User_type`,`Coach_City`)" +
//       " VALUES (?,?,?,?,?,?,?);";

//     await db_library
//       .execute("SELECT * FROM `users` WHERE email='" + email + "'")
//       .then(async value => {
//         var result = value;
//         if (result.length == 0) {
//           try {
//             // let res = exports.insertUser(query);
//             await db_library
//               .parameterexecute(query, [
//                 firstName,
//                 lastName,
//                 email,
//                 gender,
//                 encry_pass,
//                 mobile,
//                 postalCode,
//                 cityId,
//                 roleId,
//                 1
//               ])
//               .then(val => {
//                 _output.data = val;
//                 _output.isSuccess = true;
//                 _output.message = "S'inscrire avec succès";
//               })
//               .catch(err => {
//                 _output.data = {};
//                 _output.isSuccess = false;
//                 _output.message = "L'enregistrement a échoué";
//               });
//             if (roleId == 2) {
//               await db_library
//                 .parameterexecute(coach_query, [
//                   firstName,
//                   lastName,
//                   email,
//                   mobile,
//                   encry_pass,
//                   "coach",
//                   postalCode
//                 ])
//                 .then(value => {
//                   _output.data = value;
//                   _output.isSuccess = true;
//                   _output.message = '';
//                 })
//                 .catch(err => {
//                   _output.data = {};
//                   _output.isSuccess = false;
//                   _output.message = "L'enregistrement de l'entraîneur a échoué";
//                 });
//             }
//             var mailTemplate = await mail_template.getMailTemplate(
//               appConfig.MailTemplate.Register
//             );
//             const mailOption = require("../../_mailer/mailOptions");
//             let _mailOption = new mailOption();
//             _mailOption.to = email;
//             _mailOption.subject = '';
//             var em = Buffer.from(email).toString("base64");
//             var temp = mailTemplate[0].template;
//             var temp1 = temp.replace("{{email}}", em);
//             var temp2 = temp1.replace(
//               "{{username}}",
//               firstName + " " + lastName
//             );
//             _mailOption.html = temp2;
//             var _mailer = require("../../_mailer/mailer");
//             _mailer.sendMail(_mailOption);
//           } catch (error) {
//             console.log(error);
//             _output.data = error;
//             _output.isSuccess = false;
//             _output.message = "L'enregistrement a échoué";
//           }
//         } else {
//           _output.data = {};
//           _output.isSuccess = false;
//           _output.message = "L'email existe déjà";
//         }
//       })
//       .catch(err => {
//         console.log(err);
//         _output.data = err.message;
//         _output.isSuccess = false;
//         _output.message = "L'enregistrement a échoué";
//       });
//   } else {
//     _output.data = '';
//     _output.isSuccess = false;
//     _output.message = "L'enregistrement a échoué";
//   }
//   res.send(_output);
// };

// exports.login = async function (req, res, next) {
//   var _output = new output();
//   const { email, password } = req.body;
//   if (email != "" && password != "") {
    // const query =
    //   "SELECT `id`, `firstName`, `lastName`, `email`, `gender`, `password`, `mobile`, `address`, `postalCode`, `cityId`," +
    //   "`roleId`, `isOtpVerified`, `isActive`, `hashKey`" +
    //   " FROM `users` WHERE `email`= '" +
    //   email +
    //   "' AND `isOtpVerified`= 1 AND `isActive`= 1;";

    // await db_library
    //   .execute(query)
    //   .then(async value => {
//         var result = value;
//         if (result.length > 0) {
//           const match = await bcrypt.compare(password, result[0].password);
//           if (match) {
//             _output.data = result[0];
//             _output.isSuccess = true;
//             _output.message = '';
//           } else {
//             _output.data = {};
//             _output.isSuccess = false;
//             _output.message = '';
//           }
//         }
//         if (result.length == 0) {
//           _output.data = {};
//           _output.isSuccess = false;
//           _output.message = '';
//         }
//       })
//       .catch(err => {
//         _output.data = {};
//         _output.isSuccess = false;
//         _output.message = "Echec de la connexion";
//       });
//   } else {
//     _output.data = '';
//     _output.isSuccess = false;
//     _output.message = "Echec de la connexion";
//   }
//   res.send(_output);
// };

// exports.forgotPassword = async function (req, res, next) {
//   var _output = new output();
//   const email = req.body.email;

//   if (email != "") {
//     try {
//       if (email) {
//         var random = Math.random().toString();
//         var encry_hash = await bcrypt.hash(random, 10);

//         //Query
//         var query =
//           "UPDATE `users` SET `hashKey`='" +
//           encry_hash +
//           "' WHERE `email` = '" +
//           email +
//           "'";
//         var sel_query =
//           "SELECT `firstname`,`lastname` from `users` WHERE `email` = '" +
//           email +
//           "'";

//         await db_library
//           .execute(sel_query)
//           .then(async val => {
//             if (val.length > 0) {
//               await db_library
//                 .execute(query)
//                 .then(async value => {
//                   var mailTemplate = await mail_template.getMailTemplate(
//                     appConfig.MailTemplate.ForgotPassword
//                   );
//                   const mailOption = require("../../_mailer/mailOptions");
//                   let _mailOption = new mailOption();
//                   _mailOption.to = email;
//                   _mailOption.subject = '';
//                   _mailOption.html = mailTemplate[0].template
//                     .replace(
//                       "{{username}}",
//                       val[0].firstname + " " + val[0].lastname
//                     )
//                     .replace("{{hashkey}}", encry_hash);
//                   var _mailer = require("../../_mailer/mailer");
//                   _mailer.sendMail(_mailOption);
//                   _output.data = value;
//                   _output.isSuccess = true;
//                   _output.message = "Hash Key Generated Successfully";
//                 })
//                 .catch(err => {
//                   _output.data = {};
//                   _output.isSuccess = false;
//                   _output.message = "Hash Key Generated Failed";
//                 });
//             } else {
//               _output.data = {};
//               _output.isSuccess = false;
//               _output.message = "No User Found";
//             }
//           })
//           .catch(err => {
//             _output.data = {};
//             _output.isSuccess = false;
//             _output.message = "No User Found";
//           });
//       }
//     } catch (err) {
//       _output.data = {};
//       _output.isSuccess = false;
//       _output.message = "err";
//     }
//   } else {
//     _output.data = '';
//     _output.isSuccess = false;
//     _output.message = "Hash Key Generated Failed";
//   }
//   res.send(_output);
// };

// exports.resetPassword = async function (req, res, next) {
//   var _output = new output();

//   const email = req.body.email;
//   const hashKey = req.body.hash;
//   const password = req.body.password;

//   if (email != "" && password != "") {
//     var encry_pass = await bcrypt.hash(password, 10);
//     if (hashKey == "") {
//       var query =
//         "UPDATE `users` SET `password`= '" +
//         encry_pass +
//         "' WHERE `email` = '" +
//         email +
//         "'";
//     } else {
//       var query =
//         "UPDATE `users` SET `password`= '" +
//         encry_pass +
//         "' WHERE `hashKey`='" +
//         hashKey +
//         "' AND `email` = '" +
//         email +
//         "'";
//     }
//     await db_library
//       .execute(query)
//       .then(value => {
//         //console.log(value);
//         if (value.affectedRows > 0) {
//           //var result = {};
//           _output.data = {};
//           _output.isSuccess = true;
//           _output.message = "Réinitialisation du mot de passe réussie";
//         } else {
//           _output.data = {};
//           _output.isSuccess = false;
//           _output.message = "La réinitialisation du mot de passe a échou";
//         }
//       })
//       .catch(err => {
//         _output.data = {};
//         _output.isSuccess = false;
//         _output.message = "La réinitialisation du mot de passe a échou";
//       });
//   } else {
//     _output.data = '';
//     _output.isSuccess = false;
//     _output.message = "La réinitialisation du mot de passe a échou";
//   }
//   res.send(_output);
// };

// exports.userVerification = async function (req, res, next) {
//   const email = req.body.email;
//   var _output = new output();

//   if (email != "") {
//     var query =
//       "UPDATE `users` SET isOtpVerified = 1 WHERE email = '" + email + "';";

//     await db_library
//       .execute(query)
//       .then(value => {
//         var result = value;
//         _output.data = {};
//         _output.isSuccess = true;
//         _output.message = "Votre compte a été vérifié avec succès";
//       })
//       .catch(err => {
//         _output.data = {};
//         _output.isSuccess = false;
//         _output.message = "La vérification de l'utilisateur a échoué";
//       });
//   } else {
//     _output.data = '';
//     _output.isSuccess = false;
//     _output.message = "La vérification de l'utilisateur a échoué";
//   }
//   res.send(_output);
// };

// async function setChangePassword(email, encry_pass) {
//   try {
//     var query =
//       "UPDATE `coaches_dbs` SET Coach_Password = '" +
//       encry_pass +
//       "' WHERE Coach_Email = '" +
//       email +
//       "'; ";
//     return await db_library.execute(query).then(async data => {
//       return data;
//     });
//   } catch (error) {
//     return error;
//   }
// }

// exports.setNewPassword = async function (req, res, next) {
//   var _output = new output();
//   const email = req.body.email;
//   const password = req.body.password;
//   const role_id = req.body.role;
//   console.log(role_id);
//   if (email != "" && password != "") {
//     var encry_pass = await bcrypt.hash(password, 10);

//     var query =
//       "UPDATE `users` SET password = '" +
//       encry_pass +
//       "' WHERE email = '" +
//       email +
//       "'; ";

//     await db_library
//       .execute(query)
//       .then(async value => {
//         var result = value;
//         if (role_id == 2) {
//           await setChangePassword(email, encry_pass);
//         }
//         _output.data = result;
//         _output.isSuccess = true;
//         _output.message = "Mot de passe mis à jour avec succès";
//       })
//       .catch(err => {
//         _output.data = err.message;
//         _output.isSuccess = false;
//         _output.message = "Échec de la mise à jour du mot de passe";
//       });
//   } else {
//     _output.data = '';
//     _output.isSuccess = false;
//     _output.message = "Échec de la mise à jour du mot de passe";
//   }
//   res.send(_output);
// };

// exports.blockUser = async function (req, res, next) {
//   const User_ID = req.body.id;
//   var _output = new output();

//   await db_library
//     .execute("Update")
//     .then(value => {
//       var result = value;
//       _output.data = result;
//       _output.isSuccess = true;
//       _output.message = "Utilisateur bloqué avec succès";
//     })
//     .catch(err => {
//       _output.data = err.message;
//       _output.isSuccess = false;
//       _output.message = "Échec de l'utilisateur bloqué";
//     });
//   res.send(_output);
// };

// exports.unBlockUser = async function (req, res, next) {
//   const User_ID = req.body.id;
//   var _output = new output();

//   await db_library
//     .execute("Update")
//     .then(value => {
//       var result = value;
//       _output.data = result;
//       _output.isSuccess = true;
//       _output.message = "Utilisateur débloqué avec succès";
//     })
//     .catch(err => {
//       _output.data = err.message;
//       _output.isSuccess = false;
//       _output.message = "Échec du déverrouillage de l'utilisateur";
//     });
//   res.send(_output);
// };

// exports.deleteUser = async function (req, res, next) {
//   const User_ID = req.body.id;
//   var _output = new output();

//   await db_library
//     .execute("Update")
//     .then(value => {
//       var result = value;
//       _output.data = result;
//       _output.isSuccess = true;
//       _output.message = "Suppression réussie de l'utilisateur";
//     })
//     .catch(err => {
//       _output.data = err.message;
//       _output.isSuccess = false;
//       _output.message = "Échec de la suppression de l'utilisateur";
//     });
//   res.send(_output);
// };
