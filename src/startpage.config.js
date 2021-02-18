let config = {
  terminal: {
    title: `Terminal at 大咖流`,
    user: 'admin',
    hostname: 'dakaliu',
    welcome: 'Welcome to <d color="#00f501">大咖流</d> terminal',
    actions: [],
  },
  friends: [
    {
      name: `小柒`,
      description: '啥都不会的咸鱼...',
      url: 'http://t.cn/A6tcnVjW',
    },
  ],
  neofetch: [
    {
      name: 'autograph',
      value: '世界本就不公何必徒增烦恼',
    },
    {
      name: 'UseOS',
      value: 'Arch Linux x86_64',
    },
    {
      name: 'Blog',
      value: '<d href="https://www.dakaliu.com">www.dakaliu.com</d>',
    },
    {
      name: 'Github',
      value: '<d href="https://github.com/roinu176">@roinu176</d>',
    },
    {
      name: 'email',
      value: '<d href="mailto:admin@dakaliu.com">admin@dakaliu.com</d>',
    },
    {
      name: 'Shell',
      value: '<d del>nonsh 114.514</d>',
    },
  ],
  ga: {
    enabled: true,
    id: 'G-PVVC00CJ26',
  },
  pwa: {
    enabled: true,
    sw_enabled: true,
  },
};
config.terminal.prefix = `<d color="#00f501">${config.terminal.user}@${config.terminal.hostname}</d><d color="white">:</d><d color="blue">~</d><d color="white">$</d> `;
config.friends = ((a) => {
  let b = '';
  b += `<d color="#ceedf2">My friend</d>\n`;
  for (let i in a) {
    b += `        <d color="#00cdcd">name</d>:<d color="#7f7f7f">${a[i].name}</d>\n`;
    b += `        <d color="#00cdcd">description</d>:<d color="#7f7f7f">${a[i].description}</d>\n`;
    b += `        <d color="#00cdcd">url</d>:<d color="#7f7f7f" href="${a[i].url}">${a[i].url}</d>\n`;
    b += `        ------\n`;
  }
  return b;
})(config.friends);
config.neofetch = (async (a) => {
  let b = '';
  let c = await fetch('./avatar');
  if (c.status === 200) {
    b += await c.text();
  } else {
    throw 'Server Error';
  }
  b += `<d color="#7f7f7f">${config.terminal.user}@${config.terminal.hostname}</d>\n`;
  b += '--------------------------\n';
  for (let i in a) {
    b += `<d color="#7f7f7f"> ${a[i].name}</d>: ${a[i].value}\n`;
  }
  return b;
})(config.neofetch);
config.ga.enabled = ((a) => {
  if (a === 'G-PVVC00CJ26' && window.location.host == 'www.dakaliu.com') {
    return true;
  } else if (window.location.host.search('localhost') != -1) {
    return false;
  } else {
    return config.ga.enabled;
  }
})(config.ga.id);
export { config };
