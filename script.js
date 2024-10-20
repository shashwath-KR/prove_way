const box = document.querySelectorAll(".box1, .box2, .box3");
// const showContent = document.querySelectorAll(
//   ".showContent1, .showContent2, .showContent"
// );

const onExpand = (elem) => {
  for (let i = 0; i < box.length; i++) {
    box[i].style.height = "22%";
    box[i].style.border = "1px solid rgb(103, 97, 95)";

    const radioInput = box[i].querySelector('input[type ="radio"]');
    radioInput.checked = false;

    const showContent = box[i].querySelector(
      `.showContent1, .showContent2, .showContent3`
    );
    showContent.style.visibility = "hidden";
  }

  elem.style.height = "45%";
  elem.style.border = "2px solid rgb(222, 87, 42)";

  const radioInput = elem.querySelector('input[type="radio"]');
  radioInput.checked = true;

  const showContent = elem.querySelector(
    `.showContent1, .showContent2, .showContent3`
  );
  showContent.style.visibility = "visible";
};

document.querySelector(".box1").click();
