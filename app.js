
const cards = [
  { code: "BT8-001", owned: true },
  { code: "BT8-002", owned: false },
  { code: "BT8-003", owned: true },
  { code: "BT8-004", owned: false },
  { code: "BT8-005", owned: true },
  { code: "BT8-006", owned: false }
];

const binder = document.getElementById('binder');
cards.forEach(card => {
  const div = document.createElement('div');
  div.className = 'card ' + (card.owned ? 'owned' : 'missing');
  div.innerText = card.code;
  binder.appendChild(div);
});
