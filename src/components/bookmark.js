const bookmark = (name, url, icon) => {
  return `
    <a
            href=${url}
            class="cursor-pointer backdrop-blur-lg h-20 border-2 border-white w-full bg-brand-accent rounded-full bg-black/10 drop-shadow-sm p-4  flex justify-start gap-4 items-center transition-all duration-200 active:scale-95"
          >
            <div
              class="h-10 w-10 bg-white/10 rounded-full grid place-content-center"
            >
              <img
                src=${icon}
                alt=""
                width="20"
                height="20"
              />
            </div>
            <div class="">
              <p class="text-sm font-light capitalize">${name}</p>
              <small class="text-xs">${url}</small>
            </div>
          </a>
          `;
};

export default bookmark;
