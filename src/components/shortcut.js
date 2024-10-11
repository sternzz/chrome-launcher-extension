const shortcut = (name, url, icon) => {
  return `
    <a href=${url} class=" bg-white/10 w-10 h-10 rounded-lg grid place-content-center" title=${name}>
        <img src=${icon} alt=${name} width="18" height="18">
      </a>`;
};


export default shortcut;