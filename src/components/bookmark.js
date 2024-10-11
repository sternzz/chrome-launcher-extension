// const backup = `
//     <a
//             href=${url}
//             class="bookmark cursor-pointer rounded-full backdrop-blur-lg h-20 border-2 border-white w-full bg-brand-accent bg-black/10 drop-shadow-sm p-4  flex justify-start gap-4 items-center transition-all duration-200 active:scale-95"
//           >
//             <div
//               class="h-10 w-10 bg-white/10 rounded-full grid place-content-center"
//             >
//               <img
//                 src=${icon}
//                 alt=""
//                 width="20"
//                 height="20"
//               />
//             </div>
//             <div class="">
//               <p class="text-sm font-light capitalize">${name?.trim(0, 30)}</p>
//               <small class="text-xs">${url}</small>
//             </div>
//           </a>
//           `;

const bookmark = (name, url, icon) => {
  return `
    <a
          title=${url}
            href=${url}
            class="bookmark  p-4 border  border-white/10 cursor-pointer rounded-xl  hover:bg-white/20 bg-white/10    flex flex-col justify-center gap-4 items-center transition-all duration-300 active:scale-95"
          >
         
            <div
              class=" grid place-content-center rounded-full bg-black/50  h-16 w-16  hover:border-white transition-all duration-300 bg-brand-accent  drop-shadow-sm "
            >
              <img
                src=${icon}
                alt=""
                width="25"
                height="25"
              />
            </div>
            <div class="text-center">
              <p class="text-sm font-light capitalize bg-black/20 rounded-md py-1 px-2">${name}</p>
            </div>
          </a>
          `;
};

export default bookmark;
