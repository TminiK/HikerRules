const baseParse = _ => {
  let d = [];
  const list = parseDomForArray(getResCode(), '.stui-vodlist&&li');
  for (let j in list) {
    d.push({
      title: parseDomForHtml(list[j], '.title&&Text'),
      desc: parseDomForHtml(list[j], '.sub&&Text'),
      pic_url: parseDom(list[j], '.stui-vodlist__thumb&&data-original'),
      url: $(parseDom(list[j],'.title&&a&&href')).lazyRule(_ => {
        const html = fetch(input)
        const script = parseDomForHtml(html, '.stui-player__video&&script&&Html')
        eval(script)
        return player_aaaa.url
      })
    })
  }

  setResult(d);
}
