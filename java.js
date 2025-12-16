  const addBtn = document.getElementById("addSupplierBtn");
const tbody = document.getElementById("supplierBody");

addBtn.addEventListener("click", () => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>New Supplier</td>
    <td>${Math.floor(Math.random() * 900000) + 100000}</td>
    <td>Main Street</td>
    <td>City</td>
    <td>+91 0000000000</td>
    <td><span class="badge badge-active">Active</span></td>
    <td>
      <button class="icon-btn edit">✏</button>
      <button class="icon-btn delete">🗑</button>
    </td>
  `;
  tbody.appendChild(row);
});

tbody.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.closest("tr").remove();
  }
});