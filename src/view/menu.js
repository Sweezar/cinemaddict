function createFilterItemTemplate(filter) {
  const {name, count} = filter;

  return (`<a href="#${name}" class="main-navigation__item">${name} <span class="main-navigation__item-count">${count}</span></a>`);
}

export function createMenuTemlate(filterItems) {
  const filterItemTemplate = filterItems
    .map((filter) => createFilterItemTemplate(filter))
    .join('');

  return `<nav class="main-navigation">
    <div class="main-navigation__items">
      ${filterItemTemplate}
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`;
}
