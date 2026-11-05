const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
function closeMenu(returnFocus = false) {
  navigation?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) menuButton.innerHTML = 'Menu <span aria-hidden="true">＋</span>';
  if (returnFocus) menuButton?.focus();
}
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  navigation.classList.toggle('open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.innerHTML = open ? 'Close <span aria-hidden="true">−</span>' : 'Menu <span aria-hidden="true">＋</span>';
});
navigation?.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.site-header')) closeMenu();
});
window.matchMedia('(min-width: 801px)').addEventListener('change', (event) => {
  if (event.matches) closeMenu();
});

const demo = document.querySelector('[data-form-demo]');
if (demo) {
  const examples = {
    contact: {
      title: 'Contact details',
      fields: [
        { name: 'name', label: 'Name', type: 'text', required: true },
        { name: 'email', label: 'Work email', type: 'email', required: true },
      ],
    },
    deployment: {
      title: 'Deployment request',
      fields: [
        { name: 'environment', label: 'Environment', type: 'select', options: ['Staging', 'Production'], required: true },
        { name: 'reason', label: 'Approval reason', type: 'text', required: true, visibleWhen: { environment: 'Production' } },
      ],
    },
  };
  const form = demo.querySelector('form');
  const code = demo.querySelector('[data-schema]');
  const fields = demo.querySelector('[data-fields]');
  const result = demo.querySelector('[data-result]');
  const tabs = [...demo.querySelectorAll('[data-example]')];
  let active = 'contact';

  function updateConditionalFields() {
    const values = Object.fromEntries(new FormData(form));
    for (const field of examples[active].fields) {
      const input = form.elements.namedItem(field.name);
      const visible = !field.visibleWhen || Object.entries(field.visibleWhen).every(([name, value]) => values[name] === value);
      input.closest('label').hidden = !visible;
      input.disabled = !visible;
      input.required = visible && Boolean(field.required);
    }
  }
  function renderExample(name) {
    active = name;
    const schema = examples[name];
    code.textContent = JSON.stringify(schema, null, 2);
    demo.querySelector('[data-form-title]').textContent = schema.title;
    fields.replaceChildren();
    result.textContent = '';
    for (const field of schema.fields) {
      const label = document.createElement('label');
      label.append(document.createTextNode(field.label + (field.required ? ' *' : '')));
      const input = document.createElement(field.type === 'select' ? 'select' : 'input');
      input.name = field.name;
      input.id = `demo-${field.name}`;
      if (field.type === 'select') {
        for (const value of field.options) {
          const option = document.createElement('option');
          option.value = value;
          option.textContent = value;
          input.append(option);
        }
      } else {
        input.type = field.type;
        input.autocomplete = 'off';
        input.maxLength = 200;
      }
      label.append(input);
      fields.append(label);
    }
    tabs.forEach((tab) => tab.setAttribute('aria-pressed', String(tab.dataset.example === name)));
    updateConditionalFields();
  }
  tabs.forEach((tab) => tab.addEventListener('click', () => renderExample(tab.dataset.example)));
  form.addEventListener('change', () => {
    result.textContent = '';
    updateConditionalFields();
  });
  form.addEventListener('input', () => { result.textContent = ''; });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    result.textContent = 'Validation passed. This local demonstration does not send or store your input.';
  });
  demo.hidden = false;
  renderExample(active);
}
