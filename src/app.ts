import handleFullBill from "./utils.js";

const $formTip = document.querySelector(".form-tip");

function handleRadioButtons(selectedRadio: Element) {
  const radioButtons = document.querySelectorAll(".radio-btn");
  radioButtons.forEach((radioBtn) => radioBtn.classList.remove("checked"));

  // Reseting to default custom element
  const customTip = document.querySelector(
    'input[data-type="custom"]',
  ) as HTMLInputElement;
  customTip.setAttribute("type", "radio");
  customTip.classList.remove("custom-text-input");

  selectedRadio.parentElement.classList.add("checked");
}

function handleTip(tip: string): number {
  return Number(tip) / 100;
}

function onUpdateCustomTip(tip: string): number | undefined {
  // Unchecking all radio buttons
  const radioButtons = document.querySelectorAll(".radio-btn");
  radioButtons.forEach((radioBtn) => radioBtn.classList.remove("checked"));

  const customTip = document.querySelector(
    'input[data-type="custom"]',
  ) as HTMLInputElement;

  customTip.setAttribute("type", "number");
  customTip.setAttribute("min", "0");
  customTip.setAttribute("max", "100");
  customTip.classList.add("custom-text-input");

  if (Number(tip)) {
    return Number(customTip.value) / 100;
  }
}

$formTip?.addEventListener("input", function (e) {
  let tip = 0.05;

  const targetElement = e.target as HTMLInputElement;
  const dataType = targetElement.getAttribute("data-type");

  if (dataType === "tip") {
    handleRadioButtons(targetElement);
    tip = handleTip(targetElement.value);
  } else if (dataType === "custom") {
    tip = onUpdateCustomTip(targetElement.value)
      ? onUpdateCustomTip(targetElement.value)
      : tip;
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
    ).textContent = String(tipAmountPerPerson);
    (
      document.querySelector(".total-per-person") as HTMLParagraphElement
    ).textContent = String(totalPerPerson);
  }
});

function main(): void {
  const radioButtons = document.querySelectorAll(".radio-btn");
  radioButtons[0].classList.add("checked");
}

main();
