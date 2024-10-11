export default function manageBookmarkCard(name, url, icon) {
  return `
    <div
              
             
                class="flex flex-col gap-4 p-4 border-2 border-white/10 rounded-xl bg-black/10"
              >
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 grid place-content-center">
                    <img
                      src=${icon}
                      width="25"
                      height="25"
                      alt=""
                    />
                  </div>
                  <div class="">
                    <p class="font-light capitalize">${name}</p>
                    <small class="font-light">${url}</small>
                  </div>
                </div>

                <div class="flex justify-end select-none">
                  <div
                    data-action="deleteBookmark"
                     data-uid=${url}
                    title="Delete Bookmark"
                    class="p-4 active:scale-90 transition-all duration-300"
                  >
                    <img
                    class="pointer-events-none"
                      src="./assets/icons/bin.svg"
                      width="20"
                      height="20"
                      alt=""
                    />
                  </div>
                </div>
              </div>
`;
}
