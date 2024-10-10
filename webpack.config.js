// module.exports = {
//     //...
//     devServer: {
//       client: {
//         overlay: {
//           runtimeErrors: (error) => {
//             console.log(error,'error');
            
//             if(error?.message === "ResizeObserver loop completed with undelivered notifications.")
//             {
//                console.error(error)
//                return true;
//             }
//             return true;
//           },
//         },
//       },
//     },
//   };