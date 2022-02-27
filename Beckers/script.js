let data = "name,space_id,color\n";
new Set(document.getElementsByClassName("col-sm-6 col-lg-3 color-teaser views-row")).forEach((el) => {
  const name = el.getElementsByClassName("views-field-title")[0].textContent.trim();
  const color = el.getElementsByClassName("color-teaser-display")[0].getAttribute("alt");

  data += `${name},0,${color}\n`;
});
console.log(data);
