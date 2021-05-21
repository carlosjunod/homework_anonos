export function filterOptions(options, term) {
  const filtered = options.reduce((acc, el) => {
    if (el.title.toLowerCase().indexOf(term) > -1) {
      acc.push({ title: el.title, url: el.url });
    }

    if (el.children) {
      let children = [...filterOptions(el.children, term)];
      if (children.length > 0) {
        acc.push({ title: el.title, url: el.url, children });
      }
    }

    return acc;
  }, []);
  return filtered;
}
