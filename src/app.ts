import handleFullBill from "./utils.js";

const $formTip = document.querySelector(".form-tip");

function handleRadioButtons(selectedRadio: Element) {
  const radioButtons = document.querySelectorAll(".radio-btn");
  radioButtons.forEach((radioBtn) => radioBtn.classList.remove("checked"));
  selectedRadio.parentElement.classList.add("checked");
}

function handleTip(tipElement: string): number {
  console.log("Let's update the tip", tipElement);
  return Number(tipElement) / 100;
}

function onUpdateCustomType() {
  const customType = document.querySelector('input[data-type="custom"]');

  customType.setAttribute("type", "text");

  console.log("======");
  console.log(customType);
  console.log("======");
}

$formTip?.addEventListener("input", function (e) {
  let tip = 0.05;

  const targetElement = e.target as HTMLInputElement;
  const dataType = targetElement.getAttribute("data-type");

  if (dataType === "tip") {
    handleRadioButtons(targetElement);
    tip = handleTip(targetElement.value);
  } else if (dataType === "custom") {
    onUpdateCustomType();
  }

  const bill = Number(
    (document.querySelector("#bill") as HTMLInputElement).value,
  );
  const numberOfPeople = Number(
    (document.querySelector("#people") as HTMLInputElement).value,
  );

  if (bill > 0 && numberOfPeople > 0) {
    const { totalPerPerson, tipAmountPerPerson } = handleFullBill(
      bill,
      tip,
      numberOfPeople,
    );

    (
      document.querySelector(".tip-per-person") as HTMLParagraphElement
    ).textContent = tipAmountPerPerson.toFixed(2);
    (
      document.querySelector(".total-per-person") as HTMLParagraphElement
    ).textContent = totalPerPerson.toFixed(2);
  }
});

function main(): void {
  const radioButtons = document.querySelectorAll(".radio-btn");
  radioButtons[0].classList.add("checked");
}

main();
